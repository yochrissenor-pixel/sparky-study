// DRAFT lesson (v2 rewrite) from the IET A4:2026 EIC form and Tom's Access Training PDFs. Waiting for Checker + Tom's approval.
window.LESSONS = window.LESSONS || [];
window.LESSONS.push({
 "id": "a4-04",
 "topic": "forms",
 "title": "Schedule of test results",
 "awards": [
  "L2 Fundamental",
  "L3 Initial Verification",
  "L3 Periodic"
 ],
 "status": "draft",
 "unconfirmed": true,
 "note": "The insulation resistance test voltage (500 V DC), the 1 MΩ minimum and the 300 ms RCD limit come from your 2018-era course slides (99.pdf p147 and p156). The A4:2026 form only says to use the test voltage given in BS 7671's insulation resistance table, so check that table in your A4 book. The A4 form records only one RCD time, at IΔn; the 5 × IΔn test on your slides isn't recorded on this schedule.",
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
  "verdict": "unconfirmed",
  "notes": "All the board numbers add up and every reading is in the right column of the A4:2026 schedule. The 500 V, 1 MΩ and 300 ms limits come from your older course slides, as the lesson note says, so confirm them in your A4 book."
 },
 "approved": null,
 "intro": {
  "what": "The schedule of test results (EIC page 5, the same on the EICR) is where every reading from the board goes: one row per circuit, columns 17 to 31, in the same order you test: continuity, insulation resistance, polarity, Zs, RCD, AFDD, remarks.",
  "why": "It's the proof you tested every circuit. The assessor checks each number is in the right column and makes sense, for example that Zs is close to Ze + (R1+R2).",
  "how": [
   "Top of the sheet: Zdb and Ipf at this board, tick correct polarity / phase sequence / SPD status, and your instrument serial numbers.",
   "Ring finals only: r1, rn, r2 end to end (columns 18-20).",
   "Every circuit: R1+R2 (column 21) or R2 (column 22). On a ring, R1+R2 is the highest stage 3 reading.",
   "Insulation resistance: test voltage, Live-Live, Live-Earth (columns 23-25).",
   "Polarity (column 26) and Zs maximum measured (column 27).",
   "RCD time at IΔn in ms (column 28), RCD test button (column 29), AFDD test button (column 30).",
   "Remarks (column 31): equipment that testing could damage, a max Zs source, a T3 SPD."
  ],
  "where": "EIC page 5, 'Generic schedule of test results'. Fill each column as you finish that test, not from memory at the end.",
  "reason": "Small r is ring end-to-end only; capital R1+R2 is every circuit. Zs should come out close to Ze + (R1+R2): a number that doesn't add up usually means it's in the wrong box.",
  "numbers": [
   "Ring: R1+R2 ≈ (r1 + r2) ÷ 4",
   "Zs = Ze + (R1+R2)",
   "IR: 500 V DC, minimum 1 MΩ (course slides)",
   "RCD at 1 × IΔn (30 mA): trip under 300 ms (course slides)",
   "Zs must be under 80% of the max Zs (× 0.8)"
  ]
 },
 "questions": [
  {
   "type": "match",
   "q": "Match the column number to its heading.",
   "pairs": [
    [
     "Column 18",
     "r1 (line)"
    ],
    [
     "Column 19",
     "rn (neutral)"
    ],
    [
     "Column 20",
     "r2 (CPC)"
    ],
    [
     "Column 21",
     "(R1 + R2)"
    ],
    [
     "Column 22",
     "R2"
    ],
    [
     "Column 23",
     "Test voltage (V)"
    ]
   ],
   "why": "Columns 18-20 are ring final end-to-end readings; 21-22 are R1+R2 or R2.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p5",
   "explain": {
    "what": "Continuity (Ω) takes up columns 18 to 22, then insulation resistance starts at 23.",
    "why": "r1, rn, r2 (small r) are only for ring finals. R1+R2 (capital R) is for every circuit.",
    "how": "Fill the ring columns only on a ring final; fill column 21 or 22 on every circuit.",
    "where": "EIC form page 5, Generic schedule of test results (same schedule as EICR page 5)."
   }
  },
  {
   "type": "match",
   "q": "Match the column number to its heading.",
   "pairs": [
    [
     "Column 24",
     "Insulation resistance Live - Live (MΩ)"
    ],
    [
     "Column 25",
     "Insulation resistance Live - Earth (MΩ)"
    ],
    [
     "Column 26",
     "Polarity"
    ],
    [
     "Column 27",
     "Zs maximum measured (Ω)"
    ],
    [
     "Column 28",
     "RCD disconnection time (ms)"
    ],
    [
     "Column 31",
     "Remarks"
    ]
   ],
   "why": "After continuity come insulation resistance, polarity, Zs, RCD, AFDD and remarks.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p5",
   "explain": {
    "what": "The right-hand half of the test results sheet follows the test sequence.",
    "why": "Column 29 is RCD test button operation and column 30 is AFDD manual test button operation, between the RCD time and Remarks.",
    "how": "Fill each column as you finish that test so nothing gets missed.",
    "where": "EIC form page 5, columns 24-31."
   }
  },
  {
   "type": "match",
   "q": "You've just tested the board. Match each result to where it goes on the schedule.",
   "pairs": [
    [
     "Ring, CPC end to end: 0.48 Ω",
     "Column 20, r2"
    ],
    [
     "Lights, short-lead reading: 0.62 Ω",
     "Column 21, (R1 + R2)"
    ],
    [
     "Ring, L+N joined, tested to E at 500 V: 150 MΩ",
     "Column 25, Live - Earth"
    ],
    [
     "Ring, Zs at the furthest socket: 0.54 Ω",
     "Column 27, Zs"
    ],
    [
     "Ring RCD, trip time at 30 mA: 24 ms",
     "Column 28, disconnection time"
    ],
    [
     "Pressed the RCD test button: it tripped",
     "Column 29, test button operation"
    ]
   ],
   "why": "Each reading has one home: ring end-to-end in 18-20, R1+R2 in 21, IR in 23-25, Zs in 27, RCD in 28-29.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p5; 99.pdf (EAL Initial Verification slides) p89; 99.pdf (EAL Initial Verification slides) p147",
   "explain": {
    "what": "This is a whole board's worth of readings going onto one schedule.",
    "why": "The short-lead (method 1) reading is R1+R2, so column 21 even though it's not a ring. L+N joined to E is Live - Earth. The RCD time at 1 × IΔn goes in column 28 and the button test is a separate tick in column 29.",
    "how": "Work circuit by circuit, left to right along the row, in the same order you tested.",
    "where": "EIC form page 5, columns 18-29. Also 99.pdf slides p89 (short lead gives R1+R2) and p147 (RCD tests and test button)."
   },
   "scene": "Assessment board, consumer unit DB1 at the origin, TN-C-S, Ze 0.35 Ω. You've just tested it. Circuit 1, lights (B6): short-lead R1+R2 0.62 Ω. Circuit 2, 40 m ring (B32, 30 mA RCD): r1 0.29 Ω, rn 0.29 Ω, r2 0.48 Ω, highest stage 3 reading 0.19 Ω. IR on the ring at 500 V, L+N to E: 150 MΩ. Ring Zs at the furthest socket: 0.54 Ω. RCD: 24 ms at 30 mA, test button trips it."
  },
  {
   "type": "fill",
   "q": "Fill in this box for circuit 2. Column 20, r2 = ___ Ω",
   "answers": [
    "0.48"
   ],
   "why": "r2 is the end-to-end resistance of the ring's CPC.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p5; 99.pdf (EAL Initial Verification slides) p120",
   "explain": {
    "what": "r2 is the stage 1 end-to-end reading of the CPC loop.",
    "why": "It is higher than r1 because the 1.5 mm² CPC is thinner than the 2.5 mm² line: 0.29 × 1.67 ≈ 0.48 Ω, which matches.",
    "how": "Copy your end-to-end CPC reading; r1 (0.29) goes in column 18 and rn (0.29) in column 19.",
    "where": "EIC form page 5, column 20. Also 99.pdf slides p109 and p120."
   },
   "scene": "Assessment board, consumer unit DB1 at the origin, TN-C-S, Ze 0.35 Ω. You've just tested it. Circuit 1, lights (B6): short-lead R1+R2 0.62 Ω. Circuit 2, 40 m ring (B32, 30 mA RCD): r1 0.29 Ω, rn 0.29 Ω, r2 0.48 Ω, highest stage 3 reading 0.19 Ω.",
   "form": {
    "doc": "EIC",
    "page": 5,
    "where": "Generic schedule of test results",
    "box": "Column 20: r2 (CPC)"
   }
  },
  {
   "type": "fill",
   "q": "Fill in this box for circuit 2. Column 21, (R1 + R2) = ___ Ω",
   "answers": [
    "0.19"
   ],
   "why": "For a ring, the highest stage 3 reading is recorded as R1+R2.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p5; 99.pdf (EAL Initial Verification slides) p106; 99.pdf (EAL Initial Verification slides) p123-124",
   "explain": {
    "what": "R1+R2 is the resistance of the line plus CPC from the board to the furthest point.",
    "why": "Don't add r1 and r2 here (that would be 0.77). On a ring the cross-connection gives about (r1 + r2) ÷ 4 = 0.77 ÷ 4 ≈ 0.19, and you record the highest socket reading.",
    "how": "After stage 3, write the highest L-E reading you found at any socket.",
    "where": "EIC form page 5, column 21. Also 99.pdf slides p106 and p123-124."
   },
   "scene": "Assessment board, consumer unit DB1 at the origin, TN-C-S, Ze 0.35 Ω. You've just tested it. Circuit 1, lights (B6): short-lead R1+R2 0.62 Ω. Circuit 2, 40 m ring (B32, 30 mA RCD): r1 0.29 Ω, rn 0.29 Ω, r2 0.48 Ω, highest stage 3 reading 0.19 Ω.",
   "form": {
    "doc": "EIC",
    "page": 5,
    "where": "Generic schedule of test results",
    "box": "Column 21: (R1 + R2)"
   }
  },
  {
   "type": "choice",
   "q": "Circuit 1's short-lead reading (0.62 Ω): which column?",
   "options": [
    "Column 18, r1 (line)",
    "Column 22, R2",
    "Column 21, (R1 + R2)",
    "Column 27, Zs"
   ],
   "answer": 2,
   "why": "Method 1 (short lead) gives R1+R2, so it goes in column 21.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p5; 99.pdf (EAL Initial Verification slides) p89-90",
   "explain": {
    "what": "Columns 21 and 22 are headed '(R1 + R2) or R2': you fill whichever your method gave you.",
    "why": "Method 1 links line to CPC at the board and gives R1+R2. Method 2 (long lead) gives R2 only, which would go in column 22. Columns 18-20 are for ring finals only.",
    "how": "Write the highest reading at the end of the circuit in column 21 and leave 18-20 blank for a radial.",
    "where": "EIC form page 5, columns 21-22. Also 99.pdf slides p89-90."
   },
   "scene": "Assessment board, consumer unit DB1 at the origin, TN-C-S, Ze 0.35 Ω. You've just tested it. Circuit 1, lights (B6): short-lead R1+R2 0.62 Ω. Circuit 2, 40 m ring (B32, 30 mA RCD): r1 0.29 Ω, rn 0.29 Ω, r2 0.48 Ω, highest stage 3 reading 0.19 Ω.",
   "form": {
    "doc": "EIC",
    "page": 5,
    "where": "Generic schedule of test results",
    "box": "Continuity (Ω): (R1 + R2) or R2"
   }
  },
  {
   "type": "fill",
   "q": "Fill in this box for circuit 1. Column 27, Zs = ___ Ω",
   "answers": [
    "0.97"
   ],
   "why": "Zs = Ze + (R1+R2) = 0.35 + 0.62 = 0.97 Ω.",
   "src": "99.pdf (EAL Initial Verification slides) p125; EIC form (IET BS 7671:2018+A4:2026) p5",
   "explain": {
    "what": "Zs is the whole earth fault loop: the supply part (Ze) plus your circuit (R1+R2).",
    "why": "Ze is 0.35 Ω and the lighting R1+R2 is 0.62 Ω, so 0.97 Ω. (For the ring it would be 0.35 + 0.19 = 0.54 Ω.)",
    "how": "Measure Zs at the furthest point and check it is close to Ze + (R1+R2). If your measured reading is very different, re-check before writing it in.",
    "where": "EIC form page 5, column 27. Also 99.pdf slide p125."
   },
   "scene": "Assessment board, consumer unit DB1 at the origin, TN-C-S, Ze 0.35 Ω. You've just tested it. Circuit 1, lights (B6): short-lead R1+R2 0.62 Ω. Circuit 2, 40 m ring (B32, 30 mA RCD): r1 0.29 Ω, rn 0.29 Ω, r2 0.48 Ω, highest stage 3 reading 0.19 Ω. Your Zs reading at the furthest light agrees with the sum.",
   "form": {
    "doc": "EIC",
    "page": 5,
    "where": "Generic schedule of test results",
    "box": "Column 27: Zs (Ω) Maximum measured"
   }
  },
  {
   "type": "fill",
   "q": "Fill in this box. Column 23, Test voltage = ___ V",
   "answers": [
    "500",
    "500V",
    "500 V DC",
    "500VDC"
   ],
   "why": "Insulation resistance on a 230 V circuit is tested at 500 V DC.",
   "src": "99.pdf (EAL Initial Verification slides) p156; EIC form (IET BS 7671:2018+A4:2026) p5",
   "explain": {
    "what": "Column 23 is the voltage your tester applied for the insulation resistance test.",
    "why": "The form's footnote says that on an EIC you test at the test voltage given in BS 7671's insulation resistance table. Your course slides give 500 V DC for 230 V circuits, with 1 MΩ as the minimum.",
    "how": "Write the test voltage you selected on the tester.",
    "where": "EIC form page 5, column 23 and its footnote; 99.pdf slide p156."
   },
   "scene": "Assessment board: insulation resistance test on the 230 V ring final.",
   "form": {
    "doc": "EIC",
    "page": 5,
    "where": "Generic schedule of test results",
    "box": "Column 23: Test voltage‡‡ (V)"
   }
  },
  {
   "type": "choice",
   "q": "Your reading with line and neutral joined, tested to earth, goes in…",
   "options": [
    "Column 24, Live - Live",
    "Column 25, Live - Earth",
    "Column 26, Polarity box",
    "Column 31, as a remark"
   ],
   "answer": 1,
   "why": "Live conductors to earth is the Live - Earth column.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p5; 99.pdf (EAL Initial Verification slides) p127",
   "explain": {
    "what": "Insulation resistance has two columns: between the live conductors, and from the live conductors to earth.",
    "why": "Line and neutral are both 'live' conductors, so (L+N) to E is Live - Earth. Line to neutral would be Live - Live.",
    "how": "Write the reading in MΩ. It must be at least 1 MΩ on your course slides.",
    "where": "EIC form page 5, columns 24-25. Test order from 99.pdf slides p126-127."
   },
   "scene": "Assessment board: on the ring you join line and neutral together and test to earth at 500 V. The tester reads 150 MΩ.",
   "form": {
    "doc": "EIC",
    "page": 5,
    "where": "Generic schedule of test results",
    "box": "Insulation resistance (MΩ): Live - Live / Live - Earth"
   }
  },
  {
   "type": "choice",
   "q": "What do you put in column 26, Polarity, on the EIC?",
   "options": [
    "X, then issue the certificate",
    "Correct it, retest, then mark it correct",
    "Leave it blank",
    "Write 'reversed' in Remarks and issue it"
   ],
   "answer": 1,
   "why": "An 'X' for incorrect polarity cannot go on this schedule with an EIC: fix it first.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p5; 99.pdf (EAL Initial Verification slides) p41",
   "explain": {
    "what": "Column 26 records that polarity is correct.",
    "why": "The form's footnote says an X (incorrect polarity) cannot be entered when the schedule goes with an EIC. Your slides say faults must be put right before you carry on or issue the certificate.",
    "how": "Swap the conductors, retest polarity, then record it as correct. (The form only says an X can't be used; a tick is the usual mark for correct polarity.)",
    "where": "EIC form page 5, column 26 and its footnote. Also 99.pdf slides p41 and p129."
   },
   "scene": "Assessment board: one socket on a new circuit has line and neutral swapped at its terminals.",
   "form": {
    "doc": "EIC",
    "page": 5,
    "where": "Generic schedule of test results",
    "box": "Column 26: Polarity#"
   }
  },
  {
   "type": "fill",
   "q": "Fill in this box. Column 28, RCD disconnection time = ___ ms",
   "answers": [
    "24",
    "24ms"
   ],
   "why": "The A4 schedule records one RCD time: the one at IΔn (30 mA).",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p5; 99.pdf (EAL Initial Verification slides) p147",
   "explain": {
    "what": "Column 28 is the RCD trip time in milliseconds at its rated residual current, IΔn.",
    "why": "The form's footnote says RCD effectiveness is checked with an AC test at IΔn, so you write the 30 mA time (24 ms), not the 5 × IΔn time. 24 ms is well under the 300 ms your slides give at 1 × IΔn.",
    "how": "Test at 1 × IΔn, write the slowest time in ms, then press the test button and tick column 29.",
    "where": "EIC form page 5, column 28 and its footnote; 99.pdf slide p147."
   },
   "scene": "Assessment board, ring's 30 mA RCD. At 1 × IΔn (30 mA) it trips in 24 ms. You also tried 5 × IΔn (150 mA): 12 ms.",
   "form": {
    "doc": "EIC",
    "page": 5,
    "where": "Generic schedule of test results",
    "box": "Column 28: RCD Disconnection time (ms)**"
   }
  },
  {
   "type": "choice",
   "q": "Where do you note that this circuit has equipment that could be damaged by testing?",
   "options": [
    "Column 31, Remarks",
    "Column 26, Polarity",
    "Section D of the EIC",
    "Column 12, max Zs"
   ],
   "answer": 0,
   "why": "The Remarks column asks for details of circuits and/or installed equipment vulnerable to damage when testing.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p5",
   "explain": {
    "what": "Column 31 Remarks is for anything the reader needs to know about the circuit.",
    "why": "Its heading specifically asks for equipment vulnerable to damage when testing. It is also where a max Zs source or T3 SPD details go.",
    "how": "Write a short note against that circuit; use an extra page if needed.",
    "where": "EIC form page 5, column 31."
   },
   "scene": "Assessment board: circuit 5 feeds equipment with electronics that could be damaged by a 500 V insulation test.",
   "form": {
    "doc": "EIC",
    "page": 5,
    "where": "Generic schedule of test results",
    "box": "Column 31: Remarks"
   }
  },
  {
   "type": "fill",
   "q": "Fill in this box. Zdb = ___ Ω",
   "answers": [
    "0.31",
    "0.31Ω"
   ],
   "why": "Zdb is the earth fault loop impedance measured at this distribution board.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p5",
   "explain": {
    "what": "The top of the test results sheet has board details: Zdb and Ipf measured at that board.",
    "why": "These are for that board itself, not one circuit. Ze and Ipf at the origin go in Section F of the certificate.",
    "how": "Measure at the board's incoming terminals and write Zdb in Ω and Ipf in kA.",
    "where": "EIC form page 5, top left 'Distribution board/Consumer unit details'."
   },
   "scene": "Assessment board: at sub-board DB2 you measure an earth fault loop impedance of 0.31 Ω and a prospective fault current of 1.4 kA.",
   "form": {
    "doc": "EIC",
    "page": 5,
    "where": "Distribution board/Consumer unit details",
    "box": "DB/CU reference: … Zdb … Ω  Ipf … kA"
   }
  },
  {
   "type": "choice",
   "q": "What do you write next to 'Multifunction:' in the instruments box?",
   "options": [
    "Its serial or asset number",
    "Its last calibration date",
    "The brand name of the tester",
    "Your own name, in capitals"
   ],
   "answer": 0,
   "why": "The box is headed 'Details of test instruments used (serial and/or asset numbers)'.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p5; 99.pdf (EAL Initial Verification slides) p23",
   "explain": {
    "what": "The instruments box shows exactly which tester produced the results.",
    "why": "If an instrument later turns out to be faulty, the serial number lets the results be traced. Separate lines are given for continuity, IR, loop, RCD and earth electrode testers.",
    "how": "Before you start testing, copy the serial number off your multifunction tester onto the Multifunction line.",
    "where": "EIC form page 5, top right. Also 99.pdf slide p23."
   },
   "form": {
    "doc": "EIC",
    "page": 5,
    "where": "Details of test instruments used (serial and/or asset numbers)",
    "box": "Multifunction: …"
   }
  }
 ]
});
