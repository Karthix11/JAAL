"""
JAAL – validate.py
Loads data.json and prints PASS/FAIL per check.
"""

import json
import hashlib
import sys
import re
import os

data_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "data.json")
with open(data_path, encoding="utf-8") as f:
    data = json.load(f)

posts = data["posts"]
channels = data["channels"]
networks = data["networks"]
nodes = data["nodes"]
edges = data["edges"]

results = []

def check(name, condition, detail=""):
    status = "PASS" if condition else "FAIL"
    msg = f"[{status}] {name}"
    if detail:
        msg += f"  →  {detail}"
    results.append((status, msg))
    print(msg)

# --- 1. Counts ---
check("100 posts", len(posts) == 100, f"got {len(posts)}")
check("8 channels", len(channels) == 8, f"got {len(channels)}")
check("5 networks", len(networks) == 5, f"got {len(networks)}")

# --- 2. SHA-256 recomputes ---
bad_sha = []
for p in posts:
    ch_id = p["channel"]
    ch_name = next(c["name"] for c in channels if c["id"] == ch_id)
    raw = ch_name + "|" + p["time"] + "|" + p["text"]
    expected = hashlib.sha256(raw.encode("utf-8")).hexdigest()
    if p["sha256"] != expected:
        bad_sha.append(p["id"])
check("All SHA-256 hashes correct", len(bad_sha) == 0, f"bad: {bad_sha[:5]}" if bad_sha else "")

# --- 3. Trigger terms are substrings of post text ---
bad_trigger = []
for p in posts:
    for term in p["trigger_terms"]:
        if term not in p["text"]:
            bad_trigger.append((p["id"], term))
check("All trigger_terms are substrings of post text", len(bad_trigger) == 0,
      f"failures: {bad_trigger[:3]}" if bad_trigger else "")

# --- 4. JAAL-NET-001 has exactly 9 nodes ---
net001_nodes = [n for n in nodes if n["network_id"] == "JAAL-NET-001"]
check("JAAL-NET-001 has exactly 9 nodes", len(net001_nodes) == 9, f"got {len(net001_nodes)}")

# --- 5. JAAL-NET-001 has exactly 4 channel nodes ---
net001_channel_nodes = [n for n in net001_nodes if n["type"] == "channel"]
check("JAAL-NET-001 has exactly 4 channel nodes", len(net001_channel_nodes) == 4,
      f"got {len(net001_channel_nodes)}")

# --- 6. JAAL-NET-001 has exactly 1 bridge node ---
net001_bridge_nodes = [n for n in net001_nodes if n.get("bridge") is True]
check("JAAL-NET-001 has exactly 1 bridge node", len(net001_bridge_nodes) == 1,
      f"got {len(net001_bridge_nodes)}: {[n['label'] for n in net001_bridge_nodes]}")

# --- 7. JAAL-NET-001 priority_score == 92 ---
net001 = next(n for n in networks if n["id"] == "JAAL-NET-001")
check("JAAL-NET-001 priority_score == 92", net001["priority_score"] == 92)

# --- 8. score_components sum == priority_score for all networks ---
bad_scores = []
for n in networks:
    comp_sum = sum(n["score_components"].values())
    if comp_sum != n["priority_score"]:
        bad_scores.append(f"{n['id']}: components sum={comp_sum}, priority_score={n['priority_score']}")
check("score_components sum == priority_score for all networks", len(bad_scores) == 0,
      "; ".join(bad_scores) if bad_scores else "")

# --- 9. edge confidence_score == sum(breakdown) and label matches thresholds ---
bad_edges = []
for e in edges:
    comp_sum = sum(e["confidence_breakdown"].values())
    score = e["confidence_score"]
    label = e["confidence_label"]
    if comp_sum != score:
        bad_edges.append(f"{e['id']}: breakdown_sum={comp_sum} != score={score}")
        continue
    # Check label
    if score >= 75 and label != "Strong":
        bad_edges.append(f"{e['id']}: score={score} should be Strong, got {label}")
    elif 50 <= score < 75 and label != "Possible":
        bad_edges.append(f"{e['id']}: score={score} should be Possible, got {label}")
    elif 25 <= score < 50 and label != "Weak":
        bad_edges.append(f"{e['id']}: score={score} should be Weak, got {label}")
    elif score < 25 and label != "Insufficient evidence":
        bad_edges.append(f"{e['id']}: score={score} should be Insufficient evidence, got {label}")
check("Edge confidence_score == sum(breakdown) and label correct", len(bad_edges) == 0,
      "; ".join(bad_edges[:3]) if bad_edges else "")

