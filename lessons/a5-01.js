// DRAFT lesson (v2, Unit 5) written from Tom's course PDFs and the IET A4:2026 EICR form. Waiting for Checker + Tom's approval.
window.LESSONS = window.LESSONS || [];
window.LESSONS.push({
 "id": "a5-01",
 "topic": "periodic",
 "title": "What a periodic inspection is for",
 "awards": [
  "L3 Periodic"
 ],
 "status": "draft",
 "unconfirmed": false,
 "note": "The planning, sampling and Section D material comes from your Condition Reporting slides (49.pdf), which are 2018-era; it matches the IET A4:2026 EICR form wording.",
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
  "verdict": "pass",
  "notes": "Every answer matches your Condition Reporting slides and the A4:2026 EICR form wording for Sections B and D."
 },
 "approved": null,
 "intro": {
  "what": "A periodic inspection checks an existing installation that is already in use and reports whether it is still safe for continued use. You write it up on an Electrical Installation Condition Report (EICR). It is a report, not a certificate, and you don't do the repairs as part of it.",
  "why": "Every installation wears and deteriorates with use and time. The EICR tells the person who ordered it what is dangerous, what needs fixing and when it should be looked at again.",
  "how": [
   "Meet the client: find out why they want the report and what it should cover",
   "Do a quick walk-around survey to plan the job, spot what needs isolating and set your sample sizes",
   "Agree the extent and limitations with the client before you start, and write them in Section D with the name of who agreed",
   "Inspect (with the installation isolated) and do the tests you consider appropriate",
   "Anything you planned but couldn't do on the day goes in Section D as an operational limitation",
   "Code what you find, give the overall assessment and recommend the next inspection date"
  ],
  "where": "On the EICR: Section B is the reason for the report and Section D is the extent and limitations (page 2 of the form).",
  "reason": "Section D is your protection: you could be held responsible for parts you never looked at, so write down exactly what you covered and what you didn't.",
  "numbers": [
   "Sampling: 100% inspection and testing is often unrealistic, so set sample sizes from your walk-around"
  ]
 },
 "questions": [
  {
   "type": "choice",
   "q": "Which document do you produce?",
   "options": [
    "EICR (condition report)",
    "EIC (installation certificate)",
    "Minor Works certificate",
    "PAT test record"
   ],
   "answer": 0,
   "why": "An existing installation in use gets a condition report, not a certificate.",
   "src": "49.pdf (EAL Condition Reporting slides) p9-11",
   "explain": {
    "what": "The EICR gives an engineering view on an existing installation in terms of safety and suitability for continued service.",
    "why": "An EIC certifies new work you have installed. Here nothing new has been installed: the landlord wants to know the condition of what is already there.",
    "how": "When the job is 'tell me if it is still safe', reach for the EICR, its schedule of inspection and its schedule of test results.",
    "where": "EICR form page 2 onwards (49.pdf slides p9-11)"
   },
   "scene": "A landlord wants the electrics in a rented flat checked before new tenants move in."
  },
  {
   "type": "choice",
   "q": "While you're doing the EICR, the client asks if fixing a cracked socket is part of the job. What is the answer?",
   "options": [
    "No, the EICR only reports on its condition",
    "Yes, the EICR price always includes all the repairs",
    "Yes, but only the C1 items",
    "Only if the client signs Section G"
   ],
   "answer": 0,
   "why": "The EICR is a report: it records the defect, it doesn't carry out the remedial work.",
   "src": "49.pdf (EAL Condition Reporting slides) p13; 49.pdf (EAL Condition Reporting slides) p23",
   "explain": {
    "what": "Your slides stress that the EICR is a REPORT and NOT a certificate, and it does not involve carrying out any remedial work.",
    "why": "Repairs can be quoted for and done separately, but they are not part of the report. (A C1 is still made safe on discovery, which you'll meet in the coding lesson.)",
    "how": "Write the defect in Section K, explain it to the client, and offer the repair as separate work.",
    "where": "EICR Section K (49.pdf slides p13 and p23)"
   }
  },
  {
   "type": "match",
   "q": "Match the job to the reason you write in Section B.",
   "pairs": [
    [
     "The house is being sold and the lender wants a report",
     "Mortgage"
    ],
    [
     "New tenants are moving in",
     "Change of tenancy"
    ],
    [
     "The kitchen flooded last week",
     "Damage (fire or flood)"
    ],
    [
     "The date on the last certificate has arrived",
     "Periodic is due"
    ]
   ],
   "why": "Section B records why the report is being produced.",
   "src": "49.pdf (EAL Condition Reporting slides) p15; EICR form (IET BS 7671:2018+A4:2026) p2",
   "explain": {
    "what": "Section B is 'Reason for producing this report', together with the date(s) the inspection and testing was done.",
    "why": "Your slides list the usual reasons: periodic due, change of ownership or tenancy, change of use, damage, mortgage, insurance, local authority and licensing.",
    "how": "Write the reason in plain words, e.g. 'Change of tenancy'.",
    "where": "EICR form page 2, Section B (49.pdf slide p15)"
   },
   "form": {
    "doc": "EICR",
    "page": 2,
    "where": "Section B: Reason for producing this report",
    "box": "Reason …  Date(s) on which inspection and testing was carried out …"
   }
  },
  {
   "type": "order",
   "q": "Put these in order before you start inspecting.",
   "steps": [
    "Meet the client to outline the scope and the items likely to need isolating",
    "Do a walk-around survey to plan the job",
    "Set your sample sizes from what you saw",
    "Agree the extent and limitations and write them in Section D",
    "Start the inspection with the installation isolated"
   ],
   "why": "Plan with the client, look round, set the sample, agree it in writing, then start.",
   "src": "49.pdf (EAL Condition Reporting slides) p4-5; 49.pdf (EAL Condition Reporting slides) p16-19",
   "explain": {
    "what": "The slides describe the process before inspection and testing: meet the client, do a simple walk-around survey, then agree the extent and limitations.",
    "why": "The walk-around comes before the agreement because it is what lets you plan, spot items needing isolation and set sample sizes, and those feed into what you agree.",
    "how": "On the assessment, talk the assessor through these steps before you pick up a tester.",
    "where": "49.pdf slides p4-5 and p16-19; EICR Section D"
   }
  },
  {
   "type": "choice",
   "q": "Why does a periodic usually use sampling rather than testing everything?",
   "options": [
    "100% testing is often unrealistic and uneconomical",
    "The rules don't allow you to test every single circuit",
    "It is quicker, so the report can be cheaper",
    "Sampling gives more accurate readings"
   ],
   "answer": 0,
   "why": "Your slides say 100% inspection and testing in many installations is unrealistic, uneconomical and unachievable.",
   "src": "49.pdf (EAL Condition Reporting slides) p7",
   "explain": {
    "what": "Sampling means inspecting and testing a sensible proportion of items rather than every single one.",
    "why": "It isn't banned to test everything, and it isn't about accuracy. In big installations it simply isn't realistic to test every point.",
    "how": "Set the sample from your walk-around, and write the sampling in Section D so the extent is clear.",
    "where": "49.pdf slides p7-8; EICR Section D"
   }
  },
  {
   "type": "choice",
   "q": "Which needs the bigger sample?",
   "options": [
    "The 40-year-old workshop",
    "The 5-year-old office",
    "Both get the same sample",
    "Neither: test everything in both"
   ],
   "answer": 0,
   "why": "Age, condition, environment, maintenance, time since the last inspection and the quality of records all push the sample size up or down.",
   "src": "49.pdf (EAL Condition Reporting slides) p8",
   "explain": {
    "what": "Your slides list what to consider when setting sample sizes: age and condition, type and use, environment, maintenance, time since the last inspection, size, the owner's input and the quality of records.",
    "why": "The old workshop scores badly on almost every one: old, damp, no records, never inspected. The office has good records and a recent report.",
    "how": "Ask yourself 'how much do I trust this installation?' The less you trust it, the bigger the sample.",
    "where": "49.pdf slide p8"
   },
   "scene": "Two jobs: a 5-year-old office with its EIC and a recent EICR, and a 40-year-old workshop with signs of damp, no records and no previous report."
  },
  {
   "type": "choice",
   "q": "Where does this go in Section D?",
   "options": [
    "Agreed limitations, with the reason",
    "Operational limitations, with the reason",
    "As a C3 in Section K",
    "It doesn't need recording"
   ],
   "answer": 0,
   "why": "It was agreed with the client before you started, so it is an agreed limitation.",
   "src": "49.pdf (EAL Condition Reporting slides) p17; EICR form (IET BS 7671:2018+A4:2026) p2",
   "explain": {
    "what": "Agreed limitations are restrictions you and the client agree before the inspection starts, such as tests you won't do, the sample size, or times you can isolate.",
    "why": "Operational limitations are things you couldn't do on the day that weren't agreed. A limitation isn't a defect, so it isn't coded.",
    "how": "Write what was limited and why, then fill in 'Agreed with:' with the person's name.",
    "where": "EICR form page 2, Section D (49.pdf slide p17)"
   },
   "scene": "The building is large. Before you start, the client agrees you will inspect and test a sample of one socket-outlet in four.",
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
    "As an operational limitation",
    "As an agreed limitation in Section D",
    "As an FI in Section K",
    "Leave it off the report"
   ],
   "answer": 0,
   "why": "Something you planned but couldn't do because of site conditions is an operational limitation.",
   "src": "49.pdf (EAL Condition Reporting slides) p18; EICR form (IET BS 7671:2018+A4:2026) p9",
   "explain": {
    "what": "Operational limitations are not agreed in advance: you meant to do it, but the site stopped you, e.g. no access or you couldn't isolate safely.",
    "why": "It wasn't agreed beforehand, so it isn't an agreed limitation, and it isn't a defect, so it isn't coded.",
    "how": "Write what you couldn't do and why under 'Operational limitations including the reasons'.",
    "where": "EICR form page 2, Section D; page 9 note 9 (49.pdf slide p18)"
   },
   "scene": "On the day, a tenant won't let you into the back bedroom, so you can't inspect it as planned.",
   "form": {
    "doc": "EICR",
    "page": 2,
    "where": "Section D: Extent and limitations of inspection and testing",
    "box": "Operational limitations including the reasons …"
   }
  },
  {
   "type": "match",
   "q": "Match each situation to the Section D term.",
   "pairs": [
    [
     "The list of circuits you are reporting on",
     "Extent"
    ],
    [
     "The client agreed beforehand you won't lift floorboards",
     "Agreed limitation"
    ],
    [
     "Staff are unexpectedly working, so you can't isolate as agreed",
     "Operational limitation"
    ]
   ],
   "why": "Extent and agreed limitations are settled before you start; operational limitations happen on the day.",
   "src": "49.pdf (EAL Condition Reporting slides) p16-18",
   "explain": {
    "what": "Section D has three parts: the extent (what you are reporting on), agreed limitations and operational limitations.",
    "why": "Your slides give 'safe isolation while the building is unexpectedly in use' as an operational limitation, because it wasn't agreed and the site stopped you.",
    "how": "Before you start, fill in the extent and agreed limitations; at the end, add any operational limitations you met.",
    "where": "EICR form page 2, Section D (49.pdf slides p16-18)"
   }
  },
  {
   "type": "choice",
   "q": "Unless agreed beforehand, which of these does the printed text in Section D say has NOT been inspected?",
   "options": [
    "Cables under floors, in roof spaces and in the building fabric",
    "The consumer unit and its circuit-breakers",
    "Socket-outlets and light switches",
    "Main protective bonding connections at the MET and at each incoming pipe"
   ],
   "answer": 0,
   "why": "Section D says concealed cables have not been inspected unless specifically agreed between the client and inspector beforehand.",
   "src": "EICR form (IET BS 7671:2018+A4:2026) p2; 49.pdf (EAL Condition Reporting slides) p48",
   "explain": {
    "what": "Section D has standard printed limitations that apply unless you and the client agree otherwise.",
    "why": "Hidden cables can't be seen without opening up the building. The board, accessories and bonding connections are all things you can see and do inspect.",
    "how": "If the client wants concealed cables looked at, agree it first and write it in the extent.",
    "where": "EICR form page 2, Section D, bullet points (49.pdf slide p48)"
   }
  },
  {
   "type": "choice",
   "q": "Why does getting the extent right in Section D matter to you personally?",
   "options": [
    "You could be held responsible for parts you didn't inspect",
    "The client legally cannot pay you until Section D is complete",
    "It decides the overall assessment",
    "It sets the date of the next inspection"
   ],
   "answer": 0,
   "why": "Your slides warn you could be held responsible for parts of the installation you have not inspected and tested.",
   "src": "49.pdf (EAL Condition Reporting slides) p16",
   "explain": {
    "what": "The extent is the list of what you are reporting on.",
    "why": "If it isn't written down, someone could assume you checked everything. Recording exactly what you did is how you show you took reasonable steps.",
    "how": "Agree the extent before you start and write it clearly, including any third party such as a mortgage lender or insurer.",
    "where": "EICR form page 2, Section D (49.pdf slide p16)"
   }
  },
  {
   "type": "choice",
   "q": "Who should you agree the extent and limitations with?",
   "options": [
    "The person ordering it, plus interested parties like the insurer",
    "Nobody: the inspector decides it alone on the day, without asking",
    "Only the electricity distributor",
    "Only the tenant living there"
   ],
   "answer": 0,
   "why": "The extent and limitations are agreed with the person ordering the report and other interested parties before the inspection.",
   "src": "EICR form (IET BS 7671:2018+A4:2026) p11; 49.pdf (EAL Condition Reporting slides) p16",
   "explain": {
    "what": "Some reports are wanted by a third party: an insurer, mortgage lender or licensing authority.",
    "why": "The form's guidance says the inspector should have agreed the extent and limitations with the person ordering the report and with other interested parties before the inspection.",
    "how": "Ask who the report is for and whether they have any requirements, then write who agreed it in Section D.",
    "where": "EICR form page 11, guidance for recipients note 5; page 2 Section D"
   },
   "scene": "A shop owner orders an EICR because their insurance company has asked for one."
  },
  {
   "type": "choice",
   "q": "What does it mean for an EICR?",
   "options": [
    "It isn't necessarily unsafe or in need of upgrading",
    "It must be coded C2 straight away",
    "It must be rewired before you report",
    "You can't do an EICR on it until it meets today's rules"
   ],
   "answer": 0,
   "why": "Older installations may not meet the current edition, but that doesn't by itself mean they are unsafe.",
   "src": "49.pdf (EAL Condition Reporting slides) p12; EICR form (IET BS 7671:2018+A4:2026) p9",
   "explain": {
    "what": "An EICR judges whether the installation is safe for continued use, against the current rules.",
    "why": "Not matching the latest edition is not, on its own, a defect. You only record things that might give rise to danger, backed by the current rules.",
    "how": "Look for damage, deterioration, defects and dangerous conditions rather than 'it's old-fashioned'.",
    "where": "EICR form page 9, note 4 (49.pdf slide p12)"
   },
   "scene": "The house was wired about 30 years ago to an older edition of BS 7671 and doesn't fully match today's rules."
  },
  {
   "type": "choice",
   "q": "Can you use an EICR to cover it?",
   "options": [
    "No, an EICR isn't for a consumer unit change",
    "Yes, an EICR covers any work on any installation",
    "Yes, if you code it all C3",
    "Only if the client agrees"
   ],
   "answer": 0,
   "why": "The form's first note says the report is only for reporting on an existing installation, not for the replacement of a consumer unit.",
   "src": "EICR form (IET BS 7671:2018+A4:2026) p9",
   "explain": {
    "what": "The EICR is for the condition of an existing installation.",
    "why": "Replacing a consumer unit is new work, which has to be inspected and tested as new work before it is put into service, not reported on with an EICR.",
    "how": "Use the right paperwork for the job: new work gets certified, existing installations get a condition report.",
    "where": "EICR form page 9, note 1; 99.pdf slide p13 (new work inspected and tested before use)"
   },
   "scene": "You've just fitted a new consumer unit for a customer. They ask you to 'just do an EICR' for it."
  }
 ]
});
