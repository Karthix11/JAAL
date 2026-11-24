window.JAAL_DATA = {
  "meta": {
    "generated_at": "2026-11-23T21:00:00+05:30",
    "timezone": "IST",
    "disclaimer": "Synthetic data. Scores are illustrative priorities, not probabilities of criminality."
  },
  "channels": [
    {
      "id": "CH001",
      "name": "city_deals_hub_demo",
      "platform": "Telegram (public, synthetic)",
      "post_count": 15
    },
    {
      "id": "CH002",
      "name": "jaipur_connect_demo",
      "platform": "Telegram (public, synthetic)",
      "post_count": 15
    },
    {
      "id": "CH003",
      "name": "raj_quicksale_demo",
      "platform": "Telegram (public, synthetic)",
      "post_count": 14
    },
    {
      "id": "CH004",
      "name": "udaipur_traders_demo",
      "platform": "Telegram (public, synthetic)",
      "post_count": 13
    },
    {
      "id": "CH005",
      "name": "bikaner_biz_demo",
      "platform": "Telegram (public, synthetic)",
      "post_count": 11
    },
    {
      "id": "CH006",
      "name": "kota_deals_demo",
      "platform": "Telegram (public, synthetic)",
      "post_count": 11
    },
    {
      "id": "CH007",
      "name": "ajmer_marketplace_demo",
      "platform": "Telegram (public, synthetic)",
      "post_count": 11
    },
    {
      "id": "CH008",
      "name": "jodhpur_connect_demo",
      "platform": "Telegram (public, synthetic)",
      "post_count": 10
    }
  ],
  "posts": [
    {
      "id": "P001",
      "channel": "CH007",
      "message_id": 694731,
      "time": "2026-11-18T18:05:37+05:30",
      "text": "जयपुर में योग शिविर – 1 दिसंबर से। नि:शुल्क प्रवेश। संपर्क: जिला खेल कार्यालय।",
      "language": "Hindi (Devanagari)",
      "crime_type": "benign",
      "flagged": false,
      "risk_level": "None",
      "trigger_terms": [],
      "extracted_identifiers": [],
      "district": "Jaipur",
      "network_id": null,
      "sha256": "180c41c3b46735370ac70eaad0677c0d45f7bdb636e2d25db68b97c5c4f1c7bc",
      "explanation": "Free yoga camp announcement by district sports office; no suspicious language, no account or illegal goods offer."
    },
    {
      "id": "P002",
      "channel": "CH006",
      "message_id": 322955,
      "time": "2026-11-16T05:41:13+05:30",
      "text": "Rajasthan Police recruitment 2026 notification out. Apply at rajpolice.gov.in by 15 Dec 2026.",
      "language": "English",
      "crime_type": "benign",
      "flagged": false,
      "risk_level": "None",
      "trigger_terms": [],
      "extracted_identifiers": [],
      "district": "Ajmer",
      "network_id": null,
      "sha256": "258a0df734054058df579c8f7bc7dd55a67245e90b6da3a8e20b2dd05c5c251e",
      "explanation": "Legitimate job recruitment notification for police; no illegal trade, no suspicious identifier or payment details."
    },
    {
      "id": "P003",
      "channel": "CH002",
      "message_id": 514850,
      "time": "2026-11-11T18:10:37+05:30",
      "text": "Free health checkup camp at civil hospital Bikaner on 25 November. All welcome.",
      "language": "Hinglish",
      "crime_type": "benign",
      "flagged": false,
      "risk_level": "Low",
      "trigger_terms": [],
      "extracted_identifiers": [],
      "district": "Bikaner",
      "network_id": null,
      "sha256": "0619b3c83a204b933a9080004b9cc459699af5c8585318e79da17f1657c1e504",
      "explanation": "Health camp notice; benign."
    },
    {
      "id": "P004",
      "channel": "CH005",
      "message_id": 581141,
      "time": "2026-11-15T23:22:41+05:30",
      "text": "URGENT: Need 5 account holders this week. Good pay. KYC must be ready. Prefer Rajasthan accounts. DM for details.",
      "language": "English",
      "crime_type": "mule_account",
      "flagged": true,
      "risk_level": "High",
      "trigger_terms": [
        "account holders",
        "KYC must be ready"
      ],
      "extracted_identifiers": [],
      "district": "Bikaner",
      "network_id": "JAAL-NET-001",
      "sha256": "21dca38bee7abacf423aa4c41abc4735e050dfc1e372bb5377d91189da9c0ebe",
      "explanation": "Urgency + 'account holders' + KYC readiness check is a mule recruitment template; temporal co-posting with JAAL-NET-001 activity flagged."
    },
    {
      "id": "P005",
      "channel": "CH007",
      "message_id": 377746,
      "time": "2026-11-20T09:46:17+05:30",
      "text": "Bonafide certificate, experience letter – all types made. Quick delivery. Contact via DM.",
      "language": "English",
      "crime_type": "fake_documents",
      "flagged": true,
      "risk_level": "Medium",
      "trigger_terms": [
        "Bonafide certificate",
        "experience letter"
      ],
      "extracted_identifiers": [],
      "district": "Jodhpur",
      "network_id": null,
      "sha256": "c65f77cb575e27148c9ad0993a4834d39f42f7b141f54fd16be0fd56b5493e28",
      "explanation": "Fabrication of official bonafide and experience certificates; isolated fake document flagged post."
    },
    {
      "id": "P006",
      "channel": "CH007",
      "message_id": 358607,
      "time": "2026-11-20T11:39:34+05:30",
      "text": "Ghar pe tiffin service shuru ki hai – homemade food, hygienic. ₹80 per meal. Jodhpur delivery. Call for menu.",
      "language": "Hinglish",
      "crime_type": "benign",
      "flagged": false,
      "risk_level": "None",
      "trigger_terms": [],
      "extracted_identifiers": [],
      "district": "Jodhpur",
      "network_id": null,
      "sha256": "209c385b9c2178708c07896e3a0f7bd38e027d3662aadaae523e2e59a6ace3d2",
      "explanation": "Home tiffin food service advertisement; no suspicious content, no account or illegal goods offer."
    },
    {
      "id": "P007",
      "channel": "CH002",
      "message_id": 665158,
      "time": "2026-11-20T11:14:42+05:30",
      "text": "Salary for account holder 💰 Passive income guaranteed. Send funds to: r e n t a c c t . d e m o @ f a k e b a n k and confirm. KYC ready hai? DM now 👇",
      "language": "Hinglish",
      "crime_type": "mule_account",
      "flagged": true,
      "risk_level": "High",
      "trigger_terms": [
        "Salary for account holder",
        "KYC ready hai"
      ],
      "extracted_identifiers": [
        {
          "type": "upi",
          "raw": "r e n t a c c t . d e m o @ f a k e b a n k",
          "normalized": "rentacct.demo@fakebank"
        }
      ],
      "district": "Jaipur",
      "network_id": "JAAL-NET-001",
      "sha256": "bd0b41caff5dbad9f3463ad46e61eb2af1494fa82b8e55d5c0c5ddcd786d5671",
      "explanation": "Spaced-out UPI handle recovers to 'rentacct.demo@fakebank'; phrase 'Salary for account holder' is a known mule recruitment indicator."
    },
    {
      "id": "P008",
      "channel": "CH004",
      "message_id": 883300,
      "time": "2026-11-17T11:56:31+05:30",
      "text": "Duplicate driving licence ready in 24 hours. Kota. No court, no process. DM.",
      "language": "English",
      "crime_type": "fake_documents",
      "flagged": true,
      "risk_level": "Medium",
      "trigger_terms": [
        "Duplicate driving licence",
        "No court, no process"
      ],
      "extracted_identifiers": [],
      "district": "Kota",
      "network_id": null,
      "sha256": "5d64aef1d8f24f8de7635697cc96fccdae9b31b3fdb5947435944acdced6f1ea",
      "explanation": "'Duplicate driving licence' without legal process is a fraudulent document service; isolated flagged post."
    },
    {
      "id": "P009",
      "channel": "CH005",
      "message_id": 549245,
      "time": "2026-11-14T18:43:38+05:30",
      "text": "Need a clean ID? Aadhaar + PAN combo available. Fast delivery. UPI: fakeid.demo@fakebank. DM for samples.",
      "language": "English",
      "crime_type": "fake_documents",
      "flagged": true,
      "risk_level": "High",
      "trigger_terms": [
        "clean ID",
        "fakeid.demo@fakebank"
      ],
      "extracted_identifiers": [
        {
          "type": "upi",
          "raw": "fakeid.demo@fakebank",
          "normalized": "fakeid.demo@fakebank"
        }
      ],
      "district": "Jodhpur",
      "network_id": "JAAL-NET-002",
      "sha256": "457c3dded665230fd1e42c796051a407f41980a4df3d830fea26edb76e48b33f",
      "explanation": "'Clean ID' is coded language for fraudulent identity documents; UPI 'fakeid.demo@fakebank' is a NET-002 identifier."
    },
    {
      "id": "P010",
      "channel": "CH008",
      "message_id": 479580,
      "time": "2026-11-14T04:19:57+05:30",
      "text": "New restaurant opened in Jodhpur – try the dal baati churma! Highly recommend 🍽️",
      "language": "Hinglish",
      "crime_type": "benign",
      "flagged": false,
      "risk_level": "Low",
      "trigger_terms": [],
      "extracted_identifiers": [],
      "district": "Jodhpur",
      "network_id": null,
      "sha256": "7f7c8d0c0ad99aa1fd456e20d2a84da3b3d928ba09e9cf87065e6adf226b3d16",
      "explanation": "Restaurant recommendation; no suspicious content."
    },
    {
      "id": "P011",
      "channel": "CH003",
      "message_id": 245051,
      "time": "2026-11-18T13:14:12+05:30",
      "text": "राजस्थान में सभी सरकारी दफ्तर सोमवार से खुलेंगे।",
      "language": "Hindi (Devanagari)",
      "crime_type": "benign",
      "flagged": false,
      "risk_level": "Low",
      "trigger_terms": [],
      "extracted_identifiers": [],
      "district": "Udaipur",
      "network_id": null,
      "sha256": "66402c1e61b4821dd2a581b208f0557836b6aa51f398098b07b35ca0cd506811",
      "explanation": "Government office reopening notice; benign administrative information."
    },
    {
      "id": "P012",
      "channel": "CH006",
      "message_id": 617488,
      "time": "2026-11-16T18:47:42+05:30",
      "text": "Account rental service. Easy money. Call: nine zero zero zero zero zero one two three four. Provide KYC on call.",
      "language": "English",
      "crime_type": "mule_account",
      "flagged": true,
      "risk_level": "High",
      "trigger_terms": [
        "Account rental service",
        "nine zero zero zero zero zero one two three four"
      ],
      "extracted_identifiers": [
        {
          "type": "phone",
          "raw": "nine zero zero zero zero zero one two three four",
          "normalized": "9000001234"
        }
      ],
      "district": "Kota",
      "network_id": "JAAL-NET-001",
      "sha256": "7ce25ff6b3afa0883b745bff29b8c46e3c6b80ac753fd91ca05ae1d0f08a0f15",
      "explanation": "Phone number spelled out in words normalises to 9000001234 (JAAL-NET-001 phone node); 'Account rental service' is explicit mule language."
    },
    {
      "id": "P013",
      "channel": "CH005",
      "message_id": 892495,
      "time": "2026-11-21T16:02:30+05:30",
      "text": "Fake certificates made – school, college, employment. Laminated. Contact for prices.",
      "language": "English",
      "crime_type": "fake_documents",
      "flagged": true,
      "risk_level": "Medium",
      "trigger_terms": [
        "Fake certificates"
      ],
      "extracted_identifiers": [],
      "district": "Bikaner",
      "network_id": null,
      "sha256": "b5a35786bd8db54c8abef8350ea57c7f476c4f57b64f87bfd6d2b376fc53065c",
      "explanation": "Explicit offer of fake educational and employment certificates; isolated flagged post."
    },
    {
      "id": "P014",
      "channel": "CH006",
      "message_id": 214975,
      "time": "2026-11-22T17:33:10+05:30",
      "text": "Weapons available 🔫 Ajmer. No documentation. Direct meet. Trust basis only.",
      "language": "Hinglish",
      "crime_type": "arms",
      "flagged": true,
      "risk_level": "Medium",
      "trigger_terms": [
        "Weapons available",
        "No documentation"
      ],
      "extracted_identifiers": [],
      "district": "Ajmer",
      "network_id": null,
      "sha256": "f0b452b7e96f7804bf3a91c243a031c6f2fba587b6260b40bc6eb6b5b58cee33",
      "explanation": "'Weapons available' with 'no documentation' is an unlicensed arms offer; isolated flagged post."
    },
    {
      "id": "P015",
      "channel": "CH002",
      "message_id": 757924,
      "time": "2026-11-20T03:57:49+05:30",
      "text": "Jodhpur weather update: sunny, 28°C. Plan outdoor activities accordingly 🌤️",
      "language": "Hinglish",
      "crime_type": "benign",
      "flagged": false,
      "risk_level": "Low",
      "trigger_terms": [],
      "extracted_identifiers": [],
      "district": "Jodhpur",
      "network_id": null,
      "sha256": "1793cbf27fc513d1436e2a0af31a240b9b16519448d55ade2a973ef711a57636",
      "explanation": "Weather update; completely benign content."
    },
    {
      "id": "P016",
      "channel": "CH002",
      "message_id": 930555,
      "time": "2026-11-19T23:48:14+05:30",
      "text": "Purani books khareedne hain – class 10-12 CBSE. DM karo agar aapke paas ho. Bikaner.",
      "language": "Hinglish",
      "crime_type": "benign",
      "flagged": false,
      "risk_level": "None",
      "trigger_terms": [],
      "extracted_identifiers": [],
      "district": "Bikaner",
      "network_id": null,
      "sha256": "7968d2095e2b9eb787e74dcb7652bcc62360d482eac2c8e8b39e24ed8573e9ec",
      "explanation": "Legitimate second-hand book purchase request; no illegal goods, no account rental or payment identifier."
    },
    {
      "id": "P017",
      "channel": "CH005",
      "message_id": 725380,
      "time": "2026-11-13T15:04:27+05:30",
      "text": "Ajmer Sharif dargah live coverage aaj raat 9 baje. YouTube pe dekhein. Subscribe karo channel ko.",
      "language": "Hinglish",
      "crime_type": "benign",
      "flagged": false,
      "risk_level": "None",
      "trigger_terms": [],
      "extracted_identifiers": [],
      "district": "Ajmer",
      "network_id": null,
      "sha256": "a393c44436dc58e35e0f29df0f7ddb944c5f030470b1886d6d7cb7537d608724",
      "explanation": "Religious event live coverage promotion; completely benign, no overlap with any illegal trade category."
    },
    {
      "id": "P018",
      "channel": "CH003",
      "message_id": 503457,
      "time": "2026-11-22T07:59:33+05:30",
      "text": "New traffic signal installed near station road Kota. Drive safely. 🚦",
      "language": "English",
      "crime_type": "benign",
      "flagged": false,
      "risk_level": "Low",
      "trigger_terms": [],
      "extracted_identifiers": [],
      "district": "Kota",
      "network_id": null,
      "sha256": "fbb80a74e650173d619f1231910b3bf8170d59e94f234b897df3aceb51db5e18",
      "explanation": "Traffic infrastructure update; benign."
    },
    {
      "id": "P019",
      "channel": "CH006",
      "message_id": 724834,
      "time": "2026-11-14T14:41:27+05:30",
      "text": "Ajmer traffic update: NH-48 closed for maintenance near Kishangarh. Use alternate route.",
      "language": "English",
      "crime_type": "benign",
      "flagged": false,
      "risk_level": "Low",
      "trigger_terms": [],
      "extracted_identifiers": [],
      "district": "Ajmer",
      "network_id": null,
      "sha256": "8cce88ed515db7e2e9a0017ad402188c67d64a8792bb8b894e5c0ad0662f8050",
      "explanation": "Traffic update notice; benign public information."
    },
    {
      "id": "P020",
      "channel": "CH002",
      "message_id": 654816,
      "time": "2026-11-12T12:20:29+05:30",
      "text": "Bank account opening camp this Saturday at the main branch, Jodhpur. Bring your Aadhaar and PAN. Free of cost.",
      "language": "Hinglish",
      "crime_type": "benign",
      "flagged": false,
      "risk_level": "None",
      "trigger_terms": [],
      "extracted_identifiers": [],
      "district": "Jodhpur",
      "network_id": null,
      "sha256": "f6e96a4e1a634d018e559ee7fcbd24e3fc722053011490a4d048e2c2fc41cfb9",
      "explanation": "Legitimate bank camp announcement; no rental or sale of accounts, official document use in proper context, no identifier shared."
    },
    {
      "id": "P021",
      "channel": "CH008",
      "message_id": 680099,
      "time": "2026-11-16T19:46:14+05:30",
      "text": "Firearms. Unlicensed. DM only. Payment via armsdeal.demo@fakebank. Serious buyers only.",
      "language": "English",
      "crime_type": "arms",
      "flagged": true,
      "risk_level": "High",
      "trigger_terms": [
        "Firearms",
        "Unlicensed",
        "armsdeal.demo@fakebank"
      ],
      "extracted_identifiers": [
        {
          "type": "upi",
          "raw": "armsdeal.demo@fakebank",
          "normalized": "armsdeal.demo@fakebank"
        }
      ],
      "district": "Jodhpur",
      "network_id": "JAAL-NET-004",
      "sha256": "249270a13abb34c95147bb0fe89bcb8f6c9c2a992e81c64328011f2ed8f7e569",
      "explanation": "'Unlicensed firearms' with UPI payment and DM-only contact is a clear illegal arms trade advertisement; UPI is NET-004 node."
    },
    {
      "id": "P022",
      "channel": "CH004",
      "message_id": 813328,
      "time": "2026-11-20T17:39:22+05:30",
      "text": "stuff 🍃❄️ same day delivery. discreet packaging. upi: supplydemo.03@fakebank. trusted supplier only.",
      "language": "English",
      "crime_type": "drugs",
      "flagged": true,
      "risk_level": "High",
      "trigger_terms": [
        "stuff",
        "same day delivery",
        "supplydemo.03@fakebank"
      ],
      "extracted_identifiers": [
        {
          "type": "upi",
          "raw": "supplydemo.03@fakebank",
          "normalized": "supplydemo.03@fakebank"
        }
      ],
      "district": "Udaipur",
      "network_id": "JAAL-NET-003",
      "sha256": "80acc7043be9e390606ace6bbf86cf5ae2625d6234d846229c6fc7aa11d1163d",
      "explanation": "'Stuff' with leaf and snowflake emojis is coded drug-supply language; 'discreet packaging' + UPI confirms illicit substance trade."
    },
    {
      "id": "P023",
      "channel": "CH008",
      "message_id": 814825,
      "time": "2026-11-20T11:38:04+05:30",
      "text": "ATM card cloning kit wanted. SIM swap service provider needed. DM @demo_atm_05. Pay per job.",
      "language": "English",
      "crime_type": "mule_account",
      "flagged": true,
      "risk_level": "Medium",
      "trigger_terms": [
        "ATM card cloning kit",
        "SIM swap service",
        "@demo_atm_05"
      ],
      "extracted_identifiers": [
        {
          "type": "handle",
          "raw": "@demo_atm_05",
          "normalized": "@demo_atm_05"
        }
      ],
      "district": "Jodhpur",
      "network_id": "JAAL-NET-005",
      "sha256": "9d1f6eb0fc2f8853459819ac0be385097a2bc4c06a900c315b0291d56ab795fc",
      "explanation": "'ATM card cloning kit' and 'SIM swap service' are explicit cybercrime service requests; handle is NET-005 node."
    },
    {
      "id": "P024",
      "channel": "CH007",
      "message_id": 887352,
      "time": "2026-11-10T20:11:32+05:30",
      "text": "Jodhpur me pani ki koi kami nahin – dam full capacity pe hai is saal ✅",
      "language": "Hinglish",
      "crime_type": "benign",
      "flagged": false,
      "risk_level": "Low",
      "trigger_terms": [],
      "extracted_identifiers": [],
      "district": "Jodhpur",
      "network_id": null,
      "sha256": "bd654ae159ad46a4ed5761facc0b25fe2f0ddd906599378c4c0e3f05389524ad",
      "explanation": "Water reservoir news; benign."
    },
    {
      "id": "P025",
      "channel": "CH002",
      "message_id": 905934,
      "time": "2026-11-17T09:33:48+05:30",
      "text": "Bijli ka bill online bharo – bhadants aate hain toh queue mein mat khado 😄",
      "language": "Hinglish",
      "crime_type": "benign",
      "flagged": false,
      "risk_level": "Low",
      "trigger_terms": [],
      "extracted_identifiers": [],
      "district": "Bikaner",
      "network_id": null,
      "sha256": "f9a0a706a8a7193906cc3be8187191fe8df635ad29ecf5319f6653f251df8475",
      "explanation": "Advice to pay electricity bill online; benign civic tip."
    },
    {
      "id": "P026",
      "channel": "CH006",
      "message_id": 216970,
      "time": "2026-11-15T14:50:01+05:30",
      "text": "Bikaner Camel Festival 2027 registration open. Teams can sign up at rajasthantourism.demo/camel-fest.",
      "language": "English",
      "crime_type": "benign",
      "flagged": false,
      "risk_level": "None",
      "trigger_terms": [],
      "extracted_identifiers": [],
      "district": "Bikaner",
      "network_id": null,
      "sha256": "9bfb434edee1f9ad351c66900f3e3554fdb21c55a7e353f2a5686c4e7aa2e3e2",
      "explanation": "Government tourism festival registration; no illegal content, completely benign."
    },
    {
      "id": "P027",
      "channel": "CH002",
      "message_id": 555884,
      "time": "2026-11-16T18:01:26+05:30",
      "text": "Purana laptop bech raha hoon – HP Core i3. ₹8000. Good condition. DM.",
      "language": "Hinglish",
      "crime_type": "benign",
      "flagged": false,
      "risk_level": "Low",
      "trigger_terms": [],
      "extracted_identifiers": [],
      "district": "Jodhpur",
      "network_id": null,
      "sha256": "48e3520808e1032b6969586a262167a57b9c27e3592fc5a0b636fedc33250faa",
      "explanation": "Legitimate laptop resale; benign."
    },
    {
      "id": "P028",
      "channel": "CH007",
      "message_id": 575763,
      "time": "2026-11-17T22:56:00+05:30",
      "text": "pistol 🔫 no paper required. Ajmer road. inbox @demo_arms_04. price negotiable. genuine buyer only.",
      "language": "Hinglish",
      "crime_type": "arms",
      "flagged": true,
      "risk_level": "High",
      "trigger_terms": [
        "pistol",
        "no paper required",
        "@demo_arms_04"
      ],
      "extracted_identifiers": [
        {
          "type": "handle",
          "raw": "@demo_arms_04",
          "normalized": "@demo_arms_04"
        }
      ],
      "district": "Jaipur",
      "network_id": "JAAL-NET-004",
      "sha256": "c65957e4e159a64d3f3b6990782e1cf23ba811b78505b36504df31de664cd591",
      "explanation": "'Pistol' + 'no paper required' (no documentation/license) is an unlicensed arms sale advertisement; handle matches NET-004."
    },
    {
      "id": "P029",
      "channel": "CH006",
      "message_id": 857168,
      "time": "2026-11-23T19:06:35+05:30",
      "text": "New blood donation camp at Ajmer District Hospital this Friday. Walk in welcome.",
      "language": "English",
      "crime_type": "benign",
      "flagged": false,
      "risk_level": "Low",
      "trigger_terms": [],
      "extracted_identifiers": [],
      "district": "Ajmer",
      "network_id": null,
      "sha256": "5cb611ef749e695244250182c920bb38b85a6038509a7619029f5e67de128bed",
      "explanation": "Blood donation camp; benign public health event."
    },
    {
      "id": "P030",
      "channel": "CH004",
      "message_id": 624902,
      "time": "2026-11-18T16:16:57+05:30",
      "text": "SIM cards bulk mein chahiye 📱 10+ active numbers. Kyc done wale. UPI: atmkit.demo@fakebank. Quick deal.",
      "language": "Hinglish",
      "crime_type": "mule_account",
      "flagged": true,
      "risk_level": "Medium",
      "trigger_terms": [
        "SIM cards bulk",
        "atmkit.demo@fakebank"
      ],
      "extracted_identifiers": [
        {
          "type": "upi",
          "raw": "atmkit.demo@fakebank",
          "normalized": "atmkit.demo@fakebank"
        }
      ],
      "district": "Udaipur",
      "network_id": "JAAL-NET-005",
      "sha256": "a96f9cb0430ccfdd8a4a20616d074d8a348728f983c5481da6be972bebbf691e",
      "explanation": "Bulk SIM card demand with 'KYC done' requirement is SIM farming for fraud; UPI matches NET-005."
    },
    {
      "id": "P031",
      "channel": "CH001",
      "message_id": 632342,
      "time": "2026-11-18T18:58:55+05:30",
      "text": "Paise kamao ghar baith ke 🏠 Account rent pe do, ₹200 per day milega. Send to rentacct.demo@fakebank – limited time.",
      "language": "Hinglish",
      "crime_type": "mule_account",
      "flagged": true,
      "risk_level": "High",
      "trigger_terms": [
        "Account rent pe do",
        "rentacct.demo@fakebank"
      ],
      "extracted_identifiers": [
        {
          "type": "upi",
          "raw": "rentacct.demo@fakebank",
          "normalized": "rentacct.demo@fakebank"
        }
      ],
      "district": "Jaipur",
      "network_id": "JAAL-NET-001",
      "sha256": "cedd746ed1a8b4b6699b3cbc6b43517b17b312a3f4c776884f453f18a30abbb4",
      "explanation": "Repeated occurrence of core UPI 'rentacct.demo@fakebank' with account rental language confirms JAAL-NET-001 mule network activity."
    },
    {
      "id": "P032",
      "channel": "CH004",
      "message_id": 755674,
      "time": "2026-11-21T07:00:41+05:30",
      "text": "Udaipur tourist guide available. Full-day tour ₹800. Contact our office at Fateh Sagar. Book in advance.",
      "language": "English",
      "crime_type": "benign",
      "flagged": false,
      "risk_level": "None",
      "trigger_terms": [],
      "extracted_identifiers": [],
      "district": "Udaipur",
      "network_id": null,
      "sha256": "bdcf7d4f1a4ba2af9ab0aca1dd8e725e23602e3ed7cc0eb329d9268770737064",
      "explanation": "Tourism service advertisement; no illegal goods, no account recruitment, no suspicious payment platform."
    },
    {
      "id": "P033",
      "channel": "CH001",
      "message_id": 982554,
      "time": "2026-11-16T15:08:36+05:30",
      "text": "College marksheet banao apni pasand se 📄 Any college, any marks. DM for samples.",
      "language": "Hinglish",
      "crime_type": "fake_documents",
      "flagged": true,
      "risk_level": "Medium",
      "trigger_terms": [
        "marksheet banao apni pasand se"
      ],
      "extracted_identifiers": [],
      "district": "Ajmer",
      "network_id": null,
      "sha256": "7b4975fe1d3019aae46e57d1411781a0a409762631643a1a51d5fd8a4cf28fcd",
      "explanation": "Custom marksheet fabrication offer; isolated fake document alert."
    },
    {
      "id": "P034",
      "channel": "CH005",
      "message_id": 738551,
      "time": "2026-11-11T13:15:54+05:30",
      "text": "खाता बेचना है – ज़ीरो बैलेंस। KYC पूरी है। ₹३००० में।",
      "language": "Hindi (Devanagari)",
      "crime_type": "mule_account",
      "flagged": true,
      "risk_level": "Medium",
      "trigger_terms": [
        "खाता बेचना है"
      ],
      "extracted_identifiers": [],
      "district": "Bikaner",
      "network_id": null,
      "sha256": "756bd321ee3182f4896e95558fbaeaed41277378708329d92a411cd8861df41c",
      "explanation": "'खाता बेचना है' (account for sale) with KYC completion is a mule account sale; isolated flagged post."
    },
    {
      "id": "P035",
      "channel": "CH004",
      "message_id": 260263,
      "time": "2026-11-19T01:07:34+05:30",
      "text": "Kota coaching centre results: 450 students cleared JEE 2026. Congratulations!",
      "language": "English",
      "crime_type": "benign",
      "flagged": false,
      "risk_level": "Low",
      "trigger_terms": [],
      "extracted_identifiers": [],
      "district": "Kota",
      "network_id": null,
      "sha256": "2be333867f5c236f4baae039aef3058f95d2ed585bd5c7ecbd16a40f2753bf77",
      "explanation": "Educational achievement announcement; completely benign."
    },
    {
      "id": "P036",
      "channel": "CH001",
      "message_id": 899550,
      "time": "2026-11-14T19:10:46+05:30",
      "text": "Jaipur Blue Pottery workshop this Sunday. Limited seats. Register at jaipur-craft.demo/workshop.",
      "language": "English",
      "crime_type": "benign",
      "flagged": false,
      "risk_level": "None",
      "trigger_terms": [],
      "extracted_identifiers": [],
      "district": "Jaipur",
      "network_id": null,
      "sha256": "03762d3b2da4cfb43d1f998933bb9fdfaeb1421c0d59bebc4ef79091444715b1",
      "explanation": "Cultural workshop registration; completely benign content with no overlap with illegal trade keywords."
    },
    {
      "id": "P037",
      "channel": "CH001",
      "message_id": 665579,
      "time": "2026-11-19T22:53:28+05:30",
      "text": "जयपुर जिला प्रशासन: जल संरक्षण अभियान में भाग लें। आगे बढ़ें, जल बचाएं।",
      "language": "Hindi (Devanagari)",
      "crime_type": "benign",
      "flagged": false,
      "risk_level": "Low",
      "trigger_terms": [],
      "extracted_identifiers": [],
      "district": "Jaipur",
      "network_id": null,
      "sha256": "49fe49a2a8081dd69c892c511bd6e63faabac51c38b2bdcd8b5bc301188604be",
      "explanation": "Water conservation campaign; benign government initiative."
    },
    {
      "id": "P038",
      "channel": "CH002",
      "message_id": 100599,
      "time": "2026-11-11T00:02:48+05:30",
      "text": "CBD oil and special herbs 🌿 available. Home delivery. DM for rates. Discreet packing.",
      "language": "English",
      "crime_type": "drugs",
      "flagged": true,
      "risk_level": "Medium",
      "trigger_terms": [
        "special herbs",
        "Discreet packing"
      ],
      "extracted_identifiers": [],
      "district": "Jodhpur",
      "network_id": null,
      "sha256": "ff5fc0e0939ff8209ce5a9b199f4b551c8686a21c75334c80203be8bdb9ff0f4",
      "explanation": "'Special herbs' with discreet packing and DM-only contact is a coded drug supply pattern; isolated flagged post."
    },
    {
      "id": "P039",
      "channel": "CH004",
      "message_id": 612340,
      "time": "2026-11-16T00:09:56+05:30",
      "text": "Kota NTPC plant inaugurated. 500 new jobs expected in region. Great news!",
      "language": "English",
      "crime_type": "benign",
      "flagged": false,
      "risk_level": "Low",
      "trigger_terms": [],
      "extracted_identifiers": [],
      "district": "Kota",
      "network_id": null,
      "sha256": "f920aa93e39a3d0a1bf650e8e9a45ceff7803df45f3bcd92e1c0ff7182502aba",
      "explanation": "Economic news; benign."
    },
    {
      "id": "P040",
      "channel": "CH007",
      "message_id": 217301,
      "time": "2026-11-19T18:09:49+05:30",
      "text": "Account holders needed for part-time job 💼 DM for KYC process. Daily payout. Genuine offer only.",
      "language": "Hinglish",
      "crime_type": "mule_account",
      "flagged": true,
      "risk_level": "High",
      "trigger_terms": [
        "Account holders needed",
        "KYC process"
      ],
      "extracted_identifiers": [],
      "district": "Ajmer",
      "network_id": "JAAL-NET-001",
      "sha256": "27d4f4046c8a76c686462a8479395856b7cd42452775310e1d8a43f44301e308",
      "explanation": "Account holder recruitment with KYC process mention; no shared identifiers with JAAL-NET-001 but pattern matches mule recruitment template."
    },
    {
      "id": "P041",
      "channel": "CH001",
      "message_id": 972064,
      "time": "2026-11-15T01:32:55+05:30",
      "text": "Reminder: Update your KYC at your bank branch with original documents before 30 November. Avoid account freeze.",
      "language": "English",
      "crime_type": "benign",
      "flagged": false,
      "risk_level": "None",
      "trigger_terms": [],
      "extracted_identifiers": [],
      "district": "Jaipur",
      "network_id": null,
      "sha256": "ca180db793125b5535fec07e4eae29ccce9a022733162deb739749f1fffc8bb0",
      "explanation": "Official KYC reminder for existing customers; no offer to rent/sell accounts, no suspicious identifier, no payment solicitation."
    },
    {
      "id": "P042",
      "channel": "CH008",
      "message_id": 351083,
      "time": "2026-11-17T03:25:49+05:30",
      "text": "माल उपलब्ध है 🍃 जोधपुर डिलीवरी। संपर्क: ९०००००४५६७। डिस्क्रीट पैकेजिंग।",
      "language": "Hindi (Devanagari)",
      "crime_type": "drugs",
      "flagged": true,
      "risk_level": "High",
      "trigger_terms": [
        "माल उपलब्ध है",
        "९०००००४५६७"
      ],
      "extracted_identifiers": [
        {
          "type": "phone",
          "raw": "९०००००४५६७",
          "normalized": "9000004567"
        }
      ],
      "district": "Jodhpur",
      "network_id": "JAAL-NET-003",
      "sha256": "059333fcf3352027f7b452445f48dd666094e0fdd6a8198ba4f0546ff0eb5b62",
      "explanation": "'माल उपलब्ध है' (goods/maal available) with Devanagari phone and 'discreet packaging' is a coded drug supply advertisement."
    },
    {
      "id": "P043",
      "channel": "CH004",
      "message_id": 352572,
      "time": "2026-11-22T11:15:23+05:30",
      "text": "Cyber safety tip: Never share your OTP or bank PIN with anyone. Beware of fake KYC calls. Report fraud to 1930.",
      "language": "English",
      "crime_type": "benign",
      "flagged": false,
      "risk_level": "None",
      "trigger_terms": [],
      "extracted_identifiers": [],
      "district": "Kota",
      "network_id": null,
      "sha256": "fb6e4a2fbe4c7afcaba194f24e88c2646ceea33498a5e4bfdf46d6f3f5d50e19",
      "explanation": "Public safety advisory against fraud; KYC mention is in a protective/educational context, opposite of criminal solicitation."
    },
    {
      "id": "P044",
      "channel": "CH005",
      "message_id": 182582,
      "time": "2026-11-10T02:29:27+05:30",
      "text": "Second hand sofa set bech raha hoon, good condition. Price ₹3500. DM for photos. Bikaner pickup only.",
      "language": "Hinglish",
      "crime_type": "benign",
      "flagged": false,
      "risk_level": "None",
      "trigger_terms": [],
      "extracted_identifiers": [],
      "district": "Bikaner",
      "network_id": null,
      "sha256": "b100a3b19c8ddf1a397c85890874620dc1a7b0f591fa4370d7671657a4069b4c",
      "explanation": "Genuine second-hand furniture sale; no controlled goods, no account recruitment, no suspicious payment identifier."
    },
    {
      "id": "P045",
      "channel": "CH006",
      "message_id": 867460,
      "time": "2026-11-20T20:03:06+05:30",
      "text": "Genuine-looking documents, fastest turnaround. Aadhar/PAN/passport. DM @demo_docs_02 with requirements.",
      "language": "English",
      "crime_type": "fake_documents",
      "flagged": true,
      "risk_level": "High",
      "trigger_terms": [
        "Genuine-looking documents",
        "@demo_docs_02"
      ],
      "extracted_identifiers": [
        {
          "type": "handle",
          "raw": "@demo_docs_02",
          "normalized": "@demo_docs_02"
        }
      ],
      "district": "Kota",
      "network_id": "JAAL-NET-002",
      "sha256": "959ae4ee0741f66233a01dd822149161f0e4dcc17afcf150fa72a29745cbd122",
      "explanation": "'Genuine-looking documents' is coded language for forgeries; recurring handle @demo_docs_02 confirms NET-002 network activity."
    },
    {
      "id": "P046",
      "channel": "CH008",
      "message_id": 955662,
      "time": "2026-11-12T01:53:25+05:30",
      "text": "Dormant account activate karvao aur becho. ₹5000 ek account ka. Contact Kota.",
      "language": "Hinglish",
      "crime_type": "mule_account",
      "flagged": true,
      "risk_level": "Medium",
      "trigger_terms": [
        "Dormant account activate karvao aur becho"
      ],
      "extracted_identifiers": [],
      "district": "Kota",
      "network_id": null,
      "sha256": "d6177afae32e22092f78763e2e7906bcc997423062fbeb4723cba8aefb9c72f5",
      "explanation": "Reactivating and selling dormant bank accounts is a mule account trafficking method; isolated flagged post."
    },
    {
      "id": "P047",
      "channel": "CH003",
      "message_id": 897549,
      "time": "2026-11-22T04:40:51+05:30",
      "text": "Kuch khaas cheez chahiye? 🍃❄️ Kota delivery. Fast. DM karo.",
      "language": "Hinglish",
      "crime_type": "drugs",
      "flagged": true,
      "risk_level": "Medium",
      "trigger_terms": [
        "Kuch khaas cheez chahiye"
      ],
      "extracted_identifiers": [],
      "district": "Kota",
      "network_id": null,
      "sha256": "5fb136ea46a9680f58e73d373f7de943b14e5f7cc08ee69fdf6f1717fc441922",
      "explanation": "'Kuch khaas cheez' (some special thing) with drug emojis is coded drug solicitation; isolated alert."
    },
    {
      "id": "P048",
      "channel": "CH002",
      "message_id": 903035,
      "time": "2026-11-10T22:40:35+05:30",
      "text": "Unused bank accounts wanted. Will pay ₹2000 per account. Contact for details.",
      "language": "English",
      "crime_type": "mule_account",
      "flagged": true,
      "risk_level": "Medium",
      "trigger_terms": [
        "Unused bank accounts wanted"
      ],
      "extracted_identifiers": [],
      "district": "Bikaner",
      "network_id": null,
      "sha256": "a1ea410613b087814075fad5088fff68a2bf53a8a12f378b256c018735a83f4d",
      "explanation": "Purchasing unused bank accounts is a mule account acquisition method; isolated flagged post."
    },
    {
      "id": "P049",
      "channel": "CH004",
      "message_id": 234628,
      "time": "2026-11-19T02:41:06+05:30",
      "text": "Looking for account holders. Monthly salary ₹6000. Must have active KYC. No work just hold funds. Contact DM.",
      "language": "English",
      "crime_type": "mule_account",
      "flagged": true,
      "risk_level": "High",
      "trigger_terms": [
        "account holders",
        "hold funds"
      ],
      "extracted_identifiers": [],
      "district": "Udaipur",
      "network_id": "JAAL-NET-001",
      "sha256": "637e858cdbfe0976dd301e8e79eeaa32fdda4f265b12eae3618f1e9d8d3e7eaf",
      "explanation": "Phrase 'hold funds' combined with 'account holders' and monthly salary offer matches JAAL-NET-001 text cluster pattern for mule recruitment."
    },
    {
      "id": "P050",
      "channel": "CH002",
      "message_id": 676510,
      "time": "2026-11-16T02:33:51+05:30",
      "text": "ATM किट और SIM कार्ड चाहिए 💳📱 अजमेर। संपर्क: @demo_atm_05। तुरंत चाहिए।",
      "language": "Hindi (Devanagari)",
      "crime_type": "mule_account",
      "flagged": true,
      "risk_level": "Medium",
      "trigger_terms": [
        "ATM किट",
        "SIM कार्ड चाहिए",
        "@demo_atm_05"
      ],
      "extracted_identifiers": [
        {
          "type": "handle",
          "raw": "@demo_atm_05",
          "normalized": "@demo_atm_05"
        }
      ],
      "district": "Ajmer",
      "network_id": "JAAL-NET-005",
      "sha256": "4d4ea93d8aafd7d0dbe3ec4d51b2cd3691f7567925bb71d59161c56d6f09408f",
      "explanation": "Hindi post demanding ATM kit and SIM cards with urgency and handle @demo_atm_05 confirms NET-005 ATM/SIM fraud recruitment."
    },
    {
      "id": "P051",
      "channel": "CH002",
      "message_id": 377932,
      "time": "2026-11-19T20:48:24+05:30",
      "text": "Naya sabzi mandi Jodhpur mein start ho gaya – fresh vegetables daily. Visit karo!",
      "language": "Hinglish",
      "crime_type": "benign",
      "flagged": false,
      "risk_level": "Low",
      "trigger_terms": [],
      "extracted_identifiers": [],
      "district": "Jodhpur",
      "network_id": null,
      "sha256": "f4928716328ad8360fbf171cfeff752d08a225814c8028078cb73f33a918eebe",
      "explanation": "Vegetable market opening; completely benign."
    },
    {
      "id": "P052",
      "channel": "CH003",
      "message_id": 736059,
      "time": "2026-11-11T01:36:28+05:30",
      "text": "कोटा कोचिंग नोट्स उपलब्ध – JEE/NEET 2027। ₹500 में पूरा सेट। संपर्क करें।",
      "language": "Hindi (Devanagari)",
      "crime_type": "benign",
      "flagged": false,
      "risk_level": "None",
      "trigger_terms": [],
      "extracted_identifiers": [],
      "district": "Kota",
      "network_id": null,
      "sha256": "c5dfd77277d9264b278a48857389907f4e818a4b3449f92e48672172abf69087",
      "explanation": "Legitimate coaching notes sale; educational content with no illegal trade indicators or suspicious identifiers."
    },
    {
      "id": "P053",
      "channel": "CH003",
      "message_id": 322086,
      "time": "2026-11-21T07:22:34+05:30",
      "text": "खाता किराए पर दें और ₹४०००/माह कमाएं। KYC तैयार होनी चाहिए। UPI भेजें: rentacct[dot]demo[at]fakebank पर। संपर्क: @demo_seller_01",
      "language": "Hindi (Devanagari)",
      "crime_type": "mule_account",
      "flagged": true,
      "risk_level": "High",
      "trigger_terms": [
        "खाता किराए पर दें",
        "rentacct[dot]demo[at]fakebank",
        "@demo_seller_01"
      ],
      "extracted_identifiers": [
        {
          "type": "upi",
          "raw": "rentacct[dot]demo[at]fakebank",
          "normalized": "rentacct.demo@fakebank"
        },
        {
          "type": "handle",
          "raw": "@demo_seller_01",
          "normalized": "@demo_seller_01"
        }
      ],
      "district": "Jodhpur",
      "network_id": "JAAL-NET-001",
      "sha256": "ba9b4a345f82c9c45fcc4585b068027402cd5ba22fa16394d3524ada3dafeb95",
      "explanation": "Hindi post offering account rental with obfuscated UPI ('rentacct[dot]demo[at]fakebank') that normalises to 'rentacct.demo@fakebank', a known mule-network identifier."
    },
    {
      "id": "P054",
      "channel": "CH001",
      "message_id": 891952,
      "time": "2026-11-10T18:50:15+05:30",
      "text": "Ganja delivery available 🌿 Jaipur. Contact on WhatsApp only. Fresh stock.",
      "language": "Hinglish",
      "crime_type": "drugs",
      "flagged": true,
      "risk_level": "Medium",
      "trigger_terms": [
        "Ganja delivery"
      ],
      "extracted_identifiers": [],
      "district": "Jaipur",
      "network_id": null,
      "sha256": "c9722b8ace18dc9473ba493f45a0c5b900f8d836d2ce025dcdd35d7a4633d388",
      "explanation": "'Ganja delivery' is explicit cannabis supply advertisement; isolated alert with no network linkage found."
    },
    {
      "id": "P055",
      "channel": "CH007",
      "message_id": 847581,
      "time": "2026-11-19T10:24:38+05:30",
      "text": "आधार और पैन कार्ड बनवाएं – ₹१५०० में। पूरी तरह असली जैसे। संपर्क: @demo_docs_02 पर करें। 48 घंटे में डिलीवरी।",
      "language": "Hindi (Devanagari)",
      "crime_type": "fake_documents",
      "flagged": true,
      "risk_level": "High",
      "trigger_terms": [
        "पूरी तरह असली जैसे",
        "@demo_docs_02"
      ],
      "extracted_identifiers": [
        {
          "type": "handle",
          "raw": "@demo_docs_02",
          "normalized": "@demo_docs_02"
        }
      ],
      "district": "Udaipur",
      "network_id": "JAAL-NET-002",
      "sha256": "932afa6956f7479abbaba04a4a71407b5537c80c39c79da2bdd2d2a4666af701",
      "explanation": "Hindi post offering Aadhaar/PAN 'exactly like real' (पूरी तरह असली जैसे) is fake document service; handle matches NET-002."
    },
    {
      "id": "P056",
      "channel": "CH003",
      "message_id": 518373,
      "time": "2026-11-16T07:24:44+05:30",
      "text": "मोबाइल कवर सेल 📱 सभी मॉडल उपलब्ध। DM करें कीमत के लिए। उदयपुर डिलीवरी।",
      "language": "Hindi (Devanagari)",
      "crime_type": "benign",
      "flagged": false,
      "risk_level": "None",
      "trigger_terms": [],
      "extracted_identifiers": [],
      "district": "Udaipur",
      "network_id": null,
      "sha256": "cbc542046d96b57b8fd4caa0f69e26ec38f8b6d44326d31b434b392bb05db551",
      "explanation": "Legitimate mobile cover sale; no account rental, no controlled substance, no illegal identifier present."
    },
    {
      "id": "P057",
      "channel": "CH008",
      "message_id": 559381,
      "time": "2026-11-14T19:28:01+05:30",
      "text": "Party supplies 💊🌿 Jodhpur. Bulk orders welcome. Discreet. Reply YES.",
      "language": "English",
      "crime_type": "drugs",
      "flagged": true,
      "risk_level": "Medium",
      "trigger_terms": [
        "Party supplies",
        "Discreet"
      ],
      "extracted_identifiers": [],
      "district": "Jodhpur",
      "network_id": null,
      "sha256": "ca3f6170d6d9de5465ed2e72e04a45d55e3325229dee0dda05887442fd479edd",
      "explanation": "'Party supplies' with pill and leaf emojis is coded drug supply language; 'discreet' confirms illicit nature; isolated alert."
    },
    {
      "id": "P058",
      "channel": "CH002",
      "message_id": 573417,
      "time": "2026-11-11T07:29:25+05:30",
      "text": "देसी कट्टा मिलेगा 🔫 जोधपुर। बिना लाइसेंस। DM करें।",
      "language": "Hindi (Devanagari)",
      "crime_type": "arms",
      "flagged": true,
      "risk_level": "Medium",
      "trigger_terms": [
        "देसी कट्टा",
        "बिना लाइसेंस"
      ],
      "extracted_identifiers": [],
      "district": "Jodhpur",
      "network_id": null,
      "sha256": "f62ebc6ae18e89be1ed376df4892bfd453dc8e92081f148318e27b031774a4b0",
      "explanation": "'देसी कट्टा' (country-made gun) + 'बिना लाइसेंस' (without licence) is an explicit unlicensed arms offer; isolated alert."
    },
    {
      "id": "P059",
      "channel": "CH006",
      "message_id": 359947,
      "time": "2026-11-19T09:45:18+05:30",
      "text": "Green and white available 🌿❄️ Kota delivery. Contact @demo_supply_03. Fresh stock aa gaya.",
      "language": "Hinglish",
      "crime_type": "drugs",
      "flagged": true,
      "risk_level": "High",
      "trigger_terms": [
        "Green and white available",
        "@demo_supply_03"
      ],
      "extracted_identifiers": [
        {
          "type": "handle",
          "raw": "@demo_supply_03",
          "normalized": "@demo_supply_03"
        }
      ],
      "district": "Kota",
      "network_id": "JAAL-NET-003",
      "sha256": "4b40e65580d10e0116c1ce11e6beffa67328c32f44f51c57c1c4ad53c72fc029",
      "explanation": "'Green and white' with plant/snowflake emojis is coded language for cannabis and synthetic substances; handle matches NET-003."
    },
    {
      "id": "P060",
      "channel": "CH004",
      "message_id": 167136,
      "time": "2026-11-18T10:06:16+05:30",
      "text": "Air gun modified for high power available. Udaipur. No registration. DM.",
      "language": "English",
      "crime_type": "arms",
      "flagged": true,
      "risk_level": "Medium",
      "trigger_terms": [
        "Air gun modified",
        "No registration"
      ],
      "extracted_identifiers": [],
      "district": "Udaipur",
      "network_id": null,
      "sha256": "8fc619df794e4bf597b54d730442ce0dfe242effaf9f7af6f414dbb0e3989b21",
      "explanation": "Modified high-power air gun without registration is an unlicensed weapon offer; isolated flagged post."
    },
    {
      "id": "P061",
      "channel": "CH003",
      "message_id": 122056,
      "time": "2026-11-16T18:31:32+05:30",
      "text": "Premium quality stuff 🍃 Ajmer pickup available. DM @demo_supply_03. Fresh batch, tested.",
      "language": "Hinglish",
      "crime_type": "drugs",
      "flagged": true,
      "risk_level": "High",
      "trigger_terms": [
        "quality stuff",
        "@demo_supply_03"
      ],
      "extracted_identifiers": [
        {
          "type": "handle",
          "raw": "@demo_supply_03",
          "normalized": "@demo_supply_03"
        }
      ],
      "district": "Ajmer",
      "network_id": "JAAL-NET-003",
      "sha256": "2791232182f6dc78c1844074eb692011773582752c933ead5a26c1cb99d78742",
      "explanation": "'Quality stuff' with leaf emoji and 'fresh batch' are drug trade indicators; handle repeated from NET-003 network."
    },
    {
      "id": "P062",
      "channel": "CH002",
      "message_id": 680828,
      "time": "2026-11-20T07:19:17+05:30",
      "text": "Account rent chahiye 💳 Instant payment hoga. Call/WhatsApp: 9 0 0 0 0 0 1 2 3 4. KYC documents ready ho. Limited offer!",
      "language": "Hinglish",
      "crime_type": "mule_account",
      "flagged": true,
      "risk_level": "High",
      "trigger_terms": [
        "Account rent chahiye",
        "9 0 0 0 0 0 1 2 3 4"
      ],
      "extracted_identifiers": [
        {
          "type": "phone",
          "raw": "9 0 0 0 0 0 1 2 3 4",
          "normalized": "9000001234"
        }
      ],
      "district": "Bikaner",
      "network_id": "JAAL-NET-001",
      "sha256": "aaa8fe12939752d9c1d6689733d295a8c63c1b42bf83c76708bd94efda957ca8",
      "explanation": "Spaced phone number normalises to 9000001234 (JAAL-NET-001 phone); 'Account rent chahiye' is explicit mule recruitment language."
    },
    {
      "id": "P063",
      "channel": "CH003",
      "message_id": 717024,
      "time": "2026-11-18T11:29:14+05:30",
      "text": "Mule account job available 🤑 Need KYC-verified account holders. DM @demo_seller_01 for interview slot. Work from home!",
      "language": "Hinglish",
      "crime_type": "mule_account",
      "flagged": true,
      "risk_level": "High",
      "trigger_terms": [
        "Mule account job",
        "@demo_seller_01"
      ],
      "extracted_identifiers": [
        {
          "type": "handle",
          "raw": "@demo_seller_01",
          "normalized": "@demo_seller_01"
        }
      ],
      "district": "Jodhpur",
      "network_id": "JAAL-NET-001",
      "sha256": "d4d850685e9497f8ea4b68304068798f2a676810cf2e5cba7746a49c2846fbdb",
      "explanation": "Post explicitly uses 'Mule account job' and links to network handle @demo_seller_01; both are core JAAL-NET-001 identifiers."
    },
    {
      "id": "P064",
      "channel": "CH001",
      "message_id": 107540,
      "time": "2026-11-18T12:42:51+05:30",
      "text": "Relaxation products 🌿 natural and effective. Jaipur area. DM for menu.",
      "language": "English",
      "crime_type": "drugs",
      "flagged": true,
      "risk_level": "Medium",
      "trigger_terms": [
        "Relaxation products"
      ],
      "extracted_identifiers": [],
      "district": "Jaipur",
      "network_id": null,
      "sha256": "35ad44b882c9b3d5a50734fe9a17a0b32b5eabce6c93c2e74e2a271fc46001fc",
      "explanation": "'Relaxation products' with leaf emoji and 'menu' implies controlled substance supply; isolated alert."
    },
    {
      "id": "P065",
      "channel": "CH001",
      "message_id": 842225,
      "time": "2026-11-22T03:38:37+05:30",
      "text": "Jaipur marathon 2026 registration starts next week. All fitness levels welcome.",
      "language": "English",
      "crime_type": "benign",
      "flagged": false,
      "risk_level": "Low",
      "trigger_terms": [],
      "extracted_identifiers": [],
      "district": "Jaipur",
      "network_id": null,
      "sha256": "4e7a5b3ee264d80b60f9f79be9136d964b2bf59a6b1320573958e88f64f9de61",
      "explanation": "Sports event registration; benign."
    },
    {
      "id": "P066",
      "channel": "CH004",
      "message_id": 161733,
      "time": "2026-11-14T05:10:41+05:30",
      "text": "RC book, insurance paper bhi milta hai 📜 Purana record clean karvate hain. UPI: fakeid.demo@fakebank. DM only.",
      "language": "Hinglish",
      "crime_type": "fake_documents",
      "flagged": true,
      "risk_level": "High",
      "trigger_terms": [
        "Purana record clean karvate hain",
        "fakeid.demo@fakebank"
      ],
      "extracted_identifiers": [
        {
          "type": "upi",
          "raw": "fakeid.demo@fakebank",
          "normalized": "fakeid.demo@fakebank"
        }
      ],
      "district": "Bikaner",
      "network_id": "JAAL-NET-002",
      "sha256": "c019019fd97089e168f02dfdcbe46451746ba37a0e3bca4605fff53c64c9ebc6",
      "explanation": "'Purana record clean karvate hain' (old records cleaned) + forged vehicle documents; UPI matches NET-002."
    },
    {
      "id": "P067",
      "channel": "CH001",
      "message_id": 170674,
      "time": "2026-11-18T07:37:55+05:30",
      "text": "Jaipur literature festival 2027 dates announced. International authors confirmed.",
      "language": "English",
      "crime_type": "benign",
      "flagged": false,
      "risk_level": "Low",
      "trigger_terms": [],
      "extracted_identifiers": [],
      "district": "Jaipur",
      "network_id": null,
      "sha256": "ac6c641c9eac9b7913d19b70320b009ae0815f115d4de4e90236b5a245d07e36",
      "explanation": "Cultural event announcement; benign and educational."
    },
    {
      "id": "P068",
      "channel": "CH008",
      "message_id": 446479,
      "time": "2026-11-23T02:42:03+05:30",
      "text": "Laptop sale – Dell i5, 8GB RAM, 256 SSD. ₹22,000. Good condition. DM me. Jodhpur.",
      "language": "Hinglish",
      "crime_type": "benign",
      "flagged": false,
      "risk_level": "None",
      "trigger_terms": [],
      "extracted_identifiers": [],
      "district": "Jodhpur",
      "network_id": null,
      "sha256": "2b639c34b1908205f5a0cda025c97694418606ff9cd5c5c5137966c47f25d94b",
      "explanation": "Legitimate laptop resale; no illegal goods, no account rental language, no suspicious identifier."
    },
    {
      "id": "P069",
      "channel": "CH001",
      "message_id": 639131,
      "time": "2026-11-22T03:43:22+05:30",
      "text": "Free legal aid camp at Jaipur bar council Saturday. Bring your documents.",
      "language": "English",
      "crime_type": "benign",
      "flagged": false,
      "risk_level": "Low",
      "trigger_terms": [],
      "extracted_identifiers": [],
      "district": "Jaipur",
      "network_id": null,
      "sha256": "a31493c9c3e482fbbd4b22a69886be3d12759ea57c8e8f0f1ea2ab5905683ed8",
      "explanation": "Legal aid camp; benign civic service."
    },
    {
      "id": "P070",
      "channel": "CH002",
      "message_id": 392004,
      "time": "2026-11-17T23:40:35+05:30",
      "text": "maal available 🍃 same day delivery jaipur. inbox karo @demo_supply_03. quality guaranteed 💯",
      "language": "Hinglish",
      "crime_type": "drugs",
      "flagged": true,
      "risk_level": "High",
      "trigger_terms": [
        "maal available",
        "same day delivery"
      ],
      "extracted_identifiers": [
        {
          "type": "handle",
          "raw": "@demo_supply_03",
          "normalized": "@demo_supply_03"
        }
      ],
      "district": "Jaipur",
      "network_id": "JAAL-NET-003",
      "sha256": "924fd159e8a135ba7478b48b7fef0ce0952b42141d642c91d47836aa3e5368b9",
      "explanation": "'Maal' is coded slang for contraband substances; 'same day delivery' + anonymous DM handle signals drug supply ad."
    },
    {
      "id": "P071",
      "channel": "CH001",
      "message_id": 324643,
      "time": "2026-11-20T22:18:24+05:30",
      "text": "🏦 Account rent pe chahiye! Monthly ₹5000 milega. Bas KYC ready hona chahiye. UPI: rentacct.demo@fakebank. DM karo @demo_seller_01 ✅",
      "language": "Hinglish",
      "crime_type": "mule_account",
      "flagged": true,
      "risk_level": "High",
      "trigger_terms": [
        "Account rent pe chahiye",
        "rentacct.demo@fakebank",
        "@demo_seller_01"
      ],
      "extracted_identifiers": [
        {
          "type": "upi",
          "raw": "rentacct.demo@fakebank",
          "normalized": "rentacct.demo@fakebank"
        },
        {
          "type": "handle",
          "raw": "@demo_seller_01",
          "normalized": "@demo_seller_01"
        }
      ],
      "district": "Jaipur",
      "network_id": "JAAL-NET-001",
      "sha256": "282066be9e020f6adaf7eebfe4e3b3eb9a6a8d135737967fdd35ee7e119c6ed7",
      "explanation": "Post explicitly solicits bank account rental ('Account rent pe chahiye'), shares a UPI ID and Telegram handle - classic mule account recruitment ad."
    },
    {
      "id": "P072",
      "channel": "CH006",
      "message_id": 238739,
      "time": "2026-11-10T18:52:25+05:30",
      "text": "BSNL network upgrade in Bikaner district next week. Expect brief disruption.",
      "language": "English",
      "crime_type": "benign",
      "flagged": false,
      "risk_level": "Low",
      "trigger_terms": [],
      "extracted_identifiers": [],
      "district": "Bikaner",
      "network_id": null,
      "sha256": "600c86c10ced9d56f7add4a010005fd35d992776e18606bc4beb37dc9bd67426",
      "explanation": "Network maintenance notice; benign."
    },
    {
      "id": "P073",
      "channel": "CH007",
      "message_id": 704201,
      "time": "2026-11-10T00:20:36+05:30",
      "text": "SIM card किराए पर दें और ₹१०० प्रति दिन कमाएं। संपर्क करें।",
      "language": "Hindi (Devanagari)",
      "crime_type": "mule_account",
      "flagged": true,
      "risk_level": "Medium",
      "trigger_terms": [
        "SIM card किराए पर दें"
      ],
      "extracted_identifiers": [],
      "district": "Jaipur",
      "network_id": null,
      "sha256": "7c9d6e8c698ee00cff309d2627f0f20d74a07640ee5b654feb6f0ef60db90e77",
      "explanation": "SIM card rental for payment is a known SIM farming/mule recruitment indicator; isolated alert."
    },
    {
      "id": "P074",
      "channel": "CH004",
      "message_id": 354801,
      "time": "2026-11-12T09:38:58+05:30",
      "text": "उदयपुर झील में पानी का स्तर सामान्य से अधिक – पर्यटकों के लिए अच्छी खबर।",
      "language": "Hindi (Devanagari)",
      "crime_type": "benign",
      "flagged": false,
      "risk_level": "Low",
      "trigger_terms": [],
      "extracted_identifiers": [],
      "district": "Udaipur",
      "network_id": null,
      "sha256": "6b3748452617a5ebf9983a9a04ea0a09115eab5473b35ea44fcf7506963fb5b9",
      "explanation": "Tourism/environment update; benign."
    },
    {
      "id": "P075",
      "channel": "CH003",
      "message_id": 946721,
      "time": "2026-11-12T09:28:24+05:30",
      "text": "नशे का सामान मिलेगा 🍃 उदयपुर। रेट के लिए WhatsApp करें।",
      "language": "Hindi (Devanagari)",
      "crime_type": "drugs",
      "flagged": true,
      "risk_level": "Medium",
      "trigger_terms": [
        "नशे का सामान"
      ],
      "extracted_identifiers": [],
      "district": "Udaipur",
      "network_id": null,
      "sha256": "ee2b156b7acf454276a93b2de624b99021240f3b038d090b54d3bfed0a9ad6b5",
      "explanation": "'नशे का सामान' (intoxicant goods/drugs) is an explicit drug solicitation; isolated flagged post."
    },
    {
      "id": "P076",
      "channel": "CH008",
      "message_id": 299659,
      "time": "2026-11-13T23:52:14+05:30",
      "text": "Gardening tips: best plants for Rajasthan climate 🌱 DM for guidance.",
      "language": "Hinglish",
      "crime_type": "benign",
      "flagged": false,
      "risk_level": "Low",
      "trigger_terms": [],
      "extracted_identifiers": [],
      "district": "Jodhpur",
      "network_id": null,
      "sha256": "41370b8099f17a10a51f0472a07d16cb1a2df23ef281f9d7c760d7a0b964aa22",
      "explanation": "Gardening advice; benign."
    },
    {
      "id": "P077",
      "channel": "CH005",
      "message_id": 201639,
      "time": "2026-11-19T17:31:33+05:30",
      "text": "Special delivery service 💊 Bikaner. Fast. Discrete. upi: supplydemo.03@fakebank. No meet-up needed.",
      "language": "English",
      "crime_type": "drugs",
      "flagged": true,
      "risk_level": "High",
      "trigger_terms": [
        "Special delivery service",
        "supplydemo.03@fakebank"
      ],
      "extracted_identifiers": [
        {
          "type": "upi",
          "raw": "supplydemo.03@fakebank",
          "normalized": "supplydemo.03@fakebank"
        }
      ],
      "district": "Bikaner",
      "network_id": "JAAL-NET-003",
      "sha256": "6572d266b9553e5c862c52b8a4f28c0efa15a48300cc5d1e7ecc2867c58d1ee0",
      "explanation": "Pill emoji + 'special delivery service' + 'no meet-up' + UPI match NET-003 drug supply pattern."
    },
    {
      "id": "P078",
      "channel": "CH001",
      "message_id": 471507,
      "time": "2026-11-13T09:53:41+05:30",
      "text": "New shop opening in Jaipur. Electronics at best prices. Visit us!",
      "language": "English",
      "crime_type": "benign",
      "flagged": false,
      "risk_level": "Low",
      "trigger_terms": [],
      "extracted_identifiers": [],
      "district": "Jaipur",
      "network_id": null,
      "sha256": "7a04c03407de31d28d283aaf7dd451c103500d7c5d1594ab18e8a9c1f2947363",
      "explanation": "Generic shop opening notice; no suspicious language or identifiers."
    },
    {
      "id": "P079",
      "channel": "CH003",
      "message_id": 531071,
      "time": "2026-11-13T14:14:52+05:30",
      "text": "उदयपुर में राष्ट्रीय विज्ञान प्रतियोगिता 5 दिसंबर को। छात्र आवेदन करें।",
      "language": "Hindi (Devanagari)",
      "crime_type": "benign",
      "flagged": false,
      "risk_level": "Low",
      "trigger_terms": [],
      "extracted_identifiers": [],
      "district": "Udaipur",
      "network_id": null,
      "sha256": "21daf5c5e9280bd37cd3334200d9007979bad710b09a0dfde50f859598d92082",
      "explanation": "Science competition notice; benign."
    },
    {
      "id": "P080",
      "channel": "CH007",
      "message_id": 864491,
      "time": "2026-11-12T12:56:19+05:30",
      "text": "जयपुर में आज पानी की सप्लाई बंद रहेगी। कल सुबह से शुरू होगी।",
      "language": "Hindi (Devanagari)",
      "crime_type": "benign",
      "flagged": false,
      "risk_level": "Low",
      "trigger_terms": [],
      "extracted_identifiers": [],
      "district": "Jaipur",
      "network_id": null,
      "sha256": "1d25060876f6281abcdba8f02808ebaed1716e2094429bacd31602ffc6d87033",
      "explanation": "Water supply notice; completely benign civic information."
    },
    {
      "id": "P081",
      "channel": "CH006",
      "message_id": 806073,
      "time": "2026-11-22T13:26:35+05:30",
      "text": "Whitener aur solution 🧪 available. Ajmer. Good quality. DM for rates.",
      "language": "Hinglish",
      "crime_type": "drugs",
      "flagged": true,
      "risk_level": "Medium",
      "trigger_terms": [
        "Whitener aur solution"
      ],
      "extracted_identifiers": [],
      "district": "Ajmer",
      "network_id": null,
      "sha256": "0ec8da7c1bc9a2e20c5fbebfa2f73db2f22cca85e198f15f93af835b29a82649",
      "explanation": "'Whitener aur solution' with chemistry emoji is coded language for inhalant/solvent substance abuse supply; isolated alert."
    },
    {
      "id": "P082",
      "channel": "CH003",
      "message_id": 777568,
      "time": "2026-11-11T22:40:03+05:30",
      "text": "Katta available 🔫 Jodhpur area. Rate 9OOOOO7890 par call karo. No questions.",
      "language": "Hinglish",
      "crime_type": "arms",
      "flagged": true,
      "risk_level": "High",
      "trigger_terms": [
        "Katta available",
        "9OOOOO7890"
      ],
      "extracted_identifiers": [
        {
          "type": "phone",
          "raw": "9OOOOO7890",
          "normalized": "9000007890"
        }
      ],
      "district": "Jodhpur",
      "network_id": "JAAL-NET-004",
      "sha256": "7c6ce82be1ca68c39af022e843a3c749850e49f31d33a221cb008a5097427644",
      "explanation": "'Katta' is Rajasthani slang for illegal firearm; leetspeak phone '9OOOOO7890' normalises to NET-004 number."
    },
    {
      "id": "P083",
      "channel": "CH001",
      "message_id": 163556,
      "time": "2026-11-18T16:20:02+05:30",
      "text": "country made available 🔫 no paperwork. DM @demo_arms_04. discreet. Rajasthan only.",
      "language": "English",
      "crime_type": "arms",
      "flagged": true,
      "risk_level": "High",
      "trigger_terms": [
        "country made available",
        "no paperwork",
        "@demo_arms_04"
      ],
      "extracted_identifiers": [
        {
          "type": "handle",
          "raw": "@demo_arms_04",
          "normalized": "@demo_arms_04"
        }
      ],
      "district": "Jaipur",
      "network_id": "JAAL-NET-004",
      "sha256": "7d424389f656512a3dcb9f73641bd5af47ebfc9e9a1cf76f5eab708c92202825",
      "explanation": "'Country made' refers to improvised/illegal firearms; 'no paperwork' confirms sale without licence; handle is NET-004 node."
    },
    {
      "id": "P084",
      "channel": "CH007",
      "message_id": 863587,
      "time": "2026-11-14T02:27:22+05:30",
      "text": "जयपुर मेट्रो का नया स्टेशन 1 दिसंबर से चालू होगा। रूट जानकारी जल्द।",
      "language": "Hindi (Devanagari)",
      "crime_type": "benign",
      "flagged": false,
      "risk_level": "Low",
      "trigger_terms": [],
      "extracted_identifiers": [],
      "district": "Jaipur",
      "network_id": null,
      "sha256": "2980477deecb7e1813dcab510e766ecd2216a9dd7c4a3dee949d7f9f0fe860a4",
      "explanation": "Metro station opening; benign civic news."
    },
    {
      "id": "P085",
      "channel": "CH008",
      "message_id": 939482,
      "time": "2026-11-15T15:20:31+05:30",
      "text": "Kota railway station gets digital display boards. Passenger info now clearer.",
      "language": "English",
      "crime_type": "benign",
      "flagged": false,
      "risk_level": "Low",
      "trigger_terms": [],
      "extracted_identifiers": [],
      "district": "Kota",
      "network_id": null,
      "sha256": "11457dc17ba994741cd600842c955fb8485ee566ac0d246090654d8aa41eedf0",
      "explanation": "Infrastructure improvement news; benign."
    },
    {
      "id": "P086",
      "channel": "CH001",
      "message_id": 360735,
      "time": "2026-11-23T05:05:12+05:30",
      "text": "अकाउंट रेंटल स्कीम – रोज़ ₹२०० कमाओ। KYC ready रखो। संपर्क: ९०००००१२३४ पर WhatsApp करें।",
      "language": "Hindi (Devanagari)",
      "crime_type": "mule_account",
      "flagged": true,
      "risk_level": "High",
      "trigger_terms": [
        "अकाउंट रेंटल स्कीम",
        "९०००००१२३४"
      ],
      "extracted_identifiers": [
        {
          "type": "phone",
          "raw": "९०००००१२३४",
          "normalized": "9000001234"
        }
      ],
      "district": "Jaipur",
      "network_id": "JAAL-NET-001",
      "sha256": "afe9478a4795aef7f28560a295f81519c810806552886b8d138dc417cb21c665",
      "explanation": "Account rental scheme in Hindi with phone number in Devanagari script (९०००००१२३४ = 9000001234); matches JAAL-NET-001 phone node."
    },
    {
      "id": "P087",
      "channel": "CH004",
      "message_id": 299448,
      "time": "2026-11-19T05:23:27+05:30",
      "text": "Bank account chahiye rent pe. Good payment. KYC wala hi contact kare. Kota.",
      "language": "Hinglish",
      "crime_type": "mule_account",
      "flagged": true,
      "risk_level": "Medium",
      "trigger_terms": [
        "Bank account chahiye rent pe"
      ],
      "extracted_identifiers": [],
      "district": "Kota",
      "network_id": null,
      "sha256": "56051dba0bb3d4b3cab6a7076abe98f7a6877ee1cb8508c6cfc11861f5f9837b",
      "explanation": "Direct bank account rental solicitation; isolated alert, no known network identifier match."
    },
    {
      "id": "P088",
      "channel": "CH005",
      "message_id": 570405,
      "time": "2026-11-10T20:35:28+05:30",
      "text": "Bikaner se ek acha news: local business ne award jeeta national level pe 🏆",
      "language": "Hinglish",
      "crime_type": "benign",
      "flagged": false,
      "risk_level": "Low",
      "trigger_terms": [],
      "extracted_identifiers": [],
      "district": "Bikaner",
      "network_id": null,
      "sha256": "1909c8fd56224098486ddbcc044aff1ca2446bc6c1dced7e6d467c353fedba48",
      "explanation": "Positive local business news; no illegal content."
    },
    {
      "id": "P089",
      "channel": "CH002",
      "message_id": 542374,
      "time": "2026-11-19T00:35:05+05:30",
      "text": "💳💰 Account rent karo aur kamaao! UPI: rentacct dot demo at fakebank. Whatsapp 9 0 0 0 0 0 1 2 3 4. KYC chahiye ✅🔥",
      "language": "Hinglish",
      "crime_type": "mule_account",
      "flagged": true,
      "risk_level": "High",
      "trigger_terms": [
        "Account rent karo",
        "rentacct dot demo at fakebank",
        "9 0 0 0 0 0 1 2 3 4"
      ],
      "extracted_identifiers": [
        {
          "type": "upi",
          "raw": "rentacct dot demo at fakebank",
          "normalized": "rentacct.demo@fakebank"
        },
        {
          "type": "phone",
          "raw": "9 0 0 0 0 0 1 2 3 4",
          "normalized": "9000001234"
        }
      ],
      "district": "Ajmer",
      "network_id": "JAAL-NET-001",
      "sha256": "eacd3f2cdc142f55e67f8402f44e568b7f825ab1cfd39d2f2a4ed64ad362d659",
      "explanation": "Both network identifiers present in obfuscated form ('rentacct dot demo at fakebank' and spaced phone); 'Account rent karo' is core mule phrase."
    },
    {
      "id": "P090",
      "channel": "CH003",
      "message_id": 392075,
      "time": "2026-11-19T10:06:38+05:30",
      "text": "Active SIM cards 10+ chahiye. Payment ready. Udaipur meet possible.",
      "language": "Hinglish",
      "crime_type": "mule_account",
      "flagged": true,
      "risk_level": "Medium",
      "trigger_terms": [
        "Active SIM cards"
      ],
      "extracted_identifiers": [],
      "district": "Udaipur",
      "network_id": null,
      "sha256": "aed03cd1bff42b271644542887a1dcc2bdee66f402ecfbcaf666ac2fced2a3db",
      "explanation": "Bulk active SIM card procurement is a SIM farming indicator for fraud; isolated flagged post."
    },
    {
      "id": "P091",
      "channel": "CH005",
      "message_id": 361941,
      "time": "2026-11-12T15:29:59+05:30",
      "text": "Bikaner fort tour Sunday 10am. Free entry for students with ID. Meet at main gate.",
      "language": "Hinglish",
      "crime_type": "benign",
      "flagged": false,
      "risk_level": "Low",
      "trigger_terms": [],
      "extracted_identifiers": [],
      "district": "Bikaner",
      "network_id": null,
      "sha256": "ea081989fcd3c973d536aadfeb24815492c91884ef3af62fcbbd2f55d8d24d9a",
      "explanation": "Heritage tour event; benign."
    },
    {
      "id": "P092",
      "channel": "CH008",
      "message_id": 564656,
      "time": "2026-11-19T10:01:17+05:30",
      "text": "Earn ₹10,000/month holding funds in your account. Zero risk. Provide KYC docs on first call. Reply YES to join.",
      "language": "English",
      "crime_type": "mule_account",
      "flagged": true,
      "risk_level": "High",
      "trigger_terms": [
        "holding funds in your account",
        "Provide KYC docs"
      ],
      "extracted_identifiers": [],
      "district": "Jodhpur",
      "network_id": "JAAL-NET-001",
      "sha256": "64b0b4e777376e45180cbf699bb50e34ed0e265323541dc801431c41ceec8708",
      "explanation": "'Holding funds in your account' with payment for KYC docs is a standard mule account recruitment script."
    },
    {
      "id": "P093",
      "channel": "CH001",
      "message_id": 202664,
      "time": "2026-11-15T04:42:23+05:30",
      "text": "Voter ID, driving licence, passport – sab banate hain 🪪 Rates negotiable. Phono: 9 0 0 0 0 5 6 7 8 9. No questions asked.",
      "language": "Hinglish",
      "crime_type": "fake_documents",
      "flagged": true,
      "risk_level": "High",
      "trigger_terms": [
        "Voter ID, driving licence, passport – sab banate hain",
        "9 0 0 0 0 5 6 7 8 9"
      ],
      "extracted_identifiers": [
        {
          "type": "phone",
          "raw": "9 0 0 0 0 5 6 7 8 9",
          "normalized": "9000056789"
        }
      ],
      "district": "Ajmer",
      "network_id": "JAAL-NET-002",
      "sha256": "6ca1bf745c4df113cfe958e92f2b090f39b9a2afa9458f85c529de2e61212e7c",
      "explanation": "Offering to make voter ID, licence and passport with 'no questions asked' is indicative of fraudulent document manufacture; spaced phone recovers to NET-002 number."
    },
    {
      "id": "P094",
      "channel": "CH005",
      "message_id": 783823,
      "time": "2026-11-19T06:15:55+05:30",
      "text": "हथियार उपलब्ध है 🔫 बिना कागज़। बीकानेर। संपर्क: ९०००००७८९०।",
      "language": "Hindi (Devanagari)",
      "crime_type": "arms",
      "flagged": true,
      "risk_level": "High",
      "trigger_terms": [
        "हथियार उपलब्ध है",
        "बिना कागज़",
        "९०००००७८९०"
      ],
      "extracted_identifiers": [
        {
          "type": "phone",
          "raw": "९०००००७८९०",
          "normalized": "9000007890"
        }
      ],
      "district": "Bikaner",
      "network_id": "JAAL-NET-004",
      "sha256": "574d1e75f34f747a37b8b643c7daa042e0eead5675c5c0ba927d638782863785",
      "explanation": "'हथियार उपलब्ध है' (weapon available) + 'बिना कागज़' (without papers) is an unlicensed arms offer; Devanagari phone matches NET-004."
    },
    {
      "id": "P095",
      "channel": "CH006",
      "message_id": 976638,
      "time": "2026-11-15T07:32:33+05:30",
      "text": "need 2 pc ATM kit 💳 and 3 SIM cards. Active accounts. Contact @demo_atm_05. Urgent.",
      "language": "Hinglish",
      "crime_type": "mule_account",
      "flagged": true,
      "risk_level": "Medium",
      "trigger_terms": [
        "ATM kit",
        "SIM cards",
        "@demo_atm_05"
      ],
      "extracted_identifiers": [
        {
          "type": "handle",
          "raw": "@demo_atm_05",
          "normalized": "@demo_atm_05"
        }
      ],
      "district": "Kota",
      "network_id": "JAAL-NET-005",
      "sha256": "68a1d5c9721224aff5b4e246a37c9fff2dd79fcfc756811b989c6085260f4a26",
      "explanation": "'ATM kit' and 'SIM cards' together is coded language for fraudulent ATM skimming/SIM swapping toolkit recruitment; handle matches NET-005."
    },
    {
      "id": "P096",
      "channel": "CH007",
      "message_id": 197793,
      "time": "2026-11-21T16:42:06+05:30",
      "text": "Looking for ATM skimmer parts and blank SIM cards. Payment: atmkit.demo@fakebank. Ajmer.",
      "language": "English",
      "crime_type": "mule_account",
      "flagged": true,
      "risk_level": "Medium",
      "trigger_terms": [
        "ATM skimmer",
        "blank SIM cards",
        "atmkit.demo@fakebank"
      ],
      "extracted_identifiers": [
        {
          "type": "upi",
          "raw": "atmkit.demo@fakebank",
          "normalized": "atmkit.demo@fakebank"
        }
      ],
      "district": "Ajmer",
      "network_id": "JAAL-NET-005",
      "sha256": "d1f55f23fb859604e4055ab5bd997120b430d5413d7cc686ad26edf211b1cd2d",
      "explanation": "'ATM skimmer parts' and 'blank SIM cards' are components for financial cybercrime; UPI identifier is NET-005 node."
    },
    {
      "id": "P097",
      "channel": "CH005",
      "message_id": 274389,
      "time": "2026-11-18T03:17:57+05:30",
      "text": "Pushkar mela 2026 puri swing mein hai! Traffic advisory jaari. Plan accordingly.",
      "language": "Hinglish",
      "crime_type": "benign",
      "flagged": false,
      "risk_level": "Low",
      "trigger_terms": [],
      "extracted_identifiers": [],
      "district": "Ajmer",
      "network_id": null,
      "sha256": "639fc6d95888174963ebb8f674de48bb286d651a96727d194983130f423c476e",
      "explanation": "Festival traffic advisory; benign."
    },
    {
      "id": "P098",
      "channel": "CH004",
      "message_id": 609231,
      "time": "2026-11-21T09:48:42+05:30",
      "text": "EARN EASY! Account holders wanted. Monthly payout assured. Transfer via: r3ntacct.dem0@fakebank. DM for onboarding. Limited slots.",
      "language": "English",
      "crime_type": "mule_account",
      "flagged": true,
      "risk_level": "High",
      "trigger_terms": [
        "Account holders wanted",
        "r3ntacct.dem0@fakebank"
      ],
      "extracted_identifiers": [
        {
          "type": "upi",
          "raw": "r3ntacct.dem0@fakebank",
          "normalized": "rentacct.demo@fakebank"
        }
      ],
      "district": "Udaipur",
      "network_id": "JAAL-NET-001",
      "sha256": "865ae988c241f77b621f38515f8828a3fc6f8fcbb2f1264eb24d4e8f96268a7c",
      "explanation": "Leetspeak UPI 'r3ntacct.dem0@fakebank' normalises to the network's core identifier; 'Account holders wanted' is a mule recruitment phrase."
    },
    {
      "id": "P099",
      "channel": "CH003",
      "message_id": 324130,
      "time": "2026-11-16T00:47:40+05:30",
      "text": "ID card 100% original type 📄 Aadhar/PAN ready in 48 hrs. Contact @demo_docs_02. Genuine buyers only 🔏",
      "language": "Hinglish",
      "crime_type": "fake_documents",
      "flagged": true,
      "risk_level": "High",
      "trigger_terms": [
        "ID card 100% original type",
        "@demo_docs_02"
      ],
      "extracted_identifiers": [
        {
          "type": "handle",
          "raw": "@demo_docs_02",
          "normalized": "@demo_docs_02"
        }
      ],
      "district": "Jaipur",
      "network_id": "JAAL-NET-002",
      "sha256": "139e88d2dc774ea6d0480d3277973cb26cf1747101724a62860e940412692c93",
      "explanation": "Claim of '100% original type' Aadhaar/PAN documents is a classic fake-document service ad; handle @demo_docs_02 linked to NET-002."
    },
    {
      "id": "P100",
      "channel": "CH003",
      "message_id": 161483,
      "time": "2026-11-14T03:22:38+05:30",
      "text": "कोटा में बाढ़ राहत शिविर: सरकारी सहायता के लिए जिला कार्यालय से संपर्क करें।",
      "language": "Hindi (Devanagari)",
      "crime_type": "benign",
      "flagged": false,
      "risk_level": "Low",
      "trigger_terms": [],
      "extracted_identifiers": [],
      "district": "Kota",
      "network_id": null,
      "sha256": "a82259d7fa26916b011e74810186d5a26da9bce3647f6446356ad43e1ee75dac",
      "explanation": "Flood relief information from district office; legitimate government service notice."
    }
  ],
  "networks": [
    {
      "id": "JAAL-NET-001",
      "name": "Mule Account Ring – Rentacct Demo",
      "crime_type": "mule_account",
      "priority_score": 92,
      "score_components": {
        "severity": 28,
        "channel_spread": 20,
        "repeat_frequency": 18,
        "recency": 14,
        "network_size": 12
      },
      "campaign_dna": {
        "shared_identifiers": [
          "rentacct.demo@fakebank",
          "9000001234",
          "@demo_seller_01"
        ],
        "language_patterns": [
          "Account rent pe chahiye",
          "KYC ready hai",
          "Salary for account holder",
          "hold funds",
          "account holders wanted"
        ],
        "posting_behaviour": "Coordinated cross-channel blitz within 72-hour windows; identical UPI shared in multiple disguise forms",
        "time_pattern": "Evening peak 18:00-22:00 IST, repeat within 24-48 hours across channels"
      },
      "next_actions": [
        "Draft request to bank nodal officer for account details of UPI rentacct.demo@fakebank (suggestion only – verify jurisdiction first)",
        "Preserve original source records and computed SHA-256 hashes as evidence",
        "Identify phone 9000001234 carrier via LEA request to Telecom authority (suggestion only)",
        "Refer complete network report to district cyber cell Jaipur for verification and further enquiry"
      ],
      "last_seen": "2026-11-23T05:05:12+05:30",
      "channels": [
        "CH001",
        "CH002",
        "CH003",
        "CH004",
        "CH005",
        "CH006",
        "CH007",
        "CH008"
      ],
      "post_ids": [
        "P004",
        "P007",
        "P012",
        "P031",
        "P040",
        "P049",
        "P053",
        "P062",
        "P063",
        "P071",
        "P086",
        "P089",
        "P092",
        "P098"
      ]
    },
    {
      "id": "JAAL-NET-002",
      "name": "Fake Document Hub – FakeID Demo",
      "crime_type": "fake_documents",
      "priority_score": 74,
      "score_components": {
        "severity": 25,
        "channel_spread": 15,
        "repeat_frequency": 14,
        "recency": 12,
        "network_size": 8
      },
      "campaign_dna": {
        "shared_identifiers": [
          "fakeid.demo@fakebank",
          "9000056789",
          "@demo_docs_02"
        ],
        "language_patterns": [
          "100% original type",
          "genuine-looking documents",
          "no questions asked",
          "48 hrs delivery"
        ],
        "posting_behaviour": "Handle @demo_docs_02 reused across 3 channels; UPI shared in 2 channels",
        "time_pattern": "Afternoon posts 13:00-16:00 IST, 2-3 day cadence"
      },
      "next_actions": [
        "Draft request to UPI PSP for account holder details of fakeid.demo@fakebank (suggestion only)",
        "Preserve original posts and hashes; request Telegram preservation request if handle active",
        "Check phone 9000056789 against known fake-document offender database",
        "Refer to district cyber cell with priority for verification"
      ],
      "last_seen": "2026-11-20T20:03:06+05:30",
      "channels": [
        "CH001",
        "CH003",
        "CH004",
        "CH005",
        "CH006",
        "CH007"
      ],
      "post_ids": [
        "P009",
        "P045",
        "P055",
        "P066",
        "P093",
        "P099"
      ]
    },
    {
      "id": "JAAL-NET-003",
      "name": "Drug Supply Network – Supply Demo",
      "crime_type": "drugs",
      "priority_score": 61,
      "score_components": {
        "severity": 22,
        "channel_spread": 12,
        "repeat_frequency": 10,
        "recency": 10,
        "network_size": 7
      },
      "campaign_dna": {
        "shared_identifiers": [
          "supplydemo.03@fakebank",
          "9000004567",
          "@demo_supply_03"
        ],
        "language_patterns": [
          "maal available",
          "same day delivery",
          "discreet packaging",
          "fresh stock",
          "quality stuff"
        ],
        "posting_behaviour": "Emoji-coded language (🍃❄️💊) used consistently; handle reused across channels",
        "time_pattern": "Late night posts 23:00-01:00 IST, irregular daily cadence"
      },
      "next_actions": [
        "Flag to Narcotics Control Bureau regional office for awareness (suggestion only)",
        "Preserve posts with emoji metadata and timestamps as evidence",
        "Request Telegram public channel preservation for @demo_supply_03 activity",
        "Refer to district police narcotics cell for verification"
      ],
      "last_seen": "2026-11-20T17:39:22+05:30",
      "channels": [
        "CH002",
        "CH003",
        "CH004",
        "CH005",
        "CH006",
        "CH008"
      ],
      "post_ids": [
        "P022",
        "P042",
        "P059",
        "P061",
        "P070",
        "P077"
      ]
    },
    {
      "id": "JAAL-NET-004",
      "name": "Illegal Arms Listings – ArmsDeal Demo",
      "crime_type": "arms",
      "priority_score": 54,
      "score_components": {
        "severity": 20,
        "channel_spread": 10,
        "repeat_frequency": 8,
        "recency": 10,
        "network_size": 6
      },
      "campaign_dna": {
        "shared_identifiers": [
          "armsdeal.demo@fakebank",
          "9000007890",
          "@demo_arms_04"
        ],
        "language_patterns": [
          "no paper required",
          "no paperwork",
          "without licence",
          "country made",
          "katta available"
        ],
        "posting_behaviour": "Short terse posts, 'no documentation' phrase consistent; phone number in multiple disguises",
        "time_pattern": "Morning posts 08:00-11:00 IST, weekly cadence"
      },
      "next_actions": [
        "Escalate to district arms licensing authority for reference (suggestion only)",
        "Preserve posts and hash evidence for potential court presentation",
        "Request OSINT cross-reference on handle @demo_arms_04",
        "Refer immediately to district police weapons cell for verification"
      ],
      "last_seen": "2026-11-19T06:15:55+05:30",
      "channels": [
        "CH001",
        "CH003",
        "CH005",
        "CH007",
        "CH008"
      ],
      "post_ids": [
        "P021",
        "P028",
        "P082",
        "P083",
        "P094"
      ]
    },
    {
      "id": "JAAL-NET-005",
      "name": "ATM/SIM Kit Network – ATMKit Demo",
      "crime_type": "mule_account",
      "priority_score": 48,
      "score_components": {
        "severity": 16,
        "channel_spread": 10,
        "repeat_frequency": 8,
        "recency": 8,
        "network_size": 6
      },
      "campaign_dna": {
        "shared_identifiers": [
          "atmkit.demo@fakebank",
          "@demo_atm_05"
        ],
        "language_patterns": [
          "ATM kit",
          "SIM cards",
          "ATM card cloning kit",
          "SIM swap service",
          "ATM skimmer"
        ],
        "posting_behaviour": "Explicit ATM skimming and SIM swap vocabulary; handle @demo_atm_05 across 4 channels",
        "time_pattern": "Evening posts 19:00-22:00 IST, 3-4 day cadence"
      },
      "next_actions": [
        "Alert relevant payment gateway fraud team about UPI atmkit.demo@fakebank (suggestion only)",
        "Preserve all posts with timestamps for evidence chain",
        "Cross-reference handle @demo_atm_05 with known cyber fraud offender registry",
        "Refer to Rajasthan Cyber Crime Unit for ATM fraud verification"
      ],
      "last_seen": "2026-11-21T16:42:06+05:30",
      "channels": [
        "CH002",
        "CH004",
        "CH006",
        "CH007",
        "CH008"
      ],
      "post_ids": [
        "P023",
        "P030",
        "P050",
        "P095",
        "P096"
      ]
    }
  ],
  "nodes": [
    {
      "id": "N001",
      "network_id": "JAAL-NET-001",
      "type": "channel",
      "label": "city_deals_hub_demo",
      "bridge": false
    },
    {
      "id": "N002",
      "network_id": "JAAL-NET-001",
      "type": "channel",
      "label": "jaipur_connect_demo",
      "bridge": false
    },
    {
      "id": "N003",
      "network_id": "JAAL-NET-001",
      "type": "channel",
      "label": "raj_quicksale_demo",
      "bridge": false
    },
    {
      "id": "N004",
      "network_id": "JAAL-NET-001",
      "type": "channel",
      "label": "udaipur_traders_demo",
      "bridge": false
    },
    {
      "id": "N005",
      "network_id": "JAAL-NET-001",
      "type": "upi",
      "label": "rentacct.demo@fakebank",
      "bridge": true
    },
    {
      "id": "N006",
      "network_id": "JAAL-NET-001",
      "type": "phone",
      "label": "9000001234",
      "bridge": false
    },
    {
      "id": "N007",
      "network_id": "JAAL-NET-001",
      "type": "handle",
      "label": "@demo_seller_01",
      "bridge": false
    },
    {
      "id": "N008",
      "network_id": "JAAL-NET-001",
      "type": "text_cluster",
      "label": "account_rental_cluster",
      "bridge": false
    },
    {
      "id": "N009",
      "network_id": "JAAL-NET-001",
      "type": "text_cluster",
      "label": "kyc_solicitation_cluster",
      "bridge": false
    },
    {
      "id": "N010",
      "network_id": "JAAL-NET-002",
      "type": "channel",
      "label": "raj_quicksale_demo",
      "bridge": false
    },
    {
      "id": "N011",
      "network_id": "JAAL-NET-002",
      "type": "channel",
      "label": "bikaner_biz_demo",
      "bridge": false
    },
    {
      "id": "N012",
      "network_id": "JAAL-NET-002",
      "type": "upi",
      "label": "fakeid.demo@fakebank",
      "bridge": true
    },
    {
      "id": "N013",
      "network_id": "JAAL-NET-002",
      "type": "phone",
      "label": "9000056789",
      "bridge": false
    },
    {
      "id": "N014",
      "network_id": "JAAL-NET-002",
      "type": "handle",
      "label": "@demo_docs_02",
      "bridge": false
    },
    {
      "id": "N015",
      "network_id": "JAAL-NET-003",
      "type": "channel",
      "label": "jaipur_connect_demo",
      "bridge": false
    },
    {
      "id": "N016",
      "network_id": "JAAL-NET-003",
      "type": "channel",
      "label": "udaipur_traders_demo",
      "bridge": false
    },
    {
      "id": "N017",
      "network_id": "JAAL-NET-003",
      "type": "upi",
      "label": "supplydemo.03@fakebank",
      "bridge": true
    },
    {
      "id": "N018",
      "network_id": "JAAL-NET-003",
      "type": "phone",
      "label": "9000004567",
      "bridge": false
    },
    {
      "id": "N019",
      "network_id": "JAAL-NET-003",
      "type": "handle",
      "label": "@demo_supply_03",
      "bridge": false
    },
    {
      "id": "N020",
      "network_id": "JAAL-NET-004",
      "type": "channel",
      "label": "ajmer_marketplace_demo",
      "bridge": false
    },
    {
      "id": "N021",
      "network_id": "JAAL-NET-004",
      "type": "channel",
      "label": "bikaner_biz_demo",
      "bridge": false
    },
    {
      "id": "N022",
      "network_id": "JAAL-NET-004",
      "type": "upi",
      "label": "armsdeal.demo@fakebank",
      "bridge": true
    },
    {
      "id": "N023",
      "network_id": "JAAL-NET-004",
      "type": "phone",
      "label": "9000007890",
      "bridge": false
    },
    {
      "id": "N024",
      "network_id": "JAAL-NET-004",
      "type": "handle",
      "label": "@demo_arms_04",
      "bridge": false
    },
    {
      "id": "N025",
      "network_id": "JAAL-NET-005",
      "type": "channel",
      "label": "kota_deals_demo",
      "bridge": false
    },
    {
      "id": "N026",
      "network_id": "JAAL-NET-005",
      "type": "channel",
      "label": "jodhpur_connect_demo",
      "bridge": false
    },
    {
      "id": "N027",
      "network_id": "JAAL-NET-005",
      "type": "upi",
      "label": "atmkit.demo@fakebank",
      "bridge": true
    },
    {
      "id": "N028",
      "network_id": "JAAL-NET-005",
      "type": "handle",
      "label": "@demo_atm_05",
      "bridge": false
    },
    {
      "id": "N029",
      "network_id": "JAAL-NET-005",
      "type": "text_cluster",
      "label": "atm_sim_fraud_cluster",
      "bridge": false
    }
  ],
  "edges": [
    {
      "id": "E001",
      "network_id": "JAAL-NET-001",
      "source": "N001",
      "target": "N005",
      "relation": "shares_identifier",
      "confidence_breakdown": {
        "exact_shared_identifier": 40,
        "similar_text": 15,
        "repeat_posting": 15,
        "temporal_similarity": 10,
        "shared_channel_reference": 0
      },
      "confidence_score": 80,
      "confidence_label": "Strong",
      "evidence_post_ids": [
        "P007",
        "P031"
      ]
    },
    {
      "id": "E002",
      "network_id": "JAAL-NET-001",
      "source": "N002",
      "target": "N005",
      "relation": "shares_identifier",
      "confidence_breakdown": {
        "exact_shared_identifier": 40,
        "similar_text": 10,
        "repeat_posting": 15,
        "temporal_similarity": 10,
        "shared_channel_reference": 0
      },
      "confidence_score": 75,
      "confidence_label": "Strong",
      "evidence_post_ids": [
        "P007",
        "P031"
      ]
    },
    {
      "id": "E003",
      "network_id": "JAAL-NET-001",
      "source": "N003",
      "target": "N005",
      "relation": "shares_identifier",
      "confidence_breakdown": {
        "exact_shared_identifier": 40,
        "similar_text": 15,
        "repeat_posting": 10,
        "temporal_similarity": 10,
        "shared_channel_reference": 0
      },
      "confidence_score": 75,
      "confidence_label": "Strong",
      "evidence_post_ids": [
        "P007",
        "P031"
      ]
    },
    {
      "id": "E004",
      "network_id": "JAAL-NET-001",
      "source": "N004",
      "target": "N005",
      "relation": "shares_identifier",
      "confidence_breakdown": {
        "exact_shared_identifier": 40,
        "similar_text": 15,
        "repeat_posting": 10,
        "temporal_similarity": 10,
        "shared_channel_reference": 0
      },
      "confidence_score": 75,
      "confidence_label": "Strong",
      "evidence_post_ids": [
        "P007"
      ]
    },
    {
      "id": "E005",
      "network_id": "JAAL-NET-001",
      "source": "N001",
      "target": "N007",
      "relation": "shares_identifier",
      "confidence_breakdown": {
        "exact_shared_identifier": 35,
        "similar_text": 20,
        "repeat_posting": 10,
        "temporal_similarity": 10,
        "shared_channel_reference": 5
      },
      "confidence_score": 80,
      "confidence_label": "Strong",
      "evidence_post_ids": [
        "P053",
        "P063"
      ]
    },
    {
      "id": "E006",
      "network_id": "JAAL-NET-001",
      "source": "N003",
      "target": "N007",
      "relation": "shares_identifier",
      "confidence_breakdown": {
        "exact_shared_identifier": 35,
        "similar_text": 20,
        "repeat_posting": 10,
        "temporal_similarity": 10,
        "shared_channel_reference": 0
      },
      "confidence_score": 75,
      "confidence_label": "Strong",
      "evidence_post_ids": [
        "P053",
        "P063"
      ]
    },
    {
      "id": "E007",
      "network_id": "JAAL-NET-001",
      "source": "N001",
      "target": "N006",
      "relation": "shares_identifier",
      "confidence_breakdown": {
        "exact_shared_identifier": 30,
        "similar_text": 10,
        "repeat_posting": 10,
        "temporal_similarity": 10,
        "shared_channel_reference": 0
      },
      "confidence_score": 60,
      "confidence_label": "Possible",
      "evidence_post_ids": [
        "P012",
        "P062"
      ]
    },
    {
      "id": "E008",
      "network_id": "JAAL-NET-001",
      "source": "N002",
      "target": "N006",
      "relation": "shares_identifier",
      "confidence_breakdown": {
        "exact_shared_identifier": 30,
        "similar_text": 10,
        "repeat_posting": 5,
        "temporal_similarity": 10,
        "shared_channel_reference": 0
      },
      "confidence_score": 55,
      "confidence_label": "Possible",
      "evidence_post_ids": [
        "P012"
      ]
    },
    {
      "id": "E009",
      "network_id": "JAAL-NET-001",
      "source": "N001",
      "target": "N008",
      "relation": "similar_text",
      "confidence_breakdown": {
        "exact_shared_identifier": 0,
        "similar_text": 20,
        "repeat_posting": 15,
        "temporal_similarity": 10,
        "shared_channel_reference": 5
      },
      "confidence_score": 50,
      "confidence_label": "Possible",
      "evidence_post_ids": [
        "P004",
        "P007",
        "P012"
      ]
    },
    {
      "id": "E010",
      "network_id": "JAAL-NET-001",
      "source": "N009",
      "target": "N005",
      "relation": "similar_text",
      "confidence_breakdown": {
        "exact_shared_identifier": 20,
        "similar_text": 15,
        "repeat_posting": 5,
        "temporal_similarity": 5,
        "shared_channel_reference": 0
      },
      "confidence_score": 45,
      "confidence_label": "Weak",
      "evidence_post_ids": [
        "P004",
        "P007"
      ]
    },
    {
      "id": "E011",
      "network_id": "JAAL-NET-001",
      "source": "N008",
      "target": "N009",
      "relation": "similar_text",
      "confidence_breakdown": {
        "exact_shared_identifier": 0,
        "similar_text": 20,
        "repeat_posting": 5,
        "temporal_similarity": 5,
        "shared_channel_reference": 0
      },
      "confidence_score": 30,
      "confidence_label": "Weak",
      "evidence_post_ids": [
        "P004",
        "P007"
      ]
    },
    {
      "id": "E012",
      "network_id": "JAAL-NET-002",
      "source": "N010",
      "target": "N012",
      "relation": "shares_identifier",
      "confidence_breakdown": {
        "exact_shared_identifier": 40,
        "similar_text": 15,
        "repeat_posting": 10,
        "temporal_similarity": 10,
        "shared_channel_reference": 0
      },
      "confidence_score": 75,
      "confidence_label": "Strong",
      "evidence_post_ids": [
        "P009",
        "P045"
      ]
    },
    {
      "id": "E013",
      "network_id": "JAAL-NET-002",
      "source": "N011",
      "target": "N012",
      "relation": "shares_identifier",
      "confidence_breakdown": {
        "exact_shared_identifier": 40,
        "similar_text": 10,
        "repeat_posting": 10,
        "temporal_similarity": 10,
        "shared_channel_reference": 0
      },
      "confidence_score": 70,
      "confidence_label": "Possible",
      "evidence_post_ids": [
        "P009",
        "P045"
      ]
    },
    {
      "id": "E014",
      "network_id": "JAAL-NET-002",
      "source": "N010",
      "target": "N014",
      "relation": "shares_identifier",
      "confidence_breakdown": {
        "exact_shared_identifier": 35,
        "similar_text": 20,
        "repeat_posting": 10,
        "temporal_similarity": 10,
        "shared_channel_reference": 0
      },
      "confidence_score": 75,
      "confidence_label": "Strong",
      "evidence_post_ids": [
        "P009",
        "P045",
        "P055"
      ]
    },
    {
      "id": "E015",
      "network_id": "JAAL-NET-002",
      "source": "N011",
      "target": "N013",
      "relation": "shares_identifier",
      "confidence_breakdown": {
        "exact_shared_identifier": 30,
        "similar_text": 10,
        "repeat_posting": 10,
        "temporal_similarity": 5,
        "shared_channel_reference": 0
      },
      "confidence_score": 55,
      "confidence_label": "Possible",
      "evidence_post_ids": [
        "P009"
      ]
    },
    {
      "id": "E016",
      "network_id": "JAAL-NET-002",
      "source": "N012",
      "target": "N014",
      "relation": "co_posting",
      "confidence_breakdown": {
        "exact_shared_identifier": 20,
        "similar_text": 15,
        "repeat_posting": 10,
        "temporal_similarity": 5,
        "shared_channel_reference": 0
      },
      "confidence_score": 50,
      "confidence_label": "Possible",
      "evidence_post_ids": [
        "P009",
        "P045"
      ]
    },
    {
      "id": "E017",
      "network_id": "JAAL-NET-003",
      "source": "N015",
      "target": "N017",
      "relation": "shares_identifier",
      "confidence_breakdown": {
        "exact_shared_identifier": 40,
        "similar_text": 15,
        "repeat_posting": 10,
        "temporal_similarity": 5,
        "shared_channel_reference": 0
      },
      "confidence_score": 70,
      "confidence_label": "Possible",
      "evidence_post_ids": [
        "P022",
        "P042"
      ]
    },
    {
      "id": "E018",
      "network_id": "JAAL-NET-003",
      "source": "N016",
      "target": "N017",
      "relation": "shares_identifier",
      "confidence_breakdown": {
        "exact_shared_identifier": 40,
        "similar_text": 10,
        "repeat_posting": 10,
        "temporal_similarity": 5,
        "shared_channel_reference": 0
      },
      "confidence_score": 65,
      "confidence_label": "Possible",
      "evidence_post_ids": [
        "P022",
        "P042"
      ]
    },
    {
      "id": "E019",
      "network_id": "JAAL-NET-003",
      "source": "N015",
      "target": "N019",
      "relation": "shares_identifier",
      "confidence_breakdown": {
        "exact_shared_identifier": 35,
        "similar_text": 20,
        "repeat_posting": 10,
        "temporal_similarity": 5,
        "shared_channel_reference": 0
      },
      "confidence_score": 70,
      "confidence_label": "Possible",
      "evidence_post_ids": [
        "P022",
        "P042",
        "P059"
      ]
    },
    {
      "id": "E020",
      "network_id": "JAAL-NET-003",
      "source": "N018",
      "target": "N019",
      "relation": "co_posting",
      "confidence_breakdown": {
        "exact_shared_identifier": 20,
        "similar_text": 15,
        "repeat_posting": 10,
        "temporal_similarity": 5,
        "shared_channel_reference": 0
      },
      "confidence_score": 50,
      "confidence_label": "Possible",
      "evidence_post_ids": [
        "P022"
      ]
    },
    {
      "id": "E021",
      "network_id": "JAAL-NET-003",
      "source": "N016",
      "target": "N018",
      "relation": "shares_identifier",
      "confidence_breakdown": {
        "exact_shared_identifier": 20,
        "similar_text": 10,
        "repeat_posting": 5,
        "temporal_similarity": 5,
        "shared_channel_reference": 0
      },
      "confidence_score": 40,
      "confidence_label": "Weak",
      "evidence_post_ids": [
        "P022"
      ]
    },
    {
      "id": "E022",
      "network_id": "JAAL-NET-004",
      "source": "N020",
      "target": "N022",
      "relation": "shares_identifier",
      "confidence_breakdown": {
        "exact_shared_identifier": 40,
        "similar_text": 15,
        "repeat_posting": 10,
        "temporal_similarity": 5,
        "shared_channel_reference": 0
      },
      "confidence_score": 70,
      "confidence_label": "Possible",
      "evidence_post_ids": [
        "P021",
        "P028"
      ]
    },
    {
      "id": "E023",
      "network_id": "JAAL-NET-004",
      "source": "N021",
      "target": "N023",
      "relation": "shares_identifier",
      "confidence_breakdown": {
        "exact_shared_identifier": 35,
        "similar_text": 10,
        "repeat_posting": 10,
        "temporal_similarity": 5,
        "shared_channel_reference": 0
      },
      "confidence_score": 60,
      "confidence_label": "Possible",
      "evidence_post_ids": [
        "P021",
        "P028"
      ]
    },
    {
      "id": "E024",
      "network_id": "JAAL-NET-004",
      "source": "N020",
      "target": "N024",
      "relation": "shares_identifier",
      "confidence_breakdown": {
        "exact_shared_identifier": 35,
        "similar_text": 20,
        "repeat_posting": 10,
        "temporal_similarity": 5,
        "shared_channel_reference": 0
      },
      "confidence_score": 70,
      "confidence_label": "Possible",
      "evidence_post_ids": [
        "P021",
        "P028",
        "P082"
      ]
    },
    {
      "id": "E025",
      "network_id": "JAAL-NET-004",
      "source": "N021",
      "target": "N022",
      "relation": "shares_identifier",
      "confidence_breakdown": {
        "exact_shared_identifier": 20,
        "similar_text": 10,
        "repeat_posting": 10,
        "temporal_similarity": 5,
        "shared_channel_reference": 0
      },
      "confidence_score": 45,
      "confidence_label": "Weak",
      "evidence_post_ids": [
        "P021"
      ]
    },
    {
      "id": "E026",
      "network_id": "JAAL-NET-004",
      "source": "N022",
      "target": "N024",
      "relation": "co_posting",
      "confidence_breakdown": {
        "exact_shared_identifier": 20,
        "similar_text": 10,
        "repeat_posting": 5,
        "temporal_similarity": 5,
        "shared_channel_reference": 0
      },
      "confidence_score": 40,
      "confidence_label": "Weak",
      "evidence_post_ids": [
        "P021"
      ]
    },
    {
      "id": "E027",
      "network_id": "JAAL-NET-005",
      "source": "N025",
      "target": "N027",
      "relation": "shares_identifier",
      "confidence_breakdown": {
        "exact_shared_identifier": 40,
        "similar_text": 15,
        "repeat_posting": 10,
        "temporal_similarity": 5,
        "shared_channel_reference": 0
      },
      "confidence_score": 70,
      "confidence_label": "Possible",
      "evidence_post_ids": [
        "P023",
        "P030"
      ]
    },
    {
      "id": "E028",
      "network_id": "JAAL-NET-005",
      "source": "N026",
      "target": "N028",
      "relation": "shares_identifier",
      "confidence_breakdown": {
        "exact_shared_identifier": 35,
        "similar_text": 20,
        "repeat_posting": 10,
        "temporal_similarity": 5,
        "shared_channel_reference": 0
      },
      "confidence_score": 70,
      "confidence_label": "Possible",
      "evidence_post_ids": [
        "P023",
        "P030",
        "P050"
      ]
    },
    {
      "id": "E029",
      "network_id": "JAAL-NET-005",
      "source": "N025",
      "target": "N028",
      "relation": "co_posting",
      "confidence_breakdown": {
        "exact_shared_identifier": 20,
        "similar_text": 15,
        "repeat_posting": 10,
        "temporal_similarity": 5,
        "shared_channel_reference": 0
      },
      "confidence_score": 50,
      "confidence_label": "Possible",
      "evidence_post_ids": [
        "P023",
        "P030"
      ]
    },
    {
      "id": "E030",
      "network_id": "JAAL-NET-005",
      "source": "N027",
      "target": "N029",
      "relation": "similar_text",
      "confidence_breakdown": {
        "exact_shared_identifier": 20,
        "similar_text": 20,
        "repeat_posting": 5,
        "temporal_similarity": 5,
        "shared_channel_reference": 0
      },
      "confidence_score": 50,
      "confidence_label": "Possible",
      "evidence_post_ids": [
        "P023",
        "P030"
      ]
    },
    {
      "id": "E031",
      "network_id": "JAAL-NET-005",
      "source": "N026",
      "target": "N029",
      "relation": "similar_text",
      "confidence_breakdown": {
        "exact_shared_identifier": 15,
        "similar_text": 15,
        "repeat_posting": 5,
        "temporal_similarity": 5,
        "shared_channel_reference": 0
      },
      "confidence_score": 40,
      "confidence_label": "Weak",
      "evidence_post_ids": [
        "P023"
      ]
    }
  ]
};
