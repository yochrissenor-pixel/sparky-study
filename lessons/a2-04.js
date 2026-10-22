// DRAFT lesson (v2) written from Tom's Access Training PDFs and the IET A4:2026 forms. Waiting for Checker + Tom's approval.
window.LESSONS = window.LESSONS || [];
window.LESSONS.push({
 "id": "a2-04",
 "topic": "ring-finals",
 "title": "Ring final, steps 2 and 3",
 "awards": [
  "L2 Fundamental",
  "L3 Initial Verification",
  "L3 Periodic"
 ],
 "status": "draft",
 "unconfirmed": true,
 "note": "The course slides don't describe in words what the readings look like when your cross-connection is wrong; the 'low near the board, highest in the middle' pattern in this lesson comes from how the ring works, not from a slide. Ask your tutor to confirm. The theory slides print 4 Ω, 13.3 Ω and 5.3 Ω; these are misprints for 0.4 Ω, 1.33 Ω and 0.53 Ω.",
 "sources": [
  {
   "file": "99.pdf (EAL Initial Verification slides)",
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
  "verdict": "unconfirmed",
  "notes": "All sums are right, and the slide misprints (4 Ω, 13.3, 5.3) are corrected and flagged. The wrong cross-connection reading pattern is correct reasoning but isn't on a slide, so confirm it with your tutor."
 },
 "approved": null,
 "intro": {
  "what": "Steps 2 and 3 cross-connect the ring at the board so it becomes a figure of eight, then you test at every socket. Step 2: join L1 to N2 and N1 to L2, then test L–N. Step 3: join L1 to E2 and E1 to L2, then test L–E.",
  "why": "Cross-connected, every socket on a healthy ring reads about the same: a quarter of the step 1 total. A socket reading higher could be a spur, readings that don't fit your sum could mean an interconnection, and the right readings also prove polarity at every socket.",
  "how": [
   "Work out the expected values first: (r1 + rn) ÷ 4 and (r1 + r2) ÷ 4.",
   "Step 2: join L1 to N2 and N1 to L2 at the board.",
   "Test L–N at every socket and compare with (r1 + rn) ÷ 4.",
   "Step 3: join L1 to E2 and E1 to L2 at the board.",
   "Test L–E at every socket and compare with (r1 + r2) ÷ 4.",
   "Record the highest step 3 reading as R1+R2 for the ring.",
   "Zs for the ring = Ze + that R1+R2."
  ],
  "where": "Links at the consumer unit, readings at every socket-outlet on the ring (including any spurs). The ring's R1+R2 goes in column 21 of the Schedule of Test Results.",
  "reason": "Know your quarter sum before you walk round the ring, so a reading that doesn't fit jumps out at you.",
  "numbers": [
   "Step 2 expected = (r1 + rn) ÷ 4",
   "Step 3 expected = (r1 + r2) ÷ 4",
   "Slide example: (0.8 + 0.8) ÷ 4 = 0.4 Ω (the slide misprints it as 4 Ω)",
   "40 m ring: step 2 ≈ 0.14 Ω, step 3 ≈ 0.19 Ω, Zs = 0.35 + 0.19 = 0.54 Ω"
  ]
 },
 "questions": [
  {
   "type": "order",
   "q": "Put the ring final test in order.",
   "steps": [
    "Identify outgoing (L1 N1 E1) and returning (L2 N2 E2) ends",
    "Step 1: r1, rn and r2 end to end",
    "Step 2: cross-connect L and N, test L–N at every socket",
    "Step 3: cross-connect L and CPC, test L–E at every socket",
    "Record the highest step 3 reading as R1+R2"
   ],
   "why": "Each step uses the one before: step 1 values tell you what steps 2 and 3 should read.",
   "src": "99.pdf (EAL Initial Verification slides) p104-107",
   "explain": {
    "what": "The ring test is done in three stages and the course says they must follow the correct order.",
    "why": "You can't work out what steps 2 and 3 should read until you have step 1. R1+R2 for the ring comes from the highest step 3 reading.",
    "how": "Ends, then end-to-end, then L–N, then L–E, then write down the highest L–E.",
    "where": "Consumer unit and every socket on the ring (course slides 99.pdf p104-107)"
   },
   "scene": "New ring final on the assessment board, isolated and proved dead. The assessor says: 'Off you go.'"
  },
  {
   "type": "match",
   "q": "Match each step to how you connect at the board.",
   "pairs": [
    [
     "Step 1",
     "No links: each conductor end to end"
    ],
    [
     "Step 2",
     "L1 to N2 and N1 to L2"
    ],
    [
     "Step 3",
     "L1 to E2 and E1 to L2"
    ]
   ],
   "why": "Steps 2 and 3 cross the ends over so the ring becomes a figure of eight.",
   "src": "99.pdf (EAL Initial Verification slides) p104-106",
   "explain": {
    "what": "Steps 2 and 3 join the outgoing end of one conductor to the returning end of another.",
    "why": "Step 2 crosses line and neutral (L1–N2, N1–L2), step 3 crosses line and CPC (L1–E2, E1–L2). Joining L1 to L2 would just short the line loop out.",
    "how": "Use short links or connector blocks at the board and double-check the pairs before you walk round.",
    "where": "Ring conductors at the consumer unit (course slides 99.pdf p104-106)"
   },
   "scene": "Step 1 is done. You're about to make your links at the board."
  },
  {
   "type": "choice",
   "q": "Why is the step 2 reading a quarter of (r1 + rn)?",
   "options": [
    "Two equal paths in parallel",
    "The tester divides by four",
    "Each socket has four terminals",
    "Cmin knocks off a quarter"
   ],
   "answer": 0,
   "why": "Cross-connected, the ring gives two equal paths in parallel, which halves the resistance.",
   "src": "99.pdf (EAL Initial Verification slides) p114",
   "explain": {
    "what": "The theory slide says two equal resistances in parallel give half.",
    "why": "Cross-connected, line and neutral make one long loop of r1 + rn, and every socket sits halfway round it. So there are two paths of half the loop each, in parallel, and two equal halves in parallel give half of a half: a quarter. The tester doesn't do any maths for you.",
    "how": "Remember: add the two step 1 values together, then divide by 4.",
    "where": "Course slides 99.pdf p114 (ring theory)"
   },
   "scene": "The assessor asks why you divide by four."
  },
  {
   "type": "fill",
   "q": "Expected step 2 = (0.8 + 0.8) ÷ 4 = ___ Ω",
   "answers": [
    "0.4",
    "0.40"
   ],
   "why": "(r1 + rn) ÷ 4 = 1.6 ÷ 4 = 0.4 Ω.",
   "src": "99.pdf (EAL Initial Verification slides) p114",
   "explain": {
    "what": "This is the course's own theory example: open loop r1 = rn = 0.8 Ω.",
    "why": "0.8 + 0.8 = 1.6, and 1.6 ÷ 4 = 0.4 Ω. The slide prints 'R1+Rn = 4Ω', which has lost its decimal point. 4 Ω would be more than the whole loop, which is impossible.",
    "how": "Sense-check every answer: the step 2 value must be smaller than r1 on its own.",
    "where": "Course slides 99.pdf p114 (ring theory, misprinted as 4 Ω)"
   },
   "scene": "Step 1 (end to end): r1 = 0.8 Ω and rn = 0.8 Ω."
  },
  {
   "type": "choice",
   "q": "Expected step 3 = (0.8 + 1.33) ÷ 4 = ?",
   "options": [
    "0.53 Ω",
    "5.3 Ω",
    "0.27 Ω",
    "1.07 Ω"
   ],
   "answer": 0,
   "why": "2.13 ÷ 4 = 0.53 Ω.",
   "src": "99.pdf (EAL Initial Verification slides) p115",
   "explain": {
    "what": "Same theory, now for step 3 with the CPC.",
    "why": "r2 = 0.8 × 1.67 ≈ 1.33 Ω. (0.8 + 1.33) ÷ 4 = 2.13 ÷ 4 = 0.53 Ω.",
    "how": "Work out r2 with the 1.67 ratio, add it to r1, divide by 4.",
    "where": "Course slides 99.pdf p115 (ring theory, misprinted as 13.3 and 5.3)"
   },
   "scene": "Step 1 (end to end): r1 = 0.8 Ω and r2 = 1.33 Ω (2.5/1.5 twin and earth)."
  },
  {
   "type": "fill",
   "q": "Step 2 expected: (0.29 + 0.29) ÷ 4 = ___ Ω",
   "answers": [
    "0.14",
    "0.145",
    "0.15"
   ],
   "why": "0.58 ÷ 4 = 0.145, about 0.14 Ω.",
   "src": "99.pdf (EAL Initial Verification slides) p122",
   "explain": {
    "what": "This is the course's 40 m worked example: r1 = rn = 0.29 Ω, r2 = 0.48 Ω.",
    "why": "0.29 + 0.29 = 0.58, ÷ 4 = 0.145 Ω. The slide rounds it to 0.14 Ω. That's what every socket should read L–N in step 2.",
    "how": "Do this sum before you walk round with your step 2 links in.",
    "where": "Course worked example (course slides 99.pdf p122)"
   },
   "scene": "Worked example, 40 m ring: r1 = rn = 0.29 Ω, r2 = 0.48 Ω."
  },
  {
   "type": "fill",
   "q": "Step 3 expected: (0.29 + 0.48) ÷ 4 = ___ Ω",
   "answers": [
    "0.19",
    "0.1925",
    "0.193"
   ],
   "why": "0.77 ÷ 4 = 0.19 Ω. That's R1+R2 for the ring.",
   "src": "99.pdf (EAL Initial Verification slides) p123-124",
   "explain": {
    "what": "Same 40 m example, step 3.",
    "why": "0.29 + 0.48 = 0.77, ÷ 4 = 0.1925 Ω, about 0.19 Ω. The highest step 3 reading is the ring's R1+R2.",
    "how": "Compare each socket's L–E reading to 0.19 Ω.",
    "where": "Course worked example (course slides 99.pdf p123-124)"
   },
   "scene": "Same 40 m ring: r1 = 0.29 Ω, r2 = 0.48 Ω. Now step 3."
  },
  {
   "type": "fill",
   "q": "Zs of the ring = 0.35 + 0.19 = ___ Ω",
   "answers": [
    "0.54"
   ],
   "why": "Zs = Ze + (R1+R2).",
   "src": "99.pdf (EAL Initial Verification slides) p125",
   "explain": {
    "what": "Zs is the earth fault loop impedance of the circuit: the supply's part (Ze) plus the circuit's part (R1+R2).",
    "why": "0.35 + 0.19 = 0.54 Ω. Use the ring's highest step 3 reading as R1+R2.",
    "how": "On the day, compare this worked-out Zs with the Zs you measure live.",
    "where": "Course worked example (course slides 99.pdf p125)"
   },
   "scene": "Same 40 m ring, R1+R2 = 0.19 Ω. Ze at the origin is 0.35 Ω."
  },
  {
   "type": "choice",
   "q": "What does the 0.55 Ω socket most likely have?",
   "options": [
    "A spur",
    "A broken neutral",
    "Reversed polarity",
    "A perfect connection"
   ],
   "answer": 0,
   "why": "A spur's extra cable adds resistance, so that socket reads higher.",
   "src": "99.pdf (EAL Initial Verification slides) p105",
   "explain": {
    "what": "Cross-connected, every socket on the ring itself reads about the same.",
    "why": "The course says a socket with a higher value could indicate a spur: the extra length of cable to the spur adds to the reading. Reversed polarity would stop you getting a sensible reading at all.",
    "how": "Look at that socket: is it fed by a single cable off the ring? Check the spur is allowed.",
    "where": "That socket-outlet on the ring (course slides 99.pdf p105)"
   },
   "scene": "Step 3 readings round the ring: 0.40, 0.41, 0.40, 0.55, 0.40 Ω. You expected 0.40 Ω."
  },
  {
   "type": "choice",
   "q": "What do you write as R1+R2 for the ring?",
   "options": [
    "0.19 Ω",
    "0.18 Ω",
    "0.185 Ω",
    "0.37 Ω"
   ],
   "answer": 0,
   "why": "R1+R2 for the ring is the highest step 3 reading.",
   "src": "99.pdf (EAL Initial Verification slides) p106; 99.pdf (EAL Initial Verification slides) p124",
   "explain": {
    "what": "The course says the highest value on the step 3 test is the R1+R2 for the ring.",
    "why": "The highest is the worst case, which is what your Zs depends on. An average or the lowest would make the circuit look better than it is.",
    "how": "Write the highest step 3 reading in column 21.",
    "where": "Column 21 (R1 + R2) of the Schedule of Test Results (course slides 99.pdf p106, p124)"
   },
   "scene": "Step 3 readings round the ring are all between 0.18 and 0.19 Ω.",
   "form": {
    "doc": "EIC",
    "page": 5,
    "where": "Schedule of Test Results",
    "box": "column 21: Continuity (Ω) (R1 + R2)"
   }
  },
  {
   "type": "choice",
   "q": "What should you check first?",
   "options": [
    "Your cross-connection at the board",
    "The RCD, it may have tripped",
    "Your tester's 500 V setting",
    "Nothing, the readings are fine"
   ],
   "answer": 0,
   "why": "On a correctly cross-connected ring, every socket reads about the same.",
   "src": "99.pdf (EAL Initial Verification slides) p105; 99.pdf (EAL Initial Verification slides) p110",
   "explain": {
    "what": "With the right links (L1 to N2, N1 to L2), every socket on a healthy ring reads close to (r1 + rn) ÷ 4.",
    "why": "Readings that start low near the board and rise towards the middle are not the even pattern you should get. The most likely cause is the links joining the wrong ends, for example L1 to N1 instead of L1 to N2.",
    "how": "Go back to the board, check each link joins an outgoing end to the opposite returning end, then re-test.",
    "where": "Links at the consumer unit (course slides 99.pdf p105, p110)"
   },
   "scene": "Step 2. Your sum says 0.30 Ω at every socket. Sockets near the board read about 0.05 Ω, the middle socket reads 0.30 Ω, and readings drop again towards the other end."
  },
  {
   "type": "choice",
   "q": "What are the two most likely causes?",
   "options": [
    "A spur or an interconnection",
    "A tripped RCD or a low Ze",
    "A flat battery or high IR",
    "Wrong test voltage or a bad lamp"
   ],
   "answer": 0,
   "why": "Readings that don't match your sum could mean a spur or an interconnection.",
   "src": "99.pdf (EAL Initial Verification slides) p105",
   "explain": {
    "what": "Steps 2 and 3 compare the reading at each socket with the value you worked out from step 1.",
    "why": "The course says a higher reading could indicate a spur, and to ask whether the number of sockets is right or whether there's an interconnection (the ring joined across itself or to something else).",
    "how": "Note which sockets don't fit, then look at how they're wired.",
    "where": "Sockets on the ring (course slides 99.pdf p105)"
   },
   "scene": "Step 2 readings at several sockets don't match the value you worked out."
  },
  {
   "type": "choice",
   "q": "Have you proved polarity on this ring?",
   "options": [
    "No, it needs a separate test",
    "Yes: steps 2 and 3 prove it",
    "Only for the CPC",
    "Only if you test it live"
   ],
   "answer": 1,
   "why": "Getting the expected readings in steps 2 and 3 means the conductors are in the right terminals.",
   "src": "99.pdf (EAL Initial Verification slides) p112-113; 99.pdf (EAL Initial Verification slides) p130",
   "explain": {
    "what": "The course says polarity of a ring has already been proved if all three stages were completed.",
    "why": "A reading L–N in step 2 proves the CPC is in the right place; a reading L–E in step 3 proves L and N are in the right places. Together, that's polarity at every socket.",
    "how": "Tell the assessor polarity is proved by steps 2 and 3, and tick column 26.",
    "where": "Every socket on the ring (course slides 99.pdf p112-113, p130)"
   },
   "scene": "All three steps done and every socket matches your sums. The assessor asks about polarity."
  },
  {
   "type": "choice",
   "q": "What code goes on the EICR?",
   "options": [
    "C1",
    "C2",
    "C3",
    "FI"
   ],
   "answer": 1,
   "why": "A ring cross-connected with another circuit is C2, potentially dangerous.",
   "src": "49.pdf (EAL Condition Reporting slides) p42",
   "explain": {
    "what": "The course lists both 'inconsistent resistance values for the conductors of ring final circuits' and 'ring final circuit cross-connected with other circuit' under C2.",
    "why": "C2 is potentially dangerous: conductors could carry more current than their device protects. C3 and FI don't make the report unsatisfactory, so they're too weak for this.",
    "how": "Write it up as an observation with C2.",
    "where": "EICR observations (course slides 49.pdf p42)"
   },
   "scene": "L3 Periodic. Step 2 readings are all over the place, and you find the ring's neutral is joined to another circuit."
  }
 ]
});