# --- 10. >= 15 benign posts, none flagged ---
benign_posts = [p for p in posts if p["crime_type"] == "benign"]
benign_flagged = [p for p in benign_posts if p["flagged"]]
check(">=15 benign posts", len(benign_posts) >= 15, f"got {len(benign_posts)}")
check("No benign post is flagged", len(benign_flagged) == 0,
      f"flagged benign: {[p['id'] for p in benign_flagged]}" if benign_flagged else "")

# --- 11. Language counts: all 3 languages present ---
lang_counts = {}
for p in posts:
    lang_counts[p["language"]] = lang_counts.get(p["language"], 0) + 1
check("English posts present (target ~35)", lang_counts.get("English", 0) >= 20,
      f"got {lang_counts.get('English', 0)}")
check("Hinglish posts present (target ~30)", lang_counts.get("Hinglish", 0) >= 20,
      f"got {lang_counts.get('Hinglish', 0)}")
check("Hindi (Devanagari) posts present (target ~20)", lang_counts.get("Hindi (Devanagari)", 0) >= 10,
      f"got {lang_counts.get('Hindi (Devanagari)', 0)}")
print(f"       Language distribution: {lang_counts}")

# --- 12. All node/edge/post IDs referenced exist ---
all_post_ids = {p["id"] for p in posts}
all_node_ids = {n["id"] for n in nodes}
all_channel_ids = {c["id"] for c in channels}
all_network_ids = {n["id"] for n in networks}

bad_refs = []
# Check edges reference valid node IDs
for e in edges:
    if e["source"] not in all_node_ids:
        bad_refs.append(f"Edge {e['id']} source {e['source']} not in nodes")
    if e["target"] not in all_node_ids:
        bad_refs.append(f"Edge {e['id']} target {e['target']} not in nodes")
    for pid in e["evidence_post_ids"]:
        if pid not in all_post_ids:
            bad_refs.append(f"Edge {e['id']} evidence post {pid} not in posts")
# Check network post_ids
for n in networks:
    for pid in n["post_ids"]:
        if pid not in all_post_ids:
            bad_refs.append(f"Network {n['id']} post_id {pid} not in posts")
# Check post channel refs
for p in posts:
    if p["channel"] not in all_channel_ids:
        bad_refs.append(f"Post {p['id']} channel {p['channel']} not in channels")
    if p["network_id"] and p["network_id"] not in all_network_ids:
        bad_refs.append(f"Post {p['id']} network_id {p['network_id']} not in networks")
check("All node/edge/post IDs referenced exist", len(bad_refs) == 0,
      "; ".join(bad_refs[:3]) if bad_refs else "")

# --- 13. No identifier looks real ---
bad_identifiers = []
for p in posts:
    for ident in p["extracted_identifiers"]:
        norm = ident.get("normalized", "")
        if ident["type"] == "phone":
            if not norm.startswith("90000"):
                bad_identifiers.append(f"{p['id']} phone {norm}")
        if ident["type"] == "upi":
            if not (norm.endswith("@fakebank") or "fake" in norm.lower() or "demo" in norm.lower()):
                bad_identifiers.append(f"{p['id']} upi {norm}")
check("All phone identifiers start with 90000", 
      not any(i["type"]=="phone" and not i["normalized"].startswith("90000")
              for p in posts for i in p["extracted_identifiers"]),
      f"bad: {bad_identifiers[:3]}" if bad_identifiers else "")

fake_upi_ok = all(
    "fakebank" in i["normalized"].lower() or "demo" in i["normalized"].lower()
    for p in posts for i in p["extracted_identifiers"] if i["type"] == "upi"
)
check("All UPI identifiers contain 'fakebank' or 'demo'", fake_upi_ok)

# --- 14. JAAL-NET-001 has >=10 posts ---
net001_posts = [p for p in posts if p["network_id"] == "JAAL-NET-001"]
check("JAAL-NET-001 has >=10 posts (target 14)", len(net001_posts) >= 10, f"got {len(net001_posts)}")

# --- 15. NET-001 has Strong, Possible, and Weak edges ---
net001_edges = [e for e in edges if e["network_id"] == "JAAL-NET-001"]
edge_labels = {e["confidence_label"] for e in net001_edges}
check("JAAL-NET-001 has Strong edges", "Strong" in edge_labels)
check("JAAL-NET-001 has Possible edges", "Possible" in edge_labels)
check("JAAL-NET-001 has Weak edges", "Weak" in edge_labels)

# --- Summary ---
print()
pass_count = sum(1 for s, _ in results if s == "PASS")
fail_count = sum(1 for s, _ in results if s == "FAIL")
print(f"{'='*60}")
print(f"TOTAL: {pass_count} PASS, {fail_count} FAIL")
if fail_count == 0:
    print("✅  ALL CHECKS PASSED")
else:
    print("❌  SOME CHECKS FAILED – review above")
