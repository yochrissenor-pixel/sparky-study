// DRAFT lesson (v2, Unit 5) written from Tom's course PDFs and the IET A4:2026 EICR form. Waiting for Checker + Tom's approval.
window.LESSONS = window.LESSONS || [];
window.LESSONS.push({
 "id": "a5-05",
 "topic": "eicr-codes",
 "title": "EICR: schedule of inspections",
 "awards": [
  "L3 Periodic"
 ],
 "status": "draft",
 "unconfirmed": false,
 "note": "The item numbers and outcome codes are as printed on the IET A4:2026 EICR schedule of inspection. Which defect gets which code comes from your Condition Reporting slides (49.pdf), whose code examples are 2018-era, written before A4:2026; check them against the current Best Practice Guide 4. The slides say a quarterly RCD test notice; the A4 form says six-monthly, and this lesson follows the form.",
 "sources": [
  {
   "file": "49.pdf (EAL Condition Reporting slides)",
   "ref": "pages given on each question"
  },
  {
   "file": "EIC form (IET BS 7671:2018+A4:2026)",
   "ref": "pages given on each question"
  },
  {
   "file": "EICR form (IET BS 7671:2018+A4:2026)",
   "ref": "pages given on each question"
  }
 ],
 "checker": {
  "by": "Claude Checker",
  "date": "2026-10-12",
  "verdict": "pass",
  "notes": "Item numbers and text match the A4:2026 schedule of inspection, and the codes match your slides. The RCD test notice follows the form (six-monthly), not the older slide (quarterly)."
 },
 "approved": null,
 "intro": {
  "what": "The schedule of inspection (EICR pages 6 to 8) is the list of items you inspect. Every item gets one outcome from the key at the top of the page: ✓, C1 or C2, C3, FI, N/V, LIM or N/A.",
  "why": "It shows exactly what you looked at and what you found, and every C1, C2, C3 and FI on it must also be written out in Section K.",
  "how": [
   "Work through the sections in order: 1.0 intake, 2.0 other sources, 3.0 earthing and bonding, 4.0 consumer unit, 5.0 final circuits, 6.0 bath or shower",
   "✓ only for items you inspected and found acceptable",
   "N/A for things that aren't there; LIM where a limitation stopped you; N/V where you couldn't verify it",
   "Code defects C1, C2, C3 or FI",
   "Intake equipment (1.0) that's faulty gets an X and a comment in Section K, and the client is told",
   "Copy every C1, C2, C3 and FI item into the right Section K table"
  ],
  "where": "EICR form pages 6 to 8, with the outcome key printed across the top of each page.",
  "reason": "The EIC's schedule only uses ✓ or N/A. The EICR has the full set of codes because it reports on condition, not new work.",
  "numbers": [
   "✓ acceptable · C1/C2 unacceptable · C3 improvement · FI further investigation · N/V not verified · LIM limitation · N/A not applicable"
  ]
 },
 "questions": [
  {
   "type": "match",
   "q": "Match the outcome code to its meaning, as printed on the schedule.",
   "pairs": [
    [
     "✓",
     "Acceptable condition"
    ],
    [
     "C1 or C2",
     "Unacceptable condition"
    ],
    [
     "C3",
     "Improvement recommended"
    ],
    [
     "FI",
     "Further investigation"
    ],
    [
     "N/V",
     "Not verified"
    ],
    [
     "LIM",
     "Limitation"
    ],
    [
     "N/A",
     "Not applicable"
    ]
   ],
   "why": "The key across the top of every schedule page lists these codes.",
   "src": "EICR form (IET BS 7671:2018+A4:2026) p6",
   "explain": {
    "what": "Each item on the EICR schedule of inspection gets one outcome code.",
    "why": "An EIC schedule is only ✓ or N/A; the EICR has more codes because it reports on condition.",
    "how": "On the day, use the key across the top of the page, and add a comment where needed.",
    "where": "EICR form page 6 (top of pages 6-8). Also 49.pdf slide p21."
   }
  },
  {
   "type": "choice",
   "q": "On the EIC Section H schedule of inspections, what outcomes can you use?",
   "options": [
    "✓ or N/A",
    "C1, C2, C3 or FI",
    "LIM or N/V",
    "Pass or fail"
   ],
   "answer": 0,
   "why": "The EIC Section H Outcome column is headed '✓ / N/A'.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p3",
   "explain": {
    "what": "Section H of the EIC is a short schedule of inspections for new work.",
    "why": "New work must be right before you certify it, so there are no defect codes. Codes like C2 belong on an EICR.",
    "how": "Tick each item that applies and is correct; put N/A for items that don't apply.",
    "where": "EIC form page 3, Section H. Also 49.pdf slide p21."
   },
   "form": {
    "doc": "EIC",
    "page": 3,
    "where": "Section H: Schedule of inspections",
    "box": "Outcome ✓ / N/A"
   }
  },
  {
   "type": "choice",
   "q": "What outcome do you give item 2.0?",
   "options": [
    "✓",
    "LIM",
    "N/A",
    "C3"
   ],
   "answer": 2,
   "why": "There are no other sources, so the item doesn't apply.",
   "src": "EICR form (IET BS 7671:2018+A4:2026) p6",
   "explain": {
    "what": "Item 2.0 is 'Presence of adequate arrangements for other sources such as microgenerators'.",
    "why": "✓ would mean you checked arrangements that are acceptable. Here there's nothing to check, so N/A.",
    "how": "Only use ✓ for things you inspected and found acceptable.",
    "where": "EICR form page 6, item 2.0."
   },
   "scene": "Job: a terraced house with no solar panels, battery or generator.",
   "form": {
    "doc": "EICR",
    "page": 6,
    "where": "Schedule of inspection",
    "box": "2.0 Presence of adequate arrangements for other sources such as microgenerators"
   }
  },
  {
   "type": "choice",
   "q": "How do you record this in section 1.0?",
   "options": [
    "Code it C1 and make the overall outcome of the whole report unsatisfactory straight away",
    "Put an X against it, comment in Section K, and tell the person ordering the work",
    "Repair the service head yourself",
    "Ignore it, it belongs to the DNO"
   ],
   "answer": 1,
   "why": "For intake equipment only, inadequacies get an X, a comment in Section K, and the person ordering is told.",
   "src": "EICR form (IET BS 7671:2018+A4:2026) p6",
   "explain": {
    "what": "Section 1.0 is the distributor's intake equipment (service cable, service head, earthing, tails, meter): visual inspection only.",
    "why": "Note 1 says use an X and comment in Section K. Note 2 says the person ordering must be informed if it could be dangerous. It's not your equipment to repair.",
    "how": "Put X against '– Service head', comment in Section K, tell the client, and tick Y on the 'notified' line.",
    "where": "EICR form page 6, items 1.0-1.1, Notes 1 and 2; page 9 notes; page 10 guidance."
   },
   "scene": "Job: the DNO service head is cracked. You can't see any exposed live parts.",
   "form": {
    "doc": "EICR",
    "page": 6,
    "where": "Schedule of inspection",
    "box": "1.1 Distributor/supplier intake equipment – Service head"
   }
  },
  {
   "type": "choice",
   "q": "Should an outcome in section 1.0 (intake equipment) decide the overall outcome of the report?",
   "options": [
    "Yes, always",
    "No, except for access to live parts",
    "Only if coded FI",
    "Only on TT systems, where the DNO provides no earth"
   ],
   "answer": 1,
   "why": "The section 1.0 heading says its outcomes should not determine the overall outcome, other than access to live parts.",
   "src": "EICR form (IET BS 7671:2018+A4:2026) p6",
   "explain": {
    "what": "The intake equipment belongs to the distributor/supplier, not the client.",
    "why": "Its condition is reported to the person ordering the work, but it doesn't drive Section E, except where live parts can be touched.",
    "how": "Record it with X and a comment, tell the client, and judge the overall assessment on the rest.",
    "where": "EICR form page 6, item 1.0 heading."
   }
  },
  {
   "type": "choice",
   "q": "Which item and code fit?",
   "options": [
    "Item 3.6, C2",
    "Item 3.6, C3",
    "Item 4.3, C1",
    "Item 5.12, FI"
   ],
   "answer": 0,
   "why": "Item 3.6 is 'Confirmation of main protective bonding conductor sizes'; under 6 mm² is C2 on your course slides.",
   "src": "49.pdf (EAL Condition Reporting slides) p38",
   "explain": {
    "what": "Section 3.0 covers earthing and bonding arrangements.",
    "why": "Your slides list 'Inadequate CSA of main protective bonding conductor, when less than 6 mm²' as C2 potentially dangerous. 4.3 is about enclosure IP rating.",
    "how": "Code item 3.6 C2 and write it in Section K's C1/C2 table.",
    "where": "EICR form page 6, item 3.6; 49.pdf slide p38."
   },
   "scene": "Job: the main bonding conductor to the water pipe is 4 mm².",
   "form": {
    "doc": "EICR",
    "page": 6,
    "where": "Schedule of inspection",
    "box": "3.6 Confirmation of main protective bonding conductor sizes"
   }
  },
  {
   "type": "choice",
   "q": "What code goes against item 4.3?",
   "options": [
    "C3",
    "C1",
    "FI",
    "N/V"
   ],
   "answer": 1,
   "why": "Live parts you can touch are C1, danger present.",
   "src": "49.pdf (EAL Condition Reporting slides) p36",
   "explain": {
    "what": "Item 4.3 is 'Condition of enclosure(s) in terms of IP rating etc'.",
    "why": "Your slides give missing blanks in a consumer unit as a C1 example: basic protection is missing and someone could touch a live part now.",
    "how": "Make it safe straight away where you can, then code C1 and record in Section K.",
    "where": "EICR form page 6, item 4.3; 49.pdf slides p31 and p36."
   },
   "scene": "Job: one blank is missing from the consumer unit, leaving a gap where you can reach a live part.",
   "form": {
    "doc": "EICR",
    "page": 6,
    "where": "Schedule of inspection",
    "box": "4.3 Condition of enclosure(s) in terms of IP rating etc"
   }
  },
  {
   "type": "choice",
   "q": "What code goes against item 4.10?",
   "options": [
    "C1",
    "C2",
    "C3",
    "N/A"
   ],
   "answer": 2,
   "why": "A missing RCD test notice is an improvement, not a danger: C3.",
   "src": "49.pdf (EAL Condition Reporting slides) p49",
   "explain": {
    "what": "Item 4.10 is 'Presence of RCD six-monthly test notice, where required'.",
    "why": "Your slides list absence of an RCD test notice as C3. (The slide says 'quarterly'; the A4 form and guidance now say six-monthly.)",
    "how": "Code C3 and record it in Section K's C3/FI table.",
    "where": "EICR form page 6, item 4.10; 49.pdf slide p49; EIC page 7 and EICR page 11 guidance (six-monthly)."
   },
   "scene": "Job: the board has RCDs but no RCD test notice anywhere.",
   "form": {
    "doc": "EICR",
    "page": 6,
    "where": "Schedule of inspection",
    "box": "4.10 Presence of RCD six-monthly test notice, where required"
   }
  },
  {
   "type": "choice",
   "q": "Which outcome code do you give?",
   "options": [
    "C1",
    "C2",
    "C3",
    "✓"
   ],
   "answer": 1,
   "why": "Crumbling insulation not accessible with the cover on is C2 on your course slides.",
   "src": "49.pdf (EAL Condition Reporting slides) p60",
   "explain": {
    "what": "This falls under item 5.3, 'Condition of insulation of live parts'.",
    "why": "If the live conductors were exposed and touchable it would be C1. Behind the cover it's potentially dangerous, so C2.",
    "how": "Code C2, describe where it is, and record it in Section K's C1/C2 table.",
    "where": "EICR form page 7, item 5.3; 49.pdf slides p43 and p60."
   },
   "scene": "Job: inside a ceiling light you find crumbling vulcanised rubber insulation. With the cover on, nothing live can be touched.",
   "form": {
    "doc": "EICR",
    "page": 7,
    "where": "Schedule of inspection",
    "box": "5.3 Condition of insulation of live parts"
   }
  },
  {
   "type": "fill",
   "q": "What outcome code goes against item 5.17? ___",
   "answers": [
    "C3"
   ],
   "why": "Sheath not taken into a non-conducting box, with cores not touchable, is C3.",
   "src": "49.pdf (EAL Condition Reporting slides) p44",
   "explain": {
    "what": "This is about cable terminations at accessories.",
    "why": "Your slides say it becomes C2 if the unsheathed cores can be touched or could touch metalwork, otherwise C3.",
    "how": "Check whether the cores are accessible or near metal before choosing between C2 and C3.",
    "where": "EICR form page 8, item 5.17; 49.pdf slides p44 and p59."
   },
   "scene": "Job: at a plastic switch box the cable sheath stops just outside the box. The cores are not accessible and there's no metalwork nearby.",
   "form": {
    "doc": "EICR",
    "page": 8,
    "where": "Schedule of inspection",
    "box": "5.17 Termination of cables at enclosures"
   }
  },
  {
   "type": "order",
   "q": "You find a defect while working down the schedule. Put the paperwork steps in order.",
   "steps": [
    "Enter the code against that item on the schedule of inspection",
    "Write the observation, with the schedule item number, in the right Section K table",
    "Decide the overall assessment in Section E"
   ],
   "why": "Code it on the schedule, write it up in Section K, then the Section E verdict follows from what Section K holds.",
   "src": "EICR form (IET BS 7671:2018+A4:2026) p6; EICR form (IET BS 7671:2018+A4:2026) p3; EICR form (IET BS 7671:2018+A4:2026) p2",
   "explain": {
    "what": "Every C1, C2, C3 or FI on the schedule must also be written out in Section K, which asks you to include the schedule reference.",
    "why": "Section E's verdict depends on whether Section K has any C1 or C2, so it comes last.",
    "how": "Code on the schedule as you inspect, write up Section K at the end, then fill Section E.",
    "where": "EICR form page 6 (Outcomes heading), page 3 (Section K), page 2 (Section E)."
   },
   "scene": "Job: item 3.6, the main bonding conductor to the water pipe, is undersized and you code it C2."
  },
  {
   "type": "choice",
   "q": "Which outcome code do you give against item 5.12?",
   "options": [
    "C1",
    "C2",
    "C3",
    "LIM"
   ],
   "answer": 2,
   "why": "No RCD on a socket unlikely to supply outdoor equipment, not in a bathroom, is C3 on your slides.",
   "src": "49.pdf (EAL Condition Reporting slides) p47",
   "explain": {
    "what": "Item 5.12 covers additional protection by an RCD not exceeding 30 mA, including socket-outlets up to 32 A.",
    "why": "Your slides make missing RCD protection C2 for sockets likely to be used outdoors or in a bath/shower location, but C3 for other sockets where there is no potential danger.",
    "how": "Decide where the socket is and what it could supply, then code it.",
    "where": "EICR form page 7, item 5.12; 49.pdf slides p40 and p47."
   },
   "scene": "Job: an upstairs bedroom socket circuit has no RCD protection. It's not likely to be used for outdoor equipment.",
   "form": {
    "doc": "EICR",
    "page": 7,
    "where": "Schedule of inspection",
    "box": "5.12 Provision of additional requirements for protection by RCD not exceeding 30 mA"
   }
  },
  {
   "type": "choice",
   "q": "Which coded items must also be written up in Section K of the report?",
   "options": [
    "Only C1",
    "C1 and C2 only",
    "C1, C2, C3 and FI",
    "Only the items marked LIM and N/V"
   ],
   "answer": 2,
   "why": "The Outcomes heading says C1, C2, C3 and FI coded items are to be recorded in Section K.",
   "src": "EICR form (IET BS 7671:2018+A4:2026) p6",
   "explain": {
    "what": "The schedule of inspection gives each item a code; Section K is where the observations are written out.",
    "why": "C3 and FI don't affect the overall assessment, but they still go in Section K, in their own table.",
    "how": "For each coded item, write the item number and description in the right Section K table.",
    "where": "EICR form page 6, 'Outcomes' column heading; page 3, Section K."
   }
  },
  {
   "type": "choice",
   "q": "What outcome do you give item 5.11?",
   "options": [
    "LIM",
    "✓",
    "C3",
    "N/A"
   ],
   "answer": 0,
   "why": "You couldn't inspect it because of an agreed limitation, so the outcome is LIM (limitation).",
   "src": "EICR form (IET BS 7671:2018+A4:2026) p7; 49.pdf (EAL Condition Reporting slides) p21",
   "explain": {
    "what": "Item 5.11 is 'Cables concealed under floors, above ceilings or in walls/partitions, adequately protected against damage', and the form points you to Section D.",
    "why": "A tick would claim you checked them and they were fine. N/A would mean there are no such cables. You simply couldn't see them.",
    "how": "Put LIM against 5.11 and make sure the limitation and its reason are written in Section D.",
    "where": "EICR form page 7, item 5.11; page 2, Section D (49.pdf slide p21)"
   },
   "scene": "You agreed with the client not to lift any floorboards, so you can't see the cables under the floors.",
   "form": {
    "doc": "EICR",
    "page": 7,
    "where": "Schedule of inspection",
    "box": "5.11 Cables concealed under floors, above ceilings or in walls/partitions, adequately protected against damage (see Section D. Extent and limitations)"
   }
  }
 ]
});
