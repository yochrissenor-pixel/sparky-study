// DRAFT lesson (v2, unit 3) written from Tom's Access Training PDFs and the IET A4:2026 forms. Waiting for Checker + Tom's approval.
window.LESSONS = window.LESSONS || [];
window.LESSONS.push({
 "id": "a3-05",
 "topic": "three-phase",
 "title": "Three-phase on the board",
 "awards": [
  "L3 Initial Verification",
  "L3 Periodic"
 ],
 "status": "draft",
 "unconfirmed": false,
 "note": "Three-phase is thin in the course files: the voltages and 120° come from the theory slides (29.pdf), and the old and new three-phase colours are only in images (302.pdf p128-129), so colours aren't tested here. The 'highest PSCC × 2' rule is from the slides; the A4 form doesn't say how to work out three-phase Ipf.",
 "sources": [
  {
   "file": "29.pdf (Basic Electrical Theory)",
   "ref": "pages given on each question"
  },
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
  "notes": "Isolation pairs, voltages, phase sequence and the form boxes all check out. Three-phase colours aren't tested because they're only shown as pictures in your course files."
 },
 "approved": null,
 "intro": {
  "what": "A three-phase supply is three lines (L1, L2, L3) whose waves are 120° apart, plus neutral and earth. Between any two lines you get 400 V; from any line to neutral or to earth, 230 V.",
  "why": "Both L3 practicals are on a three-phase and single-phase board, so on the day you'll isolate, test and record three-phase readings as well as single-phase ones.",
  "how": [
   "Safe isolation: 10 tests, every pair, not 3",
   "Insulation resistance and polarity: the same pairs, just more of them",
   "Supply polarity: expect 400 V line to line, 230 V line to neutral or earth, 0 V neutral to earth",
   "Fault current: PSCC on each line to neutral, take the highest and double it",
   "Phase sequence: rotating disc or lamp tester on L1, L2, L3 at the origin",
   "Tick 'Phase sequence' on the test results sheet"
  ],
  "where": "At the origin of the three-phase board (and at motor circuits for phase sequence). On the EIC: Section F '3-phase, 4-wire', and the 'Phase sequence' tick box at the top of the Schedule of Test Results.",
  "reason": "Wrong phase sequence makes motors and fans run backwards, and missing one of the 10 isolation tests could leave a line live. Work through the pairs in the same groups every time.",
  "numbers": [
   "10 tests to prove dead: 3 L-L, 3 L-N, 3 L-E, 1 N-E",
   "400 V line to line",
   "230 V line to neutral and line to earth",
   "0 V neutral to earth",
   "Ipf = highest PSCC × 2",
   "Phases 120° apart"
  ]
 },
 "questions": [
  {
   "type": "fill",
   "q": "To prove a three-phase circuit dead you do ___ tests.",
   "answers": [
    "10",
    "ten"
   ],
   "why": "3 line-line, 3 line-neutral, 3 line-earth and 1 neutral-earth.",
   "src": "99.pdf (EAL Initial Verification slides) p26",
   "explain": {
    "what": "Three-phase has five conductors (L1, L2, L3, N, E), so there are more pairs than on single-phase.",
    "why": "Every pair makes 10 tests. Saying 9 forgets N-E.",
    "how": "Prove the tester, do all 10 watching the indicator each time, re-prove the tester.",
    "where": "Three-phase isolator on the board (99.pdf slides p26)"
   }
  },
  {
   "type": "match",
   "q": "Match each group to its tests.",
   "pairs": [
    [
     "Line to line",
     "L1-L2, L2-L3, L3-L1"
    ],
    [
     "Line to neutral",
     "L1-N, L2-N, L3-N"
    ],
    [
     "Line to earth",
     "L1-E, L2-E, L3-E"
    ],
    [
     "Neutral to earth",
     "N-E"
    ]
   ],
   "why": "3 + 3 + 3 + 1 = 10.",
   "src": "99.pdf (EAL Initial Verification slides) p26; 99.pdf (EAL Initial Verification slides) p81",
   "explain": {
    "what": "The same pairs are used for safe isolation, insulation resistance and supply polarity.",
    "why": "Grouping them stops you missing one: three line-line, three line-neutral, three line-earth, one neutral-earth.",
    "how": "Work through the groups in the same order every time.",
    "where": "Three-phase board (99.pdf slides p26 and p81)"
   }
  },
  {
   "type": "choice",
   "q": "Which one have you missed?",
   "options": [
    "N-E",
    "L1-L3",
    "L2-N",
    "L1-E"
   ],
   "answer": 0,
   "why": "N-E is the tenth test and the one people forget.",
   "src": "99.pdf (EAL Initial Verification slides) p26",
   "scene": "Three-phase safe isolation. You've done all the line-line, line-neutral and line-earth tests: 9 in total.",
   "explain": {
    "what": "You need all 10 pairs to prove a three-phase circuit dead.",
    "why": "You've done 3 + 3 + 3 = 9. The missing one is neutral to earth. L1-L3 is the same pair as L3-L1, which you've already done.",
    "how": "Finish every isolation with N-E so it becomes habit.",
    "where": "Three-phase isolator (99.pdf slides p26)"
   }
  },
  {
   "type": "match",
   "q": "Match the measurement to the voltage you expect.",
   "pairs": [
    [
     "Line to line",
     "400 V"
    ],
    [
     "Line to neutral",
     "230 V"
    ],
    [
     "Line to earth",
     "230 V"
    ],
    [
     "Neutral to earth",
     "0 V"
    ]
   ],
   "why": "400 V between lines; 230 V from any line to neutral or earth; 0 V neutral to earth.",
   "src": "29.pdf (Basic Electrical Theory) p149",
   "explain": {
    "what": "A three-phase supply gives two voltages, and the neutral sits at earth potential.",
    "why": "Between any two lines it's 400 V. From any line to neutral or to earth it's 230 V. Neutral to earth is 0 V.",
    "how": "Use these as your expected readings for supply polarity on the three-phase board.",
    "where": "Origin of the three-phase board (29.pdf p149)"
   }
  },
  {
   "type": "choice",
   "q": "What does this reading tell you?",
   "options": [
    "Something's wrong: line to line should be about 400 V",
    "Normal: every reading on a 3-phase board is 230 V",
    "Normal: 230 V is the usual line-to-line voltage here",
    "Fine: the neutral just isn't connected"
   ],
   "answer": 0,
   "why": "Between two lines you expect 400 V; 230 V is line to neutral.",
   "src": "29.pdf (Basic Electrical Theory) p149",
   "scene": "Supply polarity on the three-phase board. L1 to L2 reads 230 V.",
   "explain": {
    "what": "Line to line is between two of L1, L2 and L3.",
    "why": "Two different phases peak at different times, so the voltage between them is 400 V. Reading 230 V means you're not on two different phases, or something is wrong.",
    "how": "Check where your probes are, retest, and don't carry on until it makes sense.",
    "where": "Supply terminals of the three-phase board (29.pdf p149)"
   }
  },
  {
   "type": "choice",
   "q": "What does a phase sequence test check?",
   "options": [
    "That L1, L2, L3 are connected in the right order",
    "That each line reads above 1 MΩ to earth at 500 V",
    "That the RCD trips at 30 mA",
    "That Ze is under 0.35 Ω"
   ],
   "answer": 0,
   "why": "Phase sequence is the order the three lines arrive in.",
   "src": "99.pdf (EAL Initial Verification slides) p153",
   "explain": {
    "what": "Phase sequence (rotation) is the order L1, L2, L3 reach their peak.",
    "why": "Connected in the wrong order, motors and fans can run backwards. The other options are insulation, RCD and Ze tests.",
    "how": "Do it with the supply on, at the origin, after the other live tests.",
    "where": "Origin of the three-phase board (99.pdf slides p153)"
   }
  },
  {
   "type": "match",
   "q": "Phase sequence: match the question to the answer.",
   "pairs": [
    [
     "Instrument",
     "Rotating disc or indicator lamp type"
    ],
    [
     "Where",
     "At the origin (and motor circuits)"
    ],
    [
     "If wrong",
     "Motors or fans run backwards"
    ]
   ],
   "why": "Live test at the origin, with a rotating disc or lamp tester.",
   "src": "99.pdf (EAL Initial Verification slides) p153",
   "explain": {
    "what": "Phase sequence is one of the live tests on a three-phase installation.",
    "why": "The slide gives the instrument (rotating disc or indicator lamp), the position (origin, motor circuits) and the risk (motors or fans running backwards).",
    "how": "Connect the tester's three leads to L1, L2, L3 at the origin and check it shows the right rotation.",
    "where": "Origin and motor circuits (99.pdf slides p153)"
   }
  },
  {
   "type": "choice",
   "q": "Which test would have caught this?",
   "options": [
    "Phase sequence",
    "Insulation resistance at 500 V",
    "RCD at IΔn",
    "Ze at the origin"
   ],
   "answer": 0,
   "why": "Wrong phase order makes motors run backwards.",
   "src": "99.pdf (EAL Initial Verification slides) p153",
   "scene": "A three-phase motor runs backwards after it's connected.",
   "explain": {
    "what": "Phase sequence checks the three lines are in the right order.",
    "why": "Swapping any two lines reverses a three-phase motor. Insulation, RCD and Ze tests don't check rotation.",
    "how": "Do the phase sequence test before anything with a motor is connected and run.",
    "where": "Origin and motor circuits (99.pdf slides p153)"
   }
  },
  {
   "type": "choice",
   "q": "Where do you show phase sequence was checked on the EIC?",
   "options": [
    "'Phase sequence' tick box, test results",
    "Column 27, maximum measured Zs",
    "Column 26, polarity of each circuit",
    "Section F, the nominal voltage box"
   ],
   "answer": 0,
   "why": "The board details at the top of the Schedule of Test Results have 'Confirmed: Phase sequence'.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p5",
   "scene": "Phase sequence at the origin is correct.",
   "explain": {
    "what": "The A4 test results sheet has a 'Confirmed' line for each board: correct polarity and phase sequence.",
    "why": "Column 26 is circuit polarity and column 27 is Zs. Section F is for supply details, not test confirmations.",
    "how": "Tick 'Phase sequence' once the tester shows the right rotation at the origin.",
    "where": "EIC page 5, distribution board details at the top"
   },
   "form": {
    "doc": "EIC",
    "page": 5,
    "where": "Schedule of Test Results: distribution board details",
    "box": "Confirmed: Phase sequence"
   }
  },
  {
   "type": "fill",
   "q": "Record Ipf = ___ kA",
   "answers": [
    "4.6",
    "4.6kA"
   ],
   "why": "Highest PSCC (2.3 kA) doubled = 4.6 kA.",
   "src": "99.pdf (EAL Initial Verification slides) p141",
   "scene": "Three-phase origin. PSCC: L1-N 2.1 kA, L2-N 2.3 kA, L3-N 2.2 kA.",
   "explain": {
    "what": "On three-phase the slide rule is: record each PSCC and double the highest.",
    "why": "The highest is 2.3 kA, and 2.3 × 2 = 4.6 kA.",
    "how": "Circle the biggest of the three, then × 2, then check it's below the breakers' kA.",
    "where": "Three-phase origin; EIC Section F (99.pdf slides p141 and p143)"
   }
  },
  {
   "type": "order",
   "q": "Put the three-phase prove-dead tests in order.",
   "steps": [
    "Prove the voltage indicator on a proving unit",
    "Test the 3 line-to-line pairs",
    "Test the 3 line-to-neutral pairs",
    "Test the 3 line-to-earth pairs and N-E",
    "Re-prove the voltage indicator"
   ],
   "why": "Prove, test all 10 pairs in groups, re-prove.",
   "src": "99.pdf (EAL Initial Verification slides) p26; 99.pdf (EAL Initial Verification slides) p81",
   "scene": "Three-phase board, isolated. You're about to prove it dead.",
   "explain": {
    "what": "Proving dead on three-phase is the same 'prove, test, re-prove' as single-phase, with 10 tests in the middle.",
    "why": "If the indicator failed during the tests, a 'dead' reading would mean nothing, so you prove it before and after. Working in groups means N-E doesn't get forgotten.",
    "how": "Say each pair out loud as you test it, watching the indicator every time.",
    "where": "Three-phase isolator on the board (99.pdf slides p26 and p81)"
   }
  },
  {
   "type": "choice",
   "q": "Why does L1 to L2 read 400 V and not 0 V?",
   "options": [
    "They're 120° apart, so they peak at different times",
    "The neutral adds about 170 V between the lines",
    "The tester adds the two line readings together",
    "L2 is fed at 400 V and L1 at only 230 V"
   ],
   "answer": 0,
   "why": "Three windings spaced evenly round one full cycle: 360 ÷ 3 = 120°, so two lines are never at the same voltage at the same moment.",
   "src": "29.pdf (Basic Electrical Theory) p147; 29.pdf (Basic Electrical Theory) p149; 302.pdf (Domestic Electrical Installer course) p125",
   "scene": "Supply polarity, three-phase board. L1-N reads 230 V and L2-N reads 230 V. L1-L2 reads 400 V.",
   "explain": {
    "what": "A three-phase generator has three sets of windings, each making its own voltage.",
    "why": "They're 120° apart, so they peak at different times. That's why there's 400 V between two lines and not 0 V.",
    "how": "Picture three waves spaced evenly over one cycle. Each line is 230 V to neutral; between two lines it's 400 V, not 230 + 230.",
    "where": "Supply terminals of the three-phase board (29.pdf p147 and p149; 302.pdf p125)"
   }
  },
  {
   "type": "choice",
   "q": "Which 'Number and type of live conductors' box do you tick?",
   "options": [
    "3-phase, 4-wire",
    "3-phase, 3-wire",
    "1-phase, 2-wire",
    "2-phase, 3-wire"
   ],
   "answer": 0,
   "why": "Three lines plus a neutral is four live conductors: 3-phase, 4-wire.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p3",
   "scene": "EIC Section F. The board is fed by L1, L2, L3 and a neutral.",
   "explain": {
    "what": "The neutral counts as a live conductor on the form; earth doesn't.",
    "why": "L1, L2, L3 and N make four, so it's 3-phase, 4-wire. 3-phase, 3-wire would be a supply with no neutral.",
    "how": "Count the lines and the neutral at the origin, then tick the box in Section F.",
    "where": "EIC page 3, Section F"
   },
   "form": {
    "doc": "EIC",
    "page": 3,
    "where": "Section F: Supply characteristics and earthing arrangements",
    "box": "Number and type of live conductors"
   }
  },
  {
   "type": "choice",
   "q": "Which pairs do you insulation test on a three-phase circuit?",
   "options": [
    "Every pair: L-L, L-N, L-E and N-E",
    "Just L1 to earth, as on a single-phase circuit",
    "Each line to neutral only, not to earth",
    "Neutral to earth only"
   ],
   "answer": 0,
   "why": "The slides say the pairs are the same as single-phase, just more of them.",
   "src": "99.pdf (EAL Initial Verification slides) p81",
   "scene": "Three-phase circuit, insulation resistance test.",
   "explain": {
    "what": "Your slides say safe isolation, insulation resistance and supply polarity use the same terminology on single and three-phase.",
    "why": "You test between all the live conductors and from each to earth, the same 10 pairs as isolation. Testing one pair could miss a fault on another.",
    "how": "Use the same four groups as isolation: lines to each other, to neutral, to earth, then N-E.",
    "where": "Three-phase circuits on the board (99.pdf slides p81)"
   }
  }
 ]
});
