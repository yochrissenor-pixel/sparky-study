// DRAFT lesson (v2 rewrite) from the IET A4:2026 EIC form and Tom's Access Training PDFs. Waiting for Checker + Tom's approval.
window.LESSONS = window.LESSONS || [];
window.LESSONS.push({
 "id": "a4-01",
 "topic": "forms",
 "title": "The EIC: sections and signatures",
 "awards": [
  "L2 Fundamental",
  "L3 Initial Verification"
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
  }
 ],
 "checker": {
  "by": "Claude Checker",
  "date": "2026-10-12",
  "verdict": "pass",
  "notes": "Checked against the A4:2026 EIC and your Initial Verification slides. The 5-year figure for a rented house comes from the course list of inspection intervals, used here as the guide for the designer's first interval."
 },
 "approved": null,
 "intro": {
  "what": "The Electrical Installation Certificate (EIC) is the paperwork for new work: a new installation, new circuits, or a new consumer unit. Pages 2 and 3 are lettered sections A to J, and the schedules of inspection, circuit details and test results are attached behind it.",
  "why": "On the assessment you get about 30 minutes for paperwork after testing the board. Each signature says who is responsible for which part of the job, and the certificate is only valid with its schedules attached.",
  "how": [
   "Pick the right form: new circuit or new board = EIC; extra points on an existing circuit = Minor Works; checking what's already there = EICR.",
   "Sections A and B: client, address, tick new / adding to / alteration, then write the extent (exactly what you did).",
   "Section C: sign each block you are responsible for (design, construction, inspection & testing) and write any departures.",
   "Section D: the designer's recommended interval to the first periodic inspection.",
   "Section E: names and addresses of everyone who signed Section C.",
   "Sections I and J: comments on the existing installation, then count and attach the schedules.",
   "Give the original to the person who ordered the work and keep a copy."
  ],
  "where": "EIC page 2 (Sections A to D) and page 3 (Sections E to J). The notes on page 6 tell you how to fill it in.",
  "reason": "Write the extent carefully: it is your record of exactly what you designed, built and tested, and it limits what you can be held responsible for.",
  "numbers": [
   "3 signature blocks: design, construction, inspection & testing",
   "Paperwork time on the L2 practical: 30 minutes",
   "Course intervals: rented housing 5 years, private housing 10 years"
  ]
 },
 "questions": [
  {
   "type": "choice",
   "q": "Which document do you fill in for this job?",
   "options": [
    "Minor Works certificate",
    "Electrical Installation Certificate (EIC)",
    "Condition Report (EICR)",
    "Schedule of Inspection on its own, with no certificate"
   ],
   "answer": 1,
   "why": "New circuits going in means an EIC.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p6; 99.pdf (EAL Initial Verification slides) p32",
   "explain": {
    "what": "The EIC is the certificate for new electrical work.",
    "why": "The EIC notes say it is for a new installation or for an addition or alteration where one or more new circuits have been introduced. Minor Works is only for work that does not add new circuits.",
    "how": "Ask yourself: is there a new circuit or a new consumer unit? If yes, it's an EIC.",
    "where": "EIC form page 6, 'Notes for the person producing the Certificate', note 1. Also 99.pdf slide p32."
   },
   "scene": "Job: Mrs Patel has asked you to put in two new circuits (a shed supply and an outside socket) from a spare way in her consumer unit."
  },
  {
   "type": "choice",
   "q": "Which document may you use for this job?",
   "options": [
    "EIC with all three signatures",
    "Condition Report (EICR)",
    "Minor Works certificate",
    "No paperwork for a small addition"
   ],
   "answer": 2,
   "why": "No new circuit, so a Minor Works certificate may be used.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p6; 99.pdf (EAL Initial Verification slides) p33-34",
   "explain": {
    "what": "The Minor Electrical Installation Works certificate covers small jobs on a circuit that already exists.",
    "why": "The EIC notes say that for an addition or alteration that does not introduce new circuits, a Minor Works certificate may be used. An EICR is for reporting on condition, not for new work.",
    "how": "Adding to an existing circuit with no new protective device: Minor Works, one certificate per circuit.",
    "where": "EIC form page 6, note 1. Also 99.pdf slides p33-34."
   },
   "scene": "Job: the client wants one extra double socket added to the existing downstairs ring. No new circuit and no new protective device."
  },
  {
   "type": "choice",
   "q": "Which document goes with this job?",
   "options": [
    "Condition Report (EICR)",
    "Minor Works certificate",
    "No certificate, it's like-for-like",
    "EIC"
   ],
   "answer": 3,
   "why": "Replacing a consumer unit is certified on an EIC, not an EICR.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p6",
   "explain": {
    "what": "A consumer unit change is new work, even if no new circuits are added.",
    "why": "The EIC notes list 'the replacement of a consumer unit/distribution board' as EIC work. The EICR notes say the EICR is not to be used for the replacement of a consumer unit.",
    "how": "New board = EIC, with the schedules of inspection, circuit details and test results attached.",
    "where": "EIC form page 6, note 1; EICR form page 9, note 1."
   },
   "scene": "Job: you swap an old fuse box for a new consumer unit. All the existing circuits are reconnected; no new circuits."
  },
  {
   "type": "match",
   "q": "Match each EIC section to what goes in it.",
   "pairs": [
    [
     "Section A",
     "Details of the client"
    ],
    [
     "Section B",
     "Installation address, description and extent"
    ],
    [
     "Section C",
     "Signatures for design, construction, and inspection & testing"
    ],
    [
     "Section D",
     "Next inspection interval"
    ],
    [
     "Section E",
     "Names and addresses of the people who signed"
    ],
    [
     "Section F",
     "Supply characteristics and earthing arrangements"
    ]
   ],
   "why": "Pages 2 and 3 of the EIC run in letter order from the client to the supply.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p2-3",
   "explain": {
    "what": "The EIC is split into lettered sections so every certificate is laid out the same way.",
    "why": "Section C holds the signatures; Section E is just the contact details of those same people, so don't mix them up.",
    "how": "Work through the sections in letter order: A and B first, then the signatures, then the technical boxes on page 3.",
    "where": "EIC form page 2 (Sections A to D) and page 3 (Sections E to J)."
   }
  },
  {
   "type": "choice",
   "q": "Which box do you tick under 'Description of installation'?",
   "options": [
    "New installation",
    "Adding to an existing installation",
    "Alteration to an existing installation",
    "None: write it in Section I"
   ],
   "answer": 1,
   "why": "You added new circuits to a board that was already there, so it's an addition.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p2; 99.pdf (EAL Initial Verification slides) p39",
   "explain": {
    "what": "Section B describes the installation and the extent of what this certificate covers.",
    "why": "'New installation' would mean the whole installation is new. Here the board and other circuits were already there and you added to them. Section I is for comments on the existing parts, not this description.",
    "how": "Tick 'Adding to an existing installation', then in the extent write exactly which circuits you designed, installed and tested (e.g. 'Circuits 7 and 8: shed supply and outside socket').",
    "where": "EIC form page 2, Section B, 'Description and extent of the installation'. Also 99.pdf slide p39 (extent is very important)."
   },
   "scene": "Job: you've just installed and tested two new circuits from spare ways in an existing consumer unit.",
   "form": {
    "doc": "EIC",
    "page": 2,
    "where": "Section B: Description and extent of the installation",
    "box": "New installation / Adding to an existing installation / Alteration to an existing installation; Extent of installation covered by this Certificate: …"
   }
  },
  {
   "type": "choice",
   "q": "Which three people sign Section C?",
   "options": [
    "Client, inspector and DNO",
    "Designer, constructor, inspector",
    "Electrician, supervisor and client",
    "Inspector only"
   ],
   "answer": 1,
   "why": "Section C has a signature block for design, for construction and for inspection and testing.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p2; 99.pdf (EAL Initial Verification slides) p35",
   "explain": {
    "what": "Section C is where each responsible person certifies their part of the work.",
    "why": "Each person is responsible for a different part: the design, the build, and the inspection and testing. The client does not sign the EIC.",
    "how": "Sign the block that matches the work you were responsible for, with the date and your name in block capitals.",
    "where": "EIC form page 2, Section C (three blocks, in the order design, construction, inspection and testing). Also 99.pdf slide p35."
   },
   "form": {
    "doc": "EIC",
    "page": 2,
    "where": "Section C: Certification signatories",
    "box": "Signature: … Date: … Name (IN BLOCK CAPITALS): … Designer No 1 / Constructor / Inspector"
   }
  },
  {
   "type": "choice",
   "q": "How do you sign Section C?",
   "options": [
    "Sign only the inspection and testing block",
    "Sign in each of the three blocks",
    "Sign once anywhere in Section C",
    "Ask the client to sign the design block"
   ],
   "answer": 1,
   "why": "If you are responsible for more than one part of the work, you sign in each of the right places.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p6",
   "explain": {
    "what": "One person can be responsible for all three parts of the work.",
    "why": "The EIC notes say a signatory authorised to certify more than one category of work signs in each of the appropriate places. (There is also a single-signature version of the EIC for this.)",
    "how": "On this multi-signature form: sign the design, construction and inspection & testing blocks yourself.",
    "where": "EIC form page 6, notes about signatures."
   },
   "scene": "Job: you designed the new circuits, installed them, and did all the inspection and testing yourself."
  },
  {
   "type": "choice",
   "q": "When is the 'Designer No 2' signature line used?",
   "options": [
    "When two people share the design",
    "When the job is three-phase",
    "When the inspector also designed it",
    "When the client wants a second copy"
   ],
   "answer": 0,
   "why": "The form marks Designer No 2 'Where there is mutual responsibility for the design'.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p2",
   "explain": {
    "what": "Designer No 2 is a second design signature.",
    "why": "It is only used when two people share responsibility for the design. It has nothing to do with copies or supply type.",
    "how": "If only you designed it, leave Designer No 2 blank in Section C, and leave Designer (No 2) in Section E blank too (it is marked 'if applicable').",
    "where": "EIC form page 2, Section C, design block; page 3, Section E."
   },
   "form": {
    "doc": "EIC",
    "page": 2,
    "where": "Section C: Certification signatories",
    "box": "Signature: … Name (IN BLOCK CAPITALS): … Designer No 2**"
   }
  },
  {
   "type": "choice",
   "q": "Where do you record this on the EIC?",
   "options": [
    "Section D, as a shorter interval",
    "Departures box in Section C",
    "Nowhere, as the equipment works",
    "Column 31 Remarks only"
   ],
   "answer": 1,
   "why": "Installed equipment that isn't of the right type or standard is recorded as a departure (deviation) on the EIC.",
   "src": "99.pdf (EAL Initial Verification slides) p45; EIC form (IET BS 7671:2018+A4:2026) p2",
   "explain": {
    "what": "Each Section C block has a 'Details of departures from BS 7671' box for anything in the work that doesn't follow the rules.",
    "why": "Your course slide says equipment not of the correct type or not to the applicable British Standard is recorded as a deviation on the EIC. 'It works' isn't enough, and Remarks is for test notes on a circuit, not departures.",
    "how": "Write what the item is, where it is and how it differs, in the departures box of the block you are signing.",
    "where": "EIC form page 2, Section C, 'Details of departures from BS 7671'. Also 99.pdf slide p45."
   },
   "scene": "Job: during your inspection of the new work you find an item of installed equipment that isn't to any British Standard (or accepted equivalent).",
   "form": {
    "doc": "EIC",
    "page": 2,
    "where": "Section C: Certification signatories",
    "box": "Details of departures from BS 7671: …"
   }
  },
  {
   "type": "fill",
   "q": "You're the designer. Fill in Section D: not more than ___ years.",
   "answers": [
    "5",
    "five"
   ],
   "why": "Rented housing is inspected every 5 years (private housing would be 10).",
   "src": "99.pdf (EAL Initial Verification slides) p36; 99.pdf (EAL Initial Verification slides) p38; EIC form (IET BS 7671:2018+A4:2026) p2",
   "explain": {
    "what": "Section D is the designer's recommendation for when the first periodic inspection should be done.",
    "why": "The designer knows the use and environment, so the designer fills it in ('I/We, the designer(s), recommend…'). Your course list of intervals between inspections gives rented housing 5 years (private housing would be 10); it is a sensible guide for the first one too.",
    "how": "Write the number and delete years or months. The form notes say to think about how well the installation is likely to be maintained.",
    "where": "EIC form page 2, Section D; page 6 notes. Also 99.pdf slides p36 and p38 (frequency of testing)."
   },
   "scene": "Job: new consumer unit in a rented house. You designed the work.",
   "form": {
    "doc": "EIC",
    "page": 2,
    "where": "Section D: Next inspection",
    "box": "…further inspected and tested after an interval of not more than … years/months"
   }
  },
  {
   "type": "choice",
   "q": "Where do you write this down on the EIC?",
   "options": [
    "Section I, existing installation",
    "Section D, next inspection",
    "Departures in Section C",
    "A note on the inspection schedule"
   ],
   "answer": 0,
   "why": "Section I is for comments on the existing installation when you add to or alter it.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p3",
   "explain": {
    "what": "Section I records what you notice about the existing installation that was not part of your work.",
    "why": "Departures in Section C are about YOUR work not following BS 7671. A problem on the old part belongs in Section I.",
    "how": "Write a short, clear comment about what you saw and where, and tell the client.",
    "where": "EIC form page 3, Section I."
   },
   "scene": "Job: while adding a new circuit you notice a damaged socket on an existing circuit that you were not asked to work on.",
   "form": {
    "doc": "EIC",
    "page": 3,
    "where": "Section I: Comments on existing installation",
    "box": "…"
   }
  },
  {
   "type": "choice",
   "q": "The client says the schedule of test results isn't needed. Is the EIC valid without it?",
   "options": [
    "Yes, the signatures are enough",
    "Yes, if the client agrees in writing",
    "Only for domestic jobs",
    "No, only with its schedules attached"
   ],
   "answer": 3,
   "why": "Section J says the certificate is valid only when the listed schedules are attached.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p3; EIC form (IET BS 7671:2018+A4:2026) p6",
   "explain": {
    "what": "Section J lists how many continuation sheets and schedules go with the certificate.",
    "why": "The form states the schedules are part of the document and the certificate is valid only when they are attached to it.",
    "how": "Count your schedule pages, write the numbers in Section J, and staple them to the certificate.",
    "where": "EIC form page 3, Section J; page 6 notes."
   },
   "form": {
    "doc": "EIC",
    "page": 3,
    "where": "Section J: Schedules",
    "box": "…Schedule(s) of Inspection …Schedule(s) of Circuit Details and Schedule(s) of Test Results"
   }
  },
  {
   "type": "choice",
   "q": "Who gets the original EIC?",
   "options": [
    "The DNO, for its records",
    "Whoever ordered the work",
    "Building control, by post",
    "You keep it on file"
   ],
   "answer": 1,
   "why": "The original goes to the person ordering the work; you keep a duplicate.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p6; 99.pdf (EAL Initial Verification slides) p32",
   "explain": {
    "what": "The EIC is issued to whoever ordered the work.",
    "why": "The notes say the original is issued to the person ordering the work and a duplicate is kept by the person issuing it.",
    "how": "Hand over the original with all schedules attached and keep your own copy.",
    "where": "EIC form page 6 notes; page 7 guidance for recipients. Also 99.pdf slide p32."
   }
  },
  {
   "type": "order",
   "q": "You've finished testing the board. Put the paperwork in a sensible order.",
   "steps": [
    "Complete the schedules of circuit details and test results",
    "Tick the schedule of inspections (Section H)",
    "Fill Sections F and G: supply, earthing, main switch",
    "Sign Section C and fill Section D",
    "List the schedules in Section J and attach them"
   ],
   "why": "Readings first, then the certificate pages, then sign and attach: you can't sign for results you haven't written down.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p2-6",
   "explain": {
    "what": "The EIC pages and the schedules work together: the certificate is only valid with the schedules attached.",
    "why": "Signing before the schedules are complete would mean certifying results that aren't on paper yet. Section J needs the page count, so it comes last.",
    "how": "In the 30 minutes after testing, copy your readings into the schedules first, then work through the certificate, then sign and staple.",
    "where": "EIC form pages 2-5 and the page 6 notes. 99.pdf slide p3 gives 30 minutes for paperwork."
   },
   "scene": "Assessment board: testing is done and the 30-minute paperwork time has started."
  }
 ]
});
