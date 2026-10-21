// DRAFT lesson (v2, Unit 5) written from Tom's course PDFs and the IET A4:2026 EICR form. Waiting for Checker + Tom's approval.
window.LESSONS = window.LESSONS || [];
window.LESSONS.push({
 "id": "a5-04",
 "topic": "periodic",
 "title": "EICR: sections A to K",
 "awards": [
  "L3 Periodic"
 ],
 "status": "draft",
 "unconfirmed": true,
 "note": "Your course slide 49.pdf p28 (2018-era) says an FI makes the overall assessment unsatisfactory; the IET A4:2026 EICR form (Section E) says C3 and FI are advisory and do not affect the overall assessment. This lesson follows the A4 form; ask your tutor which rule the resit marks against.",
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
  "notes": "Section letters, boxes and wording match the A4:2026 EICR form. Same FI point as the coding lesson: the form says FI is advisory, your older slide says unsatisfactory."
 },
 "approved": null,
 "intro": {
  "what": "The EICR's first pages are lettered sections A to K: who ordered it, why, which installation, what you covered, your verdict, the next inspection date and signatures, then the attached schedules, supply details, installation particulars and your observations.",
  "why": "On the practical you get 30 minutes for the paperwork after testing the boards. Knowing which box is which saves time, and a report with gaps doesn't do its job for the client.",
  "how": [
   "Before testing: A (person ordering), B (reason and dates), C (the installation)",
   "Agree and write Section D: extent, agreed limitations and who agreed them",
   "While testing: fill the schedules and the supply (I) and particulars (J) boxes",
   "After testing: write each observation and its code in Section K",
   "Section E: overall assessment, SATISFACTORY or UNSATISFACTORY",
   "Section F: date for the next inspection, with reasons; Section G: signatures",
   "Section H: list the schedules attached (the report isn't valid without them)"
  ],
  "where": "EICR form page 2 (Sections A to G) and page 3 (Sections H to K).",
  "reason": "The EICR's letters are not the EIC's: on the EICR, D is extent and limitations, E is the overall assessment and K is observations.",
  "numbers": [
   "Practical: 2½ hours testing the boards + 30 minutes for paperwork",
   "Unsatisfactory = any C1 or C2"
  ]
 },
 "questions": [
  {
   "type": "match",
   "q": "Match the EICR section to what goes in it.",
   "pairs": [
    [
     "Section A",
     "Details of the person ordering the report"
    ],
    [
     "Section B",
     "Reason for producing the report"
    ],
    [
     "Section D",
     "Extent and limitations of inspection and testing"
    ],
    [
     "Section E",
     "Summary and overall assessment"
    ],
    [
     "Section F",
     "Recommendation for next inspection"
    ],
    [
     "Section K",
     "Observations and their codes"
    ]
   ],
   "why": "Page 2 runs A to G; page 3 has H to K, including the observations.",
   "src": "EICR form (IET BS 7671:2018+A4:2026) p2-3",
   "explain": {
    "what": "The EICR is laid out in lettered sections like the EIC, but they are different sections.",
    "why": "On the EIC Section D is next inspection; on the EICR Section D is extent and limitations. Don't carry the letters across.",
    "how": "Fill A to D before you start testing (agree D with the client), then E, F, G and K at the end.",
    "where": "EICR form page 2 (A to G) and page 3 (H to K)."
   }
  },
  {
   "type": "choice",
   "q": "Where do you record why the report is being done?",
   "options": [
    "Section A",
    "Section B",
    "Section E",
    "Section K"
   ],
   "answer": 1,
   "why": "Section B is 'Reason for producing this report'.",
   "src": "EICR form (IET BS 7671:2018+A4:2026) p2",
   "explain": {
    "what": "Section B says why the inspection is happening, plus the date(s) it was done.",
    "why": "Reasons on your course slides include periodic due, change of tenancy, change of use, damage, mortgage, insurance and licensing.",
    "how": "Write the reason in plain words, e.g. 'Required by mortgage lender before sale'.",
    "where": "EICR form page 2, Section B. Also 49.pdf slide p15."
   },
   "scene": "Job: the buyer's mortgage lender wants an EICR before the house sale goes through.",
   "form": {
    "doc": "EICR",
    "page": 2,
    "where": "Section B: Reason for producing this report",
    "box": "Reason …  Date(s) on which inspection and testing was carried out …"
   }
  },
  {
   "type": "choice",
   "q": "Where does this go in Section D?",
   "options": [
    "Agreed limitations including the reasons",
    "Operational limitations including the reasons",
    "Section K as a C3",
    "Nowhere, it's not needed"
   ],
   "answer": 0,
   "why": "It was agreed with the client before you started, so it's an agreed limitation.",
   "src": "EICR form (IET BS 7671:2018+A4:2026) p2",
   "explain": {
    "what": "Agreed limitations are restrictions you and the client agree before the inspection.",
    "why": "Operational limitations are things you couldn't do on the day that weren't agreed beforehand.",
    "how": "Write what was limited and why, and fill in 'Agreed with:' with the person's name.",
    "where": "EICR form page 2, Section D; page 9 notes 8-9. Also 49.pdf slide p17."
   },
   "scene": "Job: before you start, the office manager agrees that the server room circuit will not be isolated, so you won't test insulation resistance on it.",
   "form": {
    "doc": "EICR",
    "page": 2,
    "where": "Section D: Extent and limitations of inspection and testing",
    "box": "Agreed limitations including the reasons … Agreed with: …"
   }
  },
  {
   "type": "choice",
   "q": "How do you record this?",
   "options": [
    "As an agreed limitation",
    "As an operational limitation in Section D",
    "As a C2 observation in the Section K table",
    "Leave it out of the report"
   ],
   "answer": 1,
   "why": "Not being able to get access on the day is an operational limitation.",
   "src": "EICR form (IET BS 7671:2018+A4:2026) p9",
   "explain": {
    "what": "Operational limitations are problems on site that stopped you doing something you'd planned.",
    "why": "This wasn't agreed beforehand, so it isn't an agreed limitation. It isn't a defect either, so it isn't coded.",
    "how": "Write what you couldn't do and why in 'Operational limitations including the reasons'.",
    "where": "EICR form page 2, Section D; page 9 note 9. Also 49.pdf slide p18."
   },
   "scene": "Job: on the day, the loft hatch is locked and nobody has the key, so you can't inspect the loft wiring as planned.",
   "form": {
    "doc": "EICR",
    "page": 2,
    "where": "Section D: Extent and limitations of inspection and testing",
    "box": "Operational limitations including the reasons …"
   }
  },
  {
   "type": "choice",
   "q": "What is the overall assessment in Section E?",
   "options": [
    "Satisfactory",
    "Unsatisfactory",
    "Satisfactory with C2",
    "Leave it blank until fixed"
   ],
   "answer": 1,
   "why": "Any C1 or C2 makes the overall assessment unsatisfactory.",
   "src": "EICR form (IET BS 7671:2018+A4:2026) p2",
   "explain": {
    "what": "Section E gives one overall verdict: SATISFACTORY or UNSATISFACTORY.",
    "why": "The form says an unsatisfactory assessment means C1 and/or C2 conditions were found. One C2 is enough.",
    "how": "Cross out the word that doesn't apply, then write the general condition in plain words.",
    "where": "EICR form page 2, Section E; page 9 note 12. Also 49.pdf slide p28."
   },
   "scene": "Job: your observations are one C2 (no main bonding to the gas pipe) and three C3s.",
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
    "Unsatisfactory, because of the FI",
    "Unsatisfactory, because of the C3s",
    "Satisfactory",
    "No assessment can be given"
   ],
   "answer": 2,
   "why": "The form says C3 and FI are advisory and do not affect the overall assessment.",
   "src": "EICR form (IET BS 7671:2018+A4:2026) p2",
   "explain": {
    "what": "Only C1 and C2 drive the overall verdict on this form.",
    "why": "Section E states C3 and FI observations are advisory and don't affect the overall assessment. NOTE: your older course slide (49.pdf p28) says an FI makes it unsatisfactory, so check which your assessor expects.",
    "how": "Mark it satisfactory and still list the C3s and FI in Section K so they get due consideration.",
    "where": "EICR form page 2, Section E, last paragraph; page 3 Section K."
   },
   "scene": "Job: your observations are two C3s and one FI. No C1 or C2.",
   "form": {
    "doc": "EICR",
    "page": 2,
    "where": "Section E: Summary of the condition of the installation",
    "box": "Overall assessment … SATISFACTORY / UNSATISFACTORY"
   }
  },
  {
   "type": "choice",
   "q": "How is the next inspection written in Section F of an EICR?",
   "options": [
    "As a date, with reasons",
    "As years/months, like the EIC",
    "As 'when the C3s are fixed'",
    "The client chooses it later"
   ],
   "answer": 0,
   "why": "Section F asks for a date to inspect 'before', with the reasons.",
   "src": "EICR form (IET BS 7671:2018+A4:2026) p9",
   "explain": {
    "what": "Section F is your recommendation for when the next EICR should be done.",
    "why": "On an EIC the designer gives an interval in years/months; on an EICR the notes say it's a date, supported by an explanation.",
    "how": "Think about the type of premises and the condition you found, write a date, then give the reasons.",
    "where": "EICR form page 2, Section F; page 9 note 20."
   },
   "form": {
    "doc": "EICR",
    "page": 2,
    "where": "Section F: Recommendation for next inspection",
    "box": "…further inspected and tested before … (date) for the following reasons …"
   }
  },
  {
   "type": "choice",
   "q": "Which two people sign Section G?",
   "options": [
    "Inspected and tested by; Report authorized for issue by",
    "Designer and constructor",
    "The client and the inspector, so that both of them agree with the findings",
    "Inspector and DNO"
   ],
   "answer": 0,
   "why": "Section G has 'Inspected and tested by' and 'Report authorized for issue by'.",
   "src": "EICR form (IET BS 7671:2018+A4:2026) p2",
   "explain": {
    "what": "Section G is the declaration that the report is an accurate assessment, within the stated extent and limitations.",
    "why": "An EICR has no designer or constructor: nobody is certifying new work. The client doesn't sign it.",
    "how": "Fill your name in capitals, signature, company, position, address and date; the authorising person does the same.",
    "where": "EICR form page 2, Section G; page 9 note 10."
   }
  },
  {
   "type": "choice",
   "q": "Which table in Section K does this observation go in?",
   "options": [
    "C1 and C2 observations",
    "C3 and FI observations",
    "Section D limitations",
    "It isn't recorded"
   ],
   "answer": 1,
   "why": "A missing 'Safety Electrical Connection - Do Not Remove' notice is a C3, so it goes in the C3/FI table.",
   "src": "49.pdf (EAL Condition Reporting slides) p50",
   "explain": {
    "what": "Section K has two tables: C1/C2 (these affect the overall assessment) and C3/FI (these don't).",
    "why": "Your course slides code a missing 'Safety Electrical Connection - Do Not Remove' label as C3, improvement recommended. It isn't dangerous, so not the C1/C2 table.",
    "how": "Write the item number, a clear description with the schedule reference, and the code C3.",
    "where": "EICR form page 3, Section K; 49.pdf slides p33 and p50."
   },
   "scene": "Job: the 'Safety Electrical Connection - Do Not Remove' label is missing from the bonding clamp on the water pipe.",
   "form": {
    "doc": "EICR",
    "page": 3,
    "where": "Section K: Observations",
    "box": "Item No. | C3 and FI observation(s) | Classification code"
   }
  },
  {
   "type": "fill",
   "q": "Fill in this box. If yes, estimate age ___ years",
   "answers": [
    "5",
    "five"
   ],
   "why": "You saw evidence of additions, so tick Yes and estimate their age.",
   "src": "EICR form (IET BS 7671:2018+A4:2026) p2",
   "explain": {
    "what": "Section C describes the installation: occupier, type of premises, age of wiring and signs of additions.",
    "why": "You saw newer work, so it's 'Yes', not 'Not apparent', and the form then asks for an estimated age.",
    "how": "Tick Yes and write your best estimate in years.",
    "where": "EICR form page 2, Section C."
   },
   "scene": "Job: the house wiring looks about 30 years old, but there is a newer kitchen circuit that looks about 5 years old.",
   "form": {
    "doc": "EICR",
    "page": 2,
    "where": "Section C: Details of the installation which is the subject of this report",
    "box": "Evidence of additions / alterations? Yes / Not apparent  If yes, estimate age … years"
   }
  },
  {
   "type": "match",
   "q": "Match the later sections to what goes in them.",
   "pairs": [
    [
     "Section C",
     "Details of the installation (age, additions, records)"
    ],
    [
     "Section H",
     "The schedules and continuation sheets attached"
    ],
    [
     "Section I",
     "Supply characteristics, earthing and Ze"
    ],
    [
     "Section J",
     "Particulars: means of earthing, main bonding, main switch"
    ]
   ],
   "why": "Page 2 has Section C; page 3 starts with H, then I and J, before the observations in K.",
   "src": "EICR form (IET BS 7671:2018+A4:2026) p2-3",
   "explain": {
    "what": "Sections I and J on the EICR hold the same kind of supply and installation details you fill in on an EIC.",
    "why": "Section C describes the installation (occupier, type of premises, age of wiring, additions, records). H lists what is attached, I is the supply, J is the installation's earthing, bonding and main switch.",
    "how": "Fill I and J as you do Ze, the earthing conductor and bonding checks, so nothing is left to memory at the end.",
    "where": "EICR form page 2, Section C; page 3, Sections H, I and J"
   }
  },
  {
   "type": "choice",
   "q": "Where do you record it?",
   "options": [
    "Section I, external earth fault loop impedance Ze",
    "Section J, with the means of earthing and earthing conductor",
    "Section K, as an observation",
    "Section D, as the extent"
   ],
   "answer": 0,
   "why": "Ze goes in Section I, supply characteristics and earthing arrangements, 'by enquiry or by measurement'.",
   "src": "EICR form (IET BS 7671:2018+A4:2026) p3",
   "explain": {
    "what": "Section I records the supply: earthing arrangement, live conductors, voltage, frequency, prospective fault current and Ze.",
    "why": "Section J is about the installation's own means of earthing and conductors, not the supply's impedance. A normal reading isn't an observation.",
    "how": "Tick TN-C-S, write 0.28 in the Ze box, and fill in the other supply boxes.",
    "where": "EICR form page 3, Section I"
   },
   "scene": "Periodic on the test board. TN-C-S supply; you measure Ze = 0.28 Ω at the origin with the earthing conductor disconnected.",
   "form": {
    "doc": "EICR",
    "page": 3,
    "where": "Section I: Supply characteristics and earthing arrangements",
    "box": "External earth fault loop impedance, Ze(2) … Ω  (2) by enquiry or by measurement"
   }
  },
  {
   "type": "choice",
   "q": "What do you tick in Section K?",
   "options": [
    "'No remedial action is required'",
    "'The following observations are made'",
    "Nothing: leave Section K blank",
    "Write 'N/A' across both tables"
   ],
   "answer": 0,
   "why": "Section K has a choice at the top: 'No remedial action is required' or 'The following observations are made'.",
   "src": "EICR form (IET BS 7671:2018+A4:2026) p3",
   "explain": {
    "what": "Section K is where observations are written, referring to the schedules and subject to the limitations in Section D.",
    "why": "If you found nothing to record, you still say so by ticking 'No remedial action is required', so the reader knows it wasn't missed.",
    "how": "Tick the box, then make sure Section E says satisfactory and the schedules back it up.",
    "where": "EICR form page 3, Section K"
   },
   "scene": "You've finished the inspection and testing and found nothing that needs a code.",
   "form": {
    "doc": "EICR",
    "page": 3,
    "where": "Section K: Observations",
    "box": "No remedial action is required / The following observations are made (see below)"
   }
  },
  {
   "type": "choice",
   "q": "The client wants the schedules left off and just the first pages sent. Is the report still valid?",
   "options": [
    "No, it's only valid with the schedules attached",
    "Yes, the schedules are optional extras for the client's file",
    "Yes, if Section E says satisfactory",
    "Only if the client signs Section G"
   ],
   "answer": 0,
   "why": "Section H says the listed schedules are part of the document and the report is valid only when they are attached.",
   "src": "EICR form (IET BS 7671:2018+A4:2026) p3; EICR form (IET BS 7671:2018+A4:2026) p11",
   "explain": {
    "what": "Section H lists the schedules of inspection, circuit details, test results and any continuation sheets attached.",
    "why": "The schedules are the evidence for the verdict. Without them the report isn't valid, whatever Section E says.",
    "how": "Fill in Section H with how many of each schedule are attached and send the lot. The client keeps the original; you keep a duplicate.",
    "where": "EICR form page 3, Section H; page 11, guidance for recipients notes 2-3"
   },
   "form": {
    "doc": "EICR",
    "page": 3,
    "where": "Section H: Schedules and continuation sheet(s) attached",
    "box": "The schedule(s) and continuation sheet(s) listed are part of this document and this report is valid only when they are attached to it."
   }
  }
 ]
});
