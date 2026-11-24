"""
JAAL – Joint Alert & Analysis of Illegal-trade Links
generate_data.py  –  Synthetic data generator (Python 3, stdlib only)
Fixed seed = 42 for reproducibility.
Run:  python generate_data.py
Outputs: data.json, data.js
"""

import json
import hashlib
import random
import datetime
import os

random.seed(42)

# ---------------------------------------------------------------------------
# Reference data (safe/fake only)
# ---------------------------------------------------------------------------

CHANNELS = [
    {"id": "CH001", "name": "city_deals_hub_demo",           "platform": "Telegram (public, synthetic)", "post_count": 0},
    {"id": "CH002", "name": "jaipur_connect_demo",           "platform": "Telegram (public, synthetic)", "post_count": 0},
    {"id": "CH003", "name": "raj_quicksale_demo",            "platform": "Telegram (public, synthetic)", "post_count": 0},
    {"id": "CH004", "name": "udaipur_traders_demo",          "platform": "Telegram (public, synthetic)", "post_count": 0},
    {"id": "CH005", "name": "bikaner_biz_demo",              "platform": "Telegram (public, synthetic)", "post_count": 0},
    {"id": "CH006", "name": "kota_deals_demo",               "platform": "Telegram (public, synthetic)", "post_count": 0},
    {"id": "CH007", "name": "ajmer_marketplace_demo",        "platform": "Telegram (public, synthetic)", "post_count": 0},
    {"id": "CH008", "name": "jodhpur_connect_demo",          "platform": "Telegram (public, synthetic)", "post_count": 0},
]

DISTRICTS = ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer", "Bikaner", None]

BASE_TIME = datetime.datetime(2026, 11, 23, 21, 0, 0,
                               tzinfo=datetime.timezone(datetime.timedelta(hours=5, minutes=30)))
FOURTEEN_DAYS = 14 * 24 * 60 * 60  # seconds

def rand_time(days_ago_max=14, days_ago_min=0, recency_boost=False):
    if recency_boost:
        seconds_ago = random.randint(0, 2 * 24 * 3600)  # last 2 days
    else:
        seconds_ago = random.randint(days_ago_min * 86400, days_ago_max * 86400)
    t = BASE_TIME - datetime.timedelta(seconds=seconds_ago)
    return t.isoformat()

def sha256_post(channel_name, time_str, text):
    raw = channel_name + "|" + time_str + "|" + text
    return hashlib.sha256(raw.encode("utf-8")).hexdigest()

# ---------------------------------------------------------------------------
# Post templates per crime type / network
# ---------------------------------------------------------------------------

# --- JAAL-NET-001 : mule_account (high priority, 14 posts) ---
# The key identifier "rentacct.demo@fakebank" appears in 4 disguises across 4 channels
# Phone: 9000001234 appears in 2 disguises
# Handle: @demo_seller_01 appears in 2 disguises

NET001_POSTS = [
    # --- CH001: original UPI post, Hindi ---
    {
        "channel": "CH001", "language": "Hinglish", "crime_type": "mule_account", "district": "Jaipur",
        "text": "🏦 Account rent pe chahiye! Monthly ₹5000 milega. Bas KYC ready hona chahiye. UPI: rentacct.demo@fakebank. DM karo @demo_seller_01 ✅",
        "trigger_terms": ["Account rent pe chahiye", "rentacct.demo@fakebank", "@demo_seller_01"],
        "extracted_identifiers": [
            {"type": "upi", "raw": "rentacct.demo@fakebank", "normalized": "rentacct.demo@fakebank"},
            {"type": "handle", "raw": "@demo_seller_01", "normalized": "@demo_seller_01"},
        ],
        "explanation": "Post explicitly solicits bank account rental ('Account rent pe chahiye'), shares a UPI ID and Telegram handle - classic mule account recruitment ad."
    },
    # --- CH002: UPI disguised with spaces ---
    {
        "channel": "CH002", "language": "Hinglish", "crime_type": "mule_account", "district": "Jaipur",
        "text": "Salary for account holder 💰 Passive income guaranteed. Send funds to: r e n t a c c t . d e m o @ f a k e b a n k and confirm. KYC ready hai? DM now 👇",
        "trigger_terms": ["Salary for account holder", "KYC ready hai"],
        "extracted_identifiers": [
            {"type": "upi", "raw": "r e n t a c c t . d e m o @ f a k e b a n k", "normalized": "rentacct.demo@fakebank"},
        ],
        "explanation": "Spaced-out UPI handle recovers to 'rentacct.demo@fakebank'; phrase 'Salary for account holder' is a known mule recruitment indicator."
    },
    # --- CH003: UPI in Devanagari digits style + extra obfuscation ---
    {
        "channel": "CH003", "language": "Hindi (Devanagari)", "crime_type": "mule_account", "district": "Jodhpur",
        "text": "खाता किराए पर दें और ₹४०००/माह कमाएं। KYC तैयार होनी चाहिए। UPI भेजें: rentacct[dot]demo[at]fakebank पर। संपर्क: @demo_seller_01",
        "trigger_terms": ["खाता किराए पर दें", "rentacct[dot]demo[at]fakebank", "@demo_seller_01"],
        "extracted_identifiers": [
            {"type": "upi", "raw": "rentacct[dot]demo[at]fakebank", "normalized": "rentacct.demo@fakebank"},
            {"type": "handle", "raw": "@demo_seller_01", "normalized": "@demo_seller_01"},
        ],
        "explanation": "Hindi post offering account rental with obfuscated UPI ('rentacct[dot]demo[at]fakebank') that normalises to 'rentacct.demo@fakebank', a known mule-network identifier."
    },
    # --- CH004: UPI in leetspeak ---
    {
        "channel": "CH004", "language": "English", "crime_type": "mule_account", "district": "Udaipur",
        "text": "EARN EASY! Account holders wanted. Monthly payout assured. Transfer via: r3ntacct.dem0@fakebank. DM for onboarding. Limited slots.",
        "trigger_terms": ["Account holders wanted", "r3ntacct.dem0@fakebank"],
        "extracted_identifiers": [
            {"type": "upi", "raw": "r3ntacct.dem0@fakebank", "normalized": "rentacct.demo@fakebank"},
        ],
        "explanation": "Leetspeak UPI 'r3ntacct.dem0@fakebank' normalises to the network's core identifier; 'Account holders wanted' is a mule recruitment phrase."
    },
    # --- CH001: Phone disguised with Devanagari digits ---
    {
        "channel": "CH001", "language": "Hindi (Devanagari)", "crime_type": "mule_account", "district": "Jaipur",
        "text": "अकाउंट रेंटल स्कीम – रोज़ ₹२०० कमाओ। KYC ready रखो। संपर्क: ९०००००१२३४ पर WhatsApp करें।",
        "trigger_terms": ["अकाउंट रेंटल स्कीम", "९०००००१२३४"],
        "extracted_identifiers": [
            {"type": "phone", "raw": "९०००००१२३४", "normalized": "9000001234"},
        ],
        "explanation": "Account rental scheme in Hindi with phone number in Devanagari script (९०००००१२३४ = 9000001234); matches JAAL-NET-001 phone node."
    },
    # --- CH002: Phone disguised with spaces ---
    {
        "channel": "CH002", "language": "Hinglish", "crime_type": "mule_account", "district": "Bikaner",
        "text": "Account rent chahiye 💳 Instant payment hoga. Call/WhatsApp: 9 0 0 0 0 0 1 2 3 4. KYC documents ready ho. Limited offer!",
        "trigger_terms": ["Account rent chahiye", "9 0 0 0 0 0 1 2 3 4"],
        "extracted_identifiers": [
            {"type": "phone", "raw": "9 0 0 0 0 0 1 2 3 4", "normalized": "9000001234"},
        ],
        "explanation": "Spaced phone number normalises to 9000001234 (JAAL-NET-001 phone); 'Account rent chahiye' is explicit mule recruitment language."
    },
    # --- CH003: Handle only (second occurrence) ---
    {
        "channel": "CH003", "language": "Hinglish", "crime_type": "mule_account", "district": "Jodhpur",
        "text": "Mule account job available 🤑 Need KYC-verified account holders. DM @demo_seller_01 for interview slot. Work from home!",
        "trigger_terms": ["Mule account job", "@demo_seller_01"],
        "extracted_identifiers": [
            {"type": "handle", "raw": "@demo_seller_01", "normalized": "@demo_seller_01"},
        ],
        "explanation": "Post explicitly uses 'Mule account job' and links to network handle @demo_seller_01; both are core JAAL-NET-001 identifiers."
    },
    # --- CH004: Text cluster match ---
    {
        "channel": "CH004", "language": "English", "crime_type": "mule_account", "district": "Udaipur",
        "text": "Looking for account holders. Monthly salary ₹6000. Must have active KYC. No work just hold funds. Contact DM.",
        "trigger_terms": ["account holders", "hold funds"],
        "extracted_identifiers": [],
        "explanation": "Phrase 'hold funds' combined with 'account holders' and monthly salary offer matches JAAL-NET-001 text cluster pattern for mule recruitment."
    },
    # --- CH001: Text cluster + UPI repeat ---
    {
        "channel": "CH001", "language": "Hinglish", "crime_type": "mule_account", "district": "Jaipur",
        "text": "Paise kamao ghar baith ke 🏠 Account rent pe do, ₹200 per day milega. Send to rentacct.demo@fakebank – limited time.",
        "trigger_terms": ["Account rent pe do", "rentacct.demo@fakebank"],
        "extracted_identifiers": [
            {"type": "upi", "raw": "rentacct.demo@fakebank", "normalized": "rentacct.demo@fakebank"},
        ],
        "explanation": "Repeated occurrence of core UPI 'rentacct.demo@fakebank' with account rental language confirms JAAL-NET-001 mule network activity."
    },
    # --- CH005: Co-posting pattern ---
    {
        "channel": "CH005", "language": "English", "crime_type": "mule_account", "district": "Bikaner",
        "text": "URGENT: Need 5 account holders this week. Good pay. KYC must be ready. Prefer Rajasthan accounts. DM for details.",
        "trigger_terms": ["account holders", "KYC must be ready"],
        "extracted_identifiers": [],
        "explanation": "Urgency + 'account holders' + KYC readiness check is a mule recruitment template; temporal co-posting with JAAL-NET-001 activity flagged."
    },
    # --- CH006: Words as digits phone ---
    {
        "channel": "CH006", "language": "English", "crime_type": "mule_account", "district": "Kota",
        "text": "Account rental service. Easy money. Call: nine zero zero zero zero zero one two three four. Provide KYC on call.",
        "trigger_terms": ["Account rental service", "nine zero zero zero zero zero one two three four"],
        "extracted_identifiers": [
            {"type": "phone", "raw": "nine zero zero zero zero zero one two three four", "normalized": "9000001234"},
        ],
        "explanation": "Phone number spelled out in words normalises to 9000001234 (JAAL-NET-001 phone node); 'Account rental service' is explicit mule language."
    },
    # --- CH002: Emoji-heavy ---
    {
        "channel": "CH002", "language": "Hinglish", "crime_type": "mule_account", "district": "Ajmer",
        "text": "💳💰 Account rent karo aur kamaao! UPI: rentacct dot demo at fakebank. Whatsapp 9 0 0 0 0 0 1 2 3 4. KYC chahiye ✅🔥",
        "trigger_terms": ["Account rent karo", "rentacct dot demo at fakebank", "9 0 0 0 0 0 1 2 3 4"],
        "extracted_identifiers": [
            {"type": "upi", "raw": "rentacct dot demo at fakebank", "normalized": "rentacct.demo@fakebank"},
            {"type": "phone", "raw": "9 0 0 0 0 0 1 2 3 4", "normalized": "9000001234"},
        ],
        "explanation": "Both network identifiers present in obfuscated form ('rentacct dot demo at fakebank' and spaced phone); 'Account rent karo' is core mule phrase."
    },
    # --- CH007: Isolated flagged (network null) but theme similar ---
    {
        "channel": "CH007", "language": "Hinglish", "crime_type": "mule_account", "district": "Ajmer",
        "text": "Account holders needed for part-time job 💼 DM for KYC process. Daily payout. Genuine offer only.",
        "trigger_terms": ["Account holders needed", "KYC process"],
        "extracted_identifiers": [],
        "explanation": "Account holder recruitment with KYC process mention; no shared identifiers with JAAL-NET-001 but pattern matches mule recruitment template."
    },
    # --- CH008: Isolated flagged ---
    {
        "channel": "CH008", "language": "English", "crime_type": "mule_account", "district": "Jodhpur",
        "text": "Earn ₹10,000/month holding funds in your account. Zero risk. Provide KYC docs on first call. Reply YES to join.",
        "trigger_terms": ["holding funds in your account", "Provide KYC docs"],
        "extracted_identifiers": [],
        "explanation": "'Holding funds in your account' with payment for KYC docs is a standard mule account recruitment script."
    },
]

