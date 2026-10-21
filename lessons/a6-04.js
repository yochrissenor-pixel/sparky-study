// DRAFT lesson (v2) written from Tom's Access Training PDFs. Waiting for Checker + Tom's approval.
window.LESSONS = window.LESSONS || [];
window.LESSONS.push({
 "id": "a6-04",
 "topic": "pat",
 "title": "Faults, failures and records",
 "awards": [
  "L3 PAT"
 ],
 "status": "draft",
 "unconfirmed": false,
 "note": "The slides give the steps for faulty equipment under user checks (off and unplug, label, report, remove). This lesson uses the same steps for items that fail your inspection or test, with the FAIL label from the labels slide.",
 "sources": [
  {
   "file": "113.pdf (In-service Inspection & Testing slides)",
   "ref": "pages given on each question"
  }
 ],
 "checker": {
  "by": "Claude Checker",
  "date": "2026-10-12",
  "verdict": "pass",
  "notes": "Checked against the PAT slides. The fail steps are the slide's steps for faulty equipment, applied to items that fail your test, as the lesson note says."
 },
 "approved": null,
 "intro": {
  "what": "When an item fails you take it out of use and say so on a label and in the records. When it passes, it gets a PASS label with its own ID, and the results go in the records.",
  "why": "A failed item that's left in use can still hurt someone. The label and the record are how the duty holder knows what's safe and what isn't.",
  "how": [
   "Switch the failed item off and unplug it",
   "Fit a FAIL label (DANGER DO NOT USE) with the date and your initials",
   "Report it to the responsible person",
   "Remove it from service",
   "Record the results and what you found",
   "Passed items: PASS label with a unique ID, date and initials, but no re-test date"
  ],
  "where": "On the item (label), with the duty holder (report) and in the records: equipment register and the inspection and test record.",
  "reason": "Never leave a fail in use, and never write a re-test date on the label.",
  "numbers": [
   "Extension lead max length: 1.25 mm² 12 m, 1.5 mm² 15 m; longer needs 30 mA RCD protection",
   "Up to 700 W: 3 A fuse; over 700 W: 13 A fuse",
   "Earth continuity: (0.1 + R) Ω; adaptors 0.1 Ω",
   "IR: Class I 1.0 MΩ, Class II 2.0 MΩ"
  ]
 },
 "questions": [
  {
   "type": "order",
   "q": "Put the steps for a failed item in order.",
   "steps": [
    "Switch it off and unplug it",
    "Label it so it isn't used",
    "Report it to the responsible person",
    "Remove it from service"
   ],
   "why": "Make it dead first, then make sure nobody uses it, tell someone, and take it away.",
   "src": "113.pdf (In-service Inspection & Testing slides) p56",
   "scene": "An item has just failed your inspection.",
   "explain": {
    "what": "The slides set out what must happen to faulty equipment.",
    "why": "Switch off and unplug, label it, report it to the responsible person, remove it from service. Each step stops someone else from using it.",
    "how": "Say it as: off, label, tell, take away.",
    "where": "The item and the responsible person (course slides 113.pdf p56 and the FAIL label on p103)."
   }
  },
  {
   "type": "choice",
   "q": "What do you do with it?",
   "options": [
    "Tape it up and pass it",
    "Fail, label, report and remove it",
    "Pass it with a note on the record",
    "Leave it plugged in for the owner to see"
   ],
   "answer": 1,
   "why": "A cut flex fails the formal visual inspection.",
   "src": "113.pdf (In-service Inspection & Testing slides) p56; 113.pdf (In-service Inspection & Testing slides) p69; 113.pdf (In-service Inspection & Testing slides) p103",
   "scene": "Formal visual inspection: the flex on a desk fan is cut and the coloured inner cores are showing.",
   "explain": {
    "what": "The formal visual inspection checks the flex is free from cuts, fraying or damage.",
    "why": "Tape isn't a repair, and a note on the record doesn't stop anyone using it.",
    "how": "Switch off and unplug, fit a FAIL / DANGER DO NOT USE label, report it and take it out of service.",
    "where": "The flex (course slides 113.pdf p56, p69 and p103)."
   }
  },
  {
   "type": "choice",
   "q": "What's wrong?",
   "options": [
    "Nothing: a 3 A fuse is safer",
    "It needs a 13 A fuse",
    "It needs a 5 A fuse",
    "The flex must be 0.5 mm²"
   ],
   "answer": 1,
   "why": "Over 700 W takes a 13 A fuse; 3 A is for 700 W or less.",
   "src": "113.pdf (In-service Inspection & Testing slides) p72",
   "scene": "A 2 kW fan heater has a 3 A fuse in its plug.",
   "explain": {
    "what": "The plug fuse must be appropriate to the rating of the appliance.",
    "why": "A 3 A fuse on a 2 kW heater will blow in normal use. Over 700 W takes 13 A with flex at least 1.25 mm².",
    "how": "Check the rating plate, then the fuse. Record the wrong fuse as a fault on the plug.",
    "where": "Inside the plug and the rating plate (course slides 113.pdf p72)."
   }
  },
  {
   "type": "choice",
   "q": "What's wrong?",
   "options": [
    "The fuse is too big for the lamp",
    "The flex should be 2.5 mm²",
    "Nothing: a 13 A fuse suits every plug",
    "The lamp needs a 5 A fuse"
   ],
   "answer": 0,
   "why": "Up to 700 W should have a 3 A fuse, and the 0.5 mm² flex suits only that.",
   "src": "113.pdf (In-service Inspection & Testing slides) p72",
   "scene": "A 60 W table lamp with 0.5 mm² flex has a 13 A fuse in its plug.",
   "explain": {
    "what": "Plug fuses are matched to the appliance rating and its flex.",
    "why": "60 W is well under 700 W, so it should have a 3 A fuse. The slide pairs a 13 A fuse with flex of at least 1.25 mm², so a 13 A fuse doesn't match 0.5 mm² flex.",
    "how": "Read the rating plate, check the flex size and the fuse together.",
    "where": "Inside the plug and the rating plate (course slides 113.pdf p72)."
   }
  },
  {
   "type": "choice",
   "q": "Pass or fail?",
   "options": [
    "Pass: it's over 1 MΩ",
    "Fail: 0.55 Ω is over the 0.18 Ω limit",
    "Pass: continuity has no limit",
    "Retest on high current until it's lower"
   ],
   "answer": 1,
   "why": "The earth path has too much resistance to be relied on.",
   "src": "113.pdf (In-service Inspection & Testing slides) p76; 113.pdf (In-service Inspection & Testing slides) p80",
   "scene": "A kettle with a 5 m, 1.25 mm² cord (limit about 0.18 Ω). Earth continuity reads 0.55 Ω while you flex the cord.",
   "explain": {
    "what": "Earth continuity proves the metal parts of Class I equipment are reliably connected to the plug's earth pin.",
    "why": "The limit is 0.1 + 0.078 = 0.178 Ω. 1 MΩ is an insulation figure, and retesting to get a lower number hides the fault.",
    "how": "Fail it, label it, report it and remove it. Record the reading.",
    "where": "Earth continuity reading on your PAT tester (course slides 113.pdf p76 and p80)."
   }
  },
  {
   "type": "choice",
   "q": "Pass or fail?",
   "options": [
    "Pass: Class II isn't IR tested",
    "Fail: under the 2.0 MΩ Class II limit",
    "Pass: over the 1.0 MΩ limit",
    "Fail: the metal case should be earthed"
   ],
   "answer": 1,
   "why": "Class II relies on its insulation, so 2.0 MΩ is the minimum.",
   "src": "113.pdf (In-service Inspection & Testing slides) p41; 113.pdf (In-service Inspection & Testing slides) p83",
   "scene": "A Class II power tool with a metal gearbox case. Insulation resistance from the live conductors to the case reads 1.2 MΩ.",
   "explain": {
    "what": "A Class II item can have an unearthed metal case. Its insulation is what keeps that metal safe.",
    "why": "The minimum for Class II is 2.0 MΩ; 1.0 MΩ is the Class I figure. The metal case itself isn't the fault, because Class II has no provision for an earth.",
    "how": "Test from the live conductors to the metal case, compare with 2.0 MΩ, and fail it if lower.",
    "where": "The metal case of the item (course slides 113.pdf p41 and p83)."
   }
  },
  {
   "type": "choice",
   "q": "Pass or fail?",
   "options": [
    "Pass: Class II doesn't need an earth",
    "Fail: the damage could give access to live parts",
    "Pass, as long as insulation resistance is over 2 MΩ",
    "Fail, unless you tape over the crack"
   ],
   "answer": 1,
   "why": "A cracked case that could let fingers reach live parts fails the inspection.",
   "src": "113.pdf (In-service Inspection & Testing slides) p70",
   "scene": "A Class II drill has a crack in its plastic case and you can see internal metal parts through it.",
   "explain": {
    "what": "The formal visual inspection checks the appliance is free from cracks and damage that could lead to access to live parts.",
    "why": "Class II depends on its case and insulation. Once that's broken, a good test reading doesn't make it safe, and tape isn't a repair.",
    "how": "Fail it at the visual inspection: you don't need to test it. Label, report, remove.",
    "where": "The appliance case (course slides 113.pdf p70)."
   }
  },
  {
   "type": "fill",
   "q": "A 1.25 mm² lead longer than ___ m needs 30 mA RCD protection.",
   "answers": [
    "12",
    "12m",
    "12 m"
   ],
   "why": "1.25 mm² leads longer than 12 m should be protected by a 30 mA RCD (15 m for 1.5 mm²).",
   "src": "113.pdf (In-service Inspection & Testing slides) p51",
   "scene": "A 20 m extension lead in 1.25 mm² flex is used on a socket with no RCD.",
   "explain": {
    "what": "Extension leads have a maximum length for their core size: 12 m for 1.25 mm², 15 m for 1.5 mm².",
    "why": "Longer leads should be protected by a 30 mA RCD, either in the lead or in the fixed installation. A 2-core lead or smaller fuse doesn't fix that.",
    "how": "Check the flex size, length and RCD protection; record it and tell the duty holder.",
    "where": "The extension lead and the socket it's used on (course slides 113.pdf p51)."
   }
  },
  {
   "type": "choice",
   "q": "What should you recommend?",
   "options": [
    "Buy longer extension leads so they reach further",
    "Fixed socket-outlets where they're needed",
    "Test the leads every week",
    "Change to 2-core leads"
   ],
   "answer": 1,
   "why": "Extension leads aren't meant as a permanent extension of the fixed wiring.",
   "src": "113.pdf (In-service Inspection & Testing slides) p50",
   "scene": "Every time you visit a workshop, several extension leads trailing across the floor are damaged.",
   "explain": {
    "what": "Extension leads are not intended to be a permanent extension of the fixed installation.",
    "why": "Where inspections keep finding damaged leads, the slides say recommend dedicated fixed socket-outlets to the duty holder. Their risk assessment may also need more frequent checks on leads.",
    "how": "Put the recommendation in your observations for the duty holder.",
    "where": "Your record and the duty holder (course slides 113.pdf p50)."
   }
  },
  {
   "type": "choice",
   "q": "Pass or fail?",
   "options": [
    "Pass: it's only the earth",
    "Fail: all cores must be connected",
    "Pass, if it's used for Class II kit",
    "Fail: but only at the user check"
   ],
   "answer": 1,
   "why": "Every core must be terminated, and a 3-core lead must have its earth.",
   "src": "113.pdf (In-service Inspection & Testing slides) p51; 113.pdf (In-service Inspection & Testing slides) p88",
   "scene": "You open the plug of a 3-core 4-way extension lead. The earth core is cut short and not connected.",
   "explain": {
    "what": "Leads should have the same number of cores as there are terminals in the plug and socket, and all cores should be terminated.",
    "why": "With the earth core loose, any Class I item plugged in has no earth. It would also fail the earth continuity test.",
    "how": "Fail it, label it and report it. Record what you found inside the plug.",
    "where": "Inside the plug of the lead (course slides 113.pdf p51 and p88)."
   }
  },
  {
   "type": "choice",
   "q": "What should go on the PASS label?",
   "options": [
    "Its ID, date of check and your initials",
    "The date it's next due for re-test",
    "The duty holder's name, address and phone number",
    "The insulation resistance reading"
   ],
   "answer": 0,
   "why": "Labels show a unique ID and the current status; no re-test date.",
   "src": "113.pdf (In-service Inspection & Testing slides) p103",
   "scene": "A kettle has passed every test. You're filling in its label.",
   "explain": {
    "what": "Labels carry an identification code unique to the item and its current safety status, PASS or FAIL.",
    "why": "The re-test date should NOT go on the label (the only exception is equipment for temporary entertainment systems). Frequency is the duty holder's decision and can change.",
    "how": "Fill in the appliance number, date of check and your initials. Use a durable label.",
    "where": "The label on the item (course slides 113.pdf p103)."
   }
  },
  {
   "type": "match",
   "q": "Match the record to what goes on it.",
   "pairs": [
    [
     "Equipment register",
     "Make, model, serial or asset ID, frequency, repairs"
    ],
    [
     "Inspection and test record",
     "Each item's visual results and test readings"
    ],
    [
     "PASS label",
     "Unique ID, date of check, initials"
    ],
    [
     "FAIL label",
     "DANGER DO NOT USE, date, initials"
    ]
   ],
   "why": "The register lists the kit; the record holds the results; the label shows the status on the item.",
   "src": "113.pdf (In-service Inspection & Testing slides) p100-103",
   "explain": {
    "what": "Records cover the equipment you have, what was done to it, and its current status.",
    "why": "The register lists each item and its planned frequency. The inspection and test record holds who tested, which instrument, and each item's inspection and test results. Labels show the ID and status on the item itself.",
    "how": "Fill in the record for every item you inspect or test, pass or fail.",
    "where": "Course slides 113.pdf p100-103."
   }
  },
  {
   "type": "choice",
   "q": "Do the records have to be on a set form?",
   "options": [
    "Yes, one official form only",
    "No: no set format is required",
    "Yes, but only for failed items",
    "No records are needed at all"
   ],
   "answer": 1,
   "why": "There's no required format, but records should be kept for the equipment's working life.",
   "src": "113.pdf (In-service Inspection & Testing slides) p98-99",
   "scene": "A client asks if your results must be on one particular official form.",
   "explain": {
    "what": "Records let the duty holder monitor the scheme and review how often items are checked.",
    "why": "The slides say there are no particular requirements for the format: model forms, software or the company's own asset register can all be used. HSE guidance advises keeping records through the equipment's working life.",
    "how": "Use whatever format the client uses, as long as it holds the information needed.",
    "where": "Course slides 113.pdf p98-99."
   }
  },
  {
   "type": "choice",
   "q": "Why did the office lose power?",
   "options": [
    "Your PAT tester is faulty",
    "The upstream RCD tripped too",
    "The adaptor is Class II",
    "The ×5 test current was too low"
   ],
   "answer": 1,
   "why": "Testing an RCD plugged into an RCD-protected socket can trip the upstream one too.",
   "src": "113.pdf (In-service Inspection & Testing slides) p90",
   "scene": "You test a plug-in RCD adaptor at 150 mA in an office socket. The adaptor trips, but so does the circuit feeding the office computers.",
   "explain": {
    "what": "Plug-in RCDs are tested at 150 mA (×5) and should trip within 40 ms.",
    "why": "The RCD in the fixed wiring sees the same test current. The slides warn this can lose people's data and work in offices.",
    "how": "Warn people first and test on a socket that isn't on the same RCD as the computers.",
    "where": "The socket you test from (course slides 113.pdf p90)."
   }
  }
 ]
});
