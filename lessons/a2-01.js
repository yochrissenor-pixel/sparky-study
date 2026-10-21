// DRAFT lesson (v2) written from Tom's Access Training PDFs and the IET A4:2026 forms. Waiting for Checker + Tom's approval.
window.LESSONS = window.LESSONS || [];
window.LESSONS.push({
 "id": "a2-01",
 "topic": "dead-tests",
 "title": "The test sequence and why",
 "awards": [
  "L2 Fundamental",
  "L3 Initial Verification",
  "L3 Periodic"
 ],
 "status": "draft",
 "unconfirmed": false,
 "sources": [
  {
   "file": "99.pdf (EAL Initial Verification slides)",
   "ref": "pages given on each question"
  },
  {
   "file": "302.pdf (Domestic Electrical Installer course)",
   "ref": "pages given on each question"
  },
  {
   "file": "49.pdf (EAL Condition Reporting slides)",
   "ref": "pages given on each question"
  }
 ],
 "checker": {
  "by": "Claude Checker",
  "date": "2026-10-12",
  "verdict": "pass",
  "notes": "The test order and what to do after a low insulation reading match the slides exactly."
 },
 "approved": null,
 "intro": {
  "what": "Before any power goes on, you do the dead tests in a set order: continuity of protective conductors (including bonding), ring final continuity, insulation resistance, then polarity. The live tests (supply polarity, Ze and Zs, fault current, RCD and functional tests) come after.",
  "why": "Each test leans on the one before. You need to know the earth path is there and the insulation is sound before you trust the circuit with voltage, and a test that fails changes what you have to do next.",
  "how": [
   "Safe isolation: prove the board dead before you start.",
   "C: continuity of protective conductors, including main and supplementary bonding.",
   "R: ring final continuity (three steps).",
   "I: insulation resistance.",
   "P: polarity (often already proved during the continuity test).",
   "Then the live tests: supply polarity, Ze and Zs, fault current, RCD and functional tests.",
   "If a test fails: stop, fix it, re-inspect, then redo continuity and insulation resistance before carrying on in order."
  ],
  "where": "On the assessment test board, circuit by circuit, writing each result on the Schedule of Test Results as you go.",
  "reason": "Say CRIPPLER in your head on the day. A failed test sends you back to re-test after the repair, never forward to the next test.",
  "numbers": [
   "CRIPPLER = Continuity, Ring, Insulation, Polarity (dead), Polarity (supply), Loop impedance, Earth fault and short-circuit current, RCD and functional",
   "First three on a new radial: continuity, insulation resistance, polarity",
   "Insulation resistance pass: more than 1 MΩ at 500 V DC"
  ]
 },
 "questions": [
  {
   "type": "order",
   "q": "Put the test sequence (CRIPPLER) in order.",
   "steps": [
    "Continuity of protective conductors",
    "Ring final continuity",
    "Insulation resistance",
    "Polarity (dead)",
    "Supply polarity",
    "Loop impedance (Ze, Zs)",
    "Earth fault and short-circuit current",
    "RCD and functional tests"
   ],
   "why": "Dead tests first (C, R, I, P), then the live ones (P, L, E, R).",
   "src": "99.pdf (EAL Initial Verification slides) p80",
   "explain": {
    "what": "CRIPPLER is the course's memory word for the order you test in.",
    "why": "The first four are dead tests, done with the supply isolated. Only once they pass do you put power on for supply polarity, loop impedance, fault current and the RCD.",
    "how": "Write CRIPPLER down the side of your scrap paper before you start and tick each letter off as you go.",
    "where": "Whole assessment board, every circuit (course slides 99.pdf p80)"
   },
   "scene": "Assessment board, isolated and proved dead. The assessor asks you to talk through your plan before you pick up the tester."
  },
  {
   "type": "choice",
   "q": "Which test do you do first?",
   "options": [
    "Insulation resistance of the circuit",
    "Continuity of protective conductors",
    "Earth fault loop impedance (Zs)",
    "Polarity of switches and sockets"
   ],
   "answer": 1,
   "why": "Continuity of the protective conductors always comes first.",
   "src": "99.pdf (EAL Initial Verification slides) p87",
   "explain": {
    "what": "The course question 'first three tests on a new radial' has the answer: continuity of protective conductors, insulation resistance, polarity.",
    "why": "You need to know the earth path is complete before anything else. Insulation resistance is the tempting answer because it's the 'big' test, but it comes second.",
    "how": "Null your leads, link line to CPC at the board and start the R1+R2 test.",
    "where": "At the consumer unit and every point on the radial (course slides 99.pdf p87)"
   },
   "scene": "New radial socket circuit on the assessment board. It's isolated, proved dead and your tester has passed its CABINS checks."
  },
  {
   "type": "order",
   "q": "Put the first six tests on a new radial in order.",
   "steps": [
    "Continuity of protective conductors",
    "Insulation resistance",
    "Polarity",
    "Earth fault loop impedance",
    "RCD",
    "Function test"
   ],
   "why": "Three dead tests, then three live ones.",
   "src": "99.pdf (EAL Initial Verification slides) p88",
   "explain": {
    "what": "This is the course's own question: the first six tests on a newly installed radial circuit.",
    "why": "Continuity, insulation resistance and polarity are done dead. Loop impedance, the RCD test and the function test need the supply on, so they come after.",
    "how": "Think 'prove it's wired right dead, then prove it works live'.",
    "where": "On the radial, from the board out to each point (course slides 99.pdf p88)"
   },
   "scene": "A radial circuit (no ring) on the board. The assessor says: 'Walk me through your first six tests.'"
  },
  {
   "type": "choice",
   "q": "Can you do the Zs test now?",
   "options": [
    "Yes, if the circuit has RCD protection",
    "No: the dead tests must pass first",
    "Yes, the order only matters on paper",
    "Only if Ze is under 0.35 Ω"
   ],
   "answer": 1,
   "why": "Live tests come after the dead tests have all passed.",
   "src": "99.pdf (EAL Initial Verification slides) p78-80",
   "explain": {
    "what": "The course splits testing into dead tests (continuity, ring, insulation resistance, polarity) and live tests (supply polarity, loop impedance, fault current, RCD).",
    "why": "Zs is a live test. Putting the supply on before you've proved the CPC and the insulation means you don't yet know the circuit is safe to energise. RCD protection or a low Ze doesn't change that.",
    "how": "Finish continuity, insulation resistance and polarity on the circuit, then move on to live tests.",
    "where": "Order of tests on the board (course slides 99.pdf p78-80)"
   },
   "scene": "The clock's ticking. You've done R1+R2 on the cooker circuit but not insulation resistance, and you'd like to grab its Zs while you're there."
  },
  {
   "type": "match",
   "q": "Match each dead test to what it proves.",
   "pairs": [
    [
     "Continuity of protective conductors",
     "The CPC is complete out to every point"
    ],
    [
     "Ring final continuity",
     "Each loop of the ring is unbroken"
    ],
    [
     "Insulation resistance",
     "No leakage between conductors or to earth"
    ],
    [
     "Polarity",
     "Switches and fuses are in the line conductor"
    ]
   ],
   "why": "Each dead test proves one thing about the wiring before power goes on.",
   "src": "99.pdf (EAL Initial Verification slides) p89; 99.pdf (EAL Initial Verification slides) p104; 99.pdf (EAL Initial Verification slides) p126; 99.pdf (EAL Initial Verification slides) p129",
   "explain": {
    "what": "The four dead tests each answer one question about the wiring.",
    "why": "Continuity proves the earth path; the ring test proves each ring loop has no breaks; insulation resistance proves the insulation holds; polarity proves single-pole devices are in the line.",
    "how": "When the assessor asks 'what are you proving?', answer with the right-hand side of this match.",
    "where": "Board and circuits (course slides 99.pdf p89, p104, p126, p129)"
   },
   "scene": "The assessor asks: 'What does each of your dead tests actually prove?'"
  },
  {
   "type": "choice",
   "q": "What do you do first?",
   "options": [
    "Record it and move on to polarity",
    "Stop work",
    "Re-test it at 250 V DC",
    "Do an RCD test to see if it trips"
   ],
   "answer": 1,
   "why": "Under 1 MΩ at 500 V DC is a fail: stop.",
   "src": "99.pdf (EAL Initial Verification slides) p156",
   "explain": {
    "what": "Insulation resistance on a 230 V circuit is tested at 500 V DC and must be more than 1 MΩ.",
    "why": "The course answer starts with 'stop work'. Recording a fail and carrying on means you'd go on to live tests on a circuit with faulty insulation. Dropping the voltage just hides the problem.",
    "how": "Stop, tell the assessor what you found, then find the fault.",
    "where": "Insulation resistance at the board (course slides 99.pdf p156)"
   },
   "scene": "Insulation resistance on a 230 V socket circuit at 500 V DC. Line to earth reads 0.6 MΩ."
  },
  {
   "type": "order",
   "q": "Put what you do in order.",
   "steps": [
    "Stop work",
    "Carry out the repair (replace the damaged cable)",
    "Re-inspect",
    "Re-test continuity",
    "Re-test insulation resistance",
    "Carry on with the next test in the sequence"
   ],
   "why": "Fix it, then go back over the earlier tests before carrying on.",
   "src": "99.pdf (EAL Initial Verification slides) p156",
   "explain": {
    "what": "This is the course's answer to 'you get less than 1 MΩ, what do you do?'",
    "why": "After a repair you go back to inspection and continuity, because the repair disturbed the circuit. Only once IR is over 1 MΩ do you carry on, keeping to the correct sequence.",
    "how": "Remember 'stop, fix, look, continuity, IR, carry on'.",
    "where": "On the faulty circuit (course slides 99.pdf p156)"
   },
   "scene": "Insulation resistance on a radial reads under 1 MΩ. You trace it to a nicked cable."
  },
  {
   "type": "choice",
   "q": "Why redo continuity, not just insulation resistance?",
   "options": [
    "The repair could have disturbed the CPC",
    "Continuity tests are needed every hour",
    "IR testing changes the R1+R2 value",
    "So the leads can be nulled again"
   ],
   "answer": 0,
   "why": "New cable and new terminations mean the earth path has to be proved again.",
   "src": "99.pdf (EAL Initial Verification slides) p156",
   "explain": {
    "what": "The course's list after a low IR reading goes: repair, re-inspect, continuity again, then IR again.",
    "why": "Replacing a cable means new connections, including the CPC. Until you've re-tested continuity you don't know the earth path is still complete. IR testing doesn't change R1+R2.",
    "how": "After any repair, start again from the top of the dead tests for that circuit.",
    "where": "On the repaired circuit (course slides 99.pdf p156)"
   },
   "scene": "You've replaced the damaged length of cable that gave a low insulation resistance reading."
  },
  {
   "type": "choice",
   "q": "What now?",
   "options": [
    "Go straight to RCD testing",
    "Carry on with polarity, in sequence",
    "Re-test Ze at the origin first",
    "Repeat the IR test at 1000 V"
   ],
   "answer": 1,
   "why": "Once IR passes you carry on in the correct sequence.",
   "src": "99.pdf (EAL Initial Verification slides) p156",
   "explain": {
    "what": "The course says once IR is over 1 MΩ you can safely carry on with the other tests, keeping to the correct sequence.",
    "why": "The next dead test after insulation resistance is polarity. Jumping to the RCD skips polarity and the other live tests in between.",
    "how": "Pick up where CRIPPLER says you are: after I comes P.",
    "where": "Back on the test board (course slides 99.pdf p156)"
   },
   "scene": "After the repair you re-inspect, re-test continuity (good) and re-test IR: over 200 MΩ."
  },
  {
   "type": "choice",
   "q": "When can dead polarity be done?",
   "options": [
    "Only after the live tests are done",
    "During the continuity (R1+R2) test",
    "Only with a separate 500 V test",
    "Only once the RCD has been tested"
   ],
   "answer": 1,
   "why": "Operating the switches during the short lead test proves polarity.",
   "src": "302.pdf (Domestic Electrical Installer course) p142; 99.pdf (EAL Initial Verification slides) p130",
   "explain": {
    "what": "Polarity is the last dead test, but you can prove it during the first one.",
    "why": "The 302 course lists polarity as 'can be done in step 1', and the 99 slides say the short lead test proves polarity when you operate the switches. It isn't a 500 V test, and it isn't a live test.",
    "how": "While you're doing R1+R2 at each light, have the switch operated and watch the reading come and go.",
    "where": "Lighting points and switches (302.pdf p142; course slides 99.pdf p130)"
   },
   "scene": "Lighting radial. You're about to start the short lead R1+R2 test at each point."
  },
  {
   "type": "choice",
   "q": "Why are there two Ps in CRIPPLER?",
   "options": [
    "Two polarity checks: dead wiring, then live supply",
    "One P is for the PFC, the other for polarity",
    "Polarity is tested twice to be sure of it",
    "One is for PAT and one for the circuits"
   ],
   "answer": 0,
   "why": "Dead polarity of the wiring, then supply polarity once it's live.",
   "src": "99.pdf (EAL Initial Verification slides) p80",
   "explain": {
    "what": "CRIPPLER has P for dead polarity and P for supply polarity.",
    "why": "The first checks your wiring with the supply off. The second checks the incoming supply is the right way round once the supply is on. PFC is the E (earth fault and short-circuit current).",
    "how": "Dead polarity sits with the dead tests; supply polarity is your first live test.",
    "where": "Your circuits first, then the supply at the origin (course slides 99.pdf p80)"
   },
   "scene": "You're explaining CRIPPLER to the assessor and they ask about the two Ps."
  },
  {
   "type": "fill",
   "q": "In CRIPPLER, the I stands for ___ resistance.",
   "answers": [
    "insulation",
    "insulation resistance"
   ],
   "why": "Insulation resistance is the third test, after continuity and ring.",
   "src": "99.pdf (EAL Initial Verification slides) p80",
   "explain": {
    "what": "CRIPPLER: Continuity, Ring, Insulation resistance, Polarity, Polarity, Loop, Earth fault current, RCD.",
    "why": "Insulation resistance comes after both continuity tests because you want the earth path proved first.",
    "how": "Remember 'C and R for continuity, then I for insulation'.",
    "where": "Course slides 99.pdf p80 (test sequence)"
   }
  },
  {
   "type": "choice",
   "q": "Do you have to follow the strict test order?",
   "options": [
    "Yes, exactly the same as a new install",
    "No, it's not fixed in the same way",
    "Only the live tests are in order",
    "There are no tests on a periodic"
   ],
   "answer": 1,
   "why": "On a periodic you're confirming it's still safe, not certifying new work.",
   "src": "49.pdf (EAL Condition Reporting slides) p62",
   "explain": {
    "what": "The course asks if periodic testing follows the same set order as initial verification.",
    "why": "Its answer is no: the installation was verified and safe when it went into service, so you're confirming it's safe for continued use. It is still tested, and you still prove things dead before you work on them.",
    "how": "On the periodic board, choose the tests that fit and record what you did.",
    "where": "Periodic inspection, EICR (course slides 49.pdf p62)"
   },
   "scene": "L3 Periodic assessment. An existing installation that's been in use for years."
  }
 ]
});