# --- JAAL-NET-002 : fake_documents (priority 74) ---
NET002_POSTS = [
    {
        "channel": "CH003", "language": "Hinglish", "crime_type": "fake_documents", "district": "Jaipur",
        "text": "ID card 100% original type 📄 Aadhar/PAN ready in 48 hrs. Contact @demo_docs_02. Genuine buyers only 🔏",
        "trigger_terms": ["ID card 100% original type", "@demo_docs_02"],
        "extracted_identifiers": [{"type": "handle", "raw": "@demo_docs_02", "normalized": "@demo_docs_02"}],
        "explanation": "Claim of '100% original type' Aadhaar/PAN documents is a classic fake-document service ad; handle @demo_docs_02 linked to NET-002."
    },
    {
        "channel": "CH005", "language": "English", "crime_type": "fake_documents", "district": "Jodhpur",
        "text": "Need a clean ID? Aadhaar + PAN combo available. Fast delivery. UPI: fakeid.demo@fakebank. DM for samples.",
        "trigger_terms": ["clean ID", "fakeid.demo@fakebank"],
        "extracted_identifiers": [{"type": "upi", "raw": "fakeid.demo@fakebank", "normalized": "fakeid.demo@fakebank"}],
        "explanation": "'Clean ID' is coded language for fraudulent identity documents; UPI 'fakeid.demo@fakebank' is a NET-002 identifier."
    },
    {
        "channel": "CH007", "language": "Hindi (Devanagari)", "crime_type": "fake_documents", "district": "Udaipur",
        "text": "आधार और पैन कार्ड बनवाएं – ₹१५०० में। पूरी तरह असली जैसे। संपर्क: @demo_docs_02 पर करें। 48 घंटे में डिलीवरी।",
        "trigger_terms": ["पूरी तरह असली जैसे", "@demo_docs_02"],
        "extracted_identifiers": [{"type": "handle", "raw": "@demo_docs_02", "normalized": "@demo_docs_02"}],
        "explanation": "Hindi post offering Aadhaar/PAN 'exactly like real' (पूरी तरह असली जैसे) is fake document service; handle matches NET-002."
    },
    {
        "channel": "CH001", "language": "Hinglish", "crime_type": "fake_documents", "district": "Ajmer",
        "text": "Voter ID, driving licence, passport – sab banate hain 🪪 Rates negotiable. Phono: 9 0 0 0 0 5 6 7 8 9. No questions asked.",
        "trigger_terms": ["Voter ID, driving licence, passport – sab banate hain", "9 0 0 0 0 5 6 7 8 9"],
        "extracted_identifiers": [{"type": "phone", "raw": "9 0 0 0 0 5 6 7 8 9", "normalized": "9000056789"}],
        "explanation": "Offering to make voter ID, licence and passport with 'no questions asked' is indicative of fraudulent document manufacture; spaced phone recovers to NET-002 number."
    },
    {
        "channel": "CH006", "language": "English", "crime_type": "fake_documents", "district": "Kota",
        "text": "Genuine-looking documents, fastest turnaround. Aadhar/PAN/passport. DM @demo_docs_02 with requirements.",
        "trigger_terms": ["Genuine-looking documents", "@demo_docs_02"],
        "extracted_identifiers": [{"type": "handle", "raw": "@demo_docs_02", "normalized": "@demo_docs_02"}],
        "explanation": "'Genuine-looking documents' is coded language for forgeries; recurring handle @demo_docs_02 confirms NET-002 network activity."
    },
    {
        "channel": "CH004", "language": "Hinglish", "crime_type": "fake_documents", "district": "Bikaner",
        "text": "RC book, insurance paper bhi milta hai 📜 Purana record clean karvate hain. UPI: fakeid.demo@fakebank. DM only.",
        "trigger_terms": ["Purana record clean karvate hain", "fakeid.demo@fakebank"],
        "extracted_identifiers": [{"type": "upi", "raw": "fakeid.demo@fakebank", "normalized": "fakeid.demo@fakebank"}],
        "explanation": "'Purana record clean karvate hain' (old records cleaned) + forged vehicle documents; UPI matches NET-002."
    },
]

# --- JAAL-NET-003 : drugs (priority 61) ---
NET003_POSTS = [
    {
        "channel": "CH002", "language": "Hinglish", "crime_type": "drugs", "district": "Jaipur",
        "text": "maal available 🍃 same day delivery jaipur. inbox karo @demo_supply_03. quality guaranteed 💯",
        "trigger_terms": ["maal available", "same day delivery"],
        "extracted_identifiers": [{"type": "handle", "raw": "@demo_supply_03", "normalized": "@demo_supply_03"}],
        "explanation": "'Maal' is coded slang for contraband substances; 'same day delivery' + anonymous DM handle signals drug supply ad."
    },
    {
        "channel": "CH004", "language": "English", "crime_type": "drugs", "district": "Udaipur",
        "text": "stuff 🍃❄️ same day delivery. discreet packaging. upi: supplydemo.03@fakebank. trusted supplier only.",
        "trigger_terms": ["stuff", "same day delivery", "supplydemo.03@fakebank"],
        "extracted_identifiers": [{"type": "upi", "raw": "supplydemo.03@fakebank", "normalized": "supplydemo.03@fakebank"}],
        "explanation": "'Stuff' with leaf and snowflake emojis is coded drug-supply language; 'discreet packaging' + UPI confirms illicit substance trade."
    },
    {
        "channel": "CH006", "language": "Hinglish", "crime_type": "drugs", "district": "Kota",
        "text": "Green and white available 🌿❄️ Kota delivery. Contact @demo_supply_03. Fresh stock aa gaya.",
        "trigger_terms": ["Green and white available", "@demo_supply_03"],
        "extracted_identifiers": [{"type": "handle", "raw": "@demo_supply_03", "normalized": "@demo_supply_03"}],
        "explanation": "'Green and white' with plant/snowflake emojis is coded language for cannabis and synthetic substances; handle matches NET-003."
    },
    {
        "channel": "CH008", "language": "Hindi (Devanagari)", "crime_type": "drugs", "district": "Jodhpur",
        "text": "माल उपलब्ध है 🍃 जोधपुर डिलीवरी। संपर्क: ९०००००४५६७। डिस्क्रीट पैकेजिंग।",
        "trigger_terms": ["माल उपलब्ध है", "९०००००४५६७"],
        "extracted_identifiers": [{"type": "phone", "raw": "९०००००४५६७", "normalized": "9000004567"}],
        "explanation": "'माल उपलब्ध है' (goods/maal available) with Devanagari phone and 'discreet packaging' is a coded drug supply advertisement."
    },
    {
        "channel": "CH003", "language": "Hinglish", "crime_type": "drugs", "district": "Ajmer",
        "text": "Premium quality stuff 🍃 Ajmer pickup available. DM @demo_supply_03. Fresh batch, tested.",
        "trigger_terms": ["quality stuff", "@demo_supply_03"],
        "extracted_identifiers": [{"type": "handle", "raw": "@demo_supply_03", "normalized": "@demo_supply_03"}],
        "explanation": "'Quality stuff' with leaf emoji and 'fresh batch' are drug trade indicators; handle repeated from NET-003 network."
    },
    {
        "channel": "CH005", "language": "English", "crime_type": "drugs", "district": "Bikaner",
        "text": "Special delivery service 💊 Bikaner. Fast. Discrete. upi: supplydemo.03@fakebank. No meet-up needed.",
        "trigger_terms": ["Special delivery service", "supplydemo.03@fakebank"],
        "extracted_identifiers": [{"type": "upi", "raw": "supplydemo.03@fakebank", "normalized": "supplydemo.03@fakebank"}],
        "explanation": "Pill emoji + 'special delivery service' + 'no meet-up' + UPI match NET-003 drug supply pattern."
    },
]

