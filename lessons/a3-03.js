// DRAFT lesson (v2, unit 3) written from Tom's Access Training PDFs and the IET A4:2026 forms. Waiting for Checker + Tom's approval.
window.LESSONS = window.LESSONS || [];
window.LESSONS.push({
 "id": "a3-03",
 "topic": "breakers",
 "title": "Zs and reading breaker labels",
 "awards": [
  "L2 Fundamental",
  "L3 Initial Verification",
  "L3 Periodic"
 ],
 "status": "draft",
 "unconfirmed": true,
 "note": "The max Zs figures (B20 2.19 Ω, B32 1.37 Ω) are worked out with the method on the BS 7671 A2 course slides (33.pdf), not read from an A4:2026 table; the 1.1 Ω cold limit for a B32 is on 49.pdf p66. The course files don't give the trip currents or max Zs for Type C and D breakers (the tables are images), so this lesson only says a Type C needs a bigger current than a Type B and so has a lower max Zs. Get the exact C and D values from your tutor or the A4 tables before the day.",
 "sources": [
  {
   "file": "33.pdf (BS 7671 18th Edition A2 course)",
   "ref": "pages given on each question"
  },
  {
   "file": "49.pdf (EAL Condition Reporting slides)",
   "ref": "pages given on each question"
  },
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
  "verdict": "unconfirmed",
  "notes": "The B20 and B32 max Zs figures and the 1.1 Ω cold limit recompute correctly from the course method. Type C and D figures aren't in your course files, so get those from your tutor or the A4 tables."
 },
 "approved": null,
 "intro": {
  "what": "Zs is the whole earth fault loop for one circuit: Ze (the supply part) plus R1+R2 (the circuit's line and CPC). You measure it at the furthest point and compare it with the maximum Zs for the breaker protecting the circuit.",
  "why": "If Zs is too high, not enough fault current flows to trip the breaker in time, so a fault could leave metal live. Low Zs means a big fault current and a fast trip.",
  "how": [
   "Read the breaker label: type letter, rating in amps, kA in a box",
   "Find the maximum Zs for that breaker (column 12)",
   "Multiply it by 0.8, because you test with the cable cold",
   "Measure Zs at the furthest point; check it's close to Ze + (R1+R2)",
   "Measured Zs must be below the 0.8 figure",
   "Record the highest Zs in column 27"
  ],
  "where": "Breaker labels on the board; Zs at the furthest socket or light. Circuit details columns 8-12 (standard, type, rating, kA, max Zs) and test results column 27 (maximum measured Zs).",
  "reason": "The maximum Zs is for a hot cable (70 °C); you test cold, so compare with 80% of it. B32: max 1.37 Ω, so measured must be under about 1.1 Ω.",
  "numbers": [
   "Zs = Ze + (R1+R2)",
   "Max Zs = 230 × 0.95 ÷ current to trip",
   "Measured Zs < max Zs × 0.8",
   "B20: max 2.19 Ω (needs 100 A)",
   "B32: max 1.37 Ω (needs 160 A), about 1.1 Ω measured",
   "6000 in a box = 6 kA"
  ]
 },
 "questions": [
  {
   "type": "match",
   "q": "Match each part of the label to what it tells you.",
   "pairs": [
    [
     "B",
     "Type: how much fault current trips it instantly"
    ],
    [
     "32",
     "Rating: the current it carries normally (A)"
    ],
    [
     "6000 in a box",
     "Breaking capacity: 6 kA"
    ],
    [
     "BS EN 60898",
     "The standard it's made to"
    ]
   ],
   "why": "Type, rating, breaking capacity and standard each go in their own column of the circuit details.",
   "src": "33.pdf (BS 7671 18th Edition A2 course) p54; 99.pdf (EAL Initial Verification slides) p150; EIC form (IET BS 7671:2018+A4:2026) p4",
   "scene": "A breaker label reads: B32, 6000 in a box, BS EN 60898.",
   "explain": {
    "what": "A breaker label carries everything you need for columns 8-11 of the circuit details.",
    "why": "B32 means a 32 A Type B breaker. The boxed 6000 is its breaking capacity (6 kA). BS EN 60898 is the standard for circuit breakers.",
    "how": "Read the label and fill columns 8 (BS EN), 9 (type), 10 (rating) and 11 (kA) straight from it.",
    "where": "Breaker on the board; EIC page 4, columns 8-11 (33.pdf p54; 99.pdf slides p150)"
   },
   "form": {
    "doc": "EIC",
    "page": 4,
    "where": "Schedule of Circuit Details: Overcurrent protective device",
    "box": "Columns 8 to 11"
   }
  },
  {
   "type": "choice",
   "q": "What does the type letter on a breaker tell you, in plain English?",
   "options": [
    "How big a fault current makes it trip instantly",
    "The size of cable it is allowed to protect",
    "How many circuits it can supply",
    "Whether it has RCD protection built in"
   ],
   "answer": 0,
   "why": "The type sets when the magnetic part trips: a B32 needs 160 A to disconnect in time.",
   "src": "33.pdf (BS 7671 18th Edition A2 course) p57; 33.pdf (BS 7671 18th Edition A2 course) p54",
   "explain": {
    "what": "A breaker has a thermal part for overloads and a magnetic part that trips in under 0.1 s once the current passes a certain value.",
    "why": "The type letter sets that value. For a B32 the course shows 160 A to disconnect in time. Cable size and RCD protection are separate things.",
    "how": "Read the letter before you look up max Zs: the same rating with a different letter has a different max Zs.",
    "where": "Breaker label (33.pdf p54 and p57)"
   }
  },
  {
   "type": "choice",
   "q": "Can you use the B32 maximum Zs (1.37 Ω) for it?",
   "options": [
    "No: a different type needs a different max Zs",
    "Yes: only the 32 A rating matters for max Zs",
    "Yes: the 0.8 rule covers the difference",
    "No: Type C breakers don't have a max Zs"
   ],
   "answer": 0,
   "why": "Max Zs = 230 × 0.95 ÷ the current that trips it, and that current depends on the type.",
   "src": "33.pdf (BS 7671 18th Edition A2 course) p48; 33.pdf (BS 7671 18th Edition A2 course) p55",
   "scene": "The label on a socket circuit reads C32, not B32.",
   "explain": {
    "what": "Max Zs comes from the current needed to trip the device in time (Ia).",
    "why": "Max Zs is 230 × 0.95 divided by the trip current, and the type letter changes the trip current. Working it through (general knowledge, the C and D figures aren't on your slides): a Type C needs a bigger current than a Type B of the same rating to trip instantly, and dividing by a bigger current gives a lower max Zs. The 0.8 rule is for temperature, not for type.",
    "how": "Look up the max Zs for the exact type and rating on the label, and write that in column 12.",
    "where": "Breaker label; EIC page 4, column 12 (33.pdf p48 and p55)"
   }
  },
  {
   "type": "fill",
   "q": "Max Zs = 230 × 0.95 ÷ 100 = ___ Ω",
   "answers": [
    "2.19",
    "2.185"
   ],
   "why": "230 × 0.95 = 218.5, ÷ 100 = 2.185, about 2.19 Ω.",
   "src": "33.pdf (BS 7671 18th Edition A2 course) p48-50",
   "scene": "Radial on a B20 breaker. A B20 needs 100 A to disconnect in time.",
   "explain": {
    "what": "This is the course's worked example for a B20 breaker.",
    "why": "218.5 ÷ 100 = 2.185 Ω, which rounds to 2.19 Ω. The 0.95 allows for the supply voltage being 5% low.",
    "how": "Multiply 230 by 0.95 first, then divide by the current needed to trip.",
    "where": "33.pdf p48-50 (worked example)"
   }
  },
  {
   "type": "fill",
   "q": "Max Zs = 230 × 0.95 ÷ 160 = ___ Ω",
   "answers": [
    "1.37",
    "1.366"
   ],
   "why": "218.5 ÷ 160 = 1.366, about 1.37 Ω.",
   "src": "33.pdf (BS 7671 18th Edition A2 course) p48; 33.pdf (BS 7671 18th Edition A2 course) p54",
   "scene": "Socket radial on a B32. A B32 needs 160 A to disconnect in time.",
   "explain": {
    "what": "Same method, using the 160 A a B32 needs to disconnect in time.",
    "why": "218.5 ÷ 160 = 1.366 Ω, rounded to 1.37 Ω.",
    "how": "Write the max Zs in column 12 of the circuit details, then work out the 0.8 figure to compare with.",
    "where": "33.pdf p48 and p54; EIC page 4, column 12"
   }
  },
  {
   "type": "fill",
   "q": "Measured limit = 1.37 × 0.8 = ___ Ω",
   "answers": [
    "1.1",
    "1.10",
    "1.096"
   ],
   "why": "1.37 × 0.8 = 1.096, about 1.1 Ω.",
   "src": "99.pdf (EAL Initial Verification slides) p135; 49.pdf (EAL Condition Reporting slides) p66",
   "scene": "B32 radial, maximum Zs 1.37 Ω.",
   "explain": {
    "what": "The 0.8 rule turns the hot maximum into a limit for your cold reading.",
    "why": "1.37 × 0.8 = 1.096 Ω. Your Condition Reporting slides use 1.1 Ω as the measured limit for a B32.",
    "how": "Work out the 0.8 figure before you test so you know straight away if a reading passes.",
    "where": "Test results column 27 (99.pdf slides p135; 49.pdf slides p66)"
   }
  },
  {
   "type": "choice",
   "q": "Why do you compare your measured Zs with the max Zs × 0.8?",
   "options": [
    "Max Zs is for cable at 70 °C; you test it cold",
    "Your tester is only 80% accurate",
    "It allows for the supply being 5% low",
    "The assessor wants a safety margin on every reading"
   ],
   "answer": 0,
   "why": "Resistance rises as cable heats up, by about 20% from 20 °C to 70 °C.",
   "src": "99.pdf (EAL Initial Verification slides) p135",
   "explain": {
    "what": "The max Zs figures are for conductors at their working temperature of 70 °C.",
    "why": "You test with no load, at about 20 °C. The 50 °C rise adds about 20% resistance, so you use 80% of the max. The 5% low supply is the 0.95 already in the max Zs.",
    "how": "Max Zs × 0.8, then your measured Zs must be below it.",
    "where": "99.pdf slides p135; 49.pdf slides p65"
   }
  },
  {
   "type": "choice",
   "q": "Does the circuit pass?",
   "options": [
    "No: it's over the 1.1 Ω cold limit",
    "Yes: it's under the 1.37 Ω maximum",
    "Yes: Zs doesn't matter on a B32",
    "Only if the RCD test passes too"
   ],
   "answer": 0,
   "why": "1.25 Ω is under 1.37 Ω (the hot value) but over 1.1 Ω (the cold limit).",
   "src": "49.pdf (EAL Condition Reporting slides) p65; 49.pdf (EAL Condition Reporting slides) p66",
   "scene": "Same B32 radial. Measured Zs = 1.25 Ω.",
   "explain": {
    "what": "Your measured Zs has to be below max Zs × 0.8.",
    "why": "1.37 Ω is the trap: that's for a hot cable. Measured cold, the limit is about 1.1 Ω, and 1.25 Ω is over it.",
    "how": "Don't sign it off: find out why Zs is high (long run, poor connection) and put it right.",
    "where": "Test results column 27 (49.pdf slides p65-66)"
   }
  },
  {
   "type": "choice",
   "q": "What do these numbers tell you?",
   "options": [
    "Pass, and it agrees with Ze + (R1+R2)",
    "Fail: measured Zs must equal Ze exactly",
    "Fail: Zs must be under 0.35 Ω",
    "Can't tell without the RCD test"
   ],
   "answer": 0,
   "why": "0.35 + 0.19 = 0.54 Ω expected; 0.55 Ω measured is well under 1.1 Ω.",
   "src": "99.pdf (EAL Initial Verification slides) p125; 49.pdf (EAL Condition Reporting slides) p66",
   "scene": "B32 ring final. Ze 0.35 Ω, R1+R2 0.19 Ω, measured Zs 0.55 Ω.",
   "explain": {
    "what": "Ze + (R1+R2) gives you a figure to check your measured Zs against.",
    "why": "0.35 + 0.19 = 0.54 Ω, and you measured 0.55 Ω: they agree, and both are well under the 1.1 Ω cold limit for a B32. 0.35 Ω is the Ze figure for TN-C-S, not a Zs limit.",
    "how": "If measured and calculated are far apart, look for a loose connection or a wrong reading.",
    "where": "Ring final; test results columns 21 and 27 (99.pdf slides p125; 49.pdf slides p66)"
   }
  },
  {
   "type": "choice",
   "q": "Where do you measure Zs on a radial?",
   "options": [
    "At the furthest point of the circuit",
    "At the MET, earthing conductor off",
    "At the breaker's outgoing terminal",
    "At the first socket from the board"
   ],
   "answer": 0,
   "why": "The furthest point has the longest cable, so the highest Zs.",
   "src": "99.pdf (EAL Initial Verification slides) p144",
   "explain": {
    "what": "Zs gets higher the further you go from the board, because there is more cable in the loop.",
    "why": "Testing at the furthest point gives the worst case. At the board you'd only be measuring close to Ze; the MET with the earthing conductor off is the Ze test.",
    "how": "Test at the last socket or light on the circuit and record the highest reading.",
    "where": "Furthest point on the circuit; test results column 27 'Maximum measured' (99.pdf slides p144)"
   }
  },
  {
   "type": "choice",
   "q": "Which of these do your course slides give as a way to still get disconnection in time?",
   "options": [
    "Protect the circuit with an RCD",
    "Fit a bigger breaker rating",
    "Record the reading × 0.8",
    "Retest it at 500 V"
   ],
   "answer": 0,
   "why": "If the max Zs can't be met, an RCD may be used to meet the disconnection time.",
   "src": "33.pdf (BS 7671 18th Edition A2 course) p58",
   "scene": "A long radial on a Type B breaker has a measured Zs over the limit.",
   "explain": {
    "what": "The course lists reasons Zs can be too high: long cable runs, a change of device needing lower Zs, or a long distribution circuit to the board.",
    "why": "An RCD trips on a much smaller current, so it can still disconnect in time. A bigger breaker needs even more current, so it makes things worse.",
    "how": "Check the reading first (leads, connections), then look at the fix: shorter run, bigger cable or RCD protection.",
    "where": "33.pdf p58 (where an RCD is used)"
   }
  },
  {
   "type": "choice",
   "q": "On an EICR, what code does your course give this?",
   "options": [
    "C2",
    "C3",
    "FI",
    "No code, just a note"
   ],
   "answer": 0,
   "why": "Zs higher than needed to operate the device in the required time is a C2 on your slides.",
   "src": "49.pdf (EAL Condition Reporting slides) p41",
   "scene": "Periodic inspection. A circuit's Zs is too high for its breaker to disconnect in the required time.",
   "explain": {
    "what": "An observation code says how urgent a problem is on an EICR.",
    "why": "If Zs is too high for the device to operate in time, a fault might not disconnect, so it's potentially dangerous: C2. C3 and FI don't make the report unsatisfactory.",
    "how": "Record the Zs in column 27 and write the observation with C2.",
    "where": "EICR observations (49.pdf slides p41)"
   }
  },
  {
   "type": "order",
   "q": "Put the Zs check in order.",
   "steps": [
    "Read the breaker's type and rating off the label",
    "Find its maximum Zs and write it in column 12",
    "Multiply the maximum Zs by 0.8",
    "Measure Zs at the furthest point",
    "Compare, then record the highest reading in column 27"
   ],
   "why": "Know your limit before you test, then compare.",
   "src": "33.pdf (BS 7671 18th Edition A2 course) p54; EIC form (IET BS 7671:2018+A4:2026) p4; 99.pdf (EAL Initial Verification slides) p135; 99.pdf (EAL Initial Verification slides) p144; EIC form (IET BS 7671:2018+A4:2026) p5",
   "explain": {
    "what": "Checking Zs is a comparison: your reading against the limit for that breaker.",
    "why": "You need the type and rating to find the max Zs, and the 0.8 figure before a reading means anything. Measuring at the furthest point gives the worst case.",
    "how": "Fill columns 9-12 from the labels first, work out each 0.8 figure, then test and fill column 27.",
    "where": "Breaker labels, furthest points; EIC pages 4-5 (33.pdf p54; 99.pdf slides p135 and p144)"
   }
  },
  {
   "type": "match",
   "q": "Match the column on the schedules to what goes in it.",
   "pairs": [
    [
     "Column 9",
     "Type of breaker (B, C, D)"
    ],
    [
     "Column 10",
     "Rating (A)"
    ],
    [
     "Column 11",
     "Breaking capacity (kA)"
    ],
    [
     "Column 12",
     "Maximum permitted Zs (Ω)"
    ],
    [
     "Column 27",
     "Maximum measured Zs (Ω)"
    ]
   ],
   "why": "Columns 9-12 come from the label and the max Zs; column 27 is your reading.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p4; EIC form (IET BS 7671:2018+A4:2026) p5",
   "explain": {
    "what": "The Schedule of Circuit Details holds what's installed; the Schedule of Test Results holds what you measured.",
    "why": "Type, rating, kA and max Zs are columns 9-12 of the circuit details. Your highest Zs reading goes in column 27 of the test results.",
    "how": "Fill 9-12 before you test, then compare column 27 with column 12 × 0.8.",
    "where": "EIC page 4 (columns 9-12) and page 5 (column 27)"
   },
   "form": {
    "doc": "EIC",
    "page": 4,
    "where": "Schedule of Circuit Details and Schedule of Test Results",
    "box": "Columns 9-12 and 27"
   }
  }
 ]
});
