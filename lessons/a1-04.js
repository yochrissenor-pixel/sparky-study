// DRAFT lesson (v2, Unit 1) written from Tom's Access Training PDFs and the IET A4:2026 forms. Waiting for Checker + Tom's approval.
window.LESSONS = window.LESSONS || [];
window.LESSONS.push({
 "id": "a1-04",
 "topic": "inspection",
 "title": "Inspecting before you test",
 "awards": [
  "L2 Fundamental",
  "L3 Initial Verification",
  "L3 Periodic"
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
  "notes": "All inspection points match the slides. The question on cables less than 50 mm deep now says to ask your tutor what the extra rules are, as the slides don't list them."
 },
 "approved": null,
 "intro": {
  "what": "Inspection is the look-and-check you do before any test: is the right equipment fitted, fitted properly, and not damaged so as to make it unsafe.",
  "why": "It's done with the installation isolated and before it's energised, so you find faults before you put test voltages or the supply on them. Anything wrong is put right before you carry on testing or issue the certificate.",
  "how": [
   "Isolate: inspection is done dead",
   "Use your eyes first; use touch to check things are fixed and for sharp edges or burrs",
   "Board: every device labelled, covers and blanks in place, warning notices, circuit chart",
   "Circuits: cables routed out of harm's way and fixed, connections sound, single-pole switches in the line",
   "Protection: RCDs where needed (30 mA), earthing and bonding conductors present, sized, labelled and connected",
   "Record each item on the schedule of inspections (tick or N/A)",
   "Found something wrong? Put it right before you carry on"
  ],
  "where": "Start at the consumer unit or distribution board, then follow each circuit out to its accessories. On the EIC it's recorded in Section H (schedule of inspections).",
  "reason": "Inspection comes first and is done dead. A fault you see now is one you don't find later with 500 V or 230 V on it.",
  "numbers": [
   "Enclosures: at least IP2X (IPXXB); easy-to-reach top surfaces IP4X (IPXXD)",
   "RCD for additional protection: 30 mA maximum",
   "Concealed cables less than 50 mm deep: extra rules apply",
   "Bathroom: zone 1 up to 2.25 m, zone 2 extends 0.6 m (IPX4)"
  ]
 },
 "questions": [
  {
   "type": "order",
   "q": "Put the stages of initial verification in order.",
   "steps": [
    "Inspection",
    "Dead testing",
    "Live testing"
   ],
   "why": "Inspection and dead tests find faults before you put power on, which keeps you and others safe.",
   "src": "99.pdf (EAL Initial Verification slides) p40",
   "explain": {
    "what": "Initial verification is done in a set order because testing involves some hazard.",
    "why": "You inspect first (isolated), then do the dead tests, and only then the live tests. Live testing first would put the supply on a circuit you haven't checked.",
    "how": "On the board: inspection checklist, then continuity, insulation resistance and polarity, then the live tests.",
    "where": "The whole test board (99.pdf slides p40)."
   }
  },
  {
   "type": "choice",
   "q": "During initial inspection, the installation should be…",
   "options": [
    "Isolated from the supply",
    "Switched on and loaded",
    "Switched on, with the RCDs off",
    "Live, so you can feel for heat"
   ],
   "answer": 0,
   "why": "Inspection is done with the installation isolated, before a new installation is energised.",
   "src": "99.pdf (EAL Initial Verification slides) p42",
   "explain": {
    "what": "Initial inspection checks the installation meets the requirements before it's ever switched on.",
    "why": "The course says it must be done with the installation isolated from the supply. Feeling for heat only applies to existing circuits.",
    "how": "Do safe isolation on the board before you take any covers off to inspect.",
    "where": "The consumer unit and circuits on the test board (99.pdf slides p42)."
   }
  },
  {
   "type": "choice",
   "q": "When must it be put right?",
   "options": [
    "Before you carry on and before you issue the certificate",
    "After the live tests, if it still looks loose",
    "Only if the assessor points it out",
    "On the next periodic inspection"
   ],
   "answer": 0,
   "why": "Any remedial work is done before you carry on inspecting or testing, and before you certify.",
   "src": "99.pdf (EAL Initial Verification slides) p41; 99.pdf (EAL Initial Verification slides) p50",
   "scene": "Inspecting the board, you give the neutral of circuit 3 a gentle tug and it pulls out of the neutral bar.",
   "explain": {
    "what": "Connections must give lasting electrical continuity and enough mechanical strength.",
    "why": "The course says ANY remedial work must be done BEFORE continuing with inspection or testing and BEFORE issuing the certificate. Testing over a loose connection gives readings that mean nothing.",
    "how": "Tighten or remake it, then carry on with your inspection.",
    "where": "Terminals in the board or at accessories (99.pdf slides p41 and p50)."
   }
  },
  {
   "type": "choice",
   "q": "What's the problem?",
   "options": [
    "None, blanks are only for looks",
    "The enclosure no longer stops a finger touching live parts",
    "It only matters if it's on the top surface",
    "It just needs a 'Danger' sticker over the gap"
   ],
   "answer": 1,
   "why": "Barriers and enclosures must give at least IP2X (IPXXB), so a finger can't reach live parts.",
   "src": "99.pdf (EAL Initial Verification slides) p57; 99.pdf (EAL Initial Verification slides) p41",
   "scene": "One way in the consumer unit is empty and there's no blanking plate, leaving a gap in the front cover.",
   "explain": {
    "what": "Basic protection includes barriers and enclosures that keep fingers away from live parts.",
    "why": "Enclosures must give at least IPXXB or IP2X, and easy-to-reach top surfaces at least IPXXD or IP4X. A missing blank leaves a gap a finger could go through.",
    "how": "Fit a blanking plate before you carry on. On the schedule it's part of basic protection.",
    "where": "Front of the consumer unit (99.pdf slides p57)."
   }
  },
  {
   "type": "choice",
   "q": "What does this break?",
   "options": [
    "Nothing, the electrician knows what's what",
    "Every device must be labelled with its circuit",
    "Only the main switch needs a label",
    "Labels are only needed on three-phase boards"
   ],
   "answer": 1,
   "why": "Protective devices must be arranged and identified so the circuit they protect is easy to recognise.",
   "src": "99.pdf (EAL Initial Verification slides) p65; 99.pdf (EAL Initial Verification slides) p69",
   "scene": "None of the breakers in the consumer unit are labelled, and there's no circuit chart.",
   "explain": {
    "what": "Labelling lets anyone isolate the right circuit quickly and safely.",
    "why": "The course says protective devices must be identified so you can easily recognise the circuit protected. For simple installations a circuit chart in or next to the board is enough.",
    "how": "Label each device and make sure there's a circuit chart. On the schedule it comes under identification and notices.",
    "where": "The consumer unit (99.pdf slides p65 and p69)."
   }
  },
  {
   "type": "fill",
   "q": "For additional protection, the RCD must be rated at no more than ___ mA, so this one is wrong.",
   "answers": [
    "30"
   ],
   "why": "An RCD for additional protection must have a rated residual operating current of no more than 30 mA.",
   "src": "99.pdf (EAL Initial Verification slides) p59",
   "scene": "The socket circuits are fed through an RCD marked IΔn 100 mA.",
   "explain": {
    "what": "Additional protection is an extra layer: an RCD that trips at a current low enough to protect a person.",
    "why": "The course says the RCD's IΔn must not exceed 30 mA. A 100 mA device doesn't give additional protection. The RCD also mustn't be the only protection against shock.",
    "how": "Read the IΔn on the RCD's label during inspection. Record the type and rating on the schedule of circuit details.",
    "where": "RCD in the consumer unit (99.pdf slides p59)."
   }
  },
  {
   "type": "choice",
   "q": "What do you do?",
   "options": [
    "Carry on testing; bonding isn't part of inspection",
    "Record it and get it fitted before you test or certify",
    "Bond the gas pipe to the water pipe instead",
    "Tick Section G anyway, it's a new install"
   ],
   "answer": 1,
   "why": "Protective conductors must be present, sized, labelled and connected; a missing main bond is a fault to fix first.",
   "src": "99.pdf (EAL Initial Verification slides) p58; 99.pdf (EAL Initial Verification slides) p41; EIC form (IET BS 7671:2018+A4:2026) p3",
   "scene": "New installation. At the main earthing terminal there's a bonding conductor to the water pipe but nothing to the gas pipe.",
   "explain": {
    "what": "For automatic disconnection, inspection confirms the protective conductors, including main bonding, are present, the right size, labelled and connected.",
    "why": "A missing bond is a fault, and faults are put right before you carry on or certify. Section G of the EIC has tick boxes for bonding to water, gas, oil, structural steel and lightning protection, and you can only tick what's really there.",
    "how": "Get the bond fitted, then later prove it with a continuity test.",
    "where": "Main earthing terminal and the gas pipe; EIC page 3, Section G (99.pdf slides p58)."
   },
   "form": {
    "doc": "EIC",
    "page": 3,
    "where": "Section G: Main protective conductors",
    "box": "To water installation pipes ☐  To gas installation pipes ☐"
   }
  },
  {
   "type": "choice",
   "q": "What's wrong?",
   "options": [
    "Nothing, as long as the light goes off",
    "Single-pole switches go in the line only",
    "The switch should break the CPC instead",
    "It only matters on socket circuits"
   ],
   "answer": 1,
   "why": "Single-pole devices for protection or switching go in the line conductor only.",
   "src": "99.pdf (EAL Initial Verification slides) p54",
   "scene": "On the lighting circuit you see the switch is wired to break the blue (neutral) conductor.",
   "explain": {
    "what": "Polarity is checked by inspection as well as by testing.",
    "why": "A switch in the neutral turns the light off but leaves the lampholder live. That's why single-pole switches must be in the line.",
    "how": "Look at which core goes to the switch. If it's the neutral, swap it before you test.",
    "where": "Light switch and ceiling rose on the lighting circuit (99.pdf slides p54)."
   }
  },
  {
   "type": "match",
   "q": "Match each sense to how you use it when inspecting.",
   "pairs": [
    [
     "Sight",
     "The main sense for every item"
    ],
    [
     "Touch",
     "Fixings secure, no sharp edges or burrs"
    ],
    [
     "Heat, smell and sound",
     "Existing circuits only"
    ],
    [
     "Taste",
     "Never"
    ]
   ],
   "why": "Sight is the main one. Heat, smell and sound only apply to existing circuits. Never taste.",
   "src": "99.pdf (EAL Initial Verification slides) p77",
   "explain": {
    "what": "Inspection uses your senses, mainly your eyes.",
    "why": "Touch checks that accessories and equipment are securely fixed and that metalwork has no sharp edges or burrs. Heat, smell and sound only tell you something on existing circuits that have been in use.",
    "how": "On the board, look first, then give fixings a gentle check by hand.",
    "where": "Everything you inspect on the board (99.pdf slides p77)."
   }
  },
  {
   "type": "choice",
   "q": "Which of these needs a warning notice?",
   "options": [
    "A board where isolation needs more than one device",
    "A board with one double-pole main switch",
    "A light switch in a bedroom",
    "A socket outlet in a hallway"
   ],
   "answer": 0,
   "why": "Isolation that needs more than one device must be labelled, so nobody thinks one switch makes it safe.",
   "src": "99.pdf (EAL Initial Verification slides) p68",
   "explain": {
    "what": "Warning notices tell the next person about something they can't see.",
    "why": "The course list includes: voltages over 230 V or different voltages, isolation needing more than one device, periodic inspection and testing, RCD testing, and earthing and bonding connections.",
    "how": "Check for each of those notices at the board when you inspect.",
    "where": "At the consumer unit or distribution board (99.pdf slides p68)."
   }
  },
  {
   "type": "choice",
   "q": "What do you check?",
   "options": [
    "Nothing, plastered-in cables are always fine",
    "The extra rules for cables under 50 mm deep",
    "That it's been changed to a flexible cord",
    "Only that the cable is the right colour"
   ],
   "answer": 1,
   "why": "Cables concealed in walls or partitions less than 50 mm deep have particular requirements to check.",
   "src": "99.pdf (EAL Initial Verification slides) p52",
   "scene": "You can see a new socket cable has been buried about 30 mm deep in a plastered wall.",
   "explain": {
    "what": "Cables must be routed out of harm's way, with extra mechanical protection where needed.",
    "why": "A cable less than 50 mm deep in a wall could be hit by a nail or screw, so it has to meet extra requirements before you can accept it. The slides don't list those requirements, so ask your tutor what the assessor looks for.",
    "how": "Note the depth and route, and check the extra rules are met before you tick the item.",
    "where": "Cable routes in walls and partitions (99.pdf slides p52)."
   }
  },
  {
   "type": "choice",
   "q": "Is it suitable?",
   "options": [
    "Yes, IP20 is fine indoors",
    "No: zone 2 needs at least IPX4",
    "Yes, zones only apply to sockets",
    "No: it must be IPX8 in zone 2"
   ],
   "answer": 1,
   "why": "Zone 2 extends 0.6 m from zone 1, and equipment there needs at least IPX4.",
   "src": "99.pdf (EAL Initial Verification slides) p71",
   "scene": "A light fitting rated IP20 is fitted in zone 2 of a bathroom.",
   "explain": {
    "what": "Rooms with a bath or shower are split into zones by how likely things are to get wet.",
    "why": "Zone 0 is in the bath or shower basin (IPX7). Zone 1 goes up to 2.25 m above the floor. Zone 2 extends 0.6 m from zone 1 and needs IPX4. IP20 gives no protection against water.",
    "how": "Measure where the fitting is, work out the zone, then read the IP rating on the fitting.",
    "where": "Bathroom on the installation (99.pdf slides p71)."
   }
  },
  {
   "type": "choice",
   "q": "Where do you record your inspection on an EIC?",
   "options": [
    "Section H, schedule of inspections: tick or N/A",
    "In the Remarks column of the test results",
    "Section D, next to the next inspection date",
    "On a separate EICR"
   ],
   "answer": 0,
   "why": "Section H lists the inspection items; each outcome is a tick or N/A.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p3",
   "explain": {
    "what": "Section H of the EIC is the schedule of inspections for new work.",
    "why": "New work has to be right before you certify it, so there are no defect codes on an EIC: each item is ticked or marked N/A. Codes like C2 belong on an EICR.",
    "how": "Work down items 1.0 to 14.0 (intake equipment, ADS, basic protection, additional protection, boards, circuits, isolation, notices, bathrooms and so on).",
    "where": "EIC page 3, Section H (EIC form p3)."
   },
   "form": {
    "doc": "EIC",
    "page": 3,
    "where": "Section H: Schedule of inspections",
    "box": "Outcome ✓ / N/A"
   }
  }
 ]
});
