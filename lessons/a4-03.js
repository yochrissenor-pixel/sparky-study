// DRAFT lesson (v2 rewrite) from the IET A4:2026 EIC form and Tom's Access Training PDFs. Waiting for Checker + Tom's approval.
window.LESSONS = window.LESSONS || [];
window.LESSONS.push({
 "id": "a4-03",
 "topic": "forms",
 "title": "Schedule of circuit details",
 "awards": [
  "L2 Fundamental",
  "L3 Initial Verification",
  "L3 Periodic"
 ],
 "status": "draft",
 "unconfirmed": true,
 "note": "The B32 max Zs of 1.37 Ω is worked out with the formula from your 2018 A2 course (33.pdf p48 and p54: 230 V × 0.95 ÷ 160 A). Check it against the max Zs table for circuit-breakers in your A4:2026 book. Column 3 code A: your Level 4 Design file (368.pdf p24) describes twin and earth as '70C thermoplastic twin and earth', which is what PVC/PVC flat twin and earth is.",
 "sources": [
  {
   "file": "302.pdf (Domestic Electrical Installer course)",
   "ref": "pages given on each question"
  },
  {
   "file": "33.pdf (BS 7671 18th Edition A2 course)",
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
  "notes": "Columns and codes match the A4:2026 schedule. The B32 max Zs of 1.37 Ω is worked out with the course formula (230 × 0.95 ÷ 160) rather than read from a table, so check it in your A4 book; 'reference method 102' is just the course example value for column 4."
 },
 "approved": null,
 "intro": {
  "what": "The schedule of circuit details (EIC page 4, the same on the EICR) has one row per circuit and 16 columns: what the circuit is, its cable, its protective device and its RCD. The strip across the top describes the board itself.",
  "why": "It's the design side of the paperwork. The assessor checks the device, cable and max Zs you record match the board, and the Zs you measure on the test results sheet is compared with column 12.",
  "how": [
   "Top strip: board reference, location, supplied from, SPD type and the board's RCD.",
   "Columns 1-2: circuit number and description.",
   "Columns 3-7: wiring code letter (from the strip at the bottom), reference method, points served, live and CPC sizes.",
   "Columns 8-12: protective device BS (EN), type, rating, breaking capacity in kA, maximum permitted Zs.",
   "Columns 13-16: RCD BS (EN), type, IΔn in mA, rating in A."
  ],
  "where": "EIC page 4, 'Generic schedule of circuit details'. Read the device markings at the board and the cable at its terminals.",
  "reason": "The easy swaps are column 6 (live) with 7 (CPC) and column 15 (mA) with 16 (A). And the breaking capacity must be higher than the Ipf you recorded.",
  "numbers": [
   "2.5/1.5 twin and earth: live 2.5, CPC 1.5",
   "6000 on a breaker = 6 kA",
   "B32 max Zs 1.37 Ω; B20 max Zs 2.19 Ω",
   "Max Zs = 230 × 0.95 ÷ current needed to trip"
  ]
 },
 "questions": [
  {
   "type": "match",
   "q": "Match the column number to its heading.",
   "pairs": [
    [
     "Column 1",
     "Circuit number"
    ],
    [
     "Column 3",
     "Type of wiring"
    ],
    [
     "Column 4",
     "Reference method"
    ],
    [
     "Column 5",
     "Number of points served"
    ],
    [
     "Column 6",
     "Live (mm²)"
    ],
    [
     "Column 7",
     "CPC (mm²)"
    ]
   ],
   "why": "Columns 3 to 7 are the 'Conductor details' part of the schedule.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p4",
   "explain": {
    "what": "Columns 1 to 7 describe the circuit and its cable.",
    "why": "Column 6 is the live conductor size and column 7 the CPC size: they sit under the 'csa' heading together.",
    "how": "Fill across one row per circuit, left to right.",
    "where": "EIC form page 4, Generic schedule of circuit details (the same schedule is EICR page 4)."
   }
  },
  {
   "type": "match",
   "q": "Match the column to the protective device detail.",
   "pairs": [
    [
     "Column 8",
     "BS (EN)"
    ],
    [
     "Column 9",
     "Type"
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
    ]
   ],
   "why": "Columns 8 to 12 are all about the fuse or circuit-breaker protecting the circuit.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p4",
   "explain": {
    "what": "This block describes the overcurrent protective device (fuse or circuit-breaker).",
    "why": "Column 12 is the maximum Zs allowed for that device, which your measured Zs is compared against later.",
    "how": "Read the device itself for columns 8 to 11; get column 12 from the max Zs tables in your BS 7671 book.",
    "where": "EIC form page 4, columns 8-12."
   }
  },
  {
   "type": "match",
   "q": "Match the RCD column to what goes in it.",
   "pairs": [
    [
     "Column 13",
     "BS (EN) of the RCD"
    ],
    [
     "Column 14",
     "Type of RCD"
    ],
    [
     "Column 15",
     "IΔn (mA)"
    ],
    [
     "Column 16",
     "Rating (A)"
    ]
   ],
   "why": "Columns 13 to 16 describe the RCD protecting the circuit.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p4",
   "explain": {
    "what": "The RCD block is at the right-hand end of the circuit details.",
    "why": "Column 15 is the trip current in mA (e.g. 30); column 16 is the current rating in amps. They are easy to swap by mistake.",
    "how": "Copy them from the RCD or RCBO markings.",
    "where": "EIC form page 4, columns 13-16."
   }
  },
  {
   "type": "fill",
   "q": "Fill in this box. Column 6, Live = ___ mm²",
   "answers": [
    "2.5",
    "2.5mm2",
    "2.5mm²"
   ],
   "why": "2.5/1.5 cable has 2.5 mm² live conductors.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p4; 99.pdf (EAL Initial Verification slides) p109",
   "explain": {
    "what": "Column 6 is the cross-sectional area of the live (line and neutral) conductors.",
    "why": "In 2.5/1.5 twin and earth the first number is the live conductors and the second is the CPC.",
    "how": "Write the live size only; the CPC goes in column 7.",
    "where": "EIC form page 4, column 6. Also 99.pdf slide p109."
   },
   "scene": "Assessment board, circuit 3: kitchen ring in 2.5/1.5 mm² PVC/PVC flat twin and earth, serving 10 socket-outlets. Protected by a BS EN 60898 Type B 32 A circuit-breaker marked 6000, and a 30 mA RCD.",
   "form": {
    "doc": "EIC",
    "page": 4,
    "where": "Generic schedule of circuit details",
    "box": "Column 6: Live (mm²)"
   }
  },
  {
   "type": "fill",
   "q": "Fill in this box. Column 7, CPC = ___ mm²",
   "answers": [
    "1.5",
    "1.5mm2",
    "1.5mm²"
   ],
   "why": "The CPC in 2.5/1.5 twin and earth is 1.5 mm².",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p4; 99.pdf (EAL Initial Verification slides) p109",
   "explain": {
    "what": "Column 7 is the size of the circuit protective conductor (the earth).",
    "why": "The CPC in this cable is smaller than the live conductors (about 1.67 times smaller), which is why r2 reads higher than r1.",
    "how": "Write the CPC size from the cable.",
    "where": "EIC form page 4, column 7. Also 99.pdf slide p109."
   },
   "scene": "Assessment board, circuit 3: kitchen ring in 2.5/1.5 mm² PVC/PVC flat twin and earth, serving 10 socket-outlets. Protected by a BS EN 60898 Type B 32 A circuit-breaker marked 6000, and a 30 mA RCD.",
   "form": {
    "doc": "EIC",
    "page": 4,
    "where": "Generic schedule of circuit details",
    "box": "Column 7: CPC (mm²)"
   }
  },
  {
   "type": "fill",
   "q": "Fill in this box. Column 5, Number of points served = ___",
   "answers": [
    "10",
    "ten"
   ],
   "why": "Ten sockets on the circuit means 10 points served.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p4",
   "explain": {
    "what": "Column 5 is how many points (outlets, lights etc.) the circuit feeds.",
    "why": "Count the outlets on the circuit, not the cables.",
    "how": "Count them as you inspect and write the number.",
    "where": "EIC form page 4, column 5."
   },
   "scene": "Assessment board, circuit 3: kitchen ring in 2.5/1.5 mm² PVC/PVC flat twin and earth, serving 10 socket-outlets. Protected by a BS EN 60898 Type B 32 A circuit-breaker marked 6000, and a 30 mA RCD.",
   "form": {
    "doc": "EIC",
    "page": 4,
    "where": "Generic schedule of circuit details",
    "box": "Column 5: Number of points served"
   }
  },
  {
   "type": "fill",
   "q": "Fill in this box. Column 9, Type = ___",
   "answers": [
    "B",
    "Type B"
   ],
   "why": "The breaker is Type B.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p4",
   "explain": {
    "what": "Column 9 is the type of the overcurrent device, e.g. the curve letter on a circuit-breaker.",
    "why": "The BS EN number goes in column 8 and the 32 A rating in column 10; column 9 is only the type.",
    "how": "Read the letter printed before the rating on the breaker (B32 means Type B, 32 A).",
    "where": "EIC form page 4, column 9."
   },
   "scene": "Assessment board, circuit 3: kitchen ring in 2.5/1.5 mm² PVC/PVC flat twin and earth, serving 10 socket-outlets. Protected by a BS EN 60898 Type B 32 A circuit-breaker marked 6000, and a 30 mA RCD.",
   "form": {
    "doc": "EIC",
    "page": 4,
    "where": "Generic schedule of circuit details",
    "box": "Column 9: Type"
   }
  },
  {
   "type": "fill",
   "q": "Fill in this box. Column 11, Breaking capacity = ___ kA",
   "answers": [
    "6",
    "6kA"
   ],
   "why": "The 6000 marking on a BS EN 60898 breaker means a breaking capacity of 6 kA.",
   "src": "99.pdf (EAL Initial Verification slides) p150; 99.pdf (EAL Initial Verification slides) p143; EIC form (IET BS 7671:2018+A4:2026) p4",
   "explain": {
    "what": "Breaking capacity is the largest fault current the device can safely interrupt.",
    "why": "The form asks for kA, so 6000 (amps) is written as 6. Your slides say Ipf must be less than the breaking capacity of the protective devices.",
    "how": "Find the number in a box on the breaker front, convert to kA, and check it is bigger than the Ipf you recorded in Section F.",
    "where": "EIC form page 4, column 11; 99.pdf slides p150 and p143."
   },
   "scene": "Assessment board, circuit 3: kitchen ring in 2.5/1.5 mm² PVC/PVC flat twin and earth, serving 10 socket-outlets. Protected by a BS EN 60898 Type B 32 A circuit-breaker marked 6000, and a 30 mA RCD.",
   "form": {
    "doc": "EIC",
    "page": 4,
    "where": "Generic schedule of circuit details",
    "box": "Column 11: Breaking capacity (kA)"
   }
  },
  {
   "type": "fill",
   "q": "Fill in this box. Column 12, Maximum permitted Zs = ___ Ω",
   "answers": [
    "1.37",
    "1.37Ω",
    "1.37 ohms"
   ],
   "why": "A B32 needs 160 A to trip fast enough: 230 × 0.95 ÷ 160 = 1.37 Ω.",
   "src": "33.pdf (BS 7671 18th Edition A2 course) p48; 33.pdf (BS 7671 18th Edition A2 course) p54; 33.pdf (BS 7671 18th Edition A2 course) p50",
   "explain": {
    "what": "Column 12 is the highest earth fault loop impedance that still lets enough fault current flow to trip the device in time.",
    "why": "Your course shows a Type B 32 A breaker needs 160 A to disconnect in time. Max Zs = 230 V × 0.95 ÷ 160 A ≈ 1.37 Ω (the same sum gives 2.19 Ω for a B20).",
    "how": "On the day copy it from the max Zs table for circuit-breakers in your book. Later, your measured Zs (column 27) should be under 80% of it: 1.37 × 0.8 ≈ 1.10 Ω.",
    "where": "EIC form page 4, column 12. Worked from 33.pdf slides p48, p50 and p54; 80% rule from 99.pdf slide p135."
   },
   "scene": "Assessment board, circuit 3: kitchen ring in 2.5/1.5 mm² PVC/PVC flat twin and earth, serving 10 socket-outlets. Protected by a BS EN 60898 Type B 32 A circuit-breaker marked 6000, and a 30 mA RCD.",
   "form": {
    "doc": "EIC",
    "page": 4,
    "where": "Generic schedule of circuit details",
    "box": "Column 12: Maximum permitted Zs (Ω)"
   }
  },
  {
   "type": "fill",
   "q": "Fill in this box. Column 15, IΔn = ___ mA",
   "answers": [
    "30",
    "30mA"
   ],
   "why": "IΔn of a 30 mA RCD is 30.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p4",
   "explain": {
    "what": "Column 15 is the RCD's rated residual operating current, in milliamps.",
    "why": "Don't put the RCD's current rating (amps) here; that's column 16.",
    "how": "Read the mA figure on the RCD.",
    "where": "EIC form page 4, column 15."
   },
   "scene": "Assessment board, circuit 3: kitchen ring in 2.5/1.5 mm² PVC/PVC flat twin and earth, serving 10 socket-outlets. Protected by a BS EN 60898 Type B 32 A circuit-breaker marked 6000, and a 30 mA RCD.",
   "form": {
    "doc": "EIC",
    "page": 4,
    "where": "Generic schedule of circuit details",
    "box": "Column 15: IΔn (mA)"
   }
  },
  {
   "type": "choice",
   "q": "Which code goes in column 3, Type of wiring?",
   "options": [
    "B",
    "A",
    "F",
    "H"
   ],
   "answer": 1,
   "why": "Code A is 'Thermoplastic insulated/sheathed cables', which is what PVC/PVC flat twin and earth is.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p4",
   "explain": {
    "what": "Column 3 uses the letter codes printed at the bottom of the schedule.",
    "why": "B is thermoplastic cables in metallic conduit, F is thermoplastic SWA, H is mineral insulated. Twin and earth on its own is insulated and sheathed, so A.",
    "how": "Look at the 'Codes for types of wiring' strip and pick the letter; use O 'Other - please state' if nothing fits.",
    "where": "EIC form page 4, bottom: 'Codes for types of wiring'. Your Level 4 Design file (368.pdf p24) calls 2.5 mm² twin and earth '70C thermoplastic twin and earth'."
   },
   "scene": "Assessment board, circuit 3: kitchen ring in 2.5/1.5 mm² PVC/PVC flat twin and earth, serving 10 socket-outlets. Protected by a BS EN 60898 Type B 32 A circuit-breaker marked 6000, and a 30 mA RCD.",
   "form": {
    "doc": "EIC",
    "page": 4,
    "where": "Generic schedule of circuit details",
    "box": "Column 3: Type of wiring"
   }
  },
  {
   "type": "choice",
   "q": "Column 4 asks for the reference method. Where do you get it?",
   "options": [
    "BS 7671's installation methods tables",
    "The DNO's letter about the supply to the job",
    "The printing on the cable sheath",
    "The max Zs tables for breakers"
   ],
   "answer": 0,
   "why": "The reference method comes from the installation methods tables in BS 7671, matched to how the cable is run.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p4; 302.pdf (Domestic Electrical Installer course) p87-88",
   "explain": {
    "what": "The reference method describes how the cable is installed (clipped direct, in insulation, in conduit etc.).",
    "why": "It decides how much current the cable can carry. The max Zs tables are for column 12, not for how the cable is installed, and the cable sheath doesn't tell you how it was run.",
    "how": "Look at how the cable is run on the board and find the matching method in the book. Your course example (twin and earth) uses reference method 102.",
    "where": "EIC form page 4, column 4 and its footnote. Example in 302.pdf p87-88."
   },
   "form": {
    "doc": "EIC",
    "page": 4,
    "where": "Generic schedule of circuit details",
    "box": "Column 4: Reference method"
   }
  },
  {
   "type": "choice",
   "q": "You took column 12's max Zs from the breaker maker's data, not the tables in BS 7671. What else must you do?",
   "options": [
    "Nothing else, it's still fine",
    "Name the source in Remarks (column 31)",
    "Write it in red so it stands out to readers",
    "Leave column 12 blank"
   ],
   "answer": 1,
   "why": "The form's footnote says: state the source of the data in the Remarks, column 31, of the schedule of test results.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p4",
   "explain": {
    "what": "Column 12 is normally taken from the max Zs tables in BS 7671.",
    "why": "If it comes from somewhere else, the reader needs to know where your figure came from, so the form asks you to say so in Remarks.",
    "how": "Write the max Zs in column 12, then on the test results sheet put the source in column 31 for that circuit.",
    "where": "EIC form page 4, column 12 footnote; Remarks column 31 is on page 5."
   },
   "form": {
    "doc": "EIC",
    "page": 4,
    "where": "Generic schedule of circuit details",
    "box": "Column 12: Maximum permitted Zs (Ω)§"
   }
  },
  {
   "type": "choice",
   "q": "How do you fill in the SPD 'Type(s)' boxes at the top of the schedule?",
   "options": [
    "Tick T1 only",
    "Tick both T1 and T2",
    "Tick N/A",
    "Write T1+T2 in Remarks only"
   ],
   "answer": 1,
   "why": "The form's footnote says where a combined T1 + T2 device is installed, tick both Type boxes.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p4",
   "explain": {
    "what": "The SPD details at the top record the type of surge protective device at the board.",
    "why": "A combined device covers two types, so both boxes are ticked. N/A is only when there is no SPD.",
    "how": "Read the SPD markings and tick every type it covers. A T3 device also gets details in Remarks, column 31.",
    "where": "EIC form page 4, top 'Distribution board/Consumer unit details' and its footnotes."
   },
   "scene": "Assessment board: the consumer unit has a combined Type 1 + Type 2 surge protective device (SPD).",
   "form": {
    "doc": "EIC",
    "page": 4,
    "where": "Distribution board/Consumer unit details",
    "box": "SPD Details: Type(s)*: T1 T2 T3† N/A"
   }
  }
 ]
});
