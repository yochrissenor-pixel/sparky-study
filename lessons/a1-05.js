// DRAFT lesson (v2, Unit 1) written from Tom's Access Training PDFs and the IET A4:2026 forms. Waiting for Checker + Tom's approval.
window.LESSONS = window.LESSONS || [];
window.LESSONS.push({
 "id": "a1-05",
 "topic": "earthing",
 "title": "Earthing systems: spot them on the board",
 "awards": [
  "L2 Fundamental",
  "L3 Initial Verification",
  "L3 Periodic"
 ],
 "status": "draft",
 "unconfirmed": false,
 "note": "99.pdf (p138) says to disconnect the earthing conductor from the MET to measure Ze but doesn't print the step of reconnecting it. Always reconnect it straight after the test.",
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
  "notes": "Earthing systems, Ze values and the Section F and G boxes check out. The Ze values are the course slide values, and the note tells you the slide doesn't print the step of reconnecting the earthing conductor."
 },
 "approved": null,
 "intro": {
  "what": "The earthing system tells you where the installation's earth comes from. The three you'll meet are TN-C-S (PME), TN-S and TT.",
  "why": "It decides your Ze, the supply part of every earth loop reading, which you tick and record in Section F of the EIC. It also tells you what main switch to expect: a TT system needs an RCD main switch.",
  "how": [
   "Look at the supply head and meter position",
   "Earth connection made into the supply head (cut-out): TN-C-S (PME)",
   "Earth clamp on the sheath of the supply cable: TN-S",
   "No supplier earth, an earth rod at the property, often rural overhead: TT",
   "For Ze: isolate the circuits but keep the board supplied, disconnect the earthing conductor from the MET, test, then reconnect it",
   "Tick the earthing box in Section F and write Ze; in Section G tick distributor's facility or installation earth electrode"
  ],
  "where": "At the meter position (supply head, main earthing terminal) and on the EIC page 3, Sections F and G.",
  "reason": "Zs = Ze + (R1+R2). Get the earthing system wrong and you expect the wrong Ze, so your loop readings can look fine when they aren't.",
  "numbers": [
   "TN-C-S (PME): Ze 0.35 Ω max",
   "TN-S: Ze 0.8 Ω max",
   "TT: Ze up to 200 Ω (earth electrode)",
   "TT main switch: 100 mA S-type (time-delay) RCD",
   "Zs = Ze + (R1+R2)"
  ]
 },
 "questions": [
  {
   "type": "choice",
   "q": "Which earthing system is it most likely to be?",
   "options": [
    "TN-C-S (PME)",
    "TN-S",
    "TT",
    "IT"
   ],
   "answer": 1,
   "why": "TN-S is identified by the earth connection being made to the supply cable's sheath.",
   "src": "302.pdf (Domestic Electrical Installer course) p35; 99.pdf (EAL Initial Verification slides) p139",
   "scene": "At the meter position, the earthing conductor from the main earthing terminal is clamped to the metal sheath of the supply cable.",
   "explain": {
    "what": "In a TN-S system the supplier's earth is the metal sheath of the supply cable.",
    "why": "An earth clamp on the cable sheath is the giveaway. TN-C-S has the earth taken from the supply head; TT has no supplier earth at all.",
    "how": "Follow the earthing conductor back from the MET and see where it lands.",
    "where": "Meter position: supply cable and main earthing terminal (302.pdf p35; 99.pdf slides p139)."
   }
  },
  {
   "type": "choice",
   "q": "Which system is most likely?",
   "options": [
    "TN-C-S (PME)",
    "TN-S",
    "TT",
    "There's no way to tell"
   ],
   "answer": 0,
   "why": "On TN-C-S (PME) the earth is taken off at the supply head (cut-out), because the supply uses one combined neutral and earth conductor (PEN).",
   "src": "302.pdf (Domestic Electrical Installer course) p34",
   "scene": "At the meter position, the earthing conductor runs from the main earthing terminal straight into a terminal on the supplier's cut-out.",
   "explain": {
    "what": "In TN-C-S (PME) the supply uses one combined neutral and earth conductor (PEN), and the earth is taken off at the supply head.",
    "why": "An earth terminal on the supply head (cut-out) points to TN-C-S. A clamp on the cable sheath would point to TN-S.",
    "how": "Look at the cut-out for an earth terminal and a 'PME' label.",
    "where": "Supply head at the meter position (302.pdf p34)."
   }
  },
  {
   "type": "choice",
   "q": "Which earthing system?",
   "options": [
    "TN-C-S (PME)",
    "TN-S",
    "TT",
    "TN-C"
   ],
   "answer": 2,
   "why": "TT systems are often rural, fed by overhead cables, with an earth electrode at the property.",
   "src": "302.pdf (Domestic Electrical Installer course) p36; 302.pdf (Domestic Electrical Installer course) p32",
   "scene": "A rural cottage fed by overhead cables. There's no earth terminal on the supply head, and an earthing conductor runs outside to a rod in the ground.",
   "explain": {
    "what": "In a TT system the supplier provides no earth, so the installation has its own earth electrode.",
    "why": "Overhead supply plus an earth rod is the classic TT picture. No supplier earth terminal rules out TN-S and TN-C-S.",
    "how": "Look for the rod and its earthing conductor, and expect an RCD main switch.",
    "where": "Outside the property and at the main earthing terminal (302.pdf p32 and p36)."
   }
  },
  {
   "type": "match",
   "q": "Match each earthing system to its typical maximum Ze.",
   "pairs": [
    [
     "TN-C-S (PME)",
     "0.35 Ω"
    ],
    [
     "TN-S",
     "0.8 Ω"
    ],
    [
     "TT",
     "200 Ω"
    ]
   ],
   "why": "TN-C-S is lowest (combined PEN conductor), TN-S uses the cable sheath, TT relies on the ground (highest).",
   "src": "99.pdf (EAL Initial Verification slides) p84-86; 99.pdf (EAL Initial Verification slides) p139",
   "explain": {
    "what": "Ze is the external earth fault loop impedance: the part of the loop outside the installation.",
    "why": "The slides give TN-C-S 0.35 Ω, TN-S 0.8 Ω and TT up to 200 Ω. TT is so high because the fault current has to go back through the ground.",
    "how": "Know these three numbers before you measure Ze, so you can tell straight away if a reading is odd.",
    "where": "Ze in Section F of the EIC (99.pdf slides p84-86 and p139)."
   },
   "form": {
    "doc": "EIC",
    "page": 3,
    "where": "Section F: Supply characteristics",
    "box": "External earth fault loop impedance, Ze … Ω"
   }
  },
  {
   "type": "match",
   "q": "Match the earthing system to where its earth comes from.",
   "pairs": [
    [
     "TN-C-S (PME)",
     "The combined neutral and earth (PEN) conductor"
    ],
    [
     "TN-S",
     "The sheath of the supply cable"
    ],
    [
     "TT",
     "An earth electrode at the property"
    ]
   ],
   "why": "Knowing where the earth comes from tells you roughly what Ze to expect.",
   "src": "99.pdf (EAL Initial Verification slides) p139; 302.pdf (Domestic Electrical Installer course) p32",
   "explain": {
    "what": "Each system gets its earth from a different place.",
    "why": "TN-C-S uses the supplier's combined neutral and earth (PEN) conductor, also called PME. TN-S uses the supply cable's sheath. TT has no supplier earth, so it needs an electrode.",
    "how": "Trace the earthing conductor from the MET to where it ends.",
    "where": "Meter position and main earthing terminal (99.pdf slides p139; 302.pdf p32)."
   }
  },
  {
   "type": "choice",
   "q": "Why do you disconnect the earthing conductor from the MET to measure Ze?",
   "options": [
    "To remove parallel earth paths",
    "To make the reading higher than it is",
    "Because the tester can't read below 1 Ω",
    "So the RCD doesn't trip"
   ],
   "answer": 0,
   "why": "Bonding to pipes and steelwork gives extra paths that would make Ze read lower than the real supply value.",
   "src": "99.pdf (EAL Initial Verification slides) p138",
   "explain": {
    "what": "Ze is the supply's own earth loop, so you have to measure it without the installation's other paths to earth.",
    "why": "The bonding to water, gas and steelwork creates parallel paths. Left connected, they'd make Ze look lower (better) than it really is.",
    "how": "Disconnect the earthing conductor, measure Ze at the origin, then reconnect it straight away before you do anything else.",
    "where": "Main earthing terminal at the board (99.pdf slides p138)."
   }
  },
  {
   "type": "order",
   "q": "Put the Ze test steps in order.",
   "steps": [
    "Isolate the circuits, keep the board supplied",
    "Disconnect the earthing conductor from the MET",
    "Test line to earth at the origin",
    "Reconnect the earthing conductor",
    "Record Ze in Section F of the EIC"
   ],
   "why": "Ze is a live test at the origin, with the earthing conductor off to remove parallel paths, then put straight back.",
   "src": "99.pdf (EAL Initial Verification slides) p138; EIC form (IET BS 7671:2018+A4:2026) p3",
   "explain": {
    "what": "Ze is measured at the origin of the installation with the supply on.",
    "why": "The course says isolate the circuits but keep the supply to the board, and remove the earthing conductor from the MET to get rid of parallel paths. Measuring at the furthest socket would give you Zs, not Ze.",
    "how": "Reconnect the earthing conductor as soon as the reading is taken, before anything else, then write the value down.",
    "where": "Origin of the installation and the main earthing terminal; EIC page 3, Section F (99.pdf slides p138)."
   }
  },
  {
   "type": "choice",
   "q": "What do you do with this reading?",
   "options": [
    "Under 0.35 Ω: record it in Section F",
    "Too high: condemn the supply",
    "Too low: it must be a TT system",
    "Write 0.35 Ω on the form instead"
   ],
   "answer": 0,
   "why": "0.28 Ω is under the 0.35 Ω typical maximum for TN-C-S, so record the measured value.",
   "src": "99.pdf (EAL Initial Verification slides) p139; EIC form (IET BS 7671:2018+A4:2026) p3",
   "scene": "TN-C-S (PME) supply. With the earthing conductor disconnected from the MET, you measure Ze = 0.28 Ω.",
   "explain": {
    "what": "You record the Ze you actually measure, not the typical maximum.",
    "why": "0.28 Ω is within 0.35 Ω for TN-C-S. Writing 0.35 Ω instead would throw away your real reading, and every Zs you work out uses Ze.",
    "how": "Write 0.28 in the Ze box in Section F and tick TN-C-S (PME).",
    "where": "EIC page 3, Section F (99.pdf slides p139)."
   },
   "form": {
    "doc": "EIC",
    "page": 3,
    "where": "Section F: Supply characteristics",
    "box": "External earth fault loop impedance, Ze … Ω"
   }
  },
  {
   "type": "choice",
   "q": "What does this reading tell you?",
   "options": [
    "Too high for TN-S: recheck it",
    "Normal for TN-S: record it",
    "The RCD will trip on test",
    "Your leads need nulling"
   ],
   "answer": 0,
   "why": "The typical maximum for TN-S is 0.8 Ω, so 1.6 Ω needs looking into.",
   "src": "99.pdf (EAL Initial Verification slides) p139; 99.pdf (EAL Initial Verification slides) p85",
   "scene": "You identified the supply as TN-S. Ze measures 1.6 Ω.",
   "explain": {
    "what": "Knowing the typical maximum lets you spot a reading that doesn't fit.",
    "why": "1.6 Ω is twice what the slides give for TN-S. Recheck your connections and the test, and check you've identified the earthing system correctly.",
    "how": "Re-test, check the earthing conductor connection and the supply earth, then report the reading you can stand behind.",
    "where": "Ze at the origin, Section F of the EIC (99.pdf slides p85 and p139)."
   }
  },
  {
   "type": "fill",
   "q": "Ze is 0.35 Ω and R1+R2 for the ring is 0.19 Ω. Zs = ___ Ω",
   "answers": [
    "0.54"
   ],
   "why": "Zs = Ze + (R1+R2) = 0.35 + 0.19 = 0.54 Ω.",
   "src": "99.pdf (EAL Initial Verification slides) p125",
   "explain": {
    "what": "Zs is the whole earth fault loop: the supply part (Ze) plus your circuit's line and CPC (R1+R2).",
    "why": "0.35 + 0.19 = 0.54 Ω. That's why Ze matters: it's in every Zs you work out.",
    "how": "Add Ze from Section F to the R1+R2 from your continuity test, and compare it with the Zs you measure.",
    "where": "Zs column on the schedule of test results (99.pdf slides p125)."
   }
  },
  {
   "type": "choice",
   "q": "On a TT system, the main switch is usually a…",
   "options": [
    "100 mA S-type (time-delay) RCD",
    "30 mA instant RCD",
    "Plain isolator with no RCD",
    "Type C circuit breaker"
   ],
   "answer": 0,
   "why": "On TT, Ze can be up to 200 Ω, so fault currents are small and the main switch needs to be a 100 mA S-type RCD. S-type means time delay.",
   "src": "99.pdf (EAL Initial Verification slides) p86",
   "explain": {
    "what": "On TT, Ze can be up to 200 Ω, so fault currents are small.",
    "why": "The slides say the main switch needs to be an S-type 100 mA RCD, and S-type is a time-delay device.",
    "how": "When you see an earth rod, expect an RCD main switch and read its IΔn and type off the label.",
    "where": "Main switch in the consumer unit; EIC page 3, Section G, RCD main switch (99.pdf slides p86)."
   }
  },
  {
   "type": "choice",
   "q": "Which earthing arrangement box do you tick in Section F?",
   "options": [
    "TN-C",
    "TN-C-S (PME)",
    "TN-C-S (PNB)",
    "TN-S"
   ],
   "answer": 1,
   "why": "PME is TN-C-S, and the A4 form has its own 'TN-C-S (PME)' box.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p3; 302.pdf (Domestic Electrical Installer course) p32",
   "scene": "You've found the earth connection made into the supply head and a PME label on the cut-out.",
   "explain": {
    "what": "Section F has a tick box for each earthing arrangement.",
    "why": "PME (protective multiple earthing) is the TN-C-S system. TN-C means a combined conductor through the installation as well, and PNB is a different box on the form: what you've found is PME.",
    "how": "Tick one box only, then fill in Ze and the other supply details.",
    "where": "EIC page 3, Section F (302.pdf p32)."
   },
   "form": {
    "doc": "EIC",
    "page": 3,
    "where": "Section F: Earthing arrangements",
    "box": "TN-C ☐ TN-S ☐ TN-C-S (PME) ☐ TN-C-S (PNB) ☐ TT ☐ IT ☐"
   }
  },
  {
   "type": "choice",
   "q": "In Section G, 'Means of earthing', what do you tick for a TT system?",
   "options": [
    "Installation earth electrode",
    "Distributor's facility",
    "Both boxes",
    "Neither, it's left blank"
   ],
   "answer": 0,
   "why": "TT has no supplier earth, so the means of earthing is the installation's own earth electrode.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p3; 302.pdf (Domestic Electrical Installer course) p32",
   "explain": {
    "what": "Section G asks where the installation gets its earth.",
    "why": "TN-S and TN-C-S use the distributor's (supplier's) earth. TT has no earth provided, so it's the installation earth electrode, with its type, location and resistance filled in below.",
    "how": "Tick 'Installation earth electrode' and fill in the electrode details box.",
    "where": "EIC page 3, Section G (302.pdf p32)."
   },
   "form": {
    "doc": "EIC",
    "page": 3,
    "where": "Section G: Means of earthing",
    "box": "Distributor's facility ☐  Installation earth electrode ☐"
   }
  },
  {
   "type": "match",
   "q": "Match each letter in the earthing system names.",
   "pairs": [
    [
     "T",
     "Terra (earth)"
    ],
    [
     "N",
     "Neutral"
    ],
    [
     "C",
     "Combined"
    ],
    [
     "S",
     "Separate"
    ]
   ],
   "why": "So TN-C-S is earth-neutral, combined then separate; TN-S keeps neutral and earth separate.",
   "src": "302.pdf (Domestic Electrical Installer course) p33",
   "explain": {
    "what": "The letters describe how the supply's neutral and earth are arranged.",
    "why": "T is from terra, Latin for earth; N is neutral; C is combined; S is separate. TN-C-S means combined in the supply, separate in the installation.",
    "how": "Read the name letter by letter and it tells you what to look for at the intake.",
    "where": "Meter position (302.pdf p33)."
   }
  }
 ]
});
