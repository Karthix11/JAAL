# JAAL: Joint Alert & Analysis of Illegal-trade Links

**Team Veridian** · Rajasthan Police Cyber Security Hackathon 2026 · Problem Statement PS02
*Telegram & Social Media Illegal Trade Monitor (drugs, arms, fake documents, mule-account recruitment)*

> **We don't just flag posts. We connect the networks behind them and hand the investigator an explainable, evidence-ready lead.**

**Live demo:** https://karthix11.github.io/JAAL/
**Demo login:** enter any username and a password of 4+ characters, then complete the human check. No real authentication is performed.

> ⚠️ **READ-ONLY DEMO · SYNTHETIC DATA ONLY · PUBLIC-SOURCE ANALYSIS.** All posts, phone numbers, UPI IDs, handles and channels are fictional. Nothing here is a real investigation.

---

## The problem

Sellers and recruiters use public Telegram channels and social media to advertise drugs, arms, forged documents and bank accounts, ATM cards and SIM cards for rent or sale. They hide behind coded words, emojis, Hinglish and disguised phone numbers and UPI IDs. A keyword monitor raises many unrelated alerts. It does not show that three different posts may belong to one coordinated network.

## Our approach

JAAL moves investigators from reading posts to acting on networks:

**Post → Identifier → Network → Priority → Next action → Evidence**

| Step | Capability |
|---|---|
| 1. Detect | Hindi, Hinglish, Devanagari and English slang detection with highlighted trigger words, and handling of benign look-alike posts (for example, a normal bank KYC notice is not flagged) |
| 2. Recover | Obfuscation normalisation: spaced digits, Devanagari digits, digits as words, leetspeak, "dot/at" forms |
| 3. Connect | Entity graph linking channels through shared identifiers, with relationship-confidence scoring (Strong, Possible, Weak, Insufficient evidence) |
| 4. Prioritise | Explainable priority score from severity, channel spread, repeat frequency, recency and network size |
| 5. Evidence | Evidence report with SHA-256 hashes, chain-of-custody log, draft Section 63 certificate format, and print to PDF |

## Demo story

A synthetic public post advertises a bank account for rent and contains a disguised UPI ID. JAAL recovers the ID, finds the same ID in 3 other channels, builds a 9-node network (**JAAL-NET-001, priority score 92**), explains why it was flagged, suggests what to verify next, and produces a hashed evidence report.

## Screens

1. **Login:** demo sign-in with a human check
2. **Overview:** Top 5 networks and crime-category chart
3. **Alert Investigation:** filterable alerts with a five-question explainable-alert panel
4. **Network Graph:** interactive graph where one UPI ID links 4 channels, with relationship-confidence breakdown
5. **Obfuscation Lab:** live identifier recovery and a rule-based Hinglish context scorer
6. **Evidence Report:** official-style report with in-browser SHA-256 verification
7. **User Guide:** step-by-step help for first-time users

## 2-minute click-through

1. **Overview:** JAAL-NET-001 is the top network (score 92).
2. **Alert Investigation:** open a mule-account post and read why it was flagged.
3. **Network Graph:** click the orange UPI node to see the same ID written in different disguises.
4. **Obfuscation Lab:** paste a disguised number and watch it recovered step by step.
5. **Evidence Report:** click *Verify all hashes*, then *Print / Save as PDF*.

## How to run

**Online:** open the live demo link above.

**Offline:** download the ZIP (Code → Download ZIP), unzip, and double-click `index.html`. No server, install or internet connection is needed.

## How we built it

| Component | Technology |
|---|---|
| Frontend | HTML, CSS, vanilla JavaScript (no frameworks, no CDN) |
| Network graph | Hand-written SVG with pan, zoom and drag |
| Synthetic data | Python 3 (standard library only), reproducible with a fixed seed |
| Identifier recovery | Rule-based normalisation pipeline in JavaScript |
| Evidence integrity | SHA-256 (Web Crypto API with a built-in JavaScript fallback) |
| Report | Browser print-to-PDF with A4 print styles |

## Implemented vs planned

| Implemented in this prototype | Planned for the final round |
|---|---|
| Hindi, Hinglish and English slang detection (rule-based) | Trained TF-IDF + Logistic Regression classifier, MuRIL / IndicBERT |
| Identifier extraction and obfuscation recovery | OCR of posters and screenshots (Tesseract, English + Hindi) |
| Entity graph with relationship confidence | MinHash / SimHash near-duplicate detection |
| Explainable priority score and next-action suggestions | Burst detection for early warning |
| Evidence report with SHA-256 verification and print to PDF | Rajasthan district intelligence map and mule-recruitment panel |

## Files

| File | Purpose |
|---|---|
| `index.html` | The complete app (HTML, CSS, JavaScript) |
| `data.js` / `data.json` | Synthetic dataset (100 posts, 8 channels, 5 networks) |
| `bg.png` | Background image |
| `generate_data.py` | Reproducible synthetic data generator |
| `validate.py` | Data integrity checks |
| `QA_REPORT.txt` | What was and was not tested |

## Responsible-use statement

- Public-source analysis only. No private groups, no contact with sellers.
- Synthetic identifiers only, with no real personal data.
- Scores are **illustrative priorities, not probabilities of criminality**. No accuracy figures are claimed.
- A technical association between posts is **not proof of identity or guilt** and needs verification through authorised channels.
- District values are post-context locations, not verified locations of any person.
- Suggested next actions are suggestions only. No integration with banks, telecom operators or agencies is claimed.
- The Section 63 (Bharatiya Sakshya Adhiniyam) block is a **draft format**. Legal review is recommended, and admissibility is not claimed.
- The login is a front-end demo only and is not real authentication.

## Team

**Team Veridian**

| Name | Role |
|---|---|
| Ishwarya | Team Lead |
| Karthikeyan V | Team Member |
| Tharun | Team Member |

**GitHub:** [Karthix11](https://github.com/Karthix11)

---

*Built for the Rajasthan Police Cyber Security Hackathon 2026 · Project JAAL · PS02*
