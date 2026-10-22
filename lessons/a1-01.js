// DRAFT lesson (v2, Unit 1) written from Tom's Access Training PDFs and the IET A4:2026 forms. Waiting for Checker + Tom's approval.
window.LESSONS = window.LESSONS || [];
window.LESSONS.push({
 "id": "a1-01",
 "topic": "safety",
 "title": "Your test kit on the day",
 "awards": [
  "L2 Fundamental",
  "L3 Initial Verification",
  "L3 Periodic"
 ],
 "status": "draft",
 "unconfirmed": false,
 "sources": [
  {
   "file": "302.pdf (Domestic Electrical Installer course)",
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
  "verdict": "pass",
  "notes": "Every fact and sum checks out against the slides and the A4 test results sheet. Two small wording fixes: the battery advice is now marked as general advice."
 },
 "approved": null,
 "intro": {
  "what": "You bring two bits of kit to the board: a voltage indicator (with its proving unit) for safe isolation, and a multifunction tester for the tests themselves. CABINS is the checklist for the tester, and GS38 is the rule for leads and probes.",
  "why": "A faulty tester or bad leads can tell you a live circuit is dead, or give you readings that are simply wrong. GS38 is there to protect you from voltages above 50 V, and you meet those on the insulation resistance test and every live test.",
  "how": [
   "Look over the case, leads and probes: fused leads, finger guards, no more than 4 mm of bare tip",
   "Check the calibration is in date and note the serial number",
   "Check the batteries",
   "Read the instructions if it's a tester you don't know",
   "Null the leads before your continuity tests",
   "Pick the right scale and setting for each test (500 V for insulation resistance on a 230 V circuit)",
   "Prove your voltage indicator on the proving unit before you use it"
  ],
  "where": "On the bench before you start. The serial numbers go in the 'Details of test instruments used' box at the top of the schedule of test results.",
  "reason": "If you can't trust the kit, you can't trust the reading. A 'dead' or a 'pass' from a faulty instrument is worse than no reading at all.",
  "numbers": [
   "GS38 probe tip: 4 mm bare metal max (2 mm preferred)",
   "GS38 leads: 500 mA fuse or a current-limiting resistor",
   "GS38 protects you against voltages above 50 V",
   "Insulation resistance on a 230 V circuit: test at 500 V DC"
  ]
 },
 "questions": [
  {
   "type": "choice",
   "q": "Can you use these probes?",
   "options": [
    "Yes, as long as the leads are fused",
    "No: GS38 allows 4 mm of bare tip at most",
    "Yes, if you wear insulated gloves",
    "No: GS38 wants 10 mm tips on 230 V"
   ],
   "answer": 1,
   "why": "GS38 allows no more than 4 mm of bare metal at the tip (2 mm is better), plus finger guards.",
   "src": "99.pdf (EAL Initial Verification slides) p27",
   "scene": "You pick up a voltage indicator from the bench. About 10 mm of bare metal shows at each probe tip and there are no finger guards.",
   "explain": {
    "what": "GS38 is the HSE guidance on test leads and probes. Shrouded tips and finger guards keep your fingers and the bare metal away from anything live.",
    "why": "The limit is 4 mm of exposed metal, 2 mm preferred, and the probes need finger guards. Fused leads are a separate GS38 requirement: they don't make a long bare tip OK.",
    "how": "Before you start, look at both probe tips. If they're longer than 4 mm or the guards are missing, swap them for a set that meets GS38.",
    "where": "Your leads and probes, checked on the bench before any test (99.pdf slides p27)."
   }
  },
  {
   "type": "choice",
   "q": "What should GS38 test leads have built in?",
   "options": [
    "A 500 mA fuse or a current-limiting resistor",
    "A 13 A fuse fitted in each of the leads",
    "A 30 mA RCD fitted in the lead set",
    "A 5 A fuse in the black lead only"
   ],
   "answer": 0,
   "why": "Fused at 500 mA, or a current-limiting resistor, so the energy is limited if something goes wrong.",
   "src": "99.pdf (EAL Initial Verification slides) p27",
   "explain": {
    "what": "GS38 lists four things for leads: fused (or a resistor), finger guards, a 4 mm maximum tip, and a sensible length.",
    "why": "The fuse is 500 mA. 30 mA looks familiar because it's an RCD rating, but that has nothing to do with test leads.",
    "how": "Look for the fuse marking on the probe body when you do the 'A' (accessories) check in CABINS.",
    "where": "On the leads themselves, usually printed on the probe body (99.pdf slides p27)."
   }
  },
  {
   "type": "match",
   "q": "Match each CABINS letter to the check you do on your tester.",
   "pairs": [
    [
     "C",
     "Calibration and case"
    ],
    [
     "A",
     "Accessories: leads and probes to GS38"
    ],
    [
     "B",
     "Batteries"
    ],
    [
     "I",
     "Instructions"
    ],
    [
     "N",
     "Null the leads (continuity only)"
    ],
    [
     "S",
     "Scale and setting"
    ]
   ],
   "why": "CABINS before you start means a faulty tester can't give you a false reading.",
   "src": "99.pdf (EAL Initial Verification slides) p23-24",
   "explain": {
    "what": "CABINS is the course's memory word for the checks on your instrument before you use it.",
    "why": "Each letter is one check. Calibration proves the tester is accurate; the case, leads and batteries must be in good condition; nulling only applies to continuity; and you must pick the right scale and setting for the test.",
    "how": "Lay your kit out on the bench and say CABINS to yourself, ticking off each letter.",
    "where": "On the bench before you start (99.pdf slides p23-24)."
   }
  },
  {
   "type": "choice",
   "q": "What should you do before your continuity tests?",
   "options": [
    "Nothing, 0.18 Ω is close enough to zero",
    "Null the leads so the tester takes it off",
    "Write 0.18 Ω in the Remarks column",
    "Change to the insulation resistance range"
   ],
   "answer": 1,
   "why": "Nulling takes the leads' own resistance out of your continuity readings.",
   "src": "99.pdf (EAL Initial Verification slides) p23-24",
   "scene": "CABINS check: you clip your continuity leads together and the screen shows 0.18 Ω.",
   "explain": {
    "what": "Your test leads have a little resistance of their own. Nulling (zeroing) tells the tester to take it off every reading.",
    "why": "Continuity readings are small, often under 1 Ω, so 0.18 Ω of lead would make every R1+R2 and ring reading too high. That's why the N in CABINS is there.",
    "how": "Clip the leads together, press the null (zero) button, and check the screen now reads 0.00 Ω before you start.",
    "where": "On the tester, continuity (low ohms) range (99.pdf slides p23-24)."
   }
  },
  {
   "type": "fill",
   "q": "If you forget to null 0.18 Ω leads, a true R1+R2 of 0.62 Ω would show as ___ Ω.",
   "answers": [
    "0.8",
    "0.80"
   ],
   "why": "0.62 + 0.18 = 0.80 Ω: the lead resistance is added to every reading.",
   "src": "99.pdf (EAL Initial Verification slides) p23-24",
   "explain": {
    "what": "Without nulling, the tester measures the circuit AND your leads together.",
    "why": "0.62 + 0.18 = 0.80 Ω. That 0.18 Ω is enough to make a good circuit look worse, or to mess up your ring final comparisons.",
    "how": "Null the leads once at the start, and again if you change leads or the screen doesn't read 0.00 Ω with them clipped together.",
    "where": "Continuity column on the schedule of test results (99.pdf slides p23-24)."
   }
  },
  {
   "type": "order",
   "q": "Put the steps for your first continuity test in order.",
   "steps": [
    "Check the leads and probes (GS38)",
    "Turn the dial to continuity",
    "Clip the leads together and null them",
    "Connect to the circuit and test"
   ],
   "why": "Check the leads, pick the range, null, then test: the reading is then the circuit only.",
   "src": "99.pdf (EAL Initial Verification slides) p23-24",
   "scene": "You're about to do your first R1+R2 test on the board.",
   "explain": {
    "what": "These are CABINS in action for the first test of the day.",
    "why": "You null on the continuity range, with the leads you're actually going to use. Null first and then swap leads, and the reading includes the new leads' resistance.",
    "how": "Do it in this order every time, and re-null if you change leads.",
    "where": "Tester and leads on the bench, then the circuit (99.pdf slides p23-24)."
   }
  },
  {
   "type": "choice",
   "q": "Which tests do you null the leads for?",
   "options": [
    "Continuity tests only",
    "Insulation resistance only",
    "Earth loop impedance only",
    "Every test you carry out"
   ],
   "answer": 0,
   "why": "You null the leads for continuity only: those readings are fractions of an ohm, so the leads' own resistance matters. Insulation resistance is in megohms, so it makes no difference there.",
   "src": "99.pdf (EAL Initial Verification slides) p24",
   "explain": {
    "what": "Nulling matters where the readings are tiny, a fraction of an ohm.",
    "why": "Continuity readings are fractions of an ohm, so lead resistance matters. Insulation resistance is read in megohms, so a fraction of an ohm makes no difference.",
    "how": "Null when you set the tester to continuity; you don't need to on the insulation resistance range.",
    "where": "Tester on the continuity (low ohms) range (99.pdf slides p24)."
   }
  },
  {
   "type": "choice",
   "q": "Where does your tester's serial number go?",
   "options": [
    "In the Remarks column for each circuit",
    "Top of the schedule of test results",
    "In Section C next to your signature",
    "Nowhere, it's only for the calibration lab"
   ],
   "answer": 1,
   "why": "The serial number links your results to a calibrated instrument.",
   "src": "99.pdf (EAL Initial Verification slides) p23; EIC form (IET BS 7671:2018+A4:2026) p5",
   "explain": {
    "what": "Calibration proves the tester was accurate for your tests, and the serial number shows which tester you used.",
    "why": "The course says the serial number goes on the schedule of test results. The A4 form has a box for it at the top: 'Details of test instruments used (serial and/or asset numbers)', with a line for a multifunction tester.",
    "how": "Copy the serial number off the back of your multifunction tester into the box before you start testing.",
    "where": "Schedule of test results, top right, 'Multifunction' line (99.pdf slides p23; EIC form p5)."
   },
   "form": {
    "doc": "EIC",
    "page": 5,
    "where": "Schedule of test results: details of test instruments used",
    "box": "Multifunction: …"
   }
  },
  {
   "type": "match",
   "q": "Match the tester function to what you write down.",
   "pairs": [
    [
     "Continuity",
     "R1+R2 and ring readings in ohms"
    ],
    [
     "Insulation resistance",
     "Readings in megohms (MΩ)"
    ],
    [
     "Earth fault loop impedance",
     "Ze and Zs in ohms"
    ],
    [
     "RCD",
     "Disconnection time in milliseconds"
    ]
   ],
   "why": "One multifunction tester does all four; each one has its own columns on the test results.",
   "src": "99.pdf (EAL Initial Verification slides) p78-79; EIC form (IET BS 7671:2018+A4:2026) p5",
   "explain": {
    "what": "Your multifunction tester does the dead tests (continuity, insulation resistance) and the live tests (loop impedance, fault current, RCD).",
    "why": "Each test gives a different kind of reading: ohms for continuity and Zs, megohms for insulation, milliseconds for the RCD. Mixing up the units is an easy way to lose marks.",
    "how": "Turn the dial to the test, check the unit on the screen, and write it in the matching column.",
    "where": "Schedule of test results: continuity (columns 18-22), insulation resistance (23-25), Zs (27), RCD (28) (99.pdf slides p78-79; EIC form p5)."
   }
  },
  {
   "type": "choice",
   "q": "What setting do you pick for the insulation resistance test on a normal 230 V circuit?",
   "options": [
    "250 V DC",
    "500 V DC",
    "1000 V DC",
    "230 V AC"
   ],
   "answer": 1,
   "why": "Circuits up to 500 V are tested at 500 V DC, and the minimum reading is 1 MΩ.",
   "src": "302.pdf (Domestic Electrical Installer course) p150; 99.pdf (EAL Initial Verification slides) p24",
   "explain": {
    "what": "The S in CABINS is scale and setting: the right test on the right range.",
    "why": "A normal 230 V circuit is tested at 500 V DC. 250 V is for SELV and PELV (extra-low voltage) circuits, and 1000 V is for circuits above 500 V.",
    "how": "Set the dial to insulation resistance, select 500 V, and check the screen shows 500 V before you press test.",
    "where": "Insulation resistance range on your tester; test voltage goes in column 23 (302.pdf p150; 99.pdf slides p24)."
   }
  },
  {
   "type": "choice",
   "q": "Why do GS38 leads matter for the insulation resistance test, even though the circuit is dead?",
   "options": [
    "They don't: GS38 only covers live tests",
    "Your tester puts out 500 V, well above 50 V",
    "The test only works with fused leads",
    "It's only to protect the tester's fuse"
   ],
   "answer": 1,
   "why": "GS38 protects you against voltages above 50 V, and the insulation tester itself puts out 500 V.",
   "src": "99.pdf (EAL Initial Verification slides) p21",
   "explain": {
    "what": "GS38 is about protecting you from shock while testing, wherever the voltage comes from.",
    "why": "The course names insulation resistance and live testing as the times you meet more than 50 V. The insulation tester makes 500 V itself, and capacitive loads can store a charge and give you a shock.",
    "how": "Keep your fingers behind the guards for insulation tests just as you would for a live test.",
    "where": "At the board and circuit terminals during insulation resistance testing (99.pdf slides p21)."
   }
  },
  {
   "type": "choice",
   "q": "What do you do?",
   "options": [
    "Use it, the lamps sometimes don't light",
    "Don't use it: get an indicator you can prove works",
    "Test the circuit anyway and trust a 0 V",
    "Use your multifunction tester's loop range"
   ],
   "answer": 1,
   "why": "If it won't prove, a 'no voltage' reading from it means nothing.",
   "src": "302.pdf (Domestic Electrical Installer course) p139",
   "scene": "You press your voltage indicator onto the proving unit. None of the lamps light.",
   "explain": {
    "what": "A proving unit is a known source you use to check your voltage indicator is actually working.",
    "why": "If the lamps don't light on the proving unit, the indicator (or a lamp, or a lead) has failed. Use it on the circuit and it will show 'dead' even if it's live.",
    "how": "Swap it for one that lights up on the proving unit, then carry on with safe isolation.",
    "where": "On the bench, before safe isolation (302.pdf p139)."
   }
  },
  {
   "type": "choice",
   "q": "Why do you prove the voltage indicator before AND after testing the circuit?",
   "options": [
    "So a lamp that blows mid-test can't fool you",
    "Because the proving unit needs two readings",
    "To discharge the circuit you just tested",
    "To warm the lamps up so they read right"
   ],
   "answer": 0,
   "why": "If a lamp blew during the test, the 'dead' reading would be false. Re-proving catches it.",
   "src": "302.pdf (Domestic Electrical Installer course) p139; 302.pdf (Domestic Electrical Installer course) p141",
   "explain": {
    "what": "Proving before shows the indicator works; proving after shows it still worked all the way through your test.",
    "why": "302.pdf says if the lamps have blown you might think the circuit is safe when it isn't. Re-proving afterwards is the only way to know your 0 V readings were real.",
    "how": "Prove, test, re-prove. Say it out loud on the assessment so the assessor hears it.",
    "where": "On the proving unit, before and after the dead test at the circuit (302.pdf p139 and p141)."
   }
  },
  {
   "type": "choice",
   "q": "What do you do?",
   "options": [
    "Carry on, batteries last for hours",
    "Change or charge the batteries first",
    "Only do the live tests with it",
    "Write 'battery low' in Remarks"
   ],
   "answer": 1,
   "why": "B in CABINS: the batteries must be in good condition before you test.",
   "src": "99.pdf (EAL Initial Verification slides) p23-24",
   "scene": "You switch on your multifunction tester at the start of the assessment and the battery symbol is flashing low.",
   "explain": {
    "what": "Your multifunction tester runs everything off its batteries, including the 500 V insulation test.",
    "why": "The course lists battery condition as one of the checks before use. As general advice: a tester that dies half-way through means repeating tests, and a weak battery may not test properly.",
    "how": "Check the battery symbol when you switch on. Bring spare batteries on the day.",
    "where": "Battery indicator on the tester's screen (99.pdf slides p23-24)."
   }
  }
 ]
});
