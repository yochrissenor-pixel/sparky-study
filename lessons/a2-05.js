// DRAFT lesson (v2) written from Tom's Access Training PDFs and the IET A4:2026 forms. Waiting for Checker + Tom's approval.
window.LESSONS = window.LESSONS || [];
window.LESSONS.push({
 "id": "a2-05",
 "topic": "dead-tests",
 "title": "Insulation resistance",
 "awards": [
  "L2 Fundamental",
  "L3 Initial Verification",
  "L3 Periodic"
 ],
 "status": "draft",
 "unconfirmed": true,
 "note": "The test voltages and minimum values come from the IR table in the 302 course book, printed from an older edition of the regulations; check them against the current table in your BS 7671 A4:2026 book. The slides don't say what to do with surge protective devices (SPDs) during insulation testing; ask your tutor whether the assessor expects them disconnected, and note anything left connected in the Remarks column.",
 "sources": [
  {
   "file": "99.pdf (EAL Initial Verification slides)",
   "ref": "pages given on each question"
  },
  {
   "file": "302.pdf (Domestic Electrical Installer course)",
   "ref": "pages given on each question"
  },
  {
   "file": "EIC form (IET BS 7671:2018+A4:2026)",
   "ref": "pages given on each question"
  },
  {
   "file": "49.pdf (EAL Condition Reporting slides)",
   "ref": "pages given on each question"
  }
 ],
 "checker": {
  "by": "Claude Checker",
  "date": "2026-10-12",
  "verdict": "unconfirmed",
  "notes": "Correct against the course, but the test voltages and minimums come from an older table in the 302 book and the slides say nothing about surge protection devices; the note asks you to check both."
 },
 "approved": null,
 "intro": {
  "what": "Insulation resistance (IR) checks that the insulation between the live conductors, and between live conductors and earth, hasn't broken down. Your tester puts a DC test voltage across the conductors and reads in megohms (MΩ): high is good.",
  "why": "Damaged or poor insulation can leak current where it shouldn't. It's a dead test, done before any power goes on, and a low reading stops the job until it's fixed.",
  "how": [
   "Isolate and prove dead.",
   "Switches on; lamps out and all equipment disconnected or isolated.",
   "Set 500 V DC for a 230 V circuit (250 V DC for SELV or PELV).",
   "Test line and neutral together to earth.",
   "Then line to earth, neutral to earth and line to neutral.",
   "Pass is more than 1 MΩ; on new work expect much higher.",
   "Under 1 MΩ: stop, fix, re-inspect, re-test continuity then IR."
  ],
  "where": "From the consumer unit, on the circuit's conductors (or the whole board). The test voltage goes in column 23, Live–Live in column 24 and Live–Earth in column 25 of the Schedule of Test Results. Anything left connected that testing could damage goes in Remarks, column 31.",
  "reason": "Get the circuit ready first: switches on so all the cable is tested, equipment out so nothing is damaged and nothing upsets the reading.",
  "numbers": [
   "230 V circuits: 500 V DC, minimum 1.0 MΩ",
   "SELV and PELV: 250 V DC, minimum 0.5 MΩ",
   "Above 500 V: 1000 V DC, minimum 1.0 MΩ",
   "New work under 2 MΩ: look into it"
  ]
 },
 "questions": [
  {
   "type": "choice",
   "q": "What do you do before you test?",
   "options": [
    "Test it as it is, all connected",
    "Lamps and equipment out, switches on",
    "Switches off, lamps left in",
    "Use 1000 V so it's quicker"
   ],
   "answer": 1,
   "why": "Switches on tests all the cable; equipment out protects it and keeps the reading true.",
   "src": "99.pdf (EAL Initial Verification slides) p126",
   "explain": {
    "what": "The IR slides say: all switches in the 'on' position and all equipment disconnected or isolated.",
    "why": "A switch left off means the cable beyond it isn't tested. A lamp or transformer left in joins line to neutral through itself, so your L–N reading would look like a fault, and the test voltage could damage it.",
    "how": "Take lamps out, disconnect the transformer, put every switch on, then test.",
    "where": "Lighting circuit, at the board and each point (course slides 99.pdf p126)"
   },
   "scene": "Lighting radial, isolated. Lamps and a transformer are still connected and some switches are off."
  },
  {
   "type": "order",
   "q": "Put the IR tests in order.",
   "steps": [
    "Line and neutral together to earth",
    "Line to earth",
    "Neutral to earth",
    "Line to neutral"
   ],
   "why": "This is the test order on your slides.",
   "src": "99.pdf (EAL Initial Verification slides) p126-127",
   "explain": {
    "what": "The course gives the same IR order for a lighting radial and a ring final.",
    "why": "Line and neutral linked together to earth first tests both against earth in one go; then each on its own to earth; then between the two live conductors.",
    "how": "Link L and N at the board for the first test, then remove the link for the rest.",
    "where": "At the consumer unit (course slides 99.pdf p126-127)"
   },
   "scene": "Radial circuit ready for IR: switches on, equipment disconnected."
  },
  {
   "type": "fill",
   "q": "Test voltage for a 230 V circuit: ___ V DC",
   "answers": [
    "500",
    "500v"
   ],
   "why": "230 V circuits are tested at 500 V DC.",
   "src": "302.pdf (Domestic Electrical Installer course) p150; 99.pdf (EAL Initial Verification slides) p156",
   "explain": {
    "what": "The IR test voltage depends on the circuit's voltage.",
    "why": "For circuits up to 500 V (your 230 V and 400 V circuits) you test at 500 V DC. 250 V is only for SELV and PELV.",
    "how": "Check the setting on your multifunction tester before you press the button, and write 500 in column 23.",
    "where": "Column 23 of the Schedule of Test Results (302.pdf p150; course slides 99.pdf p156)"
   },
   "scene": "Your tester is set to 250 V for IR on a 230 V socket circuit.",
   "form": {
    "doc": "EIC",
    "page": 5,
    "where": "Schedule of Test Results",
    "box": "column 23: Insulation resistance, Test voltage (V)"
   }
  },
  {
   "type": "choice",
   "q": "Does it pass?",
   "options": [
    "Yes, it's above 0.5 MΩ",
    "No, under 1.0 MΩ: stop work",
    "Yes, anything over zero",
    "Only on a periodic"
   ],
   "answer": 1,
   "why": "More than 1.0 MΩ is needed at 500 V DC.",
   "src": "99.pdf (EAL Initial Verification slides) p156",
   "explain": {
    "what": "At 500 V DC the minimum is 1.0 MΩ for 230 V circuits.",
    "why": "0.6 MΩ is below 1.0 MΩ, so it fails. 0.5 MΩ is the SELV/PELV minimum at 250 V, which doesn't apply here.",
    "how": "Stop work, then find and fix the fault.",
    "where": "IR at the board (course slides 99.pdf p156)"
   },
   "scene": "IR on a 230 V circuit at 500 V DC: line to earth reads 0.6 MΩ."
  },
  {
   "type": "order",
   "q": "Put what you do next in order.",
   "steps": [
    "Stop work",
    "Replace the damaged cable",
    "Re-inspect",
    "Re-test continuity",
    "Re-test insulation resistance"
   ],
   "why": "Fix it, then go over the earlier tests again, because the repair disturbed the circuit.",
   "src": "99.pdf (EAL Initial Verification slides) p156",
   "explain": {
    "what": "This is the course's answer for an IR reading under 1 MΩ.",
    "why": "The repair means new terminations, so you re-inspect and re-prove continuity before checking IR again. Only once IR is over 1 MΩ do you carry on.",
    "how": "Stop, fix, look, continuity, IR.",
    "where": "On the faulty circuit (course slides 99.pdf p156)"
   },
   "scene": "You find a nicked cable is giving 0.4 MΩ line to earth."
  },
  {
   "type": "choice",
   "q": "What should you do?",
   "options": [
    "Accept it: it's over the 1.0 MΩ minimum",
    "Look into it: new cable should be higher",
    "Code it C1 and fail the circuit",
    "Retest at 250 V DC to confirm it"
   ],
   "answer": 1,
   "why": "1.0 MΩ is the minimum, but new cable should read much higher.",
   "src": "302.pdf (Domestic Electrical Installer course) p150",
   "explain": {
    "what": "The course IR table says readings on a NEW installation should be much higher than the minimum, and flags under 2.0 MΩ for further investigation.",
    "why": "1.5 MΩ technically clears 1.0 MΩ, but on brand-new cable it suggests something isn't right. C1 is an EICR code, not for new work, and 250 V is the wrong voltage.",
    "how": "Split the circuit down or check the accessories to see where the leakage is.",
    "where": "The circuit on the board (302.pdf p150)"
   },
   "scene": "Brand-new installation. IR on one circuit reads 1.5 MΩ."
  },
  {
   "type": "match",
   "q": "Match the circuit to its IR test voltage and minimum.",
   "pairs": [
    [
     "SELV and PELV",
     "250 V DC, 0.5 MΩ"
    ],
    [
     "Up to 500 V (230/400 V circuits)",
     "500 V DC, 1.0 MΩ"
    ],
    [
     "Above 500 V",
     "1000 V DC, 1.0 MΩ"
    ]
   ],
   "why": "Higher voltage circuits are tested at higher voltage.",
   "src": "302.pdf (Domestic Electrical Installer course) p150",
   "explain": {
    "what": "The IR table on the course gives three rows.",
    "why": "SELV and PELV (extra-low voltage) are tested gently at 250 V DC with a 0.5 MΩ minimum. Normal circuits up to 500 V get 500 V DC and 1.0 MΩ. Above 500 V it's 1000 V DC and 1.0 MΩ.",
    "how": "Set the tester to match the circuit before each IR test.",
    "where": "Column 23 test voltage on the schedule (302.pdf p150)"
   },
   "scene": "The board has a 12 V SELV lighting circuit as well as the normal 230 V circuits."
  },
  {
   "type": "choice",
   "q": "Why must all the switches be on?",
   "options": [
    "So all the cable gets tested",
    "So the RCD stays in",
    "To discharge the cable",
    "So the lamps stay lit"
   ],
   "answer": 0,
   "why": "A switch left off leaves the cable beyond it out of the test.",
   "src": "99.pdf (EAL Initial Verification slides) p126",
   "explain": {
    "what": "The IR slides say all switches in the 'on' position.",
    "why": "An open switch breaks the circuit, so the switch wire and everything after it wouldn't see the test voltage. The circuit is dead, so nothing lights up anyway.",
    "how": "Go round and switch every switch on before you start the IR tests.",
    "where": "Light switches on the circuit (course slides 99.pdf p126)"
   },
   "scene": "Two-way lighting circuit. One switch is off."
  },
  {
   "type": "choice",
   "q": "Where do you note it on the schedule?",
   "options": [
    "Remarks, column 31",
    "Column 26, polarity",
    "Column 22, R2",
    "Nowhere, just skip it"
   ],
   "answer": 0,
   "why": "Column 31 asks for circuits or equipment vulnerable to damage when testing.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p5",
   "explain": {
    "what": "The Schedule of Test Results has a Remarks column (31) that asks you to include details of circuits and/or installed equipment vulnerable to damage when testing.",
    "why": "If something that could be damaged by the test voltage stays connected, the next tester needs to know. Polarity and R2 columns are for other results.",
    "how": "Write which circuit and what equipment, and what you did about it, in column 31 on that circuit's row.",
    "where": "EIC page 5, Schedule of Test Results, Remarks (column 31)"
   },
   "scene": "A circuit feeds fixed equipment that could be damaged by the test voltage and you can't disconnect it.",
   "form": {
    "doc": "EIC",
    "page": 5,
    "where": "Schedule of Test Results",
    "box": "column 31: Remarks: circuits and/or installed equipment vulnerable to damage when testing"
   }
  },
  {
   "type": "match",
   "q": "Match each result to its column.",
   "pairs": [
    [
     "Test voltage (500 V)",
     "Column 23"
    ],
    [
     "Line to neutral reading",
     "Column 24, Live–Live"
    ],
    [
     "Line to earth reading",
     "Column 25, Live–Earth"
    ]
   ],
   "why": "IR has three columns: test voltage, Live–Live and Live–Earth.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p5",
   "explain": {
    "what": "The insulation resistance group on the schedule is columns 23 to 25.",
    "why": "23 is the test voltage you used, 24 is between live conductors (L–N), 25 is live conductors to earth.",
    "how": "Fill all three for every circuit you test.",
    "where": "EIC page 5, Schedule of Test Results, Insulation resistance"
   },
   "scene": "IR done on a radial: 500 V DC, L–N over 200 MΩ, L–E over 200 MΩ.",
   "form": {
    "doc": "EIC",
    "page": 5,
    "where": "Schedule of Test Results",
    "box": "columns 23 Test voltage, 24 Live - Live, 25 Live - Earth"
   }
  },
  {
   "type": "choice",
   "q": "What code goes on the EICR?",
   "options": [
    "C1",
    "C2",
    "C3",
    "FI"
   ],
   "answer": 1,
   "why": "Under 1 MΩ between live conductors and earth, all circuits connected, is C2.",
   "src": "49.pdf (EAL Condition Reporting slides) p43",
   "explain": {
    "what": "The course lists 'insulation resistance of less than 1 MΩ between live conductors and earth when measured at the consumer unit with all final circuits connected' as C2.",
    "why": "C2 is potentially dangerous and makes the report unsatisfactory. C1 is for danger present now, such as exposed live parts.",
    "how": "Record the reading and the C2 observation, then split the circuits to find which one is low.",
    "where": "EICR observations (course slides 49.pdf p43)"
   },
   "scene": "L3 Periodic. IR at the consumer unit with all final circuits connected: 0.8 MΩ live conductors to earth."
  },
  {
   "type": "choice",
   "q": "What goes on the report?",
   "options": [
    "Test anyway, risk the kit",
    "Record it as a limitation",
    "Leave the circuit off it",
    "Code it C2"
   ],
   "answer": 1,
   "why": "Not testing between live conductors because of connected equipment is a limitation.",
   "src": "49.pdf (EAL Condition Reporting slides) p17",
   "explain": {
    "what": "Limitations are agreed restrictions on what you test, set with the client before you start.",
    "why": "The course's own example is not testing IR between live conductors because of current-using equipment. It isn't a fault, so it isn't coded, and the circuit still goes on the report.",
    "how": "Agree it with the client, then write it in the limitations section of the EICR.",
    "where": "EICR Section D, extent and limitations (course slides 49.pdf p17)"
   },
   "scene": "L3 Periodic. A circuit feeds fixed equipment you can't disconnect, so you agree not to test IR between live conductors."
  },
  {
   "type": "choice",
   "q": "What does this reading mean?",
   "options": [
    "Very good insulation: pass",
    "A dead short: fail",
    "The tester isn't connected",
    "Test again at 250 V"
   ],
   "answer": 0,
   "why": "A very high reading means very little leakage: well above the 1 MΩ minimum.",
   "src": "99.pdf (EAL Initial Verification slides) p156; 302.pdf (Domestic Electrical Installer course) p150",
   "explain": {
    "what": "Insulation resistance is the opposite way round to continuity: the higher, the better.",
    "why": "Over 200 MΩ is far above the 1 MΩ minimum and the 2 MΩ point where new work needs a look. A dead short would read close to zero.",
    "how": "Write the reading as shown (for example >200) in the right column.",
    "where": "Columns 24 and 25 of the schedule (course slides 99.pdf p156; 302.pdf p150)"
   },
   "scene": "New socket circuit at 500 V DC. Line to earth reads over 200 MΩ."
  }
 ]
});
