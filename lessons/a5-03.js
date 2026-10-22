// DRAFT lesson (v2, Unit 5) written from Tom's course PDFs and the IET A4:2026 EICR form. Waiting for Checker + Tom's approval.
window.LESSONS = window.LESSONS || [];
window.LESSONS.push({
 "id": "a5-03",
 "topic": "eicr-codes",
 "title": "Coding what you find",
 "awards": [
  "L3 Periodic"
 ],
 "status": "draft",
 "unconfirmed": true,
 "note": "The coding examples come from your Condition Reporting slides (49.pdf), which were written for the 2018 rules before A4:2026; check them against the current Best Practice Guide 4 or ask your tutor. Your slide 49.pdf p28 says an FI makes the overall assessment unsatisfactory; the IET A4:2026 EICR form (Section E and Section K) says C3 and FI are advisory and only C1 or C2 make it unsatisfactory. This lesson follows the A4 form; ask your tutor which rule the resit marks against.",
 "sources": [
  {
   "file": "49.pdf (EAL Condition Reporting slides)",
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
  "verdict": "unconfirmed",
  "notes": "Each coding situation matches a slide example. Your slide says an FI makes the report unsatisfactory but the A4 form says FI and C3 are advisory; the lesson follows the form, so ask your tutor which the resit marks."
 },
 "approved": null,
 "intro": {
  "what": "Every defect you record on an EICR gets one code: C1 danger present, C2 potentially dangerous, C3 improvement recommended, or FI further investigation advised.",
  "why": "The code tells the person who ordered the report how urgent each problem is, and C1/C2 decide whether the whole report is satisfactory or unsatisfactory.",
  "how": [
   "Can someone touch something live right now? That's C1 (basic protection missing)",
   "Would it only become dangerous if a fault happened? That's C2 (fault protection missing)",
   "Not dangerous, but fixing it would improve safety? That's C3",
   "Suspect a problem you can't confirm because of the limitations? That's FI",
   "Found a C1? Make it safe straight away if you can and tell the person ordering the work now",
   "Write the defect (what and where), not the fix, in plain words",
   "Any C1 or C2 makes the report UNSATISFACTORY; C3 and FI are advisory"
  ],
  "where": "Codes go in Section K of the EICR (page 3): one table for C1/C2 and one for C3/FI. The overall verdict is in Section E (page 2).",
  "reason": "C1 is dangerous now, C2 is dangerous if a fault occurs, C3 is not dangerous.",
  "numbers": [
   "C1 or C2 = UNSATISFACTORY",
   "C3 and FI on their own = SATISFACTORY (A4 form)"
  ]
 },
 "questions": [
  {
   "type": "match",
   "q": "Match the code to its meaning.",
   "pairs": [
    [
     "C1",
     "Danger present, immediate action"
    ],
    [
     "C2",
     "Potentially dangerous, urgent action"
    ],
    [
     "C3",
     "Improvement recommended"
    ],
    [
     "FI",
     "Further investigation advised"
    ]
   ],
   "why": "C1 dangerous now, C2 dangerous if a fault happens, C3 not dangerous, FI not sure yet.",
   "src": "49.pdf (EAL Condition Reporting slides) p27; 49.pdf (EAL Condition Reporting slides) p31-34; EICR form (IET BS 7671:2018+A4:2026) p3",
   "explain": {
    "what": "These are the four codes printed under the Section K tables.",
    "why": "C1 and C2 affect the overall assessment; C3 and FI are advisory on the A4 form.",
    "how": "Ask 'can I touch something live now?' then 'would a fault make it dangerous?' to split C1 from C2.",
    "where": "EICR form page 3, Section K (49.pdf slides p27 and p31-34)"
   }
  },
  {
   "type": "choice",
   "q": "What code?",
   "options": [
    "C1",
    "C2",
    "C3",
    "FI"
   ],
   "answer": 0,
   "why": "A finger can reach live parts now: basic protection is missing.",
   "src": "49.pdf (EAL Condition Reporting slides) p57; 49.pdf (EAL Condition Reporting slides) p36",
   "explain": {
    "what": "A socket faceplate is part of the enclosure that stops fingers reaching live parts (the slide says IPXXB is not met).",
    "why": "Your slides list damaged accessories with live parts accessible to touch as C1: nothing else has to go wrong for someone to get a shock.",
    "how": "Make it safe straight away (isolate the circuit if practicable), tell the client now, and code it C1.",
    "where": "49.pdf slides p36 and p57"
   },
   "scene": "Periodic on the test board. A socket-outlet's faceplate is broken and you could touch the live terminals through the crack."
  },
  {
   "type": "order",
   "q": "Put these in order, most dangerous first.",
   "steps": [
    "Line conductor touching a metal light fitting",
    "No main earthing conductor",
    "No 'Safety Electrical Connection – Do Not Remove' label on the bonding clamp"
   ],
   "why": "C1 is dangerous now, C2 dangerous if a fault happens, C3 not dangerous.",
   "src": "49.pdf (EAL Condition Reporting slides) p31-33; 49.pdf (EAL Condition Reporting slides) p53",
   "explain": {
    "what": "Ranking by danger is the same as ranking by code.",
    "why": "The live metal fitting can shock someone now (C1). No main earthing conductor only bites when a fault happens (C2). A missing label is an improvement (C3).",
    "how": "On the assessment, deal with the C1 first, then record the rest.",
    "where": "49.pdf slides p31-33 and p53"
   }
  },
  {
   "type": "choice",
   "q": "What code?",
   "options": [
    "C2",
    "C1",
    "C3",
    "FI"
   ],
   "answer": 0,
   "why": "Nothing live can be touched, but fault protection is missing at that point.",
   "src": "49.pdf (EAL Condition Reporting slides) p56",
   "explain": {
    "what": "The CPC carries fault current so the breaker trips if the fitting becomes live.",
    "why": "With no exposed live parts it isn't C1. But if a fault happened the metal could stay live, so it's potentially dangerous.",
    "how": "Code C2 and describe the location, e.g. 'Kitchen downlight 3: CPC open circuit'.",
    "where": "49.pdf slide p56"
   },
   "scene": "A downlight has no exposed live parts, but its CPC tests open circuit."
  },
  {
   "type": "choice",
   "q": "What code?",
   "options": [
    "C2",
    "C1",
    "C3",
    "FI"
   ],
   "answer": 0,
   "why": "A borrowed neutral (one circuit's neutral shared by another separately protected circuit) is C2: isolating one circuit's breaker doesn't fully isolate the other circuit.",
   "src": "49.pdf (EAL Condition Reporting slides) p42",
   "explain": {
    "what": "A borrowed neutral means isolating one circuit's breaker doesn't fully isolate the other circuit's conductors.",
    "why": "It isn't live to touch now, so not C1, but it is potentially dangerous for anyone working on it.",
    "how": "Code C2, say which circuits share the neutral, and record it in the C1/C2 table.",
    "where": "49.pdf slide p42"
   },
   "scene": "The upstairs lighting circuit is using the neutral of the separately protected downstairs lighting circuit."
  },
  {
   "type": "choice",
   "q": "What code?",
   "options": [
    "C2",
    "C3",
    "C1",
    "No code, it is a ring"
   ],
   "answer": 0,
   "why": "A ring final with a discontinuous conductor is C2.",
   "src": "49.pdf (EAL Condition Reporting slides) p41-42",
   "explain": {
    "what": "In a ring, both ends of each conductor go back to the board. With one break the circuit still works, so the fault is hidden.",
    "why": "Nothing is touchable, but the protective path is no longer the ring it was designed to be, so it is potentially dangerous.",
    "how": "Note the end-to-end readings, code C2 and describe the circuit in Section K.",
    "where": "49.pdf slides p41-42"
   },
   "scene": "Ring final end-to-end test: r1 0.52 Ω and rn 0.51 Ω, but r2 reads open circuit."
  },
  {
   "type": "choice",
   "q": "What code?",
   "options": [
    "C2",
    "C3",
    "C1",
    "FI"
   ],
   "answer": 0,
   "why": "Unsheathed cores likely to touch metalwork make it C2.",
   "src": "49.pdf (EAL Condition Reporting slides) p44",
   "explain": {
    "what": "The sheath is the cable's outer protection and should be taken inside the accessory's box.",
    "why": "If the cores can be touched or could touch metalwork it's C2. If not (e.g. inside a plastic box, out of reach) it's C3.",
    "how": "Check what the bare cores could touch before you choose between C2 and C3.",
    "where": "49.pdf slides p44, p50 and p59"
   },
   "scene": "At a metal back box the cable sheath stops outside the box, and the unsheathed cores rest on the metal edge."
  },
  {
   "type": "choice",
   "q": "What code?",
   "options": [
    "C3",
    "C2",
    "C1",
    "FI"
   ],
   "answer": 0,
   "why": "The bond still works; marking it is an improvement.",
   "src": "49.pdf (EAL Condition Reporting slides) p54",
   "explain": {
    "what": "A main bonding conductor joins the pipework to the main earthing terminal.",
    "why": "It is connected and tested OK, so it isn't dangerous. Not being identified is a C3 improvement.",
    "how": "Code C3 and record it in the C3/FI table in Section K.",
    "where": "49.pdf slide p54"
   },
   "scene": "The main bonding conductor to the water pipe is connected and tests fine, but it isn't marked or identified."
  },
  {
   "type": "choice",
   "q": "What code?",
   "options": [
    "C3",
    "C2",
    "C1",
    "FI"
   ],
   "answer": 0,
   "why": "A bare protective conductor not sleeved in the right colour is C3.",
   "src": "49.pdf (EAL Condition Reporting slides) p50",
   "explain": {
    "what": "Bare CPCs in twin and earth should be sleeved green-and-yellow where they are exposed in accessories.",
    "why": "It still works as a protective conductor, so it isn't dangerous, but sleeving it identifies its function: C3.",
    "how": "Code C3 and give the location in Section K.",
    "where": "49.pdf slide p50"
   },
   "scene": "At a light switch, the bare CPC of the twin and earth has no green-and-yellow sleeving."
  },
  {
   "type": "fill",
   "q": "What code? ___",
   "answers": [
    "FI",
    "F.I."
   ],
   "why": "You can't confirm it because of the agreed limitation, and it might turn out to be C1 or C2.",
   "src": "49.pdf (EAL Condition Reporting slides) p34; EICR form (IET BS 7671:2018+A4:2026) p9",
   "explain": {
    "what": "FI means further investigation is advised.",
    "why": "It is used where the inspection shows an apparent problem you can't fully identify because of the extent or limitations, and investigating could reveal a C1 or C2.",
    "how": "Code FI and say in Section K what needs investigating and why you couldn't.",
    "where": "EICR form page 9 note 14; 49.pdf slide p34"
   },
   "scene": "One socket circuit gives odd readings. You suspect a joint under the floor, but you agreed not to lift floorboards."
  },
  {
   "type": "choice",
   "q": "What do you do right away?",
   "options": [
    "Make it safe if practicable and tell the client now",
    "Note it and tell the client when the report is done",
    "Fix it and leave it off the report",
    "Code it FI so someone else deals with it"
   ],
   "answer": 0,
   "why": "C1 items are made safe on discovery where practicable; if not, the owner or user gets written notification urgently.",
   "src": "49.pdf (EAL Condition Reporting slides) p35; EICR form (IET BS 7671:2018+A4:2026) p9",
   "explain": {
    "what": "C1 means danger present, risk of injury, immediate remedial action needed.",
    "why": "Your slides say to advise immediate action, such as isolation, as soon as you find it, not when the inspection is finished. It still goes on the report as C1.",
    "how": "Isolate or make safe if you can, tell the person who ordered the work straight away, and put it in writing if you can't make it safe.",
    "where": "EICR form page 9 notes; 49.pdf slide p35"
   },
   "scene": "Halfway through the inspection you find exposed live conductors at a damaged socket-outlet."
  },
  {
   "type": "choice",
   "q": "Using the A4:2026 form, what is the overall assessment?",
   "options": [
    "Unsatisfactory, because of the C2",
    "Unsatisfactory, because of the FI",
    "Satisfactory, as the FI isn't settled",
    "No verdict until the FI is checked"
   ],
   "answer": 0,
   "why": "Any C1 or C2 makes the overall assessment unsatisfactory; the FI is advisory on the A4 form.",
   "src": "EICR form (IET BS 7671:2018+A4:2026) p2",
   "explain": {
    "what": "Section E gives one verdict: SATISFACTORY or UNSATISFACTORY.",
    "why": "The form says unsatisfactory means C1 and/or C2 conditions were found. One C2 is enough. The FI doesn't change the verdict on the A4 form, but it still goes in Section K.",
    "how": "Delete 'satisfactory', describe the general condition in plain words, and list the C2 and the FI in their Section K tables.",
    "where": "EICR form page 2, Section E; page 3, Section K"
   },
   "scene": "Your observations are one C2 (CPC open circuit at a downlight) and one FI.",
   "form": {
    "doc": "EICR",
    "page": 2,
    "where": "Section E: Summary of the condition of the installation",
    "box": "Overall assessment … is SATISFACTORY / UNSATISFACTORY* (Delete as appropriate)"
   }
  },
  {
   "type": "choice",
   "q": "Using the A4:2026 form, what is the overall assessment?",
   "options": [
    "Satisfactory",
    "Unsatisfactory, because of the C3s",
    "Unsatisfactory, as there are so many",
    "Satisfactory only once they're fixed"
   ],
   "answer": 0,
   "why": "C3s are advisory: they don't affect the overall assessment, however many there are.",
   "src": "EICR form (IET BS 7671:2018+A4:2026) p2; EICR form (IET BS 7671:2018+A4:2026) p9",
   "explain": {
    "what": "Only C1 and C2 drive the overall verdict.",
    "why": "C3 means improvement recommended. The form says a C3 is advisory and does not affect the overall assessment, so eight of them still give a satisfactory report.",
    "how": "Mark it satisfactory, list all eight in Section K's C3/FI table, and explain them to the client so they get due consideration.",
    "where": "EICR form page 2, Section E last paragraph; page 9 notes"
   },
   "scene": "Your observations are eight C3s. No C1, C2 or FI.",
   "form": {
    "doc": "EICR",
    "page": 2,
    "where": "Section E: Summary of the condition of the installation",
    "box": "Overall assessment … SATISFACTORY / UNSATISFACTORY"
   }
  },
  {
   "type": "choice",
   "q": "Which is the right way to write the observation?",
   "options": [
    "'Loft lighting cable insulation crumbling'",
    "'Loft lighting needs a full rewire as soon as possible'",
    "'Not how I'd have wired the loft'",
    "'Fit a new consumer unit with RCBOs'"
   ],
   "answer": 0,
   "why": "An EICR states the defect (what and where), not the fix.",
   "src": "49.pdf (EAL Condition Reporting slides) p22-24",
   "explain": {
    "what": "Observations must identify the problem clearly, in words the person ordering the work understands.",
    "why": "The EICR is a factual report, not a proposal for remedial work, and personal preference isn't allowed.",
    "how": "Write where and what: '[location]: [defect]'. Keep technical terms out unless the reader is an electrician.",
    "where": "EICR Section K (49.pdf slides p22-24)"
   },
   "scene": "You're writing up a defect in the loft for a homeowner who isn't an electrician."
  }
 ]
});
