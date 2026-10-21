// DRAFT lesson (v2, unit 3) written from Tom's Access Training PDFs and the IET A4:2026 forms. Waiting for Checker + Tom's approval.
window.LESSONS = window.LESSONS || [];
window.LESSONS.push({
 "id": "a3-01",
 "topic": "earthing",
 "title": "Measuring Ze",
 "awards": [
  "L2 Fundamental",
  "L3 Initial Verification",
  "L3 Periodic"
 ],
 "status": "draft",
 "unconfirmed": true,
 "note": "The typical Ze figures (0.35, 0.8 and 200 Ω) are from the 2018-era slides. The slides word the safety step two ways: for Ze 'isolate the circuits, but you need supply to the board' (99.pdf p138), and for the earth-rod loop test 'switch off supply before disconnecting the earth conductor' (p137). This lesson reads both as: main switch off, incoming supply still live for the tester. Reconnecting the earthing conductor straight after is not written on the slide; it is included because without it the installation has no earth. Check the exact steps your assessor wants with your tutor.",
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
  "verdict": "unconfirmed",
  "notes": "Facts and sums check out against the slides and the A4 form. The slides word the Ze safety step two ways and don't write down reconnecting the earth afterwards; the lesson flags both, so confirm the exact steps with your tutor."
 },
 "approved": null,
 "intro": {
  "what": "Ze is the earth fault loop impedance of the supply, outside your installation: out along the supply line and back through the supply's earth. You measure it at the origin with a loop impedance tester.",
  "why": "It proves the supply earth is there and sound, and it's the first part of every circuit's Zs (Zs = Ze + R1+R2). It also goes on the certificate as a supply characteristic.",
  "how": [
   "Get permission, then isolate the circuits: main switch off, but the supply to the board stays on",
   "Disconnect the earthing conductor from the MET, so the bonding can't give a parallel path",
   "Test between the incoming line and the disconnected earthing conductor",
   "Compare the reading with the typical figure for the earthing system",
   "Reconnect the earthing conductor to the MET before anything is switched back on",
   "Write Ze in Section F of the certificate"
  ],
  "where": "At the origin: the main earthing terminal (MET) and the incoming supply terminals. On the EIC it goes in Section F, 'External earth fault loop impedance, Ze'.",
  "reason": "While the earthing conductor is off, the installation has no earth at all. Nothing can be in use, and it goes back on straight after the reading.",
  "numbers": [
   "TN-C-S (PME): Ze up to 0.35 Ω",
   "TN-S: Ze up to 0.8 Ω",
   "TT: Ze up to 200 Ω",
   "Zs = Ze + (R1+R2)"
  ]
 },
 "questions": [
  {
   "type": "choice",
   "q": "Before you take the earthing conductor off the MET, what state should the board be in?",
   "options": [
    "Circuits isolated, supply still on to the board",
    "Everything live and all circuits loaded",
    "DNO fuse pulled so the board is dead",
    "Circuits on, bonding conductors removed"
   ],
   "answer": 0,
   "why": "The slide says isolate the circuits, but you need supply to the board to test.",
   "src": "99.pdf (EAL Initial Verification slides) p138",
   "scene": "Assessment board, single-phase, TN-C-S. You're about to measure Ze.",
   "explain": {
    "what": "Ze is a live test at the origin, but the installation's circuits must not be in use while the earth is off.",
    "why": "With the circuits isolated, nothing relies on the earth you're about to remove. Pulling the DNO fuse leaves nothing to measure, and leaving circuits on means a fault during the test would have no earth path.",
    "how": "Ask permission, switch the main switch off so the circuits are dead, and keep the incoming supply to the board live for the tester.",
    "where": "At the origin of the assessment board (99.pdf slides p138)"
   }
  },
  {
   "type": "choice",
   "q": "Why do you disconnect the earthing conductor from the MET for this test?",
   "options": [
    "To remove parallel paths through the bonding",
    "So the tester reads in kA instead of ohms",
    "Because the MET isn't part of the supply",
    "So the RCD can't trip during the test"
   ],
   "answer": 0,
   "why": "Bonded pipes and metalwork give extra paths that make Ze read lower than the real supply value.",
   "src": "99.pdf (EAL Initial Verification slides) p138",
   "explain": {
    "what": "The MET is where the earthing conductor and all the bonding conductors meet.",
    "why": "Left connected, current can return through bonded water and gas pipes as well as the supply earth, so Ze reads lower than it really is. You want the supply's own value.",
    "how": "Undo just the earthing conductor at the MET, test, then put it straight back.",
    "where": "Main earthing terminal at the origin (99.pdf slides p138)"
   }
  },
  {
   "type": "choice",
   "q": "Where do your loop tester leads go for Ze?",
   "options": [
    "Incoming line and the disconnected earthing conductor",
    "Line and neutral at the furthest socket",
    "Neutral and the MET, with the earthing conductor still on",
    "The earth rod and a spike 10 rod-lengths away"
   ],
   "answer": 0,
   "why": "Line at the origin to the earthing conductor you've just taken off the MET.",
   "src": "99.pdf (EAL Initial Verification slides) p138; 99.pdf (EAL Initial Verification slides) p137",
   "explain": {
    "what": "Ze measures the supply's loop: line out, earth back, without your installation in the way.",
    "why": "Line to the disconnected earthing conductor gives only the supply's loop. The furthest socket is where you measure Zs, and spikes in the ground are a different (earth electrode) test.",
    "how": "Clip the earth lead onto the end of the earthing conductor you've removed, line lead onto the incoming line, and press test.",
    "where": "Supply terminals and earthing conductor at the origin (99.pdf slides p137-138)"
   }
  },
  {
   "type": "match",
   "q": "Match the earthing system to the typical maximum Ze on your slides.",
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
   "why": "PEN conductor lowest, cable sheath next, earth rod in the ground highest.",
   "src": "99.pdf (EAL Initial Verification slides) p139; 302.pdf (Domestic Electrical Installer course) p34-36",
   "explain": {
    "what": "Each earthing system has a typical highest Ze, because the earth path back is different in each.",
    "why": "TN-C-S returns on the combined PEN conductor (0.35 Ω), TN-S on the supply cable sheath (0.8 Ω), and TT through the ground via an earth rod (200 Ω).",
    "how": "Identify the system first, then compare your Ze against its figure.",
    "where": "Origin of the board (99.pdf slides p84-86 and p139; 302.pdf p34-36)"
   }
  },
  {
   "type": "match",
   "q": "Match the earthing system to where its earth comes from.",
   "pairs": [
    [
     "TN-C-S",
     "Earth connection made into the mains head (PEN)"
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
   "why": "Where the earthing conductor lands tells you the system, and so what Ze to expect.",
   "src": "302.pdf (Domestic Electrical Installer course) p34-36; 99.pdf (EAL Initial Verification slides) p139",
   "explain": {
    "what": "The earthing system describes where your installation's earth comes from.",
    "why": "TN-C-S: the earth is taken from the mains head, which uses a combined neutral and earth (PEN). TN-S: the earth is the supply cable sheath. TT: no earth is provided, so there's an earth rod.",
    "how": "Follow the earthing conductor back from the MET to see where it lands before you test.",
    "where": "Supply intake at the origin (302.pdf p34-36; 99.pdf slides p139)"
   }
  },
  {
   "type": "choice",
   "q": "What does this reading tell you?",
   "options": [
    "It's higher than a TN-C-S supply should be: query it",
    "Normal for a TN-C-S supply: write it down and move on",
    "Fine, because anything under 200 Ω passes",
    "Ze doesn't matter if every Zs passes"
   ],
   "answer": 0,
   "why": "TN-C-S is typically up to 0.35 Ω; 0.95 Ω is even higher than TN-S's 0.8 Ω.",
   "src": "99.pdf (EAL Initial Verification slides) p139; 49.pdf (EAL Condition Reporting slides) p37",
   "scene": "The label at the origin says TN-C-S. Your Ze measures 0.95 Ω.",
   "explain": {
    "what": "Ze should fit the earthing system you've been told the supply is.",
    "why": "0.95 Ω is nearly three times the TN-C-S figure. 200 Ω is the TT figure, so it doesn't apply here. A Ze that doesn't fit can mean a poor or wrong earth.",
    "how": "Check your leads are on the right terminals and retest. If it's still high, don't record it as normal: raise it. On a periodic, a means of earthing that isn't reliable and effective is a C2 on your slides.",
    "where": "Origin, Section F of the form (99.pdf slides p139; 49.pdf slides p37)"
   }
  },
  {
   "type": "choice",
   "q": "Is that reading a problem on its own?",
   "options": [
    "No: it's within the 200 Ω for TT",
    "Yes: anything over 0.8 Ω fails",
    "Yes: Ze must be under 0.35 Ω",
    "No: Ze isn't recorded on TT"
   ],
   "answer": 0,
   "why": "TT Ze is high because the fault current goes back through the ground; up to 200 Ω is typical.",
   "src": "302.pdf (Domestic Electrical Installer course) p36; 99.pdf (EAL Initial Verification slides) p86; 99.pdf (EAL Initial Verification slides) p139",
   "scene": "Rural house, overhead supply, earth rod outside. Ze reads 120 Ω.",
   "explain": {
    "what": "A TT system has its own earth rod because the supplier provides no earth.",
    "why": "120 Ω is under the 200 Ω typical maximum for TT. The 0.35 and 0.8 Ω figures are for TN systems. Because Ze is this high, breakers can't disconnect a fault in time, so a 100 mA S-type RCD main switch gives the fault protection.",
    "how": "Record it, and expect an S-type 100 mA RCD as the main switch on a TT board.",
    "where": "Origin of a TT board, Section F of the form (302.pdf p36; 99.pdf slides p86 and p139)"
   }
  },
  {
   "type": "order",
   "q": "Put the Ze test in order.",
   "steps": [
    "Get permission and isolate the circuits (supply to the board stays on)",
    "Disconnect the earthing conductor from the MET",
    "Test between the incoming line and the earthing conductor",
    "Reconnect the earthing conductor to the MET",
    "Write Ze in Section F"
   ],
   "why": "Isolate, disconnect, test, reconnect, record.",
   "src": "99.pdf (EAL Initial Verification slides) p25; 99.pdf (EAL Initial Verification slides) p138; EIC form (IET BS 7671:2018+A4:2026) p3",
   "explain": {
    "what": "Ze is the only test where you deliberately take the installation's earth off, so the order matters.",
    "why": "The circuits must be isolated before the earth comes off, and the earth must be back on before you do anything else. Writing it up is last because nothing on paper is urgent.",
    "how": "Say each step out loud on the assessment so the assessor hears you isolate first and reconnect straight after.",
    "where": "Origin and MET (99.pdf slides p25 and p138); EIC page 3, Section F"
   }
  },
  {
   "type": "choice",
   "q": "You've got your Ze reading. What must happen before any circuit is switched back on?",
   "options": [
    "Reconnect the earthing conductor to the MET",
    "Insulation test the earthing conductor at 500 V",
    "Null the loop tester leads again",
    "Disconnect the main bonding too"
   ],
   "answer": 0,
   "why": "Without the earthing conductor, every circuit has no earth: fault protection is missing.",
   "src": "99.pdf (EAL Initial Verification slides) p138; 49.pdf (EAL Condition Reporting slides) p32",
   "explain": {
    "what": "The earthing conductor connects your whole installation's earth (MET) to the supply's earth.",
    "why": "Your slides describe 'no main earthing conductor' as dangerous if a fault occurs, because fault protection is missing. Switching circuits on with it off would leave every exposed metal part without an earth.",
    "how": "Put it back on the MET, check the terminal is tight, then carry on with PFC and Zs.",
    "where": "MET at the origin (99.pdf slides p138; 49.pdf slides p32)"
   }
  },
  {
   "type": "fill",
   "q": "Expected Zs = ___ Ω",
   "answers": [
    "0.54",
    "0.54Ω"
   ],
   "why": "Zs = Ze + (R1+R2) = 0.35 + 0.19 = 0.54 Ω.",
   "src": "99.pdf (EAL Initial Verification slides) p125",
   "scene": "Board Ze = 0.35 Ω. The ring final's R1+R2 = 0.19 Ω.",
   "explain": {
    "what": "Zs is the whole loop for one circuit: the supply part (Ze) plus the circuit's line and CPC (R1+R2).",
    "why": "0.35 + 0.19 = 0.54 Ω. Ze is added to every circuit, which is why a high Ze pushes every Zs up.",
    "how": "Add your Ze to each circuit's R1+R2 to get a figure to check your measured Zs against.",
    "where": "Ring final on the board (99.pdf slides p124-125)"
   }
  },
  {
   "type": "fill",
   "q": "Ze goes in Section ___ of the EIC.",
   "answers": [
    "F",
    "section f"
   ],
   "why": "Section F, 'External earth fault loop impedance, Ze', next to Ipf.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p3",
   "explain": {
    "what": "Section F records the supply characteristics and earthing arrangements.",
    "why": "Ze sits in the 'Nature of supply parameters' part of Section F, alongside Ipf. The form says these are by enquiry or by measurement; on the board you measure.",
    "how": "Write the value in ohms in the Ze box as soon as you've reconnected the earth.",
    "where": "EIC page 3, Section F"
   },
   "form": {
    "doc": "EIC",
    "page": 3,
    "where": "Section F: Supply characteristics and earthing arrangements",
    "box": "External earth fault loop impedance, Ze"
   }
  },
  {
   "type": "choice",
   "q": "Before you disconnect the earthing conductor, what must you do first?",
   "options": [
    "Switch off at the main switch",
    "Drive in a second earth rod",
    "Null the test leads",
    "Press the RCD test button"
   ],
   "answer": 0,
   "why": "The slide says switch off supply before disconnecting the earth conductor; on the board that means main switch off.",
   "src": "99.pdf (EAL Initial Verification slides) p137",
   "scene": "TT board with an earth rod. You use the loop tester to test the electrode (method E3).",
   "explain": {
    "what": "Method E3 measures a TT earth rod with your loop tester, the same way you test Ze on a TN system.",
    "why": "You switch off before the earth comes off, so nothing is in use without an earth. Nulling leads is for continuity, and a second rod isn't part of the test.",
    "how": "Main switch off, earthing conductor off, test between the line at the origin and the electrode, then reconnect.",
    "where": "Origin of a TT board (99.pdf slides p137)"
   }
  },
  {
   "type": "choice",
   "q": "What code does your course give this?",
   "options": [
    "C2",
    "C1",
    "C3",
    "FI"
   ],
   "answer": 0,
   "why": "A water, gas or oil pipe used as the means of earthing is a C2 on your slides.",
   "src": "49.pdf (EAL Condition Reporting slides) p37",
   "scene": "Periodic inspection. When you go to disconnect for Ze, you find the only earth is a clamp onto the incoming water pipe.",
   "explain": {
    "what": "An EICR observation code says how urgent a problem is.",
    "why": "The slides list 'a public utility water, gas or oil pipe being used as a means of earthing' as C2, potentially dangerous. It isn't C1 because nothing is live to touch right now.",
    "how": "Write it in the observations with C2, and the report becomes unsatisfactory.",
    "where": "EICR observations (49.pdf slides p37)"
   }
  },
  {
   "type": "choice",
   "q": "Why does Ze matter for every circuit on the board?",
   "options": [
    "It's part of every circuit's Zs",
    "It sets the RCD trip time",
    "It sets the insulation test voltage",
    "It only matters on TT boards"
   ],
   "answer": 0,
   "why": "Zs = Ze + (R1+R2), so Ze is in every circuit's loop.",
   "src": "99.pdf (EAL Initial Verification slides) p125; 99.pdf (EAL Initial Verification slides) p144",
   "explain": {
    "what": "Every circuit's fault current goes back through the supply's earth, so Ze is part of every loop.",
    "why": "A high Ze raises every Zs, which means less fault current and slower disconnection. RCD times and the IR test voltage have nothing to do with Ze.",
    "how": "Measure Ze first, then use it to check each circuit's Zs.",
    "where": "Origin and every circuit (99.pdf slides p125 and p144)"
   }
  }
 ]
});