# --- JAAL-NET-004 : arms (priority 54) ---
NET004_POSTS = [
    {
        "channel": "CH007", "language": "Hinglish", "crime_type": "arms", "district": "Jaipur",
        "text": "pistol 🔫 no paper required. Ajmer road. inbox @demo_arms_04. price negotiable. genuine buyer only.",
        "trigger_terms": ["pistol", "no paper required", "@demo_arms_04"],
        "extracted_identifiers": [{"type": "handle", "raw": "@demo_arms_04", "normalized": "@demo_arms_04"}],
        "explanation": "'Pistol' + 'no paper required' (no documentation/license) is an unlicensed arms sale advertisement; handle matches NET-004."
    },
    {
        "channel": "CH001", "language": "English", "crime_type": "arms", "district": "Jaipur",
        "text": "country made available 🔫 no paperwork. DM @demo_arms_04. discreet. Rajasthan only.",
        "trigger_terms": ["country made available", "no paperwork", "@demo_arms_04"],
        "extracted_identifiers": [{"type": "handle", "raw": "@demo_arms_04", "normalized": "@demo_arms_04"}],
        "explanation": "'Country made' refers to improvised/illegal firearms; 'no paperwork' confirms sale without licence; handle is NET-004 node."
    },
    {
        "channel": "CH005", "language": "Hindi (Devanagari)", "crime_type": "arms", "district": "Bikaner",
        "text": "हथियार उपलब्ध है 🔫 बिना कागज़। बीकानेर। संपर्क: ९०००००७८९०।",
        "trigger_terms": ["हथियार उपलब्ध है", "बिना कागज़", "९०००००७८९०"],
        "extracted_identifiers": [{"type": "phone", "raw": "९०००००७८९०", "normalized": "9000007890"}],
        "explanation": "'हथियार उपलब्ध है' (weapon available) + 'बिना कागज़' (without papers) is an unlicensed arms offer; Devanagari phone matches NET-004."
    },
    {
        "channel": "CH003", "language": "Hinglish", "crime_type": "arms", "district": "Jodhpur",
        "text": "Katta available 🔫 Jodhpur area. Rate 9OOOOO7890 par call karo. No questions.",
        "trigger_terms": ["Katta available", "9OOOOO7890"],
        "extracted_identifiers": [{"type": "phone", "raw": "9OOOOO7890", "normalized": "9000007890"}],
        "explanation": "'Katta' is Rajasthani slang for illegal firearm; leetspeak phone '9OOOOO7890' normalises to NET-004 number."
    },
    {
        "channel": "CH008", "language": "English", "crime_type": "arms", "district": "Jodhpur",
        "text": "Firearms. Unlicensed. DM only. Payment via armsdeal.demo@fakebank. Serious buyers only.",
        "trigger_terms": ["Firearms", "Unlicensed", "armsdeal.demo@fakebank"],
        "extracted_identifiers": [{"type": "upi", "raw": "armsdeal.demo@fakebank", "normalized": "armsdeal.demo@fakebank"}],
        "explanation": "'Unlicensed firearms' with UPI payment and DM-only contact is a clear illegal arms trade advertisement; UPI is NET-004 node."
    },
]

# --- JAAL-NET-005 : mule_account / ATM+SIM kits (priority 48) ---
NET005_POSTS = [
    {
        "channel": "CH006", "language": "Hinglish", "crime_type": "mule_account", "district": "Kota",
        "text": "need 2 pc ATM kit 💳 and 3 SIM cards. Active accounts. Contact @demo_atm_05. Urgent.",
        "trigger_terms": ["ATM kit", "SIM cards", "@demo_atm_05"],
        "extracted_identifiers": [{"type": "handle", "raw": "@demo_atm_05", "normalized": "@demo_atm_05"}],
        "explanation": "'ATM kit' and 'SIM cards' together is coded language for fraudulent ATM skimming/SIM swapping toolkit recruitment; handle matches NET-005."
    },
    {
        "channel": "CH008", "language": "English", "crime_type": "mule_account", "district": "Jodhpur",
        "text": "ATM card cloning kit wanted. SIM swap service provider needed. DM @demo_atm_05. Pay per job.",
        "trigger_terms": ["ATM card cloning kit", "SIM swap service", "@demo_atm_05"],
        "extracted_identifiers": [{"type": "handle", "raw": "@demo_atm_05", "normalized": "@demo_atm_05"}],
        "explanation": "'ATM card cloning kit' and 'SIM swap service' are explicit cybercrime service requests; handle is NET-005 node."
    },
    {
        "channel": "CH004", "language": "Hinglish", "crime_type": "mule_account", "district": "Udaipur",
        "text": "SIM cards bulk mein chahiye 📱 10+ active numbers. Kyc done wale. UPI: atmkit.demo@fakebank. Quick deal.",
        "trigger_terms": ["SIM cards bulk", "atmkit.demo@fakebank"],
        "extracted_identifiers": [{"type": "upi", "raw": "atmkit.demo@fakebank", "normalized": "atmkit.demo@fakebank"}],
        "explanation": "Bulk SIM card demand with 'KYC done' requirement is SIM farming for fraud; UPI matches NET-005."
    },
    {
        "channel": "CH002", "language": "Hindi (Devanagari)", "crime_type": "mule_account", "district": "Ajmer",
        "text": "ATM किट और SIM कार्ड चाहिए 💳📱 अजमेर। संपर्क: @demo_atm_05। तुरंत चाहिए।",
        "trigger_terms": ["ATM किट", "SIM कार्ड चाहिए", "@demo_atm_05"],
        "extracted_identifiers": [{"type": "handle", "raw": "@demo_atm_05", "normalized": "@demo_atm_05"}],
        "explanation": "Hindi post demanding ATM kit and SIM cards with urgency and handle @demo_atm_05 confirms NET-005 ATM/SIM fraud recruitment."
    },
    {
        "channel": "CH007", "language": "English", "crime_type": "mule_account", "district": "Ajmer",
        "text": "Looking for ATM skimmer parts and blank SIM cards. Payment: atmkit.demo@fakebank. Ajmer.",
        "trigger_terms": ["ATM skimmer", "blank SIM cards", "atmkit.demo@fakebank"],
        "extracted_identifiers": [{"type": "upi", "raw": "atmkit.demo@fakebank", "normalized": "atmkit.demo@fakebank"}],
        "explanation": "'ATM skimmer parts' and 'blank SIM cards' are components for financial cybercrime; UPI identifier is NET-005 node."
    },
]

