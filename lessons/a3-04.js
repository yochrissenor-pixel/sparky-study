// DRAFT lesson (v2, unit 3) written from Tom's Access Training PDFs and the IET A4:2026 forms. Waiting for Checker + Tom's approval.
window.LESSONS = window.LESSONS || [];
window.LESSONS.push({
 "id": "a3-04",
 "topic": "rcd",
 "title": "RCD and functional testing",
 "awards": [
  "L2 Fundamental",
  "L3 Initial Verification",
  "L3 Periodic"
 ],
 "status": "draft",
 "unconfirmed": true,
 "note": "The half-rated no-trip test, the 300 ms and 40 ms limits and the 5 × IΔn test come from 99.pdf p147 (2018-era slides). The A4:2026 test schedule records one RCD time (column 28) and says effectiveness is checked with an AC test at IΔn, so this lesson follows the form for what you write down; ask your tutor whether the assessor also wants the half-rated and 5× tests. The slides say the RCD test notice is quarterly (49.pdf p49); the A4 form says six-monthly, and this lesson follows the form. What to do when an RCD fails on new work isn't spelled out on the slides; the lesson uses the course's 'stop, put it right, retest' steps from 99.pdf p156.",
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
  "notes": "Column numbers and the six-monthly test follow the A4 form. The half-rated and 5x RCD tests are on the slides but not on the A4 form, so ask your tutor whether the assessor wants them."
 },
 "approved": null,
 "intro": {
  "what": "An RCD compares the current going out on the line with the current coming back on the neutral. If some leaks to earth (for example through a person), the difference trips it. You time it with your tester, press its own test button, then check switches and other devices work (functional testing).",
  "why": "A 30 mA RCD gives additional protection against shock; on a TT board a 100 mA S-type RCD gives the fault protection because Ze is too high for breakers. It only protects if it trips fast enough, so you time it.",
  "how": [
   "Do it last, after Zs and fault current (the R in CRIPPLER)",
   "Set the tester to the RCD's rating, IΔn (for example 30 mA)",
   "Test at IΔn at 0° and at 180°; reset the RCD after each trip",
   "Record the slowest time in column 28",
   "Press the RCD's own test button: it must trip (column 29)",
   "Operate switches, isolators and other devices to prove they work",
   "Check the six-monthly RCD test notice is fitted"
  ],
  "where": "At the RCD or RCBO on the board and the circuits it protects. Test results: column 28 'Disconnection time (ms)' and column 29 'Test button operation'.",
  "reason": "The A4 form records one time, at IΔn, and you write the slowest. An RCD that doesn't trip, or trips too slowly, can't be passed.",
  "numbers": [
   "30 mA RCD at IΔn: trip in under 300 ms (slides)",
   "Slides also: ½ × IΔn must NOT trip; 5 × IΔn under 40 ms",
   "Test at 0° and 180°, record the slowest",
   "Fire protection 300 mA; TT main switch 100 mA S-type",
   "Test button notice: every six months (A4 form)"
  ]
 },
 "questions": [
  {
   "type": "choice",
   "q": "What does an RCD actually detect?",
   "options": [
    "A difference between line and neutral current",
    "Too much current flowing on the line conductor",
    "A short circuit from line to neutral",
    "A voltage on the earth conductor"
   ],
   "answer": 0,
   "why": "It looks for a difference in current between the live conductors.",
   "src": "33.pdf (BS 7671 18th Edition A2 course) p47",
   "explain": {
    "what": "An RCD measures what goes out on the line and what comes back on the neutral.",
    "why": "If they differ, current is leaking to earth, so it trips. Overload and short circuit are the breaker's job: in a short circuit the currents still balance.",
    "how": "That's why the RCD test injects a small current to earth: it creates exactly that difference.",
    "where": "RCD or RCBO on the board (33.pdf p47)"
   }
  },
  {
   "type": "choice",
   "q": "What does the RCD do?",
   "options": [
    "Nothing: the currents still balance",
    "It trips in under 40 ms to clear the fault",
    "It trips at half its rating",
    "Trips only if Zs is high"
   ],
   "answer": 0,
   "why": "An RCD can't see line-neutral faults, so it must be backed up by a breaker or fuse.",
   "src": "33.pdf (BS 7671 18th Edition A2 course) p47",
   "scene": "A circuit is protected only by an RCD, with no breaker or fuse. A fault happens between line and neutral.",
   "explain": {
    "what": "A line-neutral fault takes current out on the line and back on the neutral.",
    "why": "The two currents still match, so the RCD sees no difference and doesn't trip. That's why the slides say an RCD must be backed by an overcurrent device.",
    "how": "On the board, check every RCD-protected circuit also has a breaker or fuse (or is on an RCBO, which has both).",
    "where": "Board layout (33.pdf p47)"
   }
  },
  {
   "type": "match",
   "q": "Match the RCD rating to its job.",
   "pairs": [
    [
     "30 mA",
     "Additional protection (people)"
    ],
    [
     "100 mA S-type",
     "Fault protection: main switch on a TT board"
    ],
    [
     "300 mA",
     "Fire protection"
    ]
   ],
   "why": "The label tells you what job the RCD is doing.",
   "src": "99.pdf (EAL Initial Verification slides) p148; 99.pdf (EAL Initial Verification slides) p86; 99.pdf (EAL Initial Verification slides) p149",
   "explain": {
    "what": "RCDs come in different ratings for different jobs.",
    "why": "30 mA is for additional protection against shock. A 100 mA S-type (time delay) is the main switch on TT, where Ze is too high for breakers. 300 mA is for fire protection.",
    "how": "Read IΔn off the label before you set the tester: you test at that current.",
    "where": "RCD labels on the board (99.pdf slides p86, p148-149)"
   }
  },
  {
   "type": "fill",
   "q": "Record ___ ms",
   "answers": [
    "31",
    "31ms"
   ],
   "why": "You record the slowest IΔn time: 31 ms.",
   "src": "99.pdf (EAL Initial Verification slides) p147; EIC form (IET BS 7671:2018+A4:2026) p5",
   "scene": "30 mA RCD tested at IΔn: 24 ms at 0°, 31 ms at 180°.",
   "explain": {
    "what": "You test at 0° and 180° because a fault can start on either half of the AC wave.",
    "why": "The slides say record the highest (slowest) time, which is the worst case. Both are under 300 ms.",
    "how": "Test both, write the bigger number in column 28.",
    "where": "Test results column 28 (99.pdf slides p147; EIC page 5)"
   },
   "form": {
    "doc": "EIC",
    "page": 5,
    "where": "Schedule of Test Results: RCD",
    "box": "Column 28, Disconnection time (ms)"
   }
  },
  {
   "type": "choice",
   "q": "Pass or fail?",
   "options": [
    "Fail: at IΔn it must trip in under 300 ms",
    "Pass: anything under 2 seconds is fine",
    "Pass: only the 5× test is timed",
    "Fail: it must trip in under 10 ms"
   ],
   "answer": 0,
   "why": "At 1 × IΔn the RCD must trip in under 300 ms.",
   "src": "99.pdf (EAL Initial Verification slides) p147",
   "scene": "30 mA RCD. At IΔn it trips in 350 ms.",
   "explain": {
    "what": "The IΔn test is the one the A4 form records.",
    "why": "350 ms is over the 300 ms limit on your slides, so it fails. 2 seconds is the slide's 'should not trip' time for the half-rated test, not a pass limit.",
    "how": "Don't record it as a pass: it needs putting right and retesting.",
    "where": "Test results column 28 (99.pdf slides p147)"
   }
  },
  {
   "type": "choice",
   "q": "What does this tell you?",
   "options": [
    "Fail: it shouldn't trip at half its rating",
    "Pass: it shows the RCD is nice and sensitive",
    "Pass: just carry on to the full IΔn test",
    "Ignore it, only IΔn counts"
   ],
   "answer": 0,
   "why": "At ½ × IΔn the RCD must not trip. One that trips at 15 mA is too sensitive and would nuisance-trip in normal use.",
   "src": "99.pdf (EAL Initial Verification slides) p147",
   "scene": "30 mA RCD. You do the half-rated test (15 mA) and it trips.",
   "explain": {
    "what": "The half-rated test checks the RCD isn't over-sensitive.",
    "why": "An RCD that trips at 15 mA would nuisance-trip in normal use. The A4 form doesn't have a box for this test, but your slides include it.",
    "how": "If your assessor asks for it: set 15 mA, test, and it should hold in.",
    "where": "RCD on the board (99.pdf slides p147)"
   }
  },
  {
   "type": "choice",
   "q": "Pass or fail?",
   "options": [
    "Fail: at 5 × IΔn it must be under 40 ms",
    "Pass: it's well under the 300 ms limit",
    "Pass: only the IΔn test has a time limit",
    "Fail: it must be under 10 ms"
   ],
   "answer": 0,
   "why": "At 5 × IΔn (150 mA) it must trip in under 40 ms, so 52 ms is too slow.",
   "src": "99.pdf (EAL Initial Verification slides) p147",
   "scene": "30 mA RCD. At 5 × IΔn (150 mA) it trips in 52 ms.",
   "explain": {
    "what": "5 × IΔn is 150 mA for a 30 mA RCD.",
    "why": "300 ms is the IΔn limit; at 5 × it must be under 40 ms. 52 ms is too slow. The A4 form only records the IΔn time, so check with your tutor whether the assessor wants this test.",
    "how": "If you do it: 150 mA at 0° and 180°, both under 40 ms.",
    "where": "RCD on the board (99.pdf slides p147)"
   }
  },
  {
   "type": "choice",
   "q": "Your colleague says the button is enough and you can skip the instrument. Right?",
   "options": [
    "No: the button proves the mechanism, not the trip time",
    "Yes: the button test replaces the timed instrument test",
    "Yes: on 30 mA RCDs the button is all you need to test",
    "No: the button must be pressed five times"
   ],
   "answer": 0,
   "why": "The test button is a mechanical (functional) check; only the instrument times it.",
   "src": "99.pdf (EAL Initial Verification slides) p147; EIC form (IET BS 7671:2018+A4:2026) p5",
   "scene": "You press the RCD test button and it trips.",
   "explain": {
    "what": "The RCD's 'T' button makes a small internal leak to check the mechanism works.",
    "why": "It doesn't tell you how fast it trips. The form has separate columns: 28 for the timed test and 29 for the button.",
    "how": "Instrument first (column 28), button after (column 29).",
    "where": "Test results columns 28-29 (99.pdf slides p147)"
   }
  },
  {
   "type": "choice",
   "q": "Where do you record that the RCD's own test button tripped it?",
   "options": [
    "Column 29, test button operation",
    "Column 28, disconnection time",
    "Column 27, maximum measured Zs",
    "Column 30, AFDD test button"
   ],
   "answer": 0,
   "why": "Column 29 is RCD test button operation; column 30 is for an AFDD's button.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p5",
   "explain": {
    "what": "The RCD part of the test results has two columns: time (28) and test button (29).",
    "why": "Column 30 looks similar but it's for an arc fault detection device (AFDD) with a test button, not the RCD.",
    "how": "Tick column 29 once the button has tripped the RCD.",
    "where": "EIC page 5, columns 28-30"
   },
   "form": {
    "doc": "EIC",
    "page": 5,
    "where": "Schedule of Test Results: RCD",
    "box": "Column 29, Test button operation"
   }
  },
  {
   "type": "order",
   "q": "Put the RCD test in order.",
   "steps": [
    "Set the tester to the RCD's IΔn",
    "Test at 0°, then reset the RCD",
    "Test at 180°, then reset the RCD",
    "Record the slowest time in column 28",
    "Press the RCD's test button and check it trips"
   ],
   "why": "Instrument tests first, reset after each trip, record the slowest, then the button.",
   "src": "99.pdf (EAL Initial Verification slides) p147; EIC form (IET BS 7671:2018+A4:2026) p5",
   "explain": {
    "what": "The slides list the instrument tests, then the test button as the mechanical check.",
    "why": "Each time the RCD trips you must reset it before the next test. The button comes last because it's the functional check, not a timed test.",
    "how": "Keep the same order every time so you never miss the 180° test.",
    "where": "RCD on the board; test results columns 28-29 (99.pdf slides p147)"
   }
  },
  {
   "type": "choice",
   "q": "What do you do?",
   "options": [
    "Stop, get it put right, then retest before you certify",
    "Write 'no trip' in column 28, then sign the EIC as normal",
    "Press the test button instead and carry on",
    "Keep retesting at half rating until it trips"
   ],
   "answer": 0,
   "why": "An EIC confirms the work was tested to BS 7671; a failed RCD can't be certified.",
   "src": "99.pdf (EAL Initial Verification slides) p156; EIC form (IET BS 7671:2018+A4:2026) p7",
   "scene": "Initial verification. A 30 mA RCD won't trip at IΔn.",
   "explain": {
    "what": "On new work, the EIC says the installation was inspected and tested in accordance with BS 7671.",
    "why": "An RCD that doesn't trip gives no additional protection, so you can't certify it. Your course gives these steps for a failed insulation test (stop, put it right, re-inspect, retest), and the same approach makes sense for a failed RCD.",
    "how": "Tell the assessor, record what you found, and only fill column 28 once it passes after the fix.",
    "where": "Test results column 28 (99.pdf slides p156; EIC page 7)"
   }
  },
  {
   "type": "choice",
   "q": "On an EICR, what code do you give this?",
   "options": [
    "C2",
    "C3",
    "FI",
    "C1"
   ],
   "answer": 0,
   "why": "A TT main RCD that fails to operate with the button or the tester is a C2.",
   "src": "49.pdf (EAL Condition Reporting slides) p40",
   "scene": "Periodic inspection. TT board, 100 mA S-type RCD main switch. It doesn't trip on the instrument or the test button.",
   "explain": {
    "what": "On TT, that RCD is the fault protection for the whole installation.",
    "why": "If it doesn't trip, an earth fault might not disconnect: potentially dangerous, C2. It's not C1 because nothing is live to touch right now.",
    "how": "Record the result and write the observation with C2.",
    "where": "EICR observations (49.pdf slides p40)"
   }
  },
  {
   "type": "choice",
   "q": "Which of these counts as an 'other functional test'?",
   "options": [
    "Operating each switch and isolator",
    "Measuring Ze at the origin board",
    "Insulation testing each circuit at 500 V",
    "Nulling the leads before continuity"
   ],
   "answer": 0,
   "why": "Functional testing proves devices work; switch function can also be proved during the short lead continuity test.",
   "src": "99.pdf (EAL Initial Verification slides) p79-80; 99.pdf (EAL Initial Verification slides) p89",
   "scene": "Live testing is done. The last item in CRIPPLER is 'RCD and other functional tests'.",
   "explain": {
    "what": "Functional testing is the last live test: it checks that switches, isolators and devices actually do their job.",
    "why": "Ze and IR are measurements, not functional checks, and nulling leads is set-up. Your slides also note that operating switches during the short lead test proves they work.",
    "how": "Switch each switch and isolator on and off and check it controls what it should; on the test results, tick SPD status and AFDD test buttons where fitted.",
    "where": "Whole board (99.pdf slides p79-80 and p89; EIC page 5)"
   }
  },
  {
   "type": "choice",
   "q": "On the A4 paperwork, how often should the user press the RCD test button?",
   "options": [
    "Every six months",
    "Every three months",
    "Once a year",
    "Only at the next EICR"
   ],
   "answer": 0,
   "why": "The A4 form's guidance says six-monthly.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p7",
   "explain": {
    "what": "The EIC's guidance for recipients tells the user to test their RCD by pressing 'T' or 'Test'.",
    "why": "It says six-monthly. Your older slides say quarterly; follow the A4 form.",
    "how": "Check the notice is fitted at the board when you inspect.",
    "where": "EIC page 7, guidance for recipients (49.pdf slides p49 says quarterly)"
   }
  }
 ]
});
