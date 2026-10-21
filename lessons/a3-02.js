// DRAFT lesson (v2, unit 3) written from Tom's Access Training PDFs and the IET A4:2026 forms. Waiting for Checker + Tom's approval.
window.LESSONS = window.LESSONS || [];
window.LESSONS.push({
 "id": "a3-02",
 "topic": "live-tests",
 "title": "Prospective fault current (Ipf)",
 "awards": [
  "L2 Fundamental",
  "L3 Initial Verification",
  "L3 Periodic"
 ],
 "status": "draft",
 "unconfirmed": false,
 "note": "The three-phase rule (highest PSCC × 2) is from the course slides; the A4 form only says record the greater of PSCC and PEFC, and doesn't say how to do three-phase. Ask your tutor if the assessor expects anything different.",
 "sources": [
  {
   "file": "99.pdf (EAL Initial Verification slides)",
   "ref": "pages given on each question"
  },
  {
   "file": "EIC form (IET BS 7671:2018+A4:2026)",
   "ref": "pages given on each question"
  }
 ],
 "checker": {
  "by": "Claude Checker",
  "date": "2026-10-12",
  "verdict": "pass",
  "notes": "All readings and sums check out against the slides and the A4 form notes. The three-phase 'highest PSCC doubled' rule is from the slides only, and the lesson says so."
 },
 "approved": null,
 "intro": {
  "what": "Prospective fault current (Ipf) is the biggest current that could flow if a fault happened at the origin. You measure two: PSCC (short circuit, line to neutral) and PEFC (earth fault, line to earth).",
  "why": "Every breaker and fuse has a breaking capacity: the biggest fault current it can safely switch off. If Ipf is bigger, the device could fail dangerously when it tries to clear a fault.",
  "how": [
   "Do it after Ze, with the earthing conductor back on the MET",
   "PSCC: test line to neutral at the supply terminals",
   "PEFC: test line to the main earthing conductor, all protective conductors connected",
   "Single-phase: record the bigger of the two",
   "Three-phase: PSCC on each line, take the highest and double it",
   "Check Ipf is below the kA rating on the breakers",
   "Write Ipf in kA in Section F (and the Ipf box on the test results sheet)"
  ],
  "where": "At the origin, on the supply terminals of the board. On the EIC: Section F 'Prospective fault current, Ipf' in kA, plus the Ipf box at the top of the Schedule of Test Results.",
  "reason": "The number only means something next to the breaker label: 6000 in a box means the breaker can break 6 kA. Ipf must be lower than that.",
  "numbers": [
   "Single-phase: record the higher of PSCC and PEFC",
   "Three-phase: highest PSCC × 2",
   "Ipf must be below breaking capacity (6000 in a box = 6 kA)",
   "Ipf ≈ 230 ÷ Ze",
   "1000 A = 1 kA"
  ]
 },
 "questions": [
  {
   "type": "match",
   "q": "Match the measurement to where your leads go.",
   "pairs": [
    [
     "PSCC",
     "Line and neutral"
    ],
    [
     "PEFC",
     "Line and main earthing conductor"
    ]
   ],
   "why": "Short circuit is line to neutral; earth fault is line to earth.",
   "src": "99.pdf (EAL Initial Verification slides) p140-141; 99.pdf (EAL Initial Verification slides) p143",
   "explain": {
    "what": "PSCC is prospective short-circuit current; PEFC is prospective earth fault current.",
    "why": "A short circuit is between line and neutral, so PSCC is tested there. An earth fault is line to earth, so PEFC is tested between line and the main earthing conductor.",
    "how": "At the supply terminals, do line-neutral, then line-earth, and note both readings.",
    "where": "Supply terminals at the origin (99.pdf slides p140-143)"
   }
  },
  {
   "type": "fill",
   "q": "Record Ipf = ___ kA",
   "answers": [
    "1.2",
    "1.2kA"
   ],
   "why": "Single-phase: record the bigger of PSCC and PEFC.",
   "src": "99.pdf (EAL Initial Verification slides) p140; EIC form (IET BS 7671:2018+A4:2026) p6",
   "scene": "Single-phase origin. PSCC = 1.2 kA, PEFC = 0.9 kA.",
   "explain": {
    "what": "Ipf is the worst-case fault current at the origin.",
    "why": "1.2 kA is bigger than 0.9 kA, so 1.2 kA goes on the form. You don't add them, and you only double on three-phase.",
    "how": "Measure both, circle the bigger, write it in kA.",
    "where": "EIC page 3, Section F (99.pdf slides p140; EIC notes page 6, note 6)"
   }
  },
  {
   "type": "choice",
   "q": "Why do you record the bigger value, not the smaller?",
   "options": [
    "It's the worst case a device may have to break",
    "The smaller one is always a tester error",
    "The form only has room for PSCC",
    "The bigger one is always the PEFC"
   ],
   "answer": 0,
   "why": "The devices must be able to break the worst fault that could happen.",
   "src": "99.pdf (EAL Initial Verification slides) p143; EIC form (IET BS 7671:2018+A4:2026) p6",
   "explain": {
    "what": "The A4 form's own notes say Ipf is the greater of the short-circuit and earth fault values.",
    "why": "You're checking the breakers can cope with the worst fault, so you use the biggest current. Either PSCC or PEFC can be the bigger one, so don't assume.",
    "how": "Compare the two readings every time and record whichever is higher.",
    "where": "EIC notes page 6, note 6 (99.pdf slides p143)"
   }
  },
  {
   "type": "fill",
   "q": "Record Ipf = ___ kA",
   "answers": [
    "4.8",
    "4.8kA"
   ],
   "why": "Highest PSCC (2.4 kA) doubled = 4.8 kA.",
   "src": "99.pdf (EAL Initial Verification slides) p141; 99.pdf (EAL Initial Verification slides) p143",
   "scene": "Three-phase board. PSCC: L1-N 2.1 kA, L2-N 2.4 kA, L3-N 2.2 kA.",
   "explain": {
    "what": "On three-phase the slide rule is: record each PSCC and double the highest.",
    "why": "The highest is 2.4 kA, and 2.4 × 2 = 4.8 kA. Doubling the lowest or the average would understate the worst case.",
    "how": "Circle the biggest of the three readings, then × 2.",
    "where": "Three-phase origin (99.pdf slides p141 and p143)"
   }
  },
  {
   "type": "choice",
   "q": "What should go on the form?",
   "options": [
    "4.4 kA: highest PSCC doubled",
    "2.1 kA: the average is fine",
    "2.2 kA: just the highest one",
    "6.3 kA: all three added"
   ],
   "answer": 0,
   "why": "Take the highest (2.2 kA) and double it.",
   "src": "99.pdf (EAL Initial Verification slides) p143",
   "scene": "Three-phase board. You measured L1-N 2.0 kA, L2-N 2.2 kA, L3-N 2.1 kA. A colleague writes down 2.1 kA, the average.",
   "explain": {
    "what": "The three-phase rule is highest PSCC × 2, not an average.",
    "why": "2.2 × 2 = 4.4 kA. The average (2.1) understates it, and adding all three isn't the rule on the slide.",
    "how": "Highest, then double: say it to yourself before you write anything down.",
    "where": "Three-phase origin (99.pdf slides p143)"
   }
  },
  {
   "type": "choice",
   "q": "Is the fault current OK for these breakers?",
   "options": [
    "Yes: 4.8 kA is below 6 kA",
    "No: Ipf must be over 6 kA",
    "No: Ipf must be under 4 kA",
    "Only if Ze is under 0.35 Ω"
   ],
   "answer": 0,
   "why": "Ipf must be less than the breaking capacity; 4.8 kA is less than 6 kA.",
   "src": "99.pdf (EAL Initial Verification slides) p143; 99.pdf (EAL Initial Verification slides) p150",
   "scene": "Your recorded Ipf is 4.8 kA. The breakers have 6000 in a box on the front.",
   "explain": {
    "what": "6000 in a box on a BS EN 60898 breaker means a breaking capacity of 6 kA.",
    "why": "Ipf must be lower than the breaking capacity, and 4.8 kA < 6 kA. 'Must be over' has the rule backwards.",
    "how": "Compare Ipf with the lowest kA rating of any device on the board.",
    "where": "Breaker label on the board (99.pdf slides p143 and p150)"
   }
  },
  {
   "type": "choice",
   "q": "What does this tell you?",
   "options": [
    "The breakers can't safely break the worst fault",
    "Fine: a bigger Ipf just makes them trip faster",
    "Fine: Ipf only matters for RCDs",
    "Halve it: three-phase readings are doubled"
   ],
   "answer": 0,
   "why": "7.2 kA is more than the 6 kA the breakers can break.",
   "src": "99.pdf (EAL Initial Verification slides) p143; 99.pdf (EAL Initial Verification slides) p150",
   "scene": "Ipf works out at 7.2 kA. The breakers are marked 6000 in a box.",
   "explain": {
    "what": "Breaking capacity is the most fault current a device can interrupt safely.",
    "why": "Ipf must be below the breaking capacity. At 7.2 kA a 6 kA breaker could fail dangerously trying to clear a fault. You never halve a reading to make it fit.",
    "how": "Don't pass it: record the real Ipf and raise it, because the devices aren't suitable for that fault level.",
    "where": "Breaker label vs Section F (99.pdf slides p143 and p150)"
   }
  },
  {
   "type": "match",
   "q": "Match the breaker rating to what it means.",
   "pairs": [
    [
     "Icn",
     "Max fault it can break, but may be damaged after"
    ],
    [
     "Ics",
     "Max fault it can break and stay in service"
    ]
   ],
   "why": "Icn: it survives once. Ics: it carries on working as normal.",
   "src": "99.pdf (EAL Initial Verification slides) p151",
   "explain": {
    "what": "Icn and Ics are two breaking capacity ratings on a breaker.",
    "why": "Icn is the most it can interrupt safely, though it may not be usable afterwards. Ics is the most it can interrupt without losing performance.",
    "how": "Remember 'S for service': Ics means it stays in service.",
    "where": "Breaker label (99.pdf slides p151)"
   }
  },
  {
   "type": "choice",
   "q": "For PEFC, what state is the earthing conductor in?",
   "options": [
    "Back on the MET, everything connected",
    "Still off the MET from the Ze test",
    "Off, with the bonding removed too",
    "Connected to neutral at the MET"
   ],
   "answer": 0,
   "why": "PEFC is tested with all protective conductors connected.",
   "src": "99.pdf (EAL Initial Verification slides) p143; 99.pdf (EAL Initial Verification slides) p138",
   "explain": {
    "what": "PEFC is the earth fault current your installation would actually see.",
    "why": "Unlike Ze, PEFC is measured with everything connected, so the earthing conductor must be back on the MET. Leaving it off is the Ze method, which is why it's tempting.",
    "how": "Reconnect after Ze, check it's tight, then do PSCC and PEFC.",
    "where": "MET and supply terminals (99.pdf slides p138 and p143)"
   }
  },
  {
   "type": "fill",
   "q": "Ipf ≈ 230 ÷ 0.23 = ___ A",
   "answers": [
    "1000",
    "1000a"
   ],
   "why": "Ohm's law: I = V ÷ Z. 230 ÷ 0.23 = 1000 A, which is 1 kA.",
   "src": "99.pdf (EAL Initial Verification slides) p152",
   "scene": "Ze measured at 0.23 Ω on a 230 V supply.",
   "explain": {
    "what": "You can estimate the fault current from Ze with Ohm's law.",
    "why": "230 ÷ 0.23 = 1000 A = 1 kA. If you multiply instead of divide you get a tiny number, which is the giveaway.",
    "how": "Use it as a sense check against your PEFC reading.",
    "where": "Origin (99.pdf slides p152)"
   }
  },
  {
   "type": "choice",
   "q": "A lower Ze gives…",
   "options": [
    "A bigger fault current",
    "A smaller fault current",
    "No change in fault current",
    "A slower disconnection"
   ],
   "answer": 0,
   "why": "Low impedance lets more current flow, so the device trips faster.",
   "src": "99.pdf (EAL Initial Verification slides) p152; 99.pdf (EAL Initial Verification slides) p144",
   "explain": {
    "what": "Ipf = Uo ÷ Ze: the smaller the impedance, the bigger the current.",
    "why": "The slides say a low impedance allows a high fault current, so disconnection is achieved. A slower disconnection is what happens with a high impedance.",
    "how": "Low Ze, low Zs: big current, fast trip. High: small current, slow trip.",
    "where": "Origin and circuits (99.pdf slides p144 and p152)"
   }
  },
  {
   "type": "fill",
   "q": "PSCC reads 1450 A. In kA that's ___",
   "answers": [
    "1.45",
    "1.45ka"
   ],
   "why": "Divide by 1000: 1450 A = 1.45 kA.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p3",
   "explain": {
    "what": "Some testers show amps; the form asks for kA.",
    "why": "1450 ÷ 1000 = 1.45 kA. Writing 1450 in a kA box would look like 1450 kA.",
    "how": "Move the decimal point three places left before you write it in Section F.",
    "where": "EIC page 3, Section F, 'Prospective fault current, Ipf … kA'"
   },
   "form": {
    "doc": "EIC",
    "page": 3,
    "where": "Section F: Supply characteristics and earthing arrangements",
    "box": "Prospective fault current, Ipf (kA)"
   }
  },
  {
   "type": "choice",
   "q": "Where does Ipf go on the EIC?",
   "options": [
    "Section F, in kA",
    "Column 27, in ohms",
    "Column 28, in ms",
    "Section F, in ohms"
   ],
   "answer": 0,
   "why": "Section F, 'Prospective fault current, Ipf', in kA; the board's Ipf also goes on the test results sheet.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p3; EIC form (IET BS 7671:2018+A4:2026) p5",
   "explain": {
    "what": "Ipf is a supply characteristic, so it goes with Ze in Section F.",
    "why": "Section F has the Ipf box in kA. Column 27 is Zs in ohms and column 28 is the RCD time in ms. There's also an Ipf box at the top of the Schedule of Test Results for each board.",
    "how": "Fill Section F and the board's Ipf box at the same time so they match.",
    "where": "EIC page 3, Section F; test results page 5, board details"
   },
   "form": {
    "doc": "EIC",
    "page": 3,
    "where": "Section F: Supply characteristics and earthing arrangements",
    "box": "Prospective fault current, Ipf"
   }
  },
  {
   "type": "order",
   "q": "Put the live tests in order.",
   "steps": [
    "Supply polarity",
    "Loop impedance (Ze, Zs)",
    "Earth fault and short-circuit current",
    "RCD and other functional tests"
   ],
   "why": "CRIPPLER: P-L-E-R after the dead tests.",
   "src": "99.pdf (EAL Initial Verification slides) p80",
   "scene": "Dead tests are done and passed. Supply on.",
   "explain": {
    "what": "CRIPPLER is the course's memory word for the test order.",
    "why": "After the dead tests come supply polarity, loop impedances, earth fault and short-circuit currents, then RCD and functional tests. Polarity is first so later readings are on a correctly connected supply.",
    "how": "Say the last four letters, P-L-E-R, as you work through the live tests.",
    "where": "Whole board (99.pdf slides p80)"
   }
  }
 ]
});