# --- BENIGN posts (15, flagged=False) ---
BENIGN_POSTS = [
    {
        "channel": "CH001", "language": "English", "crime_type": "benign", "district": "Jaipur",
        "text": "Reminder: Update your KYC at your bank branch with original documents before 30 November. Avoid account freeze.",
        "trigger_terms": [],
        "extracted_identifiers": [],
        "explanation": "Official KYC reminder for existing customers; no offer to rent/sell accounts, no suspicious identifier, no payment solicitation."
    },
    {
        "channel": "CH002", "language": "Hinglish", "crime_type": "benign", "district": "Jodhpur",
        "text": "Bank account opening camp this Saturday at the main branch, Jodhpur. Bring your Aadhaar and PAN. Free of cost.",
        "trigger_terms": [],
        "extracted_identifiers": [],
        "explanation": "Legitimate bank camp announcement; no rental or sale of accounts, official document use in proper context, no identifier shared."
    },
    {
        "channel": "CH003", "language": "Hindi (Devanagari)", "crime_type": "benign", "district": "Udaipur",
        "text": "मोबाइल कवर सेल 📱 सभी मॉडल उपलब्ध। DM करें कीमत के लिए। उदयपुर डिलीवरी।",
        "trigger_terms": [],
        "extracted_identifiers": [],
        "explanation": "Legitimate mobile cover sale; no account rental, no controlled substance, no illegal identifier present."
    },
    {
        "channel": "CH004", "language": "English", "crime_type": "benign", "district": "Kota",
        "text": "Cyber safety tip: Never share your OTP or bank PIN with anyone. Beware of fake KYC calls. Report fraud to 1930.",
        "trigger_terms": [],
        "extracted_identifiers": [],
        "explanation": "Public safety advisory against fraud; KYC mention is in a protective/educational context, opposite of criminal solicitation."
    },
    {
        "channel": "CH005", "language": "Hinglish", "crime_type": "benign", "district": "Bikaner",
        "text": "Second hand sofa set bech raha hoon, good condition. Price ₹3500. DM for photos. Bikaner pickup only.",
        "trigger_terms": [],
        "extracted_identifiers": [],
        "explanation": "Genuine second-hand furniture sale; no controlled goods, no account recruitment, no suspicious payment identifier."
    },
    {
        "channel": "CH006", "language": "English", "crime_type": "benign", "district": "Ajmer",
        "text": "Rajasthan Police recruitment 2026 notification out. Apply at rajpolice.gov.in by 15 Dec 2026.",
        "trigger_terms": [],
        "extracted_identifiers": [],
        "explanation": "Legitimate job recruitment notification for police; no illegal trade, no suspicious identifier or payment details."
    },
    {
        "channel": "CH007", "language": "Hindi (Devanagari)", "crime_type": "benign", "district": "Jaipur",
        "text": "जयपुर में योग शिविर – 1 दिसंबर से। नि:शुल्क प्रवेश। संपर्क: जिला खेल कार्यालय।",
        "trigger_terms": [],
        "extracted_identifiers": [],
        "explanation": "Free yoga camp announcement by district sports office; no suspicious language, no account or illegal goods offer."
    },
    {
        "channel": "CH008", "language": "Hinglish", "crime_type": "benign", "district": "Jodhpur",
        "text": "Laptop sale – Dell i5, 8GB RAM, 256 SSD. ₹22,000. Good condition. DM me. Jodhpur.",
        "trigger_terms": [],
        "extracted_identifiers": [],
        "explanation": "Legitimate laptop resale; no illegal goods, no account rental language, no suspicious identifier."
    },
    {
        "channel": "CH001", "language": "English", "crime_type": "benign", "district": "Jaipur",
        "text": "Jaipur Blue Pottery workshop this Sunday. Limited seats. Register at jaipur-craft.demo/workshop.",
        "trigger_terms": [],
        "extracted_identifiers": [],
        "explanation": "Cultural workshop registration; completely benign content with no overlap with illegal trade keywords."
    },
    {
        "channel": "CH002", "language": "Hinglish", "crime_type": "benign", "district": "Bikaner",
        "text": "Purani books khareedne hain – class 10-12 CBSE. DM karo agar aapke paas ho. Bikaner.",
        "trigger_terms": [],
        "extracted_identifiers": [],
        "explanation": "Legitimate second-hand book purchase request; no illegal goods, no account rental or payment identifier."
    },
    {
        "channel": "CH003", "language": "Hindi (Devanagari)", "crime_type": "benign", "district": "Kota",
        "text": "कोटा कोचिंग नोट्स उपलब्ध – JEE/NEET 2027। ₹500 में पूरा सेट। संपर्क करें।",
        "trigger_terms": [],
        "extracted_identifiers": [],
        "explanation": "Legitimate coaching notes sale; educational content with no illegal trade indicators or suspicious identifiers."
    },
    {
        "channel": "CH004", "language": "English", "crime_type": "benign", "district": "Udaipur",
        "text": "Udaipur tourist guide available. Full-day tour ₹800. Contact our office at Fateh Sagar. Book in advance.",
        "trigger_terms": [],
        "extracted_identifiers": [],
        "explanation": "Tourism service advertisement; no illegal goods, no account recruitment, no suspicious payment platform."
    },
    {
        "channel": "CH005", "language": "Hinglish", "crime_type": "benign", "district": "Ajmer",
        "text": "Ajmer Sharif dargah live coverage aaj raat 9 baje. YouTube pe dekhein. Subscribe karo channel ko.",
        "trigger_terms": [],
        "extracted_identifiers": [],
        "explanation": "Religious event live coverage promotion; completely benign, no overlap with any illegal trade category."
    },
    {
        "channel": "CH006", "language": "English", "crime_type": "benign", "district": "Bikaner",
        "text": "Bikaner Camel Festival 2027 registration open. Teams can sign up at rajasthantourism.demo/camel-fest.",
        "trigger_terms": [],
        "extracted_identifiers": [],
        "explanation": "Government tourism festival registration; no illegal content, completely benign."
    },
    {
        "channel": "CH007", "language": "Hinglish", "crime_type": "benign", "district": "Jodhpur",
        "text": "Ghar pe tiffin service shuru ki hai – homemade food, hygienic. ₹80 per meal. Jodhpur delivery. Call for menu.",
        "trigger_terms": [],
        "extracted_identifiers": [],
        "explanation": "Home tiffin food service advertisement; no suspicious content, no account or illegal goods offer."
    },
]

# --- Isolated flagged posts (not in any network) ---
ISOLATED_FLAGGED = [
    {
        "channel": "CH001", "language": "Hinglish", "crime_type": "drugs", "district": "Jaipur",
        "text": "Ganja delivery available 🌿 Jaipur. Contact on WhatsApp only. Fresh stock.",
        "trigger_terms": ["Ganja delivery"],
        "extracted_identifiers": [],
        "explanation": "'Ganja delivery' is explicit cannabis supply advertisement; isolated alert with no network linkage found."
    },
    {
        "channel": "CH002", "language": "English", "crime_type": "drugs", "district": "Jodhpur",
        "text": "CBD oil and special herbs 🌿 available. Home delivery. DM for rates. Discreet packing.",
        "trigger_terms": ["special herbs", "Discreet packing"],
        "extracted_identifiers": [],
        "explanation": "'Special herbs' with discreet packing and DM-only contact is a coded drug supply pattern; isolated flagged post."
    },
    {
        "channel": "CH003", "language": "Hindi (Devanagari)", "crime_type": "drugs", "district": "Udaipur",
        "text": "नशे का सामान मिलेगा 🍃 उदयपुर। रेट के लिए WhatsApp करें।",
        "trigger_terms": ["नशे का सामान"],
        "extracted_identifiers": [],
        "explanation": "'नशे का सामान' (intoxicant goods/drugs) is an explicit drug solicitation; isolated flagged post."
    },
    {
        "channel": "CH004", "language": "Hinglish", "crime_type": "mule_account", "district": "Kota",
        "text": "Bank account chahiye rent pe. Good payment. KYC wala hi contact kare. Kota.",
        "trigger_terms": ["Bank account chahiye rent pe"],
        "extracted_identifiers": [],
        "explanation": "Direct bank account rental solicitation; isolated alert, no known network identifier match."
    },
    {
        "channel": "CH005", "language": "English", "crime_type": "fake_documents", "district": "Bikaner",
        "text": "Fake certificates made – school, college, employment. Laminated. Contact for prices.",
        "trigger_terms": ["Fake certificates"],
        "extracted_identifiers": [],
        "explanation": "Explicit offer of fake educational and employment certificates; isolated flagged post."
    },
    {
        "channel": "CH006", "language": "Hinglish", "crime_type": "arms", "district": "Ajmer",
        "text": "Weapons available 🔫 Ajmer. No documentation. Direct meet. Trust basis only.",
        "trigger_terms": ["Weapons available", "No documentation"],
        "extracted_identifiers": [],
        "explanation": "'Weapons available' with 'no documentation' is an unlicensed arms offer; isolated flagged post."
    },
    {
        "channel": "CH007", "language": "Hindi (Devanagari)", "crime_type": "mule_account", "district": "Jaipur",
        "text": "SIM card किराए पर दें और ₹१०० प्रति दिन कमाएं। संपर्क करें।",
        "trigger_terms": ["SIM card किराए पर दें"],
        "extracted_identifiers": [],
        "explanation": "SIM card rental for payment is a known SIM farming/mule recruitment indicator; isolated alert."
    },
    {
        "channel": "CH008", "language": "English", "crime_type": "drugs", "district": "Jodhpur",
        "text": "Party supplies 💊🌿 Jodhpur. Bulk orders welcome. Discreet. Reply YES.",
        "trigger_terms": ["Party supplies", "Discreet"],
        "extracted_identifiers": [],
        "explanation": "'Party supplies' with pill and leaf emojis is coded drug supply language; 'discreet' confirms illicit nature; isolated alert."
    },
    {
        "channel": "CH001", "language": "Hinglish", "crime_type": "fake_documents", "district": "Ajmer",
        "text": "College marksheet banao apni pasand se 📄 Any college, any marks. DM for samples.",
        "trigger_terms": ["marksheet banao apni pasand se"],
        "extracted_identifiers": [],
        "explanation": "Custom marksheet fabrication offer; isolated fake document alert."
    },
    {
        "channel": "CH002", "language": "English", "crime_type": "mule_account", "district": "Bikaner",
        "text": "Unused bank accounts wanted. Will pay ₹2000 per account. Contact for details.",
        "trigger_terms": ["Unused bank accounts wanted"],
        "extracted_identifiers": [],
        "explanation": "Purchasing unused bank accounts is a mule account acquisition method; isolated flagged post."
    },
    {
        "channel": "CH003", "language": "Hinglish", "crime_type": "drugs", "district": "Kota",
        "text": "Kuch khaas cheez chahiye? 🍃❄️ Kota delivery. Fast. DM karo.",
        "trigger_terms": ["Kuch khaas cheez chahiye"],
        "extracted_identifiers": [],
        "explanation": "'Kuch khaas cheez' (some special thing) with drug emojis is coded drug solicitation; isolated alert."
    },
    {
        "channel": "CH004", "language": "English", "crime_type": "arms", "district": "Udaipur",
        "text": "Air gun modified for high power available. Udaipur. No registration. DM.",
        "trigger_terms": ["Air gun modified", "No registration"],
        "extracted_identifiers": [],
        "explanation": "Modified high-power air gun without registration is an unlicensed weapon offer; isolated flagged post."
    },
    {
        "channel": "CH005", "language": "Hindi (Devanagari)", "crime_type": "mule_account", "district": "Bikaner",
        "text": "खाता बेचना है – ज़ीरो बैलेंस। KYC पूरी है। ₹३००० में।",
        "trigger_terms": ["खाता बेचना है"],
        "extracted_identifiers": [],
        "explanation": "'खाता बेचना है' (account for sale) with KYC completion is a mule account sale; isolated flagged post."
    },
    {
        "channel": "CH006", "language": "Hinglish", "crime_type": "drugs", "district": "Ajmer",
        "text": "Whitener aur solution 🧪 available. Ajmer. Good quality. DM for rates.",
        "trigger_terms": ["Whitener aur solution"],
        "extracted_identifiers": [],
        "explanation": "'Whitener aur solution' with chemistry emoji is coded language for inhalant/solvent substance abuse supply; isolated alert."
    },
    {
        "channel": "CH007", "language": "English", "crime_type": "fake_documents", "district": "Jodhpur",
        "text": "Bonafide certificate, experience letter – all types made. Quick delivery. Contact via DM.",
        "trigger_terms": ["Bonafide certificate", "experience letter"],
        "extracted_identifiers": [],
        "explanation": "Fabrication of official bonafide and experience certificates; isolated fake document flagged post."
    },
    {
        "channel": "CH008", "language": "Hinglish", "crime_type": "mule_account", "district": "Kota",
        "text": "Dormant account activate karvao aur becho. ₹5000 ek account ka. Contact Kota.",
        "trigger_terms": ["Dormant account activate karvao aur becho"],
        "extracted_identifiers": [],
        "explanation": "Reactivating and selling dormant bank accounts is a mule account trafficking method; isolated flagged post."
    },
    {
        "channel": "CH001", "language": "English", "crime_type": "drugs", "district": "Jaipur",
        "text": "Relaxation products 🌿 natural and effective. Jaipur area. DM for menu.",
        "trigger_terms": ["Relaxation products"],
        "extracted_identifiers": [],
        "explanation": "'Relaxation products' with leaf emoji and 'menu' implies controlled substance supply; isolated alert."
    },
    {
        "channel": "CH002", "language": "Hindi (Devanagari)", "crime_type": "arms", "district": "Jodhpur",
        "text": "देसी कट्टा मिलेगा 🔫 जोधपुर। बिना लाइसेंस। DM करें।",
        "trigger_terms": ["देसी कट्टा", "बिना लाइसेंस"],
        "extracted_identifiers": [],
        "explanation": "'देसी कट्टा' (country-made gun) + 'बिना लाइसेंस' (without licence) is an explicit unlicensed arms offer; isolated alert."
    },
    {
        "channel": "CH003", "language": "Hinglish", "crime_type": "mule_account", "district": "Udaipur",
        "text": "Active SIM cards 10+ chahiye. Payment ready. Udaipur meet possible.",
        "trigger_terms": ["Active SIM cards"],
        "extracted_identifiers": [],
        "explanation": "Bulk active SIM card procurement is a SIM farming indicator for fraud; isolated flagged post."
    },
    {
        "channel": "CH004", "language": "English", "crime_type": "fake_documents", "district": "Kota",
        "text": "Duplicate driving licence ready in 24 hours. Kota. No court, no process. DM.",
        "trigger_terms": ["Duplicate driving licence", "No court, no process"],
        "extracted_identifiers": [],
        "explanation": "'Duplicate driving licence' without legal process is a fraudulent document service; isolated flagged post."
    },
]

