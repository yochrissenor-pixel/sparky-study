// DRAFT lesson (v2) written from Tom's Access Training PDFs. Waiting for Checker + Tom's approval.
window.LESSONS = window.LESSONS || [];
window.LESSONS.push({
 "id": "a6-03",
 "topic": "pat",
 "title": "The tests and their pass limits",
 "awards": [
  "L3 PAT"
 ],
 "status": "draft",
 "unconfirmed": false,
 "sources": [
  {
   "file": "113.pdf (In-service Inspection & Testing slides)",
   "ref": "pages given on each question"
  }
 ],
 "checker": {
  "by": "Claude Checker",
  "date": "2026-10-12",
  "verdict": "pass",
  "notes": "Test order, limits and all the earth continuity sums (12 m 0.287 Ω, 5 m 0.178 Ω, 10 m 0.256 Ω) checked against the PAT slides."
 },
 "approved": null,
 "intro": {
  "what": "After the visual inspection, the combined inspection and test runs in a set order: earth continuity (Class I only), insulation resistance, touch or protective conductor current if required, then a functional check. Leads also get a polarity test.",
  "why": "The slides set this order. It makes sense to prove the earth first, because the insulation and leakage tests are measured against it, and to leave the item running (functional check) until last.",
  "how": [
   "Class I: earth continuity from the plug's earth pin to the metal, flexing the cable as you test",
   "Work out the limit: 0.1 Ω plus the resistance of the cord's earth (15.6 mΩ per metre for 1.25 mm²)",
   "Insulation resistance at 500 V DC, switches on and covers in place (250 V DC or a leakage test for electronics)",
   "If required, touch or protective conductor current with the item running",
   "Leads: earth continuity (3-core), insulation resistance and polarity",
   "Functional check: it works normally and switches off"
  ],
  "where": "On the bench with your PAT tester: the item plugs into the tester and your probe goes on the item's metal.",
  "reason": "Earth continuity is 0.1 Ω plus the cord. Do the sum before you press test so you know the pass mark.",
  "numbers": [
   "Earth continuity: (0.1 + R) Ω with a cord or lead; 0.1 Ω without a cord, and for multiway and RCD adaptors",
   "1.25 mm² flex: 15.6 mΩ per metre",
   "Older equipment: up to 0.5 Ω if it's down to the design",
   "Low current test 20 to 200 mA; high current not over 25 A",
   "IR at 500 V DC: Class I at least 1.0 MΩ, Class II at least 2.0 MΩ",
   "Touch or protective conductor current: no more than 5 mA, read once stable for over 2 s",
   "Plug-in RCD at 150 mA (×5): trips within 40 ms"
  ]
 },
 "questions": [
  {
   "type": "order",
   "q": "Put the combined inspection and test in order.",
   "steps": [
    "Preliminary and formal visual inspection",
    "Earth continuity (Class I)",
    "Insulation resistance",
    "Touch or protective conductor current (if required)",
    "Functional check"
   ],
   "why": "Look first, then prove the earth, then the insulation, leakage and finally function.",
   "src": "113.pdf (In-service Inspection & Testing slides) p62; 113.pdf (In-service Inspection & Testing slides) p75",
   "explain": {
    "what": "The combined inspection and test has a set order on the slides.",
    "why": "Inspection comes first so you don't test something visibly dangerous. The earth is proved before the insulation and leakage tests that are measured against it, and the item is only run for real at the end.",
    "how": "Say it as: look, earth, insulation, leakage, function.",
    "where": "Your PAT tester's test sequence (course slides 113.pdf p62 and p75)."
   }
  },
  {
   "type": "fill",
   "q": "Max earth continuity = 0.1 + (15.6 × 12 ÷ 1000) = ___ Ω",
   "answers": [
    "0.287",
    "0.29"
   ],
   "why": "15.6 × 12 = 187.2 mΩ = 0.187 Ω, plus 0.1 Ω.",
   "src": "113.pdf (In-service Inspection & Testing slides) p80-81",
   "scene": "A 12 m extension lead in 1.25 mm² flex.",
   "explain": {
    "what": "This is the course's worked example for an extension lead. The limit is (0.1 + R) Ω, where R is the resistance of the lead's earth conductor.",
    "why": "1.25 mm² flex is 15.6 mΩ per metre. 15.6 × 12 = 187.2 mΩ = 0.187 Ω. 0.1 + 0.187 = 0.287 Ω.",
    "how": "mΩ per metre × length, divide by 1000 for ohms, add 0.1. The result is a guide: you decide if the actual reading is acceptable.",
    "where": "Your sum before pressing test (course slides 113.pdf p80-81)."
   }
  },
  {
   "type": "fill",
   "q": "Max earth continuity = 0.1 + (15.6 × 5 ÷ 1000) = ___ Ω",
   "answers": [
    "0.178",
    "0.18"
   ],
   "why": "15.6 × 5 = 78 mΩ = 0.078 Ω, plus 0.1 Ω.",
   "src": "113.pdf (In-service Inspection & Testing slides) p80-81",
   "scene": "A Class I kettle with a 5 m, 1.25 mm² cord.",
   "explain": {
    "what": "An appliance with a supply cord uses the same (0.1 + R) Ω limit.",
    "why": "R is the cord's earth: 15.6 × 5 = 78 mΩ = 0.078 Ω. 0.1 + 0.078 = 0.178 Ω, about 0.18 Ω.",
    "how": "Measure or read the cord length, multiply by 15.6 mΩ, convert to ohms and add 0.1.",
    "where": "Your sum before pressing test (course slides 113.pdf p80-81)."
   }
  },
  {
   "type": "choice",
   "q": "Pass or fail?",
   "options": [
    "Fail: over the 0.1 Ω appliance limit",
    "Pass: under the 0.256 Ω limit",
    "Fail: over 0.2 Ω",
    "Pass: under 1 MΩ"
   ],
   "answer": 1,
   "why": "0.1 + (15.6 × 10 ÷ 1000) = 0.256 Ω, and 0.21 Ω is under that.",
   "src": "113.pdf (In-service Inspection & Testing slides) p80-81",
   "scene": "A 10 m extension lead in 1.25 mm² flex reads 0.21 Ω on earth continuity.",
   "explain": {
    "what": "A 3-core extension lead uses the (0.1 + R) Ω limit.",
    "why": "15.6 × 10 = 156 mΩ = 0.156 Ω, plus 0.1 Ω = 0.256 Ω. Using 0.1 Ω on its own forgets the 10 m of earth conductor. 1 MΩ is an insulation figure, not continuity.",
    "how": "Do the sum first, then compare. Keep flexing the lead while you read it.",
    "where": "Earth continuity reading on your PAT tester (course slides 113.pdf p80-81)."
   }
  },
  {
   "type": "choice",
   "q": "Pass or fail?",
   "options": [
    "Pass: under the 0.287 Ω lead limit",
    "Fail: adaptors are limited to 0.1 Ω",
    "Pass: anything under 0.5 Ω",
    "Fail: multiway adaptors have no earth"
   ],
   "answer": 1,
   "why": "Multiway and RCD adaptors have no cord, so the limit is 0.1 Ω.",
   "src": "113.pdf (In-service Inspection & Testing slides) p80",
   "scene": "A multiway adaptor (no cord) reads 0.25 Ω on earth continuity.",
   "explain": {
    "what": "The slides give a separate earth continuity limit for multiway adaptors and RCD adaptors.",
    "why": "Their limit is 0.1 Ω. The 0.287 Ω figure is for a 12 m lead with a cord, and 0.5 Ω is only for older equipment where the design explains it.",
    "how": "Check what kind of item it is before choosing the limit. Fail it and label it.",
    "where": "Earth continuity reading on your PAT tester (course slides 113.pdf p80)."
   }
  },
  {
   "type": "choice",
   "q": "Is 0.45 Ω acceptable?",
   "options": [
    "No: nothing over 0.1 Ω passes",
    "It can be, if the design explains it",
    "Yes: old equipment always passes this test",
    "Only if it's Class II equipment"
   ],
   "answer": 1,
   "why": "Older equipment can read up to 0.5 Ω total, but only when its design explains it.",
   "src": "113.pdf (In-service Inspection & Testing slides) p80",
   "scene": "Older Class I workshop equipment. Earth continuity, including its cable, reads 0.45 Ω.",
   "explain": {
    "what": "Some older equipment has a higher earth resistance because of how it was made.",
    "why": "The slides allow 0.5 Ω (equipment plus supply cable) if the inspector is satisfied it's down to the design and not a deteriorating earth connection. It isn't automatic.",
    "how": "Inspect the earth connections and flex, flex the cable while testing, then make the call.",
    "where": "Earth continuity reading on your PAT tester (course slides 113.pdf p80)."
   }
  },
  {
   "type": "match",
   "q": "Match the earth continuity test to its current.",
   "pairs": [
    [
     "Low current test",
     "20 to 200 mA"
    ],
    [
     "High current test",
     "Not over 25 A"
    ]
   ],
   "why": "Low current suits most items. High current needs a solid connection to clean metal.",
   "src": "113.pdf (In-service Inspection & Testing slides) p77-79",
   "explain": {
    "what": "There are two ways to test protective conductor continuity.",
    "why": "Low current (20 to 200 mA) suits items that can't safely carry a high current, but may not be reliable on powder-coated cases or chrome screws. High current (not over 25 A) suits items where you can make a solid connection.",
    "how": "In practice a low current test at 100 or 200 mA is enough for most items. Run a high current test only as long as needed for a steady reading.",
    "where": "The continuity setting on your PAT tester (course slides 113.pdf p77-79)."
   }
  },
  {
   "type": "choice",
   "q": "What should you do with the flex during the test?",
   "options": [
    "Keep it perfectly still",
    "Flex it along its length",
    "Coil it round the tester",
    "Unplug it halfway through"
   ],
   "answer": 1,
   "why": "Flexing shows up a broken earth core that only opens when moved.",
   "src": "113.pdf (In-service Inspection & Testing slides) p79",
   "scene": "Earth continuity test on a floor polisher. The reading looks fine with the flex lying still.",
   "explain": {
    "what": "A damaged earth conductor can connect when still and break when moved.",
    "why": "The slides say whichever test you use, do it while flexing the cable. Keeping it still could hide an intermittent fault.",
    "how": "Hold the probe on the earthed metal and bend the flex along its length, especially near the plug and the appliance, watching the reading.",
    "where": "The flex of the item under test (course slides 113.pdf p79)."
   }
  },
  {
   "type": "choice",
   "q": "How should the switch and covers be?",
   "options": [
    "Switch on, covers in place",
    "Switch off, covers removed",
    "Switch off, covers in place",
    "Switch on, covers removed"
   ],
   "answer": 0,
   "why": "Switch on so the test reaches all the wiring; covers on as it's used.",
   "src": "113.pdf (In-service Inspection & Testing slides) p82",
   "scene": "You're about to do an insulation resistance test on a Class I heater.",
   "explain": {
    "what": "Insulation resistance puts 500 V DC between the live conductors (joined together) and the earth or metal parts.",
    "why": "With the switch off, the test only reaches as far as the switch. The slides say power switches on and covers in place.",
    "how": "The item is plugged into your tester, not the mains, so switching it on is safe.",
    "where": "The item's power switch (course slides 113.pdf p82)."
   }
  },
  {
   "type": "choice",
   "q": "What should you do instead of 500 V?",
   "options": [
    "Skip the electrical tests",
    "Test at 250 V DC or use a leakage test",
    "Test at 1000 V DC for a quicker, steadier reading",
    "Do a user check only"
   ],
   "answer": 1,
   "why": "Lower voltage, or a leakage test with it running, avoids damaging electronics.",
   "src": "113.pdf (In-service Inspection & Testing slides) p82",
   "scene": "A shop's electronic till could be damaged by 500 V.",
   "explain": {
    "what": "Electronic equipment can be damaged by the 500 V insulation resistance test.",
    "why": "The slides give two options: test at 250 V DC, or use the protective conductor or touch current method. Skipping the tests isn't one of them.",
    "how": "Set your PAT tester to 250 V, or choose its leakage test, for IT and electronic items.",
    "where": "The IR setting on your PAT tester (course slides 113.pdf p82)."
   }
  },
  {
   "type": "choice",
   "q": "Pass or fail?",
   "options": [
    "Pass: under 30 mA",
    "Fail: over 5 mA",
    "Pass: there's no limit",
    "Fail: it must read 0 mA"
   ],
   "answer": 1,
   "why": "Touch current on mains equipment must not exceed 5 mA.",
   "src": "113.pdf (In-service Inspection & Testing slides) p84-85",
   "scene": "Touch current test on a running Class I kettle (filled with water) reads 6.2 mA once stable.",
   "explain": {
    "what": "Touch current is the current that would flow from accessible metal to earth through a user. It's a live test with the item running.",
    "why": "The limit for mains-powered equipment is 5 mA. 30 mA is an RCD rating, not this limit.",
    "how": "Fill a kettle with water first so the element isn't damaged, take care with moving parts, don't touch it during the test, and read once stable for over 2 seconds.",
    "where": "Leakage reading on your PAT tester (course slides 113.pdf p84-85)."
   }
  },
  {
   "type": "match",
   "q": "Match the item to what you test.",
   "pairs": [
    [
     "3-core extension lead",
     "Earth continuity, IR and polarity"
    ],
    [
     "2-core lead set",
     "IR and polarity only"
    ],
    [
     "Plug-in RCD adaptor",
     "Trips at 150 mA (×5) within 40 ms"
    ]
   ],
   "why": "No earth conductor means no continuity test; RCDs get a trip test.",
   "src": "113.pdf (In-service Inspection & Testing slides) p88-90",
   "scene": "A box of leads and adaptors to test at the end of the day.",
   "explain": {
    "what": "Leads and adaptors are tested as separate items.",
    "why": "A 3-core lead is treated as Class I, a 2-core lead as Class II. A plug-in, inline or socket RCD is tested at 150 mA (×5) and should trip within 40 ms.",
    "how": "Count the cores to pick the tests, and use the RCD function for RCD adaptors.",
    "where": "Your PAT tester with its lead adaptors (course slides 113.pdf p87-90)."
   }
  },
  {
   "type": "choice",
   "q": "What does a polarity fail tell you?",
   "options": [
    "Line and neutral are crossed somewhere",
    "The earth core is too long for the lead",
    "The insulation is below 1 MΩ",
    "The plug fuse has blown"
   ],
   "answer": 0,
   "why": "Polarity means every conductor is on its correct terminal.",
   "src": "113.pdf (In-service Inspection & Testing slides) p27; 113.pdf (In-service Inspection & Testing slides) p88",
   "scene": "Your PAT tester shows a polarity fail on a 4-way extension lead someone has rewired.",
   "explain": {
    "what": "Polarity simply means all conductors are connected to the correct terminals: brown to line, blue to neutral, green and yellow to earth.",
    "why": "A polarity fail means a conductor is on the wrong terminal somewhere in the plug or the sockets, most often line and neutral swapped. The slides call any other arrangement extremely dangerous. It isn't an insulation or fuse problem.",
    "how": "Fail it, then open the plug (if it can be opened) to look at the terminations.",
    "where": "Polarity test on your PAT tester (course slides 113.pdf p27 and p88)."
   }
  },
  {
   "type": "choice",
   "q": "What is the functional check for?",
   "options": [
    "Proving it works and shows no malfunction",
    "Measuring how much load it draws",
    "Testing the plug fuse rating",
    "Checking the earth path while it runs at full load"
   ],
   "answer": 0,
   "why": "It's simply a check that the item works properly.",
   "src": "113.pdf (In-service Inspection & Testing slides) p86",
   "scene": "All the tests on a bench grinder have passed. One check is left.",
   "explain": {
    "what": "The functional check is the last step of the combined inspection and test.",
    "why": "The item is energised and should work normally. Some testers have a load test, but the slides say it isn't required for in-service testing.",
    "how": "Switch it on, check it works and switches off properly. Where needed, get a skilled user to run it.",
    "where": "The item itself, powered up (course slides 113.pdf p86)."
   }
  }
 ]
});
