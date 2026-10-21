// DRAFT lesson (v2) written from Tom's Access Training PDFs and the IET A4:2026 forms. Waiting for Checker + Tom's approval.
window.LESSONS = window.LESSONS || [];
window.LESSONS.push({
 "id": "a2-02",
 "topic": "dead-tests",
 "title": "Continuity of protective conductors and bonding",
 "awards": [
  "L2 Fundamental",
  "L3 Initial Verification",
  "L3 Periodic"
 ],
 "status": "draft",
 "unconfirmed": false,
 "note": "The course slides don't give a target value for main or supplementary bonding readings, so this lesson doesn't use one. Ask your tutor what reading the assessor expects for bonding.",
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
  "notes": "All sums rechecked (the 65 m one is 1.268 Ω, the slide shows 1.26 Ω; both are accepted). The slides give no target value for bonding readings, and the note says so."
 },
 "approved": null,
 "intro": {
  "what": "Continuity tests prove the protective conductors (CPCs) and bonding conductors are unbroken and connected. There are two methods: the short lead method (link line to CPC at the board and read R1+R2 at each point) and the long lead or wander lead method, which reads one conductor (R2).",
  "why": "If a CPC or bond is broken, a fault can leave metalwork live. The R1+R2 value also goes into your Zs sum (Zs = Ze + R1+R2), so a wrong reading spoils later results too.",
  "how": [
   "Null your leads (the N in CABINS is for continuity).",
   "Short lead: link line and CPC together at the board.",
   "Test line to CPC at every point, operating switches as you go.",
   "Record the highest reading (the furthest point) as R1+R2.",
   "Long lead: from the main earthing terminal (MET) to the far end of the conductor, e.g. the pipe beyond the bonding clamp, for R2.",
   "Compare each reading with what the cable should give: mΩ/m × length ÷ 1000."
  ],
  "where": "Short lead: a link at the consumer unit, then every socket, light or point. Long lead: from the MET out to bonded pipes. R1+R2 goes in column 21, R2 in column 22 of the Schedule of Test Results; the earthing and bonding ticks are in Section G of the EIC.",
  "reason": "Work out roughly what the reading should be before you take it. Far too low or far too high means stop and find out why, not write it down.",
  "numbers": [
   "2.5 mm² copper 7.41 mΩ/m, 1.5 mm² copper 12.1 mΩ/m",
   "2.5/1.5 T&E: R1+R2 = (7.41 + 12.1) × length ÷ 1000",
   "65 m radial ≈ 1.26 Ω; 30 m radial ≈ 0.59 Ω",
   "Zs = Ze + (R1+R2)"
  ]
 },
 "questions": [
  {
   "type": "match",
   "q": "Match each continuity method to what it gives you.",
   "pairs": [
    [
     "Short lead (link line to CPC at the board)",
     "R1+R2, best for circuit CPCs"
    ],
    [
     "Long lead (wander lead)",
     "R2, best for main and supplementary bonding"
    ],
    [
     "Short lead while operating the switch",
     "Proves polarity and switch function"
    ]
   ],
   "why": "Short lead reads the whole line-and-CPC loop; long lead reads one conductor.",
   "src": "99.pdf (EAL Initial Verification slides) p89-90",
   "explain": {
    "what": "The course gives two continuity methods: Method 1 the short lead, Method 2 the long lead.",
    "why": "Linking line to CPC at the board turns them into one loop, so you read R1+R2. The long lead stretches from the MET to the far end of one conductor, so you read R2 on its own.",
    "how": "Use the short lead on final circuits and the long lead on main and supplementary bonding.",
    "where": "Board, final circuits and bonding conductors (course slides 99.pdf p89-90)"
   },
   "scene": "Your test sheet lists continuity on a radial socket circuit, a lighting circuit and the main bonding."
  },
  {
   "type": "order",
   "q": "Put the short lead method in order.",
   "steps": [
    "Null the leads",
    "Link line and CPC at the board",
    "Test line to CPC at every point on the circuit",
    "Record the highest (furthest) reading as R1+R2"
   ],
   "why": "Null first so the leads don't add to every reading.",
   "src": "99.pdf (EAL Initial Verification slides) p24; 99.pdf (EAL Initial Verification slides) p96",
   "explain": {
    "what": "The short lead method gives R1+R2: the line and CPC resistance added together.",
    "why": "Nulling takes the lead resistance off. The link at the board makes the loop, and testing every point proves the CPC reaches all of them. The furthest point has the most cable, so it's the highest reading.",
    "how": "Fit a short link between the circuit's line and CPC at the board, then walk the circuit with your tester.",
    "where": "Consumer unit and every point on the circuit (course slides 99.pdf p24, p96)"
   },
   "scene": "Radial socket circuit on the board, isolated and proved dead."
  },
  {
   "type": "choice",
   "q": "What has that proved?",
   "options": [
    "The switch is in the neutral",
    "The switch is in the line and works",
    "The CPC is joined to the neutral",
    "Insulation resistance is good"
   ],
   "answer": 1,
   "why": "With line linked to CPC, only a switch in the line can break the reading.",
   "src": "99.pdf (EAL Initial Verification slides) p97",
   "explain": {
    "what": "On the short lead method, operating the switch opens or closes the line conductor.",
    "why": "If the reading goes when the switch is off and comes back when it's on, the switch is breaking the line. A switch in the neutral wouldn't affect a line-to-CPC reading at all.",
    "how": "Have the switch operated while you hold the probes on the switched line and CPC at the light.",
    "where": "Ceiling rose and switch on the lighting circuit (course slides 99.pdf p97)"
   },
   "scene": "Lighting circuit, short lead method. You're reading between switched line and CPC at the ceiling rose while the switch is operated. The reading vanishes when it's off and comes back when it's on."
  },
  {
   "type": "choice",
   "q": "Which method do you use?",
   "options": [
    "Short lead, linking line to CPC",
    "Long lead from the MET (R2)",
    "Insulation resistance at 500 V",
    "The earth fault loop tester"
   ],
   "answer": 1,
   "why": "The long lead method is best for main and supplementary bonding.",
   "src": "99.pdf (EAL Initial Verification slides) p90",
   "explain": {
    "what": "A bonding conductor runs from the MET to a pipe, so there's no line conductor to link it to.",
    "why": "The long lead measures from one end of the conductor to the other, giving R2. The short lead needs a line and CPC in the same circuit, so it doesn't fit bonding.",
    "how": "Clip one lead on the MET, run the long lead out to the pipe and read across the bonding conductor.",
    "where": "MET to the bonded pipe (course slides 99.pdf p90, p92)"
   },
   "scene": "You need to prove the main protective bonding conductor from the MET to the gas pipe."
  },
  {
   "type": "choice",
   "q": "Where on the gas pipe do you put your probe?",
   "options": [
    "On the cable lug at the clamp",
    "On the pipe itself, past the clamp",
    "On the gas meter's case",
    "On the clamp's label"
   ],
   "answer": 1,
   "why": "You're proving the clamp's connection to the pipe as well as the cable.",
   "src": "99.pdf (EAL Initial Verification slides) p93",
   "explain": {
    "what": "Main bonding is tested to the pipework, not just to the end of the cable.",
    "why": "The course says the test proves the conductor AND the connection the BS 951 clamp makes to the pipe. Probing the lug only proves the cable, not that the clamp is actually gripping clean pipe.",
    "how": "Put your probe on bare pipe on the far side of the clamp.",
    "where": "Gas or water pipe near where it enters the building (course slides 99.pdf p93)"
   },
   "scene": "Long lead clipped on at the MET. The bonding conductor goes to a BS 951 clamp on the gas pipe."
  },
  {
   "type": "fill",
   "q": "Expected R1+R2 = (7.41 + 12.1) × 65 ÷ 1000 = ___ Ω",
   "answers": [
    "1.26",
    "1.27",
    "1.268",
    "1.3"
   ],
   "why": "19.51 × 65 = 1268 mΩ = about 1.26 Ω.",
   "src": "99.pdf (EAL Initial Verification slides) p102-103",
   "explain": {
    "what": "You can work out what a healthy circuit should read from the copper resistance per metre and the length.",
    "why": "2.5 mm² is 7.41 mΩ/m and 1.5 mm² is 12.1 mΩ/m, so a metre of line plus CPC is 19.51 mΩ. × 65 m = 1268 mΩ, ÷ 1000 = 1.268 Ω. The slide shows it as 1.26 Ω.",
    "how": "Add the two mΩ/m figures, multiply by the length in metres, then divide by 1000 to get ohms.",
    "where": "Your calculation before testing the radial (course slides 99.pdf p102-103)"
   },
   "scene": "Radial circuit in 2.5/1.5 mm² twin and earth, 65 m long."
  },
  {
   "type": "fill",
   "q": "Expected R1+R2 = (7.41 + 12.1) × 30 ÷ 1000 = ___ Ω",
   "answers": [
    "0.59",
    "0.585",
    "0.5853",
    "0.58"
   ],
   "why": "19.51 × 30 = 585 mΩ = about 0.59 Ω.",
   "src": "99.pdf (EAL Initial Verification slides) p102-103",
   "explain": {
    "what": "Same sum as the course's 65 m example, with a shorter cable.",
    "why": "19.51 × 30 = about 585 mΩ, ÷ 1000 = 0.585 Ω, about 0.59 Ω. Shorter cable, lower resistance.",
    "how": "Do the sum before you test so you know what a sensible reading looks like.",
    "where": "Your calculation before testing (course slides 99.pdf p102-103)"
   },
   "scene": "Radial socket circuit on the board, about 30 m of 2.5/1.5 mm² twin and earth."
  },
  {
   "type": "choice",
   "q": "What do you do?",
   "options": [
    "Record 0.02 Ω: lower is better",
    "Check your set-up and test again",
    "Record 0.59 Ω, the worked-out value",
    "Move on to insulation resistance"
   ],
   "answer": 1,
   "why": "A reading that doesn't fit the cable length means something in the set-up is wrong.",
   "src": "99.pdf (EAL Initial Verification slides) p101-102",
   "explain": {
    "what": "Conductor resistance goes up with length, so 30 m of cable can't read almost nothing.",
    "why": "0.02 Ω is far too low for 30 m of cable, so you may be reading across your link or the wrong terminals. You never write down the sum instead of a real reading.",
    "how": "Check where your link is, which terminals you're on, and that the leads were nulled, then test again.",
    "where": "At the point you're testing and the link at the board (course slides 99.pdf p101-102)"
   },
   "scene": "Same 30 m radial: you expect about 0.59 Ω but the reading at the furthest socket is 0.02 Ω."
  },
  {
   "type": "choice",
   "q": "What could a reading this high point to?",
   "options": [
    "A loose or poor connection",
    "Insulation resistance too high",
    "The leads were nulled first",
    "Ze being lower than expected"
   ],
   "answer": 0,
   "why": "A bad connection adds resistance on top of the cable's own.",
   "src": "99.pdf (EAL Initial Verification slides) p103; 99.pdf (EAL Initial Verification slides) p104",
   "explain": {
    "what": "A healthy 65 m radial in 2.5/1.5 mm² should read about 1.26 Ω.",
    "why": "Reading much higher means extra resistance somewhere, like a loose terminal or a poor joint. The course describes this as 'added resistance through a loose connection'. Nulling your leads makes readings lower, not higher.",
    "how": "Work back along the circuit, testing at each point, to find where the reading jumps up.",
    "where": "Terminals at the accessories along the circuit (course slides 99.pdf p103-104)"
   },
   "scene": "65 m radial in 2.5/1.5 mm². You expected about 1.26 Ω but read 1.95 Ω at the end."
  },
  {
   "type": "fill",
   "q": "True R1+R2 = 0.85 − 0.20 = ___ Ω",
   "answers": [
    "0.65",
    "0.650"
   ],
   "why": "If you didn't null, take the lead resistance off.",
   "src": "99.pdf (EAL Initial Verification slides) p24",
   "explain": {
    "what": "Nulling sets your leads to zero so they don't add to the reading. It's the N in CABINS, for continuity only.",
    "why": "Your leads read 0.20 Ω on their own, so every reading has 0.20 Ω too much in it. 0.85 − 0.20 = 0.65 Ω.",
    "how": "Null before you start. If you forget, measure the leads clipped together and subtract that from every reading.",
    "where": "Your tester and leads (course slides 99.pdf p24)"
   },
   "scene": "You forgot to null. Clipped together, your leads read 0.20 Ω. Your R1+R2 at the furthest socket is 0.85 Ω."
  },
  {
   "type": "choice",
   "q": "Which reading goes on the schedule as R1+R2?",
   "options": [
    "The one nearest the board",
    "The highest, at the furthest point",
    "The average of them all",
    "The lowest, as the best case"
   ],
   "answer": 1,
   "why": "The furthest point has the most cable, so the highest reading.",
   "src": "302.pdf (Domestic Electrical Installer course) p143; 99.pdf (EAL Initial Verification slides) p94",
   "explain": {
    "what": "R1+R2 for a circuit is the reading at its furthest point.",
    "why": "Resistance goes up with length, so readings rise as you get further from the board. The highest reading is the worst case, which is the one Zs depends on.",
    "how": "Test every point, then write the highest reading in column 21.",
    "where": "Column 21 (R1 + R2) of the Schedule of Test Results (302.pdf p143; course slides 99.pdf p94)"
   },
   "scene": "Lighting circuit, short lead method. Your readings at each point: 0.41, 0.58, 0.73 and 0.92 Ω.",
   "form": {
    "doc": "EIC",
    "page": 5,
    "where": "Schedule of Test Results",
    "box": "column 21: Continuity (Ω) (R1 + R2)"
   }
  },
  {
   "type": "fill",
   "q": "Approximate length = 1.07 × 1000 ÷ (7.41 + 12.1) = ___ m",
   "answers": [
    "54.8",
    "54.84",
    "55",
    "54.9"
   ],
   "why": "Working backwards from R1+R2 gives a rough circuit length.",
   "src": "49.pdf (EAL Condition Reporting slides) p63-64",
   "explain": {
    "what": "On a periodic you can use the measured R1+R2 to estimate how long the circuit is.",
    "why": "1.07 Ω × 1000 = 1070 mΩ, ÷ 19.51 mΩ/m = 54.84 m. If the records say the circuit is much shorter, something's adding resistance.",
    "how": "Turn the R1+R2 sum around: ohms × 1000 ÷ mΩ/m = metres.",
    "where": "Periodic testing, EICR (course slides 49.pdf p63-64)"
   },
   "scene": "Periodic inspection. A radial in 2.5/1.5 mm² twin and earth reads R1+R2 = 1.07 Ω."
  },
  {
   "type": "choice",
   "q": "Where do you record it on the EIC?",
   "options": [
    "Section G, 'continuity verified' box",
    "Column 26, polarity, on the schedule",
    "Section F, next to the Ze value",
    "Remarks column 31 on the schedule"
   ],
   "answer": 0,
   "why": "Section G has a 'connection / continuity verified' box for the earthing and bonding conductors.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p3",
   "explain": {
    "what": "The EIC records the main protective conductors (earthing conductor and main bonding) in Section G.",
    "why": "Each has its material, size and a 'connection / continuity verified' box, plus ticks for what is bonded (water, gas, oil, steel and so on). Section F is the supply, and column 26 is circuit polarity.",
    "how": "Once your long lead tests pass, fill in material and csa, tick 'connection / continuity verified' and tick the services you bonded.",
    "where": "EIC page 3, Section G, 'Main Protective Conductors'"
   },
   "scene": "You've proved the main bonding to the water and gas pipes with the long lead.",
   "form": {
    "doc": "EIC",
    "page": 3,
    "where": "Section G: Main Protective Conductors",
    "box": "Main protective bonding conductors … Connection / continuity verified"
   }
  },
  {
   "type": "choice",
   "q": "Is that a problem?",
   "options": [
    "Yes: they should all be the same",
    "No: resistance rises with length",
    "Yes: the CPC must be broken",
    "No: readings always go down"
   ],
   "answer": 1,
   "why": "Points further from the board have more cable, so they read higher.",
   "src": "99.pdf (EAL Initial Verification slides) p94; 99.pdf (EAL Initial Verification slides) p101",
   "explain": {
    "what": "Conductor resistance is directly proportional to length.",
    "why": "The further a point is from the board, the more cable the test current goes through, so the higher the reading. Rising readings along a radial are exactly what you'd expect.",
    "how": "Expect readings to climb as you work away from the board, with the highest at the end.",
    "where": "Points along the circuit (course slides 99.pdf p94, p101)"
   },
   "scene": "Radial circuit. Your R1+R2 readings go up at each socket as you work away from the board."
  }
 ]
});