# --- Low-risk unflagged noise posts ---
NOISE_POSTS = [
    {"channel": "CH001", "language": "English", "crime_type": "benign", "district": "Jaipur",
     "text": "New shop opening in Jaipur. Electronics at best prices. Visit us!",
     "trigger_terms": [], "extracted_identifiers": [],
     "explanation": "Generic shop opening notice; no suspicious language or identifiers."},
    {"channel": "CH002", "language": "Hinglish", "crime_type": "benign", "district": "Jodhpur",
     "text": "Jodhpur weather update: sunny, 28°C. Plan outdoor activities accordingly 🌤️",
     "trigger_terms": [], "extracted_identifiers": [],
     "explanation": "Weather update; completely benign content."},
    {"channel": "CH003", "language": "Hindi (Devanagari)", "crime_type": "benign", "district": "Udaipur",
     "text": "राजस्थान में सभी सरकारी दफ्तर सोमवार से खुलेंगे।",
     "trigger_terms": [], "extracted_identifiers": [],
     "explanation": "Government office reopening notice; benign administrative information."},
    {"channel": "CH004", "language": "English", "crime_type": "benign", "district": "Kota",
     "text": "Kota coaching centre results: 450 students cleared JEE 2026. Congratulations!",
     "trigger_terms": [], "extracted_identifiers": [],
     "explanation": "Educational achievement announcement; completely benign."},
    {"channel": "CH005", "language": "Hinglish", "crime_type": "benign", "district": "Bikaner",
     "text": "Bikaner se ek acha news: local business ne award jeeta national level pe 🏆",
     "trigger_terms": [], "extracted_identifiers": [],
     "explanation": "Positive local business news; no illegal content."},
    {"channel": "CH006", "language": "English", "crime_type": "benign", "district": "Ajmer",
     "text": "Ajmer traffic update: NH-48 closed for maintenance near Kishangarh. Use alternate route.",
     "trigger_terms": [], "extracted_identifiers": [],
     "explanation": "Traffic update notice; benign public information."},
    {"channel": "CH007", "language": "Hindi (Devanagari)", "crime_type": "benign", "district": "Jaipur",
     "text": "जयपुर में आज पानी की सप्लाई बंद रहेगी। कल सुबह से शुरू होगी।",
     "trigger_terms": [], "extracted_identifiers": [],
     "explanation": "Water supply notice; completely benign civic information."},
    {"channel": "CH008", "language": "Hinglish", "crime_type": "benign", "district": "Jodhpur",
     "text": "New restaurant opened in Jodhpur – try the dal baati churma! Highly recommend 🍽️",
     "trigger_terms": [], "extracted_identifiers": [],
     "explanation": "Restaurant recommendation; no suspicious content."},
    {"channel": "CH001", "language": "English", "crime_type": "benign", "district": "Jaipur",
     "text": "Jaipur literature festival 2027 dates announced. International authors confirmed.",
     "trigger_terms": [], "extracted_identifiers": [],
     "explanation": "Cultural event announcement; benign and educational."},
    {"channel": "CH002", "language": "Hinglish", "crime_type": "benign", "district": "Bikaner",
     "text": "Bijli ka bill online bharo – bhadants aate hain toh queue mein mat khado 😄",
     "trigger_terms": [], "extracted_identifiers": [],
     "explanation": "Advice to pay electricity bill online; benign civic tip."},
    {"channel": "CH003", "language": "Hindi (Devanagari)", "crime_type": "benign", "district": "Kota",
     "text": "कोटा में बाढ़ राहत शिविर: सरकारी सहायता के लिए जिला कार्यालय से संपर्क करें।",
     "trigger_terms": [], "extracted_identifiers": [],
     "explanation": "Flood relief information from district office; legitimate government service notice."},
]

# ---------------------------------------------------------------------------
# Network definitions
# ---------------------------------------------------------------------------

NETWORKS_DEF = [
    {
        "id": "JAAL-NET-001",
        "name": "Mule Account Ring – Rentacct Demo",
        "crime_type": "mule_account",
        "priority_score": 92,
        "score_components": {"severity": 28, "channel_spread": 20, "repeat_frequency": 18, "recency": 14, "network_size": 12},
        "campaign_dna": {
            "shared_identifiers": ["rentacct.demo@fakebank", "9000001234", "@demo_seller_01"],
            "language_patterns": ["Account rent pe chahiye", "KYC ready hai", "Salary for account holder", "hold funds", "account holders wanted"],
            "posting_behaviour": "Coordinated cross-channel blitz within 72-hour windows; identical UPI shared in multiple disguise forms",
            "time_pattern": "Evening peak 18:00-22:00 IST, repeat within 24-48 hours across channels"
        },
        "next_actions": [
            "Draft request to bank nodal officer for account details of UPI rentacct.demo@fakebank (suggestion only – verify jurisdiction first)",
            "Preserve original source records and computed SHA-256 hashes as evidence",
            "Identify phone 9000001234 carrier via LEA request to Telecom authority (suggestion only)",
            "Refer complete network report to district cyber cell Jaipur for verification and further enquiry"
        ]
    },
    {
        "id": "JAAL-NET-002",
        "name": "Fake Document Hub – FakeID Demo",
        "crime_type": "fake_documents",
        "priority_score": 74,
        "score_components": {"severity": 25, "channel_spread": 15, "repeat_frequency": 14, "recency": 12, "network_size": 8},
        "campaign_dna": {
            "shared_identifiers": ["fakeid.demo@fakebank", "9000056789", "@demo_docs_02"],
            "language_patterns": ["100% original type", "genuine-looking documents", "no questions asked", "48 hrs delivery"],
            "posting_behaviour": "Handle @demo_docs_02 reused across 3 channels; UPI shared in 2 channels",
            "time_pattern": "Afternoon posts 13:00-16:00 IST, 2-3 day cadence"
        },
        "next_actions": [
            "Draft request to UPI PSP for account holder details of fakeid.demo@fakebank (suggestion only)",
            "Preserve original posts and hashes; request Telegram preservation request if handle active",
            "Check phone 9000056789 against known fake-document offender database",
            "Refer to district cyber cell with priority for verification"
        ]
    },
    {
        "id": "JAAL-NET-003",
        "name": "Drug Supply Network – Supply Demo",
        "crime_type": "drugs",
        "priority_score": 61,
        "score_components": {"severity": 22, "channel_spread": 12, "repeat_frequency": 10, "recency": 10, "network_size": 7},
        "campaign_dna": {
            "shared_identifiers": ["supplydemo.03@fakebank", "9000004567", "@demo_supply_03"],
            "language_patterns": ["maal available", "same day delivery", "discreet packaging", "fresh stock", "quality stuff"],
            "posting_behaviour": "Emoji-coded language (🍃❄️💊) used consistently; handle reused across channels",
            "time_pattern": "Late night posts 23:00-01:00 IST, irregular daily cadence"
        },
        "next_actions": [
            "Flag to Narcotics Control Bureau regional office for awareness (suggestion only)",
            "Preserve posts with emoji metadata and timestamps as evidence",
            "Request Telegram public channel preservation for @demo_supply_03 activity",
            "Refer to district police narcotics cell for verification"
        ]
    },
    {
        "id": "JAAL-NET-004",
        "name": "Illegal Arms Listings – ArmsDeal Demo",
        "crime_type": "arms",
        "priority_score": 54,
        "score_components": {"severity": 20, "channel_spread": 10, "repeat_frequency": 8, "recency": 10, "network_size": 6},
        "campaign_dna": {
            "shared_identifiers": ["armsdeal.demo@fakebank", "9000007890", "@demo_arms_04"],
            "language_patterns": ["no paper required", "no paperwork", "without licence", "country made", "katta available"],
            "posting_behaviour": "Short terse posts, 'no documentation' phrase consistent; phone number in multiple disguises",
            "time_pattern": "Morning posts 08:00-11:00 IST, weekly cadence"
        },
        "next_actions": [
            "Escalate to district arms licensing authority for reference (suggestion only)",
            "Preserve posts and hash evidence for potential court presentation",
            "Request OSINT cross-reference on handle @demo_arms_04",
            "Refer immediately to district police weapons cell for verification"
        ]
    },
    {
        "id": "JAAL-NET-005",
        "name": "ATM/SIM Kit Network – ATMKit Demo",
        "crime_type": "mule_account",
        "priority_score": 48,
        "score_components": {"severity": 16, "channel_spread": 10, "repeat_frequency": 8, "recency": 8, "network_size": 6},
        "campaign_dna": {
            "shared_identifiers": ["atmkit.demo@fakebank", "@demo_atm_05"],
            "language_patterns": ["ATM kit", "SIM cards", "ATM card cloning kit", "SIM swap service", "ATM skimmer"],
            "posting_behaviour": "Explicit ATM skimming and SIM swap vocabulary; handle @demo_atm_05 across 4 channels",
            "time_pattern": "Evening posts 19:00-22:00 IST, 3-4 day cadence"
        },
        "next_actions": [
            "Alert relevant payment gateway fraud team about UPI atmkit.demo@fakebank (suggestion only)",
            "Preserve all posts with timestamps for evidence chain",
            "Cross-reference handle @demo_atm_05 with known cyber fraud offender registry",
            "Refer to Rajasthan Cyber Crime Unit for ATM fraud verification"
        ]
    },
]

