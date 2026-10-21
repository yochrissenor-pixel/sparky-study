// DRAFT lesson (v2) written from Tom's Access Training PDFs. Waiting for Checker + Tom's approval.
window.LESSONS = window.LESSONS || [];
window.LESSONS.push({
 "id": "a6-02",
 "topic": "pat",
 "title": "User checks, visual inspections and how often",
 "awards": [
  "L3 PAT"
 ],
 "status": "draft",
 "unconfirmed": false,
 "note": "The course slides give no set time between checks; they only say a risk assessment by the duty holder sets it. This lesson doesn't give any example intervals for that reason.",
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
  "notes": "Every answer matches the PAT slides on user checks, formal visual inspection, frequency and plug fuses."
 },
 "approved": null,
 "intro": {
  "what": "There are three levels of in-service check: the user check (by the person using it, before use), the formal visual inspection (a competent person, looking only, recorded) and the combined inspection and test (a competent person, inspection plus tests, recorded).",
  "why": "As the inspector you do the formal visual inspection on every item before any test, so you need its checklist in your head. Many faults (cut flex, cracked plugs, wrong fuses) are found by looking, not by the tester.",
  "how": [
   "Get the inspection frequency from the duty holder",
   "Check the item can be disconnected from the supply (if not, stop)",
   "Unplug any data or communication leads",
   "Look at the environment and housekeeping around the item",
   "Inspect the plug, the flex, the socket or flex outlet and the appliance",
   "Decide if it suits the job, the place and the user",
   "Record the result: satisfactory or unsatisfactory"
  ],
  "where": "Where the item is used (environment, housekeeping, socket), then in your hands on the bench (plug, flex, case).",
  "reason": "No fixed time between checks is set in law or the Code of Practice: the duty holder's risk assessment sets it, and they tell you.",
  "numbers": [
   "Appliance up to 700 W: 3 A fuse, flex at least 0.5 mm²",
   "Appliance over 700 W: 13 A fuse, flex at least 1.25 mm²",
   "Sleeved plug pins required from 1984 (not retrospective)",
   "User check with no fault: no record needed"
  ]
 },
 "questions": [
  {
   "type": "match",
   "q": "Match each level to who does it and what is written down.",
   "pairs": [
    [
     "User check",
     "The user, before use; no record if OK"
    ],
    [
     "Formal visual inspection",
     "Competent person, looking only, recorded"
    ],
    [
     "Combined inspection and test",
     "Competent person, inspection plus tests, recorded"
    ]
   ],
   "why": "Each level adds more: the user looks, the competent person records, the combined check adds tests.",
   "src": "113.pdf (In-service Inspection & Testing slides) p53-58",
   "explain": {
    "what": "There are three categories of in-service inspection and test.",
    "why": "The user check is done by the user, generally before use, with no record unless there's a fault. The formal visual inspection is a competent person, no tests, results recorded. The combined inspection and test adds electrical tests and a functional check.",
    "how": "Ask 'who does it, and are there tests?' to tell them apart.",
    "where": "Course slides 113.pdf p53-58."
   }
  },
  {
   "type": "choice",
   "q": "What happens now?",
   "options": [
    "Keep using it carefully until the next test is due",
    "Switch off, unplug, label, report and remove it",
    "Tape the crack and carry on",
    "Put it back in the cupboard"
   ],
   "answer": 1,
   "why": "Faulty kit must be taken out of use so nobody else picks it up.",
   "src": "113.pdf (In-service Inspection & Testing slides) p56",
   "scene": "An office worker doing a user check on a desk fan sees the plug body is cracked.",
   "explain": {
    "what": "The user check is the quick look the user does before each use.",
    "why": "Faulty equipment must be switched off and unplugged, labelled not to be used, reported to the responsible person and removed from service. Putting it away or taping it means someone else could use it.",
    "how": "As the inspector, check that faults found at user checks are being reported and logged.",
    "where": "The item and its plug (course slides 113.pdf p54-56)."
   }
  },
  {
   "type": "choice",
   "q": "Does the user need to write anything down?",
   "options": [
    "Yes, a full test record",
    "No, not if no fault is found",
    "Yes, on the item's PASS label",
    "Only if it's Class I"
   ],
   "answer": 1,
   "why": "User checks are only recorded when a fault is found.",
   "src": "113.pdf (In-service Inspection & Testing slides) p54",
   "scene": "A user checks her kettle before use and finds nothing wrong.",
   "explain": {
    "what": "The user check is done by the person using the equipment, generally before use.",
    "why": "Faults are reported and logged, but no record is needed if no fault is found. Records and labels belong to the formal visual inspection and the combined inspection and test.",
    "how": "Don't expect a paper trail for every user check, only for faults.",
    "where": "Course slides 113.pdf p54."
   }
  },
  {
   "type": "choice",
   "q": "How often must the items be tested, by law?",
   "options": [
    "Every 12 months, set by law for all workplaces",
    "Every 6 months",
    "No fixed interval: set by risk assessment",
    "Every 5 years"
   ],
   "answer": 2,
   "why": "The duty holder's risk assessment sets the frequency.",
   "src": "113.pdf (In-service Inspection & Testing slides) p59-61",
   "scene": "A new client asks you: 'How often does the law say my office kit has to be tested?'",
   "explain": {
    "what": "Frequency is how often items get a formal visual inspection or a combined inspection and test.",
    "why": "There are no set timescales in law or in the Code of Practice. 'Every year' is a common habit, not a rule. Insurers or landlords may set their own.",
    "how": "Factors are the environment, the user, the construction, the type, how often it's used, how it's installed, previous records and its working life.",
    "where": "Course slides 113.pdf p59-61."
   }
  },
  {
   "type": "choice",
   "q": "Who should tell you how often each item is checked?",
   "options": [
    "The duty holder",
    "The equipment user",
    "The HSE",
    "Your PAT tester"
   ],
   "answer": 0,
   "why": "The duty holder does the risk assessment and tells the inspector.",
   "src": "113.pdf (In-service Inspection & Testing slides) p60",
   "scene": "You arrive at a workshop to test the equipment. Nobody has told you the inspection frequency.",
   "explain": {
    "what": "The duty holder is the person responsible for the equipment's safety.",
    "why": "Setting the frequency through a risk assessment is the duty holder's job, and the slides say inspectors should be told the frequency by them.",
    "how": "Before you start a job, ask the duty holder for the frequency they've decided for each type of item.",
    "where": "Course slides 113.pdf p60."
   }
  },
  {
   "type": "order",
   "q": "Put the preliminary inspection in order.",
   "steps": [
    "Check it can be disconnected (if not, stop)",
    "Disconnect any data or communication links",
    "Carry out the formal visual inspection",
    "Assess if it suits the environment, use and users"
   ],
   "why": "You must be able to disconnect it before anything else.",
   "src": "113.pdf (In-service Inspection & Testing slides) p62",
   "scene": "You're about to test a networked printer in an office.",
   "explain": {
    "what": "The preliminary inspection comes before any tests.",
    "why": "If the equipment can't be disconnected you don't go any further. Data links come off so test voltages don't reach other equipment.",
    "how": "Disconnect check, data links off, formal visual inspection, suitability check. Then test.",
    "where": "At the item, before you carry it to the bench (course slides 113.pdf p62)."
   }
  },
  {
   "type": "choice",
   "q": "What do you do?",
   "options": [
    "Test it while it's still running",
    "Don't go any further with it",
    "Switch it off at the main switch",
    "Test it at 250 V instead"
   ],
   "answer": 1,
   "why": "If equipment can't be disconnected, you don't proceed.",
   "src": "113.pdf (In-service Inspection & Testing slides) p62",
   "scene": "The office manager says the server must not be unplugged under any circumstances.",
   "explain": {
    "what": "The first step of the preliminary inspection is to find out whether the equipment can be disconnected from the supply.",
    "why": "The slides say if it can't, do not proceed. Switching off the main switch or testing it live isn't your call.",
    "how": "A sensible next step: note that it wasn't inspected and tell the duty holder, so they can arrange a time it can be disconnected.",
    "where": "At the item (course slides 113.pdf p62)."
   }
  },
  {
   "type": "choice",
   "q": "Plug check: pass or fail?",
   "options": [
    "Pass: it still works",
    "Fail: signs of overheating and damage",
    "Pass: just change the fuse and carry on using it",
    "Fail: but only if it's Class I"
   ],
   "answer": 1,
   "why": "Scorching and a cracked body are failures whatever the class.",
   "src": "113.pdf (In-service Inspection & Testing slides) p71",
   "scene": "Formal visual inspection of a kettle plug: brown scorch marks round the line pin and a crack in the plug body.",
   "explain": {
    "what": "The formal visual inspection checks the plug for damage, overheating and a secure body.",
    "why": "Brown scorch marks are a sign of overheating, and a crack means the body isn't sound. Working doesn't make it safe.",
    "how": "Look at the pins and around them, the body and the cord entry. Fail it and record what you saw.",
    "where": "The plug (course slides 113.pdf p71)."
   }
  },
  {
   "type": "choice",
   "q": "What does this fail on?",
   "options": [
    "The flex isn't secured to the plug",
    "The pins aren't sleeved",
    "The plug fuse is the wrong rating for it",
    "Nothing: it's still connected"
   ],
   "answer": 0,
   "why": "The flex must be properly secured and fully home in the plug.",
   "src": "113.pdf (In-service Inspection & Testing slides) p69; 113.pdf (In-service Inspection & Testing slides) p73",
   "scene": "On a vacuum cleaner, the outer sheath of the flex has pulled out of the plug and the coloured inner cores are showing.",
   "explain": {
    "what": "The flex must be properly secured to the plug and the appliance, fully home, with no strain on the conductors.",
    "why": "With the outer sheath pulled out, the inner cores take the strain and can be damaged or pulled off their terminals.",
    "how": "Check where the flex enters the plug and the appliance on every item. Fail it and record the reason.",
    "where": "Where the flex meets the plug (course slides 113.pdf p69 and p73)."
   }
  },
  {
   "type": "fill",
   "q": "A 450 W desk lamp needs a ___ A plug fuse.",
   "answers": [
    "3",
    "3a",
    "3 a"
   ],
   "why": "Up to 700 W takes a 3 A fuse; over 700 W takes 13 A.",
   "src": "113.pdf (In-service Inspection & Testing slides) p72",
   "explain": {
    "what": "The plug fuse must suit the rating of the appliance.",
    "why": "450 W is under 700 W, so 3 A (with flex at least 0.5 mm²). 13 A is for appliances over 700 W (flex at least 1.25 mm²).",
    "how": "Read the wattage off the rating plate, compare it with 700 W, then open the plug and look at the fuse.",
    "where": "The rating plate and inside the plug (course slides 113.pdf p72)."
   }
  },
  {
   "type": "choice",
   "q": "Does this fail the plug on its own?",
   "options": [
    "Yes: all plugs need sleeved pins",
    "No: the rule isn't retrospective",
    "Yes, but only on Class I items",
    "Only if it's on an extension lead"
   ],
   "answer": 1,
   "why": "Sleeved pins were required from 1984, and older plugs aren't failed just for that.",
   "src": "113.pdf (In-service Inspection & Testing slides) p71",
   "scene": "An older but undamaged plug has unsleeved pins.",
   "explain": {
    "what": "Sleeved pins have insulation on part of the line and neutral pins.",
    "why": "The slides say sleeved pins were required from 1984 and the rule is not retrospective, so unsleeved pins on an older plug aren't a fail by themselves.",
    "how": "Still check that plug for damage, overheating, a secure body and the right fuse.",
    "where": "The plug pins (course slides 113.pdf p71)."
   }
  },
  {
   "type": "choice",
   "q": "What should you note?",
   "options": [
    "Nothing: housekeeping isn't your job",
    "Poor housekeeping round the equipment",
    "Only the printer's plug fuse",
    "That the printer must be Class II equipment"
   ],
   "answer": 1,
   "why": "Plants and cups on equipment and piles of adaptors are housekeeping faults.",
   "src": "113.pdf (In-service Inspection & Testing slides) p64; 113.pdf (In-service Inspection & Testing slides) p66",
   "scene": "A plant pot sits on top of a printer, and its plug is in one of three multi-way adaptors plugged into each other.",
   "explain": {
    "what": "The formal visual inspection includes good housekeeping, not just the item itself.",
    "why": "The slides say nothing like cups or plants should sit on equipment, and there should be no indiscriminate use of multi-way adaptors.",
    "how": "Look around the item: trip hazards, ventilation, things on top, adaptors, and whether the plug can be reached to disconnect it.",
    "where": "Around the item where it's used (course slides 113.pdf p64-66)."
   }
  },
  {
   "type": "choice",
   "q": "What does it need before it's used?",
   "options": [
    "A user check, and add it to the register",
    "A full combined inspection and test first",
    "Nothing until its first annual test",
    "Only an earth continuity test"
   ],
   "answer": 0,
   "why": "New CE-marked kit doesn't normally need testing first, but needs a user check and to go on the register.",
   "src": "113.pdf (In-service Inspection & Testing slides) p8",
   "scene": "A new, CE-marked kettle arrives at the office in its box.",
   "explain": {
    "what": "New CE-marked equipment is assumed to be safe as it leaves the manufacturer.",
    "why": "It shouldn't normally need in-service testing before use, but it should have a user check and be added to the equipment register so it's included in future checks.",
    "how": "Put new items on the register straight away so they're not missed later.",
    "where": "The equipment register (course slides 113.pdf p8)."
   }
  },
  {
   "type": "choice",
   "q": "What should happen with the landlord's appliances?",
   "options": [
    "Checked again for each new tenancy",
    "Checked only when they break",
    "Only the tenants' own items are checked",
    "Checked once when first bought"
   ],
   "answer": 0,
   "why": "Equipment supplied with a tenancy should be checked periodically and again for each new tenancy.",
   "src": "113.pdf (In-service Inspection & Testing slides) p19-20",
   "scene": "A landlord asks you to check the cooker, fridge and kettle in a flat before a new tenant moves in.",
   "explain": {
    "what": "Landlords are responsible for making sure equipment in rented homes is safe and kept safe.",
    "why": "If it's supplied as part of the tenancy, it should be checked for safety periodically and rechecked for each new tenancy, including holiday lets and short-term rentals.",
    "how": "Ask the landlord which items come with the tenancy and include them all.",
    "where": "Course slides 113.pdf p19-20."
   }
  }
 ]
});
