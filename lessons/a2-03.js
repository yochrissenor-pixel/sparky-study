// DRAFT lesson (v2) written from Tom's Access Training PDFs and the IET A4:2026 forms. Waiting for Checker + Tom's approval.
window.LESSONS = window.LESSONS || [];
window.LESSONS.push({
 "id": "a2-03",
 "topic": "ring-finals",
 "title": "Ring final, step 1: end-to-end",
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
   "file": "EIC form (IET BS 7671:2018+A4:2026)",
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
  "notes": "All step 1 sums rechecked and correct; the codes match the condition reporting slides."
 },
 "approved": null,
 "intro": {
  "what": "A ring final starts and finishes at the same breaker, so the line, neutral and CPC each form a loop. Step 1 measures each loop end to end at the board: r1 for the line, rn for the neutral and r2 for the CPC.",
  "why": "It proves each loop is complete, with no breaks and no extra resistance from a loose connection at a socket. The numbers you get are what you use to work out what steps 2 and 3 should read.",
  "how": [
   "Isolate, prove dead and null your leads.",
   "At the board, find the two ends: outgoing L1, N1, E1 and returning L2, N2, E2.",
   "Measure L1 to L2: that's r1.",
   "Measure N1 to N2: that's rn.",
   "Measure E1 to E2: that's r2.",
   "Check r1 and rn are about the same, and r2 is about 1.67 × r1 in 2.5/1.5 twin and earth."
  ],
  "where": "At the consumer unit, on the two sets of ring conductors taken out of their terminals. The results go in columns 18 (r1), 19 (rn) and 20 (r2) of the Schedule of Test Results.",
  "reason": "Step 1 numbers are your yardstick for the whole ring test. If they don't make sense, stop and find out why before you cross-connect.",
  "numbers": [
   "r1 ≈ rn (same size, same length)",
   "r2 ≈ r1 × 1.67 for 2.5/1.5 mm² T&E",
   "40 m ring: r1 = rn ≈ 0.29 Ω, r2 ≈ 0.48 Ω"
  ]
 },
 "questions": [
  {
   "type": "choice",
   "q": "What is r1?",
   "options": [
    "Line loop measured end to end",
    "Line to CPC at the last socket",
    "Neutral loop measured end to end",
    "Line to neutral at the board"
   ],
   "answer": 0,
   "why": "r1 is the line conductor of the ring, measured from one end to the other.",
   "src": "99.pdf (EAL Initial Verification slides) p104",
   "explain": {
    "what": "Step 1 is the open loop test: each conductor of the ring is measured end to end at the board.",
    "why": "L to L gives r1, N to N gives rn and E to E gives r2. Line to CPC at a socket is step 3, not step 1.",
    "how": "With both line ends out of the breaker, put one probe on L1 and one on L2.",
    "where": "Ring conductors at the consumer unit (course slides 99.pdf p104)"
   },
   "scene": "Ring final on the assessment board. The assessor points at your schedule and asks what goes in the r1 column."
  },
  {
   "type": "match",
   "q": "Match each step 1 reading to where you put your probes.",
   "pairs": [
    [
     "r1",
     "L1 to L2"
    ],
    [
     "rn",
     "N1 to N2"
    ],
    [
     "r2",
     "E1 to E2"
    ]
   ],
   "why": "Each conductor is measured end to end: L-L, N-N, E-E.",
   "src": "99.pdf (EAL Initial Verification slides) p104; 99.pdf (EAL Initial Verification slides) p107",
   "explain": {
    "what": "A ring has two ends at the board: outgoing (L1, N1, E1) and returning (L2, N2, E2).",
    "why": "Measuring between the two ends of the same conductor gives its whole loop. Line gives r1, neutral gives rn, CPC gives r2.",
    "how": "Pair the ends up by colour first, then test each pair.",
    "where": "Ring conductors at the consumer unit (course slides 99.pdf p104, p107)"
   },
   "scene": "You've taken the ring's six conductors out of the board and paired them up."
  },
  {
   "type": "choice",
   "q": "On the ring slides, what does L2 mean?",
   "options": [
    "The returning line conductor",
    "Line 2 of a three-phase supply",
    "The line terminal at socket 2",
    "The line of a spur"
   ],
   "answer": 0,
   "why": "Outgoing ends are L1, N1, E1; returning ends are L2, N2, E2.",
   "src": "99.pdf (EAL Initial Verification slides) p107",
   "explain": {
    "what": "The course labels the ring's ends before testing: outgoing L1, N1, E1 and returning L2, N2, E2.",
    "why": "On a ring, L2 is just the other end of the same line conductor. It's easy to confuse with L2 on a three-phase board, but that's a different thing.",
    "how": "Identify the outgoing and returning ends at the board before you start any of the ring tests.",
    "where": "Ring ends at the consumer unit (course slides 99.pdf p107)"
   },
   "scene": "Ring final circuit. You've found two line conductors in the same breaker."
  },
  {
   "type": "choice",
   "q": "How should r1 and rn compare?",
   "options": [
    "About the same",
    "rn about double r1",
    "rn about 1.67 × r1",
    "rn close to zero"
   ],
   "answer": 0,
   "why": "Line and neutral are the same size and length, so they read the same.",
   "src": "99.pdf (EAL Initial Verification slides) p108",
   "explain": {
    "what": "r1 and rn are the line and neutral loops of the ring.",
    "why": "In twin and earth both are 2.5 mm² and run the same route, so their resistances should match. The 1.67 ratio is for the smaller CPC, not the neutral.",
    "how": "Compare r1 and rn first: if they're not close, look for a break or a loose connection.",
    "where": "Ring conductors at the board (course slides 99.pdf p108)"
   },
   "scene": "Ring in 2.5/1.5 mm² twin and earth. You've measured r1 and are about to measure rn."
  },
  {
   "type": "fill",
   "q": "In 2.5/1.5 twin and earth, r2 = r1 × ___",
   "answers": [
    "1.67"
   ],
   "why": "The 1.5 mm² CPC has about 1.67 times the resistance of the 2.5 mm² line.",
   "src": "99.pdf (EAL Initial Verification slides) p109",
   "explain": {
    "what": "In twin and earth the CPC is smaller than the line and neutral.",
    "why": "2.5 ÷ 1.5 is about 1.67, so the 1.5 mm² CPC has about 1.67 times the resistance of the same length of 2.5 mm². The slide puts it as 'the CPC has a 1.67× smaller csa'.",
    "how": "Multiply your r1 by 1.67 to check r2 is about right.",
    "where": "Ring CPC at the board (course slides 99.pdf p109)"
   }
  },
  {
   "type": "choice",
   "q": "Is r2 about right?",
   "options": [
    "No: r2 should equal r1",
    "Yes: it's about 1.67 × r1",
    "No: it should be half r1",
    "Can't tell without Ze"
   ],
   "answer": 1,
   "why": "0.52 × 1.67 = 0.87 Ω, close to 0.86 Ω.",
   "src": "99.pdf (EAL Initial Verification slides) p108-109",
   "explain": {
    "what": "Step 1 gives r1, rn and r2 for the ring.",
    "why": "r1 and rn match (0.52 Ω), and 0.52 × 1.67 = 0.868 Ω, which is very close to the 0.86 Ω measured. These are healthy step 1 results.",
    "how": "Check r1 ≈ rn first, then r1 × 1.67 ≈ r2.",
    "where": "Columns 18, 19 and 20 of the schedule (course slides 99.pdf p108-109)"
   },
   "scene": "Ring final, 2.5/1.5 mm² twin and earth. Step 1: r1 = 0.52 Ω, rn = 0.52 Ω, r2 = 0.86 Ω."
  },
  {
   "type": "fill",
   "q": "Expected r2 = 0.45 × 1.67 = ___ Ω",
   "answers": [
    "0.75",
    "0.752",
    "0.7515"
   ],
   "why": "Use the 1.67 ratio to check the CPC loop.",
   "src": "99.pdf (EAL Initial Verification slides) p109",
   "explain": {
    "what": "You can predict r2 from r1 before you measure it.",
    "why": "0.45 × 1.67 = 0.7515, about 0.75 Ω. If r2 comes out far from that, there's a problem in the CPC loop.",
    "how": "Do the sum as soon as you have r1, then see if r2 matches.",
    "where": "Ring CPC at the board (course slides 99.pdf p109)"
   },
   "scene": "Step 1 on a 2.5/1.5 mm² ring: r1 = rn = 0.45 Ω. You haven't measured r2 yet."
  },
  {
   "type": "choice",
   "q": "What does this tell you?",
   "options": [
    "The ring is fine, CPCs often read OL",
    "The CPC ring is broken somewhere",
    "Insulation resistance has failed",
    "The neutral ring is broken"
   ],
   "answer": 1,
   "why": "Open circuit end to end means that loop isn't complete.",
   "src": "99.pdf (EAL Initial Verification slides) p104",
   "explain": {
    "what": "Step 1 proves there are no breaks in each loop.",
    "why": "OL (open circuit) on E1 to E2 means the CPC loop isn't joined up all the way round. Line and neutral are fine because they gave sensible readings.",
    "how": "Stop, don't cross-connect. Find the break, usually a CPC missing from a terminal at a socket.",
    "where": "CPC terminals at the sockets on the ring (course slides 99.pdf p104)"
   },
   "scene": "Step 1: r1 = 0.50 Ω, rn = 0.50 Ω, r2 = OL (open circuit)."
  },
  {
   "type": "choice",
   "q": "Which result looks wrong?",
   "options": [
    "r1, because it's the lowest",
    "rn, because it should match r1",
    "r2, because it's above r1",
    "None of them, all fine"
   ],
   "answer": 1,
   "why": "Line and neutral are the same size and length, so they should read the same.",
   "src": "99.pdf (EAL Initial Verification slides) p104; 99.pdf (EAL Initial Verification slides) p108",
   "explain": {
    "what": "In a healthy ring, r1 ≈ rn and r2 ≈ 1.67 × r1.",
    "why": "0.30 × 1.67 = 0.50, so r2 is fine. But rn is double r1, which suggests extra resistance in the neutral loop, such as a loose neutral at a socket.",
    "how": "Check the neutral terminations round the ring, then re-test.",
    "where": "Neutral terminals at the sockets (course slides 99.pdf p104, p108)"
   },
   "scene": "Step 1: r1 = 0.30 Ω, rn = 0.62 Ω, r2 = 0.50 Ω."
  },
  {
   "type": "choice",
   "q": "What does step 1 prove?",
   "options": [
    "No breaks or loose joints in the loops",
    "No spurs connected anywhere on the ring",
    "Polarity is right at every socket",
    "Insulation is sound between L and earth"
   ],
   "answer": 0,
   "why": "Step 1 proves each loop is complete with no added resistance.",
   "src": "99.pdf (EAL Initial Verification slides) p104",
   "explain": {
    "what": "The course says step 1 proves there are no breaks or added resistance through a loose connection in the socket outlets.",
    "why": "Spurs show up in steps 2 and 3, polarity is proved by steps 2 and 3, and insulation is a separate test.",
    "how": "If step 1 is good, move on to cross-connecting for step 2.",
    "where": "Course slides 99.pdf p104 (open loop test)"
   },
   "scene": "The assessor asks: 'What does your end-to-end test actually prove?'"
  },
  {
   "type": "fill",
   "q": "r1 = 7.41 × 40 ÷ 1000 = ___ Ω",
   "answers": [
    "0.29",
    "0.296",
    "0.3",
    "0.30"
   ],
   "why": "7.41 × 40 = 296 mΩ, about 0.29 Ω. rn is the same.",
   "src": "99.pdf (EAL Initial Verification slides) p118-119",
   "explain": {
    "what": "You can predict r1 from the cable length and 7.41 mΩ/m for 2.5 mm² copper.",
    "why": "7.41 × 40 = about 296 mΩ, ÷ 1000 = 0.296 Ω. The slide shows 0.29 Ω. The neutral is the same size and length, so rn is 0.29 Ω too.",
    "how": "mΩ/m × length ÷ 1000 = ohms.",
    "where": "Course worked example (course slides 99.pdf p117-119)"
   },
   "scene": "Course worked example: a 40 m ring in 2.5/1.5 mm² twin and earth."
  },
  {
   "type": "fill",
   "q": "r2 = 12.1 × 40 ÷ 1000 = ___ Ω",
   "answers": [
    "0.48",
    "0.484"
   ],
   "why": "12.1 × 40 = 484 mΩ = 0.48 Ω (or 0.29 × 1.67).",
   "src": "99.pdf (EAL Initial Verification slides) p120",
   "explain": {
    "what": "The CPC is 1.5 mm², which is 12.1 mΩ/m.",
    "why": "12.1 × 40 = 484 mΩ = 0.484 Ω, shown as 0.48 Ω. The other way, 0.29 × 1.67 = 0.48 Ω, gives the same answer.",
    "how": "Use whichever way is quicker on the day; both should agree.",
    "where": "Course worked example (course slides 99.pdf p120)"
   },
   "scene": "Same 40 m ring in 2.5/1.5 mm² twin and earth."
  },
  {
   "type": "choice",
   "q": "Which columns do r1, rn and r2 go in?",
   "options": [
    "Columns 18, 19 and 20",
    "Columns 21 and 22",
    "Columns 24 and 25",
    "Column 26"
   ],
   "answer": 0,
   "why": "Ring final circuit continuity has its own three columns: r1, rn, r2.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p5",
   "explain": {
    "what": "The Schedule of Test Results has a 'Ring final circuit' group under Continuity.",
    "why": "Column 18 is r1 (line), 19 is rn (neutral), 20 is r2 (CPC). Column 21 is R1 + R2 and 22 is R2; 24 and 25 are insulation resistance; 26 is polarity.",
    "how": "Write step 1 results straight into 18, 19 and 20 for that circuit's row.",
    "where": "EIC page 5, Schedule of Test Results, Continuity: Ring final circuit"
   },
   "scene": "Ring final step 1 done: r1 0.29 Ω, rn 0.29 Ω, r2 0.48 Ω.",
   "form": {
    "doc": "EIC",
    "page": 5,
    "where": "Schedule of Test Results",
    "box": "columns 18 r1 (line), 19 rn (neutral), 20 r2 (CPC)"
   }
  },
  {
   "type": "choice",
   "q": "What code goes on the EICR?",
   "options": [
    "C1",
    "C2",
    "C3",
    "No code needed"
   ],
   "answer": 1,
   "why": "A ring final with a discontinuous conductor is C2, potentially dangerous.",
   "src": "49.pdf (EAL Condition Reporting slides) p41",
   "explain": {
    "what": "On a periodic, faults are given codes. C2 means potentially dangerous.",
    "why": "The course lists 'ring final circuit having a discontinuous conductor' under C2. A broken ring conductor means the ring is no longer a proper ring.",
    "how": "Record it as an observation with C2, which makes the report unsatisfactory.",
    "where": "EICR observations (course slides 49.pdf p41)"
   },
   "scene": "L3 Periodic. Step 1 on an existing ring: r1 and rn are fine but r2 reads OL. The CPC ring is broken."
  }
 ]
});