# ---------------------------------------------------------------------------
# Nodes
# ---------------------------------------------------------------------------

NODES_DEF = [
    # JAAL-NET-001 (exactly 9 nodes: 4 channel, 1 UPI bridge, 1 phone, 1 handle, 2 text_cluster)
    {"id": "N001", "network_id": "JAAL-NET-001", "type": "channel",       "label": "city_deals_hub_demo",    "bridge": False},
    {"id": "N002", "network_id": "JAAL-NET-001", "type": "channel",       "label": "jaipur_connect_demo",    "bridge": False},
    {"id": "N003", "network_id": "JAAL-NET-001", "type": "channel",       "label": "raj_quicksale_demo",     "bridge": False},
    {"id": "N004", "network_id": "JAAL-NET-001", "type": "channel",       "label": "udaipur_traders_demo",   "bridge": False},
    {"id": "N005", "network_id": "JAAL-NET-001", "type": "upi",           "label": "rentacct.demo@fakebank", "bridge": True},
    {"id": "N006", "network_id": "JAAL-NET-001", "type": "phone",         "label": "9000001234",             "bridge": False},
    {"id": "N007", "network_id": "JAAL-NET-001", "type": "handle",        "label": "@demo_seller_01",        "bridge": False},
    {"id": "N008", "network_id": "JAAL-NET-001", "type": "text_cluster",  "label": "account_rental_cluster", "bridge": False},
    {"id": "N009", "network_id": "JAAL-NET-001", "type": "text_cluster",  "label": "kyc_solicitation_cluster","bridge": False},

    # JAAL-NET-002 (5 nodes)
    {"id": "N010", "network_id": "JAAL-NET-002", "type": "channel",  "label": "raj_quicksale_demo",   "bridge": False},
    {"id": "N011", "network_id": "JAAL-NET-002", "type": "channel",  "label": "bikaner_biz_demo",     "bridge": False},
    {"id": "N012", "network_id": "JAAL-NET-002", "type": "upi",      "label": "fakeid.demo@fakebank", "bridge": True},
    {"id": "N013", "network_id": "JAAL-NET-002", "type": "phone",    "label": "9000056789",           "bridge": False},
    {"id": "N014", "network_id": "JAAL-NET-002", "type": "handle",   "label": "@demo_docs_02",        "bridge": False},

    # JAAL-NET-003 (5 nodes)
    {"id": "N015", "network_id": "JAAL-NET-003", "type": "channel",  "label": "jaipur_connect_demo",   "bridge": False},
    {"id": "N016", "network_id": "JAAL-NET-003", "type": "channel",  "label": "udaipur_traders_demo",  "bridge": False},
    {"id": "N017", "network_id": "JAAL-NET-003", "type": "upi",      "label": "supplydemo.03@fakebank","bridge": True},
    {"id": "N018", "network_id": "JAAL-NET-003", "type": "phone",    "label": "9000004567",            "bridge": False},
    {"id": "N019", "network_id": "JAAL-NET-003", "type": "handle",   "label": "@demo_supply_03",       "bridge": False},

    # JAAL-NET-004 (5 nodes)
    {"id": "N020", "network_id": "JAAL-NET-004", "type": "channel",  "label": "ajmer_marketplace_demo", "bridge": False},
    {"id": "N021", "network_id": "JAAL-NET-004", "type": "channel",  "label": "bikaner_biz_demo",       "bridge": False},
    {"id": "N022", "network_id": "JAAL-NET-004", "type": "upi",      "label": "armsdeal.demo@fakebank", "bridge": True},
    {"id": "N023", "network_id": "JAAL-NET-004", "type": "phone",    "label": "9000007890",             "bridge": False},
    {"id": "N024", "network_id": "JAAL-NET-004", "type": "handle",   "label": "@demo_arms_04",          "bridge": False},

    # JAAL-NET-005 (5 nodes)
    {"id": "N025", "network_id": "JAAL-NET-005", "type": "channel",  "label": "kota_deals_demo",      "bridge": False},
    {"id": "N026", "network_id": "JAAL-NET-005", "type": "channel",  "label": "jodhpur_connect_demo", "bridge": False},
    {"id": "N027", "network_id": "JAAL-NET-005", "type": "upi",      "label": "atmkit.demo@fakebank", "bridge": True},
    {"id": "N028", "network_id": "JAAL-NET-005", "type": "handle",   "label": "@demo_atm_05",         "bridge": False},
    {"id": "N029", "network_id": "JAAL-NET-005", "type": "text_cluster","label": "atm_sim_fraud_cluster","bridge": False},
]

# ---------------------------------------------------------------------------
# Edges
# ---------------------------------------------------------------------------

def make_edge(eid, net_id, src, tgt, rel, breakdown, evidence_pids):
    score = sum(breakdown.values())
    if score >= 75:
        label = "Strong"
    elif score >= 50:
        label = "Possible"
    elif score >= 25:
        label = "Weak"
    else:
        label = "Insufficient evidence"
    return {
        "id": eid, "network_id": net_id,
        "source": src, "target": tgt,
        "relation": rel,
        "confidence_breakdown": breakdown,
        "confidence_score": score,
        "confidence_label": label,
        "evidence_post_ids": evidence_pids
    }

# We'll build edges after posts are assigned IDs, using placeholder post IDs
# For now we store as a list and patch post IDs after generation.

# ---------------------------------------------------------------------------
# Main generation
# ---------------------------------------------------------------------------

