// DRAFT lesson (v2, Unit 1) written from Tom's Access Training PDFs and the IET A4:2026 forms. Waiting for Checker + Tom's approval.
window.LESSONS = window.LESSONS || [];
window.LESSONS.push({
 "id": "a1-03",
 "topic": "forms",
 "title": "Which paperwork, and who signs it",
 "awards": [
  "L2 Fundamental",
  "L3 Initial Verification",
  "L3 Periodic"
 ],
 "status": "draft",
 "unconfirmed": false,
 "sources": [
  {
   "file": "302.pdf (Domestic Electrical Installer course)",
   "ref": "pages given on each question"
  },
  {
   "file": "49.pdf (EAL Condition Reporting slides)",
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
  "notes": "Which form, who signs and what gets attached all match the slides and the A4 EIC notes."
 },
 "approved": null,
 "intro": {
  "what": "Three documents cover the jobs you'll meet. The EIC (Electrical Installation Certificate) is for a new installation, new circuits or a new consumer unit. The Minor Works certificate is for adding to or altering a circuit with no new circuit. The EICR (condition report) reports on an existing installation.",
  "why": "The wrong document means the work isn't properly certified. On the assessment you get 30 minutes after the testing to complete the paperwork, so you need to know which form, who signs what and what gets attached.",
  "how": [
   "New installation, new circuit or new consumer unit? Use an EIC",
   "Adding to or altering an existing circuit, no new circuit? Minor Works, one certificate per circuit",
   "Checking an existing installation? EICR (a report, not a certificate)",
   "On an EIC the designer, constructor and inspector each sign Section C (one person can sign in all three places)",
   "The designer recommends the next inspection in Section D",
   "Attach the schedules: inspections, circuit details and test results",
   "Give the original to the person ordering the work and keep a duplicate"
  ],
  "where": "EIC page 2: Section B (extent), C (signatures), D (next inspection). Page 3: Section J lists the schedules attached. A Minor Works certificate has its test results on the form itself.",
  "reason": "An EIC is only valid with its schedules attached, and an EICR is a report: it records what's wrong, it doesn't include the repairs.",
  "numbers": [
   "EIC: 3 signature blocks (design, construction, inspection and testing)",
   "Minor Works: one per circuit altered or extended",
   "Paperwork on the assessment: 30 minutes"
  ]
 },
 "questions": [
  {
   "type": "choice",
   "q": "Which document do you fill in for this job?",
   "options": [
    "Minor Works certificate for each circuit",
    "Electrical Installation Certificate (EIC)",
    "Condition Report (EICR) on the board",
    "No paperwork, it's only a small job"
   ],
   "answer": 1,
   "why": "New circuits mean an EIC.",
   "src": "99.pdf (EAL Initial Verification slides) p32; EIC form (IET BS 7671:2018+A4:2026) p6",
   "scene": "Mrs Patel wants two new circuits (a shed supply and an outside socket) from a spare way in her consumer unit.",
   "explain": {
    "what": "The EIC is for new installations, new circuits, or alterations where new protective devices go in.",
    "why": "Two new circuits each get a new protective device, so this is EIC work. Minor Works is only for work on existing circuits with no new circuit.",
    "how": "Ask yourself: is a new circuit or a new protective device going in? If yes, it's an EIC.",
    "where": "The whole EIC, plus its schedules (99.pdf slides p32; EIC form p6, notes for the person producing the certificate)."
   }
  },
  {
   "type": "choice",
   "q": "Which document may you use for this job?",
   "options": [
    "Minor Electrical Installation Works certificate",
    "Electrical Installation Certificate only",
    "Condition Report (EICR)",
    "A schedule of test results on its own"
   ],
   "answer": 0,
   "why": "No new circuit, so a Minor Works certificate may be used.",
   "src": "99.pdf (EAL Initial Verification slides) p33-34; EIC form (IET BS 7671:2018+A4:2026) p6",
   "scene": "The client wants one extra double socket added to the existing downstairs ring. No new circuit and no new protective device.",
   "explain": {
    "what": "The Minor Works certificate is for additions or alterations to an existing circuit, like extra sockets or lights, where no new protective device goes in.",
    "why": "The socket goes on an existing ring with no new device, so Minor Works fits. An EICR is a report on an existing installation, not a certificate for new work.",
    "how": "Fill in the Minor Works form: its test results are part of the form itself, not a separate schedule.",
    "where": "Minor Works certificate, a stand-alone form (99.pdf slides p33-34; EIC form p6)."
   }
  },
  {
   "type": "choice",
   "q": "Which document goes with this job?",
   "options": [
    "Minor Works, as there are no new circuits",
    "EIC: replacing a consumer unit needs one",
    "EICR, because the circuits are existing",
    "No certificate, it's a like-for-like swap"
   ],
   "answer": 1,
   "why": "Replacing a consumer unit or distribution board is certified on an EIC.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p6; 99.pdf (EAL Initial Verification slides) p34",
   "scene": "You swap an old fuse box for a new consumer unit. All the existing circuits are reconnected; no new circuits.",
   "explain": {
    "what": "The A4 notes list replacing a consumer unit or distribution board as EIC work.",
    "why": "Minor Works is tempting because no new circuits go in, but the course says Minor Works is not for distribution boards or similar equipment. An EICR is a report, not a certificate for new work.",
    "how": "New board means an EIC, with every circuit you reconnect on the schedules.",
    "where": "EIC form p6 (notes for the person producing the certificate); 99.pdf slides p34."
   }
  },
  {
   "type": "choice",
   "q": "Which document do you use?",
   "options": [
    "Electrical Installation Certificate",
    "Minor Works certificate",
    "Condition Report (EICR)",
    "A new EIC for each circuit"
   ],
   "answer": 2,
   "why": "Checking an existing installation is periodic inspection: an EICR.",
   "src": "49.pdf (EAL Condition Reporting slides) p15; EIC form (IET BS 7671:2018+A4:2026) p6",
   "scene": "A landlord asks you to inspect and test the existing wiring in a flat before new tenants move in.",
   "explain": {
    "what": "The EICR reports on the condition of an existing installation.",
    "why": "A change of tenancy is one of the reasons the course gives for producing an EICR. The EIC notes say it can't be used to inspect an existing installation.",
    "how": "Agree the extent and limitations with the client before you start, then inspect, test and report.",
    "where": "EICR, Section B 'reason for producing this report' (49.pdf slides p15; EIC form p6)."
   }
  },
  {
   "type": "choice",
   "q": "How many Minor Works certificates?",
   "options": [
    "One, covering both jobs",
    "Two, one for each circuit",
    "None, you need an EICR instead",
    "Three, one per new socket and light"
   ],
   "answer": 1,
   "why": "A separate Minor Works certificate is used for EACH circuit altered or extended.",
   "src": "99.pdf (EAL Initial Verification slides) p33; EIC form (IET BS 7671:2018+A4:2026) p6",
   "scene": "You add two sockets to the existing ring AND extend the lighting circuit to a new light. No new breakers.",
   "explain": {
    "what": "A Minor Works certificate covers one circuit.",
    "why": "Two circuits were altered, so two certificates. The A4 notes also say that where there are several additions with no new circuits, you can issue one EIC instead of several Minor Works.",
    "how": "Count the circuits you touched: one Minor Works each (or one EIC for the lot).",
    "where": "Minor Works certificate (99.pdf slides p33; EIC form p6)."
   }
  },
  {
   "type": "order",
   "q": "Put the Section C signature blocks in the order they appear on the EIC.",
   "steps": [
    "For design (designer)",
    "For construction (constructor)",
    "For inspection and testing (inspector)"
   ],
   "why": "The form follows the job: design it, build it, then inspect and test it. Each signs for the part they did.",
   "src": "99.pdf (EAL Initial Verification slides) p35; EIC form (IET BS 7671:2018+A4:2026) p2",
   "explain": {
    "what": "Section C of the EIC has three blocks, one for each area of responsibility.",
    "why": "Design, construction, and inspection and testing are separate jobs, and each person certifies only their own part. The form says each signatory's liability is limited to the work described.",
    "how": "Find Section C on page 2 and sign the block for the work you did.",
    "where": "EIC page 2, Section C (99.pdf slides p35)."
   },
   "form": {
    "doc": "EIC",
    "page": 2,
    "where": "Section C: Certification signatories",
    "box": "For design … For construction … For inspection and testing"
   }
  },
  {
   "type": "choice",
   "q": "How do you sign Section C?",
   "options": [
    "Sign the inspection and testing block only",
    "Sign in each of the three blocks",
    "Sign once at the bottom of the page",
    "Get the client to sign for the design"
   ],
   "answer": 1,
   "why": "If you are authorised for more than one category, you sign in each of the appropriate places.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p6",
   "scene": "You designed the new circuit, installed it and did all the inspection and testing yourself.",
   "explain": {
    "what": "One person can be responsible for all three parts of the work.",
    "why": "The A4 notes say a signatory authorised for more than one category signs in each of the appropriate places. Signing only for testing would leave the design and construction uncertified.",
    "how": "Sign and date all three blocks, and fill in your details for each in Section E.",
    "where": "EIC page 2, Section C; page 3, Section E (EIC form p6 notes)."
   },
   "form": {
    "doc": "EIC",
    "page": 2,
    "where": "Section C: Certification signatories",
    "box": "Signature … Designer No 1 / Constructor / Inspector"
   }
  },
  {
   "type": "choice",
   "q": "Who fills in Section D, the next inspection interval?",
   "options": [
    "The designer",
    "The client",
    "The electricity supplier",
    "Whoever has the neatest writing"
   ],
   "answer": 0,
   "why": "The designer knows the intended use and environment, so they recommend the interval.",
   "src": "99.pdf (EAL Initial Verification slides) p36; EIC form (IET BS 7671:2018+A4:2026) p2",
   "explain": {
    "what": "Section D is the recommended interval before the first periodic inspection.",
    "why": "The course says the designer recommends it, in the light of the installation, its use and the environment. Section D on the form reads 'I/We, the designer(s), recommend…'.",
    "how": "Write the interval in years or months in Section D.",
    "where": "EIC page 2, Section D (99.pdf slides p36)."
   },
   "form": {
    "doc": "EIC",
    "page": 2,
    "where": "Section D: Next inspection",
    "box": "…further inspected and tested after an interval of not more than … years/months"
   }
  },
  {
   "type": "choice",
   "q": "What goes in the 'Extent' box?",
   "options": [
    "Exactly what you designed, built, inspected and tested",
    "The whole building, to be on the safe side",
    "Just the address of the installation",
    "Only the circuits that passed"
   ],
   "answer": 0,
   "why": "You could be held responsible for parts you didn't check, so list exactly what you covered.",
   "src": "99.pdf (EAL Initial Verification slides) p39; EIC form (IET BS 7671:2018+A4:2026) p2",
   "explain": {
    "what": "The extent says which part of the installation the certificate covers.",
    "why": "The course says the extent is very important: you could be held responsible for parts you never inspected or tested. 'The whole building' would put your name to work you didn't check.",
    "how": "On the test board, write the circuits or part of the installation you actually did.",
    "where": "EIC page 2, Section B, 'Extent of installation covered by this Certificate' (99.pdf slides p39)."
   },
   "form": {
    "doc": "EIC",
    "page": 2,
    "where": "Section B: Installation details",
    "box": "Extent of installation covered by this Certificate"
   }
  },
  {
   "type": "choice",
   "q": "Is the EIC valid without it?",
   "options": [
    "Yes, the signatures are what count",
    "No, it's only valid with its schedules attached",
    "Yes, if you keep the schedule yourself",
    "Only for a single new circuit"
   ],
   "answer": 1,
   "why": "Section J says the certificate is valid only when the listed schedules are attached.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p3; EIC form (IET BS 7671:2018+A4:2026) p6",
   "scene": "The client says they only want the certificate pages and don't need the schedule of test results.",
   "explain": {
    "what": "The EIC comes with its schedules: inspections, circuit details and test results.",
    "why": "Section J lists them and says they are part of the document and the certificate is valid only when they are attached. The A4 notes say the same.",
    "how": "Fill in Section J with the number of schedule pages and attach them all.",
    "where": "EIC page 3, Section J (EIC form p3 and p6)."
   },
   "form": {
    "doc": "EIC",
    "page": 3,
    "where": "Section J: Schedules",
    "box": "The schedule(s) and continuation sheet(s) listed are part of this document and this certificate is valid only when they are attached to it."
   }
  },
  {
   "type": "match",
   "q": "Match the document to what comes with it.",
   "pairs": [
    [
     "EIC",
     "A certificate with schedules of inspections, circuit details and test results"
    ],
    [
     "Minor Works",
     "A stand-alone form with its test results on it"
    ],
    [
     "EICR",
     "A report with an inspection schedule and test results"
    ]
   ],
   "why": "Each document has its own set of paperwork; know which pages to hand over.",
   "src": "99.pdf (EAL Initial Verification slides) p32-33; 49.pdf (EAL Condition Reporting slides) p9; 302.pdf (Domestic Electrical Installer course) p160",
   "explain": {
    "what": "The three documents look similar but are built differently.",
    "why": "The EIC and the EICR both have schedules attached. The Minor Works certificate is one stand-alone form with the test results on it. The EICR is a report, not a certificate.",
    "how": "Before you hand over, check every schedule page is filled in and attached.",
    "where": "99.pdf slides p32-33; 49.pdf slides p9; 302.pdf p160."
   }
  },
  {
   "type": "fill",
   "q": "The original EIC is issued to the person ___ the work.",
   "answers": [
    "ordering",
    "who ordered",
    "that ordered",
    "who is ordering",
    "who orders"
   ],
   "why": "The original goes to the person ordering the work; you keep a duplicate.",
   "src": "99.pdf (EAL Initial Verification slides) p32; EIC form (IET BS 7671:2018+A4:2026) p6",
   "explain": {
    "what": "The EIC is issued to the person who ordered the work.",
    "why": "The course and the A4 notes both say the person ordering the work. You keep a duplicate, and the client passes it on to the owner if they are not the owner.",
    "how": "Hand over the original with all its schedules, and file your copy.",
    "where": "EIC form p6 (notes for the person producing the certificate); 99.pdf slides p32."
   }
  },
  {
   "type": "choice",
   "q": "What should the builder do with the certificate?",
   "options": [
    "Keep it, as they ordered the work",
    "Pass it, or a full copy with schedules, to the owner",
    "Send it back to you to keep",
    "Throw away the schedules and pass on the rest"
   ],
   "answer": 1,
   "why": "The guidance for recipients says to pass it, or a full copy including the schedules, straight to the owner.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p7",
   "scene": "A builder ordered the rewire of a house they don't own. You hand them the EIC.",
   "explain": {
    "what": "The EIC goes to whoever ordered the work, but it belongs with the installation.",
    "why": "The guidance for recipients says if you ordered the work but aren't the owner, pass the certificate or a full copy, including the schedules, to the owner immediately.",
    "how": "If you hand over to a builder or agent, remind them it goes to the owner.",
    "where": "EIC page 7, guidance for recipients (EIC form p7)."
   }
  },
  {
   "type": "choice",
   "q": "Do you repair it as part of the EICR?",
   "options": [
    "Yes, the EICR includes putting faults right",
    "No: record it; repairs are separate work",
    "Yes, but only if it's coded C1",
    "No, and you leave it off the report too"
   ],
   "answer": 1,
   "why": "An EICR is a report: it records the condition, it doesn't include doing the remedial work.",
   "src": "49.pdf (EAL Condition Reporting slides) p13",
   "scene": "During an EICR on a house you find a cracked socket front on the kitchen ring.",
   "explain": {
    "what": "The EICR reports the condition of an existing installation against the current BS 7671.",
    "why": "The course says it's a REPORT, not a certificate, and it does not involve carrying out any remedial work. Leaving the fault off the report would be wrong too.",
    "how": "Record the observation with its code and tell the client. Any repair is a separate job with its own paperwork.",
    "where": "EICR observations section (49.pdf slides p13)."
   }
  }
 ]
});