def generate():
    # Assign post IDs and timestamps
    # Collect all post template dicts into a master list with network assignments
    all_post_templates = []

    # NET-001 posts (14 posts) – recent (last 4 days)
    for i, p in enumerate(NET001_POSTS):
        recency_boost = i < 6  # first 6 are very recent
        p2 = dict(p)
        p2["network_id"] = "JAAL-NET-001"
        p2["flagged"] = True
        p2["risk_level"] = "High"
        p2["_days_ago_max"] = 4 if recency_boost else 8
        p2["_days_ago_min"] = 0 if recency_boost else 4
        all_post_templates.append(p2)

    # NET-002 posts (6)
    for p in NET002_POSTS:
        p2 = dict(p)
        p2["network_id"] = "JAAL-NET-002"
        p2["flagged"] = True
        p2["risk_level"] = "High"
        p2["_days_ago_max"] = 10
        p2["_days_ago_min"] = 2
        all_post_templates.append(p2)

    # NET-003 posts (6)
    for p in NET003_POSTS:
        p2 = dict(p)
        p2["network_id"] = "JAAL-NET-003"
        p2["flagged"] = True
        p2["risk_level"] = "High"
        p2["_days_ago_max"] = 12
        p2["_days_ago_min"] = 3
        all_post_templates.append(p2)

    # NET-004 posts (5)
    for p in NET004_POSTS:
        p2 = dict(p)
        p2["network_id"] = "JAAL-NET-004"
        p2["flagged"] = True
        p2["risk_level"] = "High"
        p2["_days_ago_max"] = 14
        p2["_days_ago_min"] = 4
        all_post_templates.append(p2)

    # NET-005 posts (5)
    for p in NET005_POSTS:
        p2 = dict(p)
        p2["network_id"] = "JAAL-NET-005"
        p2["flagged"] = True
        p2["risk_level"] = "Medium"
        p2["_days_ago_max"] = 10
        p2["_days_ago_min"] = 2
        all_post_templates.append(p2)

    # Benign (15)
    for p in BENIGN_POSTS:
        p2 = dict(p)
        p2["network_id"] = None
        p2["flagged"] = False
        p2["risk_level"] = "None"
        p2["_days_ago_max"] = 14
        p2["_days_ago_min"] = 0
        all_post_templates.append(p2)

    # Isolated flagged (20)
    for p in ISOLATED_FLAGGED:
        p2 = dict(p)
        p2["network_id"] = None
        p2["flagged"] = True
        p2["risk_level"] = "Medium"
        p2["_days_ago_max"] = 14
        p2["_days_ago_min"] = 0
        all_post_templates.append(p2)

    # Noise/unflagged (11 to reach exactly 100)
    # 14+6+6+5+5+15+20 = 71, need 29 more; we have 11 noise – add 18 more unflagged low-risk
    for p in NOISE_POSTS:
        p2 = dict(p)
        p2["network_id"] = None
        p2["flagged"] = False
        p2["risk_level"] = "Low"
        p2["_days_ago_max"] = 14
        p2["_days_ago_min"] = 0
        all_post_templates.append(p2)

    # Need 100 total. Currently 14+6+6+5+5+15+20+11 = 82. Need 18 more noise.
    extra_noise = [
        {"channel": "CH001", "language": "English", "crime_type": "benign", "district": "Jaipur",
         "text": "Jaipur marathon 2026 registration starts next week. All fitness levels welcome.",
         "trigger_terms": [], "extracted_identifiers": [], "explanation": "Sports event registration; benign."},
        {"channel": "CH002", "language": "Hinglish", "crime_type": "benign", "district": "Jodhpur",
         "text": "Purana laptop bech raha hoon – HP Core i3. ₹8000. Good condition. DM.",
         "trigger_terms": [], "extracted_identifiers": [], "explanation": "Legitimate laptop resale; benign."},
        {"channel": "CH003", "language": "Hindi (Devanagari)", "crime_type": "benign", "district": "Udaipur",
         "text": "उदयपुर में राष्ट्रीय विज्ञान प्रतियोगिता 5 दिसंबर को। छात्र आवेदन करें।",
         "trigger_terms": [], "extracted_identifiers": [], "explanation": "Science competition notice; benign."},
        {"channel": "CH004", "language": "English", "crime_type": "benign", "district": "Kota",
         "text": "Kota NTPC plant inaugurated. 500 new jobs expected in region. Great news!",
         "trigger_terms": [], "extracted_identifiers": [], "explanation": "Economic news; benign."},
        {"channel": "CH005", "language": "Hinglish", "crime_type": "benign", "district": "Bikaner",
         "text": "Bikaner fort tour Sunday 10am. Free entry for students with ID. Meet at main gate.",
         "trigger_terms": [], "extracted_identifiers": [], "explanation": "Heritage tour event; benign."},
        {"channel": "CH006", "language": "English", "crime_type": "benign", "district": "Ajmer",
         "text": "New blood donation camp at Ajmer District Hospital this Friday. Walk in welcome.",
         "trigger_terms": [], "extracted_identifiers": [], "explanation": "Blood donation camp; benign public health event."},
        {"channel": "CH007", "language": "Hindi (Devanagari)", "crime_type": "benign", "district": "Jaipur",
         "text": "जयपुर मेट्रो का नया स्टेशन 1 दिसंबर से चालू होगा। रूट जानकारी जल्द।",
         "trigger_terms": [], "extracted_identifiers": [], "explanation": "Metro station opening; benign civic news."},
        {"channel": "CH008", "language": "Hinglish", "crime_type": "benign", "district": "Jodhpur",
         "text": "Gardening tips: best plants for Rajasthan climate 🌱 DM for guidance.",
         "trigger_terms": [], "extracted_identifiers": [], "explanation": "Gardening advice; benign."},
        {"channel": "CH001", "language": "English", "crime_type": "benign", "district": "Jaipur",
         "text": "Free legal aid camp at Jaipur bar council Saturday. Bring your documents.",
         "trigger_terms": [], "extracted_identifiers": [], "explanation": "Legal aid camp; benign civic service."},
        {"channel": "CH002", "language": "Hinglish", "crime_type": "benign", "district": "Bikaner",
         "text": "Free health checkup camp at civil hospital Bikaner on 25 November. All welcome.",
         "trigger_terms": [], "extracted_identifiers": [], "explanation": "Health camp notice; benign."},
        {"channel": "CH003", "language": "English", "crime_type": "benign", "district": "Kota",
         "text": "New traffic signal installed near station road Kota. Drive safely. 🚦",
         "trigger_terms": [], "extracted_identifiers": [], "explanation": "Traffic infrastructure update; benign."},
        {"channel": "CH004", "language": "Hindi (Devanagari)", "crime_type": "benign", "district": "Udaipur",
         "text": "उदयपुर झील में पानी का स्तर सामान्य से अधिक – पर्यटकों के लिए अच्छी खबर।",
         "trigger_terms": [], "extracted_identifiers": [], "explanation": "Tourism/environment update; benign."},
        {"channel": "CH005", "language": "Hinglish", "crime_type": "benign", "district": "Ajmer",
         "text": "Pushkar mela 2026 puri swing mein hai! Traffic advisory jaari. Plan accordingly.",
         "trigger_terms": [], "extracted_identifiers": [], "explanation": "Festival traffic advisory; benign."},
        {"channel": "CH006", "language": "English", "crime_type": "benign", "district": "Bikaner",
         "text": "BSNL network upgrade in Bikaner district next week. Expect brief disruption.",
         "trigger_terms": [], "extracted_identifiers": [], "explanation": "Network maintenance notice; benign."},
        {"channel": "CH007", "language": "Hinglish", "crime_type": "benign", "district": "Jodhpur",
         "text": "Jodhpur me pani ki koi kami nahin – dam full capacity pe hai is saal ✅",
         "trigger_terms": [], "extracted_identifiers": [], "explanation": "Water reservoir news; benign."},
        {"channel": "CH008", "language": "English", "crime_type": "benign", "district": "Kota",
         "text": "Kota railway station gets digital display boards. Passenger info now clearer.",
         "trigger_terms": [], "extracted_identifiers": [], "explanation": "Infrastructure improvement news; benign."},
        {"channel": "CH001", "language": "Hindi (Devanagari)", "crime_type": "benign", "district": "Jaipur",
         "text": "जयपुर जिला प्रशासन: जल संरक्षण अभियान में भाग लें। आगे बढ़ें, जल बचाएं।",
         "trigger_terms": [], "extracted_identifiers": [], "explanation": "Water conservation campaign; benign government initiative."},
        {"channel": "CH002", "language": "Hinglish", "crime_type": "benign", "district": "Jodhpur",
         "text": "Naya sabzi mandi Jodhpur mein start ho gaya – fresh vegetables daily. Visit karo!",
         "trigger_terms": [], "extracted_identifiers": [], "explanation": "Vegetable market opening; completely benign."},
    ]
    for p in extra_noise:
        p2 = dict(p)
        p2["network_id"] = None
        p2["flagged"] = False
        p2["risk_level"] = "Low"
        p2["_days_ago_max"] = 14
        p2["_days_ago_min"] = 0
        all_post_templates.append(p2)

    assert len(all_post_templates) == 100, f"Expected 100 posts, got {len(all_post_templates)}"

    # Shuffle to mix (but keep seed)
    random.shuffle(all_post_templates)

    # Assign IDs, times, message_ids, sha256
    channel_map = {c["id"]: c for c in CHANNELS}
    posts = []
    for idx, tmpl in enumerate(all_post_templates):
        pid = f"P{idx+1:03d}"
        ch_id = tmpl["channel"]
        ch_name = channel_map[ch_id]["name"]

        days_max = tmpl.get("_days_ago_max", 14)
        days_min = tmpl.get("_days_ago_min", 0)
        t_str = rand_time(days_ago_max=days_max, days_ago_min=days_min)
        text = tmpl["text"]
        h = sha256_post(ch_name, t_str, text)

        channel_map[ch_id]["post_count"] += 1

        post = {
            "id": pid,
            "channel": ch_id,
            "message_id": random.randint(100000, 999999),
            "time": t_str,
            "text": text,
            "language": tmpl["language"],
            "crime_type": tmpl["crime_type"],
            "flagged": tmpl["flagged"],
            "risk_level": tmpl["risk_level"],
            "trigger_terms": tmpl["trigger_terms"],
            "extracted_identifiers": tmpl["extracted_identifiers"],
            "district": tmpl["district"],
            "network_id": tmpl["network_id"],
            "sha256": h,
            "explanation": tmpl["explanation"]
        }
        posts.append(post)

    # Build network post_id lists and channel lists
    net_post_ids = {n["id"]: [] for n in NETWORKS_DEF}
    net_channel_ids = {n["id"]: set() for n in NETWORKS_DEF}
    for p in posts:
        nid = p["network_id"]
        if nid:
            net_post_ids[nid].append(p["id"])
            net_channel_ids[nid].add(p["channel"])

    networks = []
    for nd in NETWORKS_DEF:
        n = dict(nd)
        n["last_seen"] = max(
            (p["time"] for p in posts if p["network_id"] == nd["id"]),
            default=BASE_TIME.isoformat()
        )
        n["channels"] = sorted(list(net_channel_ids[nd["id"]]))
        n["post_ids"] = net_post_ids[nd["id"]]
        networks.append(n)

    # --- Build edges (post IDs now known) ---
    # Helper to get posts for a network
    def net_posts(nid):
        return [p["id"] for p in posts if p["network_id"] == nid]

    n1 = net_posts("JAAL-NET-001")
    n2 = net_posts("JAAL-NET-002")
    n3 = net_posts("JAAL-NET-003")
    n4 = net_posts("JAAL-NET-004")
    n5 = net_posts("JAAL-NET-005")

    # Pick specific posts by their content identifiers
    def find_post(nid, keyword):
        for p in posts:
            if p["network_id"] == nid and keyword.lower() in p["text"].lower():
                return p["id"]
        return n1[0]

    # NET-001 edges (10+ edges)
    n1_upi_posts = [p["id"] for p in posts if p["network_id"] == "JAAL-NET-001" and
                    any("upi" == i["type"] for i in p["extracted_identifiers"])]
    n1_phone_posts = [p["id"] for p in posts if p["network_id"] == "JAAL-NET-001" and
                      any("phone" == i["type"] for i in p["extracted_identifiers"])]
    n1_handle_posts = [p["id"] for p in posts if p["network_id"] == "JAAL-NET-001" and
                       any("handle" == i["type"] for i in p["extracted_identifiers"])]
    n1_cluster_posts = [p["id"] for p in posts if p["network_id"] == "JAAL-NET-001"]

    edges = []
    eid = 1

    # Strong edges (UPI bridge)
    edges.append(make_edge(f"E{eid:03d}", "JAAL-NET-001", "N001", "N005", "shares_identifier",
                           {"exact_shared_identifier": 40, "similar_text": 15, "repeat_posting": 15, "temporal_similarity": 10, "shared_channel_reference": 0},
                           n1_upi_posts[:2])); eid += 1
    edges.append(make_edge(f"E{eid:03d}", "JAAL-NET-001", "N002", "N005", "shares_identifier",
                           {"exact_shared_identifier": 40, "similar_text": 10, "repeat_posting": 15, "temporal_similarity": 10, "shared_channel_reference": 0},
                           n1_upi_posts[:2])); eid += 1
    edges.append(make_edge(f"E{eid:03d}", "JAAL-NET-001", "N003", "N005", "shares_identifier",
                           {"exact_shared_identifier": 40, "similar_text": 15, "repeat_posting": 10, "temporal_similarity": 10, "shared_channel_reference": 0},
                           n1_upi_posts[:2])); eid += 1
    edges.append(make_edge(f"E{eid:03d}", "JAAL-NET-001", "N004", "N005", "shares_identifier",
                           {"exact_shared_identifier": 40, "similar_text": 15, "repeat_posting": 10, "temporal_similarity": 10, "shared_channel_reference": 0},
                           n1_upi_posts[:1])); eid += 1
    # Channel -> handle (Strong)
    edges.append(make_edge(f"E{eid:03d}", "JAAL-NET-001", "N001", "N007", "shares_identifier",
                           {"exact_shared_identifier": 35, "similar_text": 20, "repeat_posting": 10, "temporal_similarity": 10, "shared_channel_reference": 5},
                           n1_handle_posts[:2])); eid += 1
    edges.append(make_edge(f"E{eid:03d}", "JAAL-NET-001", "N003", "N007", "shares_identifier",
                           {"exact_shared_identifier": 35, "similar_text": 20, "repeat_posting": 10, "temporal_similarity": 10, "shared_channel_reference": 0},
                           n1_handle_posts[:2])); eid += 1
    # Channel -> phone (Possible)
    edges.append(make_edge(f"E{eid:03d}", "JAAL-NET-001", "N001", "N006", "shares_identifier",
                           {"exact_shared_identifier": 30, "similar_text": 10, "repeat_posting": 10, "temporal_similarity": 10, "shared_channel_reference": 0},
                           n1_phone_posts[:2])); eid += 1
    edges.append(make_edge(f"E{eid:03d}", "JAAL-NET-001", "N002", "N006", "shares_identifier",
                           {"exact_shared_identifier": 30, "similar_text": 10, "repeat_posting": 5, "temporal_similarity": 10, "shared_channel_reference": 0},
                           n1_phone_posts[:1])); eid += 1
    # Text cluster edges (Possible / Weak)
    edges.append(make_edge(f"E{eid:03d}", "JAAL-NET-001", "N001", "N008", "similar_text",
                           {"exact_shared_identifier": 0, "similar_text": 20, "repeat_posting": 15, "temporal_similarity": 10, "shared_channel_reference": 5},
                           n1_cluster_posts[:3])); eid += 1
    edges.append(make_edge(f"E{eid:03d}", "JAAL-NET-001", "N009", "N005", "similar_text",
                           {"exact_shared_identifier": 20, "similar_text": 15, "repeat_posting": 5, "temporal_similarity": 5, "shared_channel_reference": 0},
                           n1_cluster_posts[:2])); eid += 1
    # Weak edge
    edges.append(make_edge(f"E{eid:03d}", "JAAL-NET-001", "N008", "N009", "similar_text",
                           {"exact_shared_identifier": 0, "similar_text": 20, "repeat_posting": 5, "temporal_similarity": 5, "shared_channel_reference": 0},
                           n1_cluster_posts[:2])); eid += 1

    # NET-002 edges
    edges.append(make_edge(f"E{eid:03d}", "JAAL-NET-002", "N010", "N012", "shares_identifier",
                           {"exact_shared_identifier": 40, "similar_text": 15, "repeat_posting": 10, "temporal_similarity": 10, "shared_channel_reference": 0},
                           n2[:2])); eid += 1
    edges.append(make_edge(f"E{eid:03d}", "JAAL-NET-002", "N011", "N012", "shares_identifier",
                           {"exact_shared_identifier": 40, "similar_text": 10, "repeat_posting": 10, "temporal_similarity": 10, "shared_channel_reference": 0},
                           n2[:2])); eid += 1
    edges.append(make_edge(f"E{eid:03d}", "JAAL-NET-002", "N010", "N014", "shares_identifier",
                           {"exact_shared_identifier": 35, "similar_text": 20, "repeat_posting": 10, "temporal_similarity": 10, "shared_channel_reference": 0},
                           n2[:3])); eid += 1
    edges.append(make_edge(f"E{eid:03d}", "JAAL-NET-002", "N011", "N013", "shares_identifier",
                           {"exact_shared_identifier": 30, "similar_text": 10, "repeat_posting": 10, "temporal_similarity": 5, "shared_channel_reference": 0},
                           n2[:1])); eid += 1
    edges.append(make_edge(f"E{eid:03d}", "JAAL-NET-002", "N012", "N014", "co_posting",
                           {"exact_shared_identifier": 20, "similar_text": 15, "repeat_posting": 10, "temporal_similarity": 5, "shared_channel_reference": 0},
                           n2[:2])); eid += 1

    # NET-003 edges
    edges.append(make_edge(f"E{eid:03d}", "JAAL-NET-003", "N015", "N017", "shares_identifier",
                           {"exact_shared_identifier": 40, "similar_text": 15, "repeat_posting": 10, "temporal_similarity": 5, "shared_channel_reference": 0},
                           n3[:2])); eid += 1
    edges.append(make_edge(f"E{eid:03d}", "JAAL-NET-003", "N016", "N017", "shares_identifier",
                           {"exact_shared_identifier": 40, "similar_text": 10, "repeat_posting": 10, "temporal_similarity": 5, "shared_channel_reference": 0},
                           n3[:2])); eid += 1
    edges.append(make_edge(f"E{eid:03d}", "JAAL-NET-003", "N015", "N019", "shares_identifier",
                           {"exact_shared_identifier": 35, "similar_text": 20, "repeat_posting": 10, "temporal_similarity": 5, "shared_channel_reference": 0},
                           n3[:3])); eid += 1
    edges.append(make_edge(f"E{eid:03d}", "JAAL-NET-003", "N018", "N019", "co_posting",
                           {"exact_shared_identifier": 20, "similar_text": 15, "repeat_posting": 10, "temporal_similarity": 5, "shared_channel_reference": 0},
                           n3[:1])); eid += 1
    edges.append(make_edge(f"E{eid:03d}", "JAAL-NET-003", "N016", "N018", "shares_identifier",
                           {"exact_shared_identifier": 20, "similar_text": 10, "repeat_posting": 5, "temporal_similarity": 5, "shared_channel_reference": 0},
                           n3[:1])); eid += 1

    # NET-004 edges
    edges.append(make_edge(f"E{eid:03d}", "JAAL-NET-004", "N020", "N022", "shares_identifier",
                           {"exact_shared_identifier": 40, "similar_text": 15, "repeat_posting": 10, "temporal_similarity": 5, "shared_channel_reference": 0},
                           n4[:2])); eid += 1
    edges.append(make_edge(f"E{eid:03d}", "JAAL-NET-004", "N021", "N023", "shares_identifier",
                           {"exact_shared_identifier": 35, "similar_text": 10, "repeat_posting": 10, "temporal_similarity": 5, "shared_channel_reference": 0},
                           n4[:2])); eid += 1
    edges.append(make_edge(f"E{eid:03d}", "JAAL-NET-004", "N020", "N024", "shares_identifier",
                           {"exact_shared_identifier": 35, "similar_text": 20, "repeat_posting": 10, "temporal_similarity": 5, "shared_channel_reference": 0},
                           n4[:3])); eid += 1
    edges.append(make_edge(f"E{eid:03d}", "JAAL-NET-004", "N021", "N022", "shares_identifier",
                           {"exact_shared_identifier": 20, "similar_text": 10, "repeat_posting": 10, "temporal_similarity": 5, "shared_channel_reference": 0},
                           n4[:1])); eid += 1
    edges.append(make_edge(f"E{eid:03d}", "JAAL-NET-004", "N022", "N024", "co_posting",
                           {"exact_shared_identifier": 20, "similar_text": 10, "repeat_posting": 5, "temporal_similarity": 5, "shared_channel_reference": 0},
                           n4[:1])); eid += 1

    # NET-005 edges
    edges.append(make_edge(f"E{eid:03d}", "JAAL-NET-005", "N025", "N027", "shares_identifier",
                           {"exact_shared_identifier": 40, "similar_text": 15, "repeat_posting": 10, "temporal_similarity": 5, "shared_channel_reference": 0},
                           n5[:2])); eid += 1
    edges.append(make_edge(f"E{eid:03d}", "JAAL-NET-005", "N026", "N028", "shares_identifier",
                           {"exact_shared_identifier": 35, "similar_text": 20, "repeat_posting": 10, "temporal_similarity": 5, "shared_channel_reference": 0},
                           n5[:3])); eid += 1
    edges.append(make_edge(f"E{eid:03d}", "JAAL-NET-005", "N025", "N028", "co_posting",
                           {"exact_shared_identifier": 20, "similar_text": 15, "repeat_posting": 10, "temporal_similarity": 5, "shared_channel_reference": 0},
                           n5[:2])); eid += 1
    edges.append(make_edge(f"E{eid:03d}", "JAAL-NET-005", "N027", "N029", "similar_text",
                           {"exact_shared_identifier": 20, "similar_text": 20, "repeat_posting": 5, "temporal_similarity": 5, "shared_channel_reference": 0},
                           n5[:2])); eid += 1
    edges.append(make_edge(f"E{eid:03d}", "JAAL-NET-005", "N026", "N029", "similar_text",
                           {"exact_shared_identifier": 15, "similar_text": 15, "repeat_posting": 5, "temporal_similarity": 5, "shared_channel_reference": 0},
                           n5[:1])); eid += 1

    # --- Assemble final JSON ---
    data = {
        "meta": {
            "generated_at": BASE_TIME.isoformat(),
            "timezone": "IST",
            "disclaimer": "Synthetic data. Scores are illustrative priorities, not probabilities of criminality."
        },
        "channels": CHANNELS,
        "posts": posts,
        "networks": networks,
        "nodes": NODES_DEF,
        "edges": edges
    }

    return data

def main():
    data = generate()

    out_dir = os.path.dirname(os.path.abspath(__file__))

    # Write data.json
    json_path = os.path.join(out_dir, "data.json")
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"Written: {json_path}  ({len(data['posts'])} posts)")

    # Write data.js
    js_path = os.path.join(out_dir, "data.js")
    with open(js_path, "w", encoding="utf-8") as f:
        f.write("window.JAAL_DATA = ")
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write(";\n")
    print(f"Written: {js_path}")

if __name__ == "__main__":
    main()
