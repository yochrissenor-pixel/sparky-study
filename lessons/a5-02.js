// DRAFT lesson (v2, Unit 5) written from Tom's course PDFs and the IET A4:2026 EICR form. Waiting for Checker + Tom's approval.
window.LESSONS = window.LESSONS || [];
window.LESSONS.push({
 "id": "a5-02",
 "topic": "periodic",
 "title": "Periodic testing on the day",
 "awards": [
  "L3 Periodic"
 ],
 "status": "draft",
 "unconfirmed": true,
 "note": "The B32 Zs values (1.37 Ω, × 0.8 = 1.1 Ω, and 1.1 × 1.08 = 1.19 Ω for a 30 °C room) come from your 2018-era course slides (49.pdf p65-66 and 33.pdf p50-54), not from A4:2026 tables, so check them in your current book. The slides also show half, 1 × and 5 × RCD tests, but the A4:2026 schedule records one RCD time, at the rated current; this lesson follows the form. The 1 MΩ insulation figure is from the older slides too.",
 "sources": [
  {
   "file": "33.pdf (BS 7671 18th Edition A2 course)",
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
   "file": "EICR form (IET BS 7671:2018+A4:2026)",
   "ref": "pages given on each question"
  }
 ],
 "checker": {
  "by": "Claude Checker",
  "date": "2026-10-12",
  "verdict": "unconfirmed",
  "notes": "All the sums check out (40 m, 1.1 Ω, 1.19 Ω, 12.0 V against 11.5 V) and match the slide methods. The B32 Zs values, the 1 MΩ code and the half/1×/5× RCD tests come from older slides, so check them against your current book; the RCD question follows the A4 form."
 },
 "approved": null,
 "intro": {
  "what": "On a periodic you inspect the installation (isolated) and carry out the tests you consider appropriate to confirm it is still safe. There is no fixed test order like on initial verification, and volt drop is checked by calculation.",
  "why": "The installation was verified when it was new and is now in use, so you are confirming it is safe for continued use. People may be in the building, so their safety and their equipment matter as much as yours.",
  "how": [
   "Ask permission to isolate, tell people, and think about alarms, lighting and computers",
   "Inspect with the installation isolated, looking for wear, heat and corrosion as well",
   "Dead tests: continuity (compare with old records), insulation resistance with equipment disconnected or noted",
   "Live tests: Ze, Zs compared with the corrected limit, RCD at its rated current",
   "Work out volt drop from R1+Rn × load × 1.2",
   "Record readings on the schedule of test results; anything wrong gets a code, not a repair"
  ],
  "where": "Results go on the schedule of test results (EICR page 5): polarity column 26, Zs column 27, RCD time column 28, remarks column 31.",
  "reason": "Never test with loads connected, and always compare measured Zs with the corrected (×0.8) limit, not the tabulated one.",
  "numbers": [
   "Measured Zs must be below tabulated max Zs × 0.8",
   "Slide example: B32 1.1 Ω, room at 30 °C: 1.1 × 1.08 = 1.19 Ω",
   "Volt drop = (R1+Rn) × load current × 1.2",
   "Volt drop at 230 V: power 5% = 11.5 V, lighting 3% = 6.9 V",
   "Circuit length (m) = measured Ω × 1000 ÷ mΩ per metre",
   "Insulation resistance under 1 MΩ, all circuits connected = C2 (slides)"
  ]
 },
 "questions": [
  {
   "type": "choice",
   "q": "Do you have to follow the initial verification test order on a periodic?",
   "options": [
    "No, you do the tests you consider appropriate",
    "Yes, exactly the same order as initial verification, every time",
    "Only on a three-phase installation",
    "Only on a TT installation"
   ],
   "answer": 0,
   "why": "It was verified when new and is in use; you are confirming it is safe for continued use.",
   "src": "49.pdf (EAL Condition Reporting slides) p61-62",
   "explain": {
    "what": "On initial verification the tests go in a set order. On a periodic the tests are 'those considered appropriate' by the person testing.",
    "why": "Your slides answer this exact question: no, because the installation already passed initial verification and was put into service.",
    "how": "Plan your tests around what you saw on the walk-around and what the client agreed, then record them.",
    "where": "49.pdf slides p61-62"
   }
  },
  {
   "type": "choice",
   "q": "The building is in use. How is the inspection carried out?",
   "options": [
    "With the installation isolated",
    "Live, as it is already in use",
    "Live, with the loads switched off",
    "Isolated only on three-phase"
   ],
   "answer": 0,
   "why": "Your slides say inspections must be done with the installation ISOLATED, even though it is already in use.",
   "src": "49.pdf (EAL Condition Reporting slides) p19",
   "explain": {
    "what": "The inspection part of an EICR means opening up accessories and the board to look inside.",
    "why": "Being in use doesn't make it safe to open up live. You isolate, as you would on initial verification.",
    "how": "Agree isolation times with the client first, then isolate safely before you take covers off.",
    "where": "49.pdf slide p19"
   }
  },
  {
   "type": "choice",
   "q": "What should you do before switching off?",
   "options": [
    "Ask permission and check what losing power affects",
    "Switch off quickly so the disruption is as short as possible",
    "Work live so nobody is disturbed",
    "Switch off and tell them afterwards"
   ],
   "answer": 0,
   "why": "Permission to isolate is needed first, and you must think about how losing power affects people.",
   "src": "99.pdf (EAL Initial Verification slides) p20",
   "explain": {
    "what": "On a periodic, people are often using the building while you test.",
    "why": "Switching off without asking could kill alarms, lighting or someone's work. Working live to avoid it is never the answer.",
    "how": "Ask, agree a time, and say out loud on the assessment that you would check what the power loss affects.",
    "where": "99.pdf slides p19-20 (safety of others and of yourself)"
   },
   "scene": "Periodic in an office. Staff are working at computers and the fire alarm panel is on the same board."
  },
  {
   "type": "match",
   "q": "Match the safety step to what it does for others.",
   "pairs": [
    [
     "Inform others",
     "People know testing is going on"
    ],
    [
     "Warning signs",
     "Nobody switches back on"
    ],
    [
     "Barriers",
     "Stop people entering the area"
    ],
    [
     "Temporary power or lighting",
     "Keeps fire alarms and emergency lighting going"
    ]
   ],
   "why": "These are the course's four ways of keeping others safe while you test.",
   "src": "99.pdf (EAL Initial Verification slides) p19",
   "explain": {
    "what": "'Safety of others' on your slides lists informing people, warning signs, barriers and temporary power or lighting.",
    "why": "On a periodic the building is occupied, so all four matter more than on a new installation.",
    "how": "Before you isolate, run through the four and say which you would use.",
    "where": "99.pdf slide p19"
   }
  },
  {
   "type": "choice",
   "q": "What is the right way to handle it?",
   "options": [
    "Agree it as a limitation and note it on the report",
    "Test it anyway at 500 V with the equipment still connected",
    "Code the circuit C2 without testing",
    "Leave the circuit off the report"
   ],
   "answer": 0,
   "why": "Your slides give 'not testing insulation resistance between live conductors due to current-using equipment' as an agreed limitation.",
   "src": "49.pdf (EAL Condition Reporting slides) p17; EICR form (IET BS 7671:2018+A4:2026) p5",
   "explain": {
    "what": "Insulation resistance testing can damage sensitive equipment, and you must never test with loads connected.",
    "why": "Testing anyway risks damaging the client's equipment; coding or leaving it off without testing isn't honest reporting.",
    "how": "Agree it with the client, write it in Section D, and note the vulnerable equipment in the Remarks column 31 on the test results.",
    "where": "EICR form page 2 Section D; page 5 column 31 (49.pdf slides p17 and p69)"
   },
   "scene": "A circuit feeds equipment that can't be unplugged, and the client won't allow it to be disconnected.",
   "form": {
    "doc": "EICR",
    "page": 5,
    "where": "Schedule of test results, column 31 Remarks",
    "box": "Include details of circuits, and/or installed equipment vulnerable to damage when testing"
   }
  },
  {
   "type": "choice",
   "q": "What code goes on the report?",
   "options": [
    "C2",
    "C1",
    "C3",
    "No code, it's a pass"
   ],
   "answer": 0,
   "why": "Insulation resistance under 1 MΩ between live conductors and earth, measured at the board with all circuits connected, is C2 on your slides.",
   "src": "49.pdf (EAL Condition Reporting slides) p43",
   "explain": {
    "what": "Low insulation resistance means current could be leaking to earth.",
    "why": "Nothing live can be touched, so it isn't C1, but it is potentially dangerous, so C2. On initial verification you'd stop and repair; on a periodic you report it.",
    "how": "Record the reading, code it C2 in Section K and, if you can, find which circuit is low.",
    "where": "49.pdf slide p43; 99.pdf slide p156 (1 MΩ minimum)"
   },
   "scene": "Insulation test at the consumer unit, all final circuits connected, live conductors to earth: 0.6 MΩ."
  },
  {
   "type": "fill",
   "q": "Roughly how long is the circuit? ___ m",
   "answers": [
    "40",
    "40.0",
    "39.98",
    "39.979"
   ],
   "why": "0.78 × 1000 ÷ 19.51 = 39.98, about 40 m.",
   "src": "49.pdf (EAL Condition Reporting slides) p63-64",
   "explain": {
    "what": "Working backwards from R1+R2 gives the circuit length, which lets you check a reading against the old records.",
    "why": "Length = measured ohms × 1000 ÷ milliohms per metre. For 2.5/1.5 twin and earth that is 7.41 + 12.1 = 19.51 mΩ/m.",
    "how": "0.78 × 1000 = 780; 780 ÷ 19.51 = 39.98 m. If the records say the circuit is 15 m long, something has changed.",
    "where": "49.pdf slides p63-64 (worked example 1.07 Ω gives 54.84 m)"
   },
   "scene": "Radial in 2.5/1.5 mm² twin and earth (19.51 mΩ/m for line plus CPC). You measure R1+R2 = 0.78 Ω."
  },
  {
   "type": "fill",
   "q": "What is the corrected limit you compare against? ___ Ω",
   "answers": [
    "1.1",
    "1.10",
    "1.096"
   ],
   "why": "1.37 × 0.8 = 1.096, about 1.1 Ω: the same value your periodic slides use for a B32.",
   "src": "99.pdf (EAL Initial Verification slides) p135; 49.pdf (EAL Condition Reporting slides) p65-66; 33.pdf (BS 7671 18th Edition A2 course) p50; 33.pdf (BS 7671 18th Edition A2 course) p54",
   "explain": {
    "what": "Tabulated maximum Zs values are at the cable's working temperature (70 °C). When you test there is no load, so the cable is cooler and reads lower.",
    "why": "To compare fairly you multiply the tabulated value by 0.8. Comparing with 1.37 Ω would let a circuit pass that is really too high.",
    "how": "1.37 × 0.8 = 1.096, round to 1.1 Ω. Your measured Zs must be below that.",
    "where": "99.pdf slide p135; 49.pdf slides p65-66; 33.pdf p50 and p54 (B32 needs 160 A: 230 × 0.95 ÷ 160 = 1.37 Ω)"
   },
   "scene": "Radial on a 32 A Type B breaker (B32). The tabulated maximum Zs is 1.37 Ω."
  },
  {
   "type": "choice",
   "q": "What does this reading mean?",
   "options": [
    "Too high: it won't disconnect in time, C2",
    "Fine: it is under the 1.37 Ω tabulated value",
    "Fine: Zs only matters on new work",
    "Too low: the breaker will trip early"
   ],
   "answer": 0,
   "why": "1.24 Ω is over the 1.1 Ω corrected limit, and your slides code Zs too high for the device as C2.",
   "src": "49.pdf (EAL Condition Reporting slides) p41; 49.pdf (EAL Condition Reporting slides) p65",
   "explain": {
    "what": "Measured Zs must be below the corrected limit (tabulated × 0.8), not the tabulated value.",
    "why": "1.24 Ω is under 1.37 Ω, which is the trap, but over 1.1 Ω. Too high an impedance means not enough fault current to trip the breaker in time.",
    "how": "Record 1.24 in column 27, code C2 and write it up in Section K.",
    "where": "EICR form page 5, column 27 (49.pdf slides p41 and p65)"
   },
   "scene": "Same B32 radial, corrected limit 1.1 Ω. At the furthest point you measure Zs = 1.24 Ω.",
   "form": {
    "doc": "EICR",
    "page": 5,
    "where": "Schedule of test results, column 27",
    "box": "Zs (Ω) Maximum measured"
   }
  },
  {
   "type": "fill",
   "q": "Using the slide's method, the limit becomes 1.1 × 1.08 = ___ Ω",
   "answers": [
    "1.19",
    "1.188"
   ],
   "why": "1.1 × 1.08 = 1.188, about 1.19 Ω.",
   "src": "49.pdf (EAL Condition Reporting slides) p66",
   "explain": {
    "what": "Your slides show an extra correction for a room much warmer than normal.",
    "why": "Warmer cable has higher resistance, so the slide raises the limit by × 1.08 for a 30 °C room.",
    "how": "1.1 × 1.08 = 1.188, round to 1.19 Ω, then compare your measured Zs with that.",
    "where": "49.pdf slide p66"
   },
   "scene": "The B32 circuit runs through a plant room at 30 °C. The slide's corrected limit at normal temperature is 1.1 Ω."
  },
  {
   "type": "choice",
   "q": "Why can't you just measure volt drop directly on a periodic?",
   "options": [
    "No load current flows and the supply voltage varies",
    "Your tester can't read voltage on site",
    "Volt drop doesn't matter on installations already in use",
    "The client won't allow it"
   ],
   "answer": 0,
   "why": "The supply fluctuates, no current flows while you test, and cable resistance rises when it heats up under load.",
   "src": "49.pdf (EAL Condition Reporting slides) p69",
   "explain": {
    "what": "Volt drop is how much voltage is lost along the cable when the load is running.",
    "why": "You never test with the load connected, so no current flows, and you can't read supply and load voltage at the same moment.",
    "how": "Calculate it instead: measured R1+Rn × load current × 1.2 for heat.",
    "where": "49.pdf slides p69-70; 99.pdf slide p79 (volt drop verification is for periodic only)"
   }
  },
  {
   "type": "choice",
   "q": "What is the volt drop, and does it pass?",
   "options": [
    "12.0 V, over the 11.5 V limit",
    "10.0 V, under the 11.5 V limit",
    "12.0 V, under the 13.8 V limit",
    "6.9 V, right on the limit"
   ],
   "answer": 0,
   "why": "0.50 × 20 × 1.2 = 12.0 V, which is more than the 11.5 V (5%) allowed for power.",
   "src": "49.pdf (EAL Condition Reporting slides) p68; 49.pdf (EAL Condition Reporting slides) p71",
   "explain": {
    "what": "Volt drop = R1+Rn × load current × 1.2. The 1.2 allows for the cable heating up under load.",
    "why": "Forgetting the × 1.2 gives 10.0 V, which looks like a pass. With it, 12.0 V is over 11.5 V.",
    "how": "0.50 × 20 = 10; 10 × 1.2 = 12.0 V. Power limit 230 × 0.05 = 11.5 V, so it fails.",
    "where": "49.pdf slides p68 and p71"
   },
   "scene": "Power radial: R1+Rn = 0.50 Ω, load current 20 A."
  },
  {
   "type": "choice",
   "q": "What goes in the polarity column?",
   "options": [
    "An X, and the fault is written up in Section K",
    "Nothing, because polarity isn't tested on a periodic inspection",
    "A tick, as long as the socket still works",
    "N/A, because it's an existing circuit"
   ],
   "answer": 0,
   "why": "On an EICR you can record incorrect polarity with an X; the form only bans an X when the schedule goes with an EIC.",
   "src": "EICR form (IET BS 7671:2018+A4:2026) p5",
   "explain": {
    "what": "Column 26 is polarity. The form's footnote says an X for incorrect polarity can't be entered when the schedule is issued with an Electrical Installation Certificate.",
    "why": "New work must be right before it is certified, but a periodic reports what is actually there, so the X is allowed.",
    "how": "Put X in column 26 for that circuit and describe the fault and where it is in Section K.",
    "where": "EICR form page 5, column 26 and footnote #"
   },
   "scene": "On a periodic you find line and neutral swapped at one socket-outlet.",
   "form": {
    "doc": "EICR",
    "page": 5,
    "where": "Schedule of test results, column 26",
    "box": "Polarity"
   }
  },
  {
   "type": "choice",
   "q": "What RCD time does the A4 form ask you to record?",
   "options": [
    "The trip time at 30 mA (1 × IΔn)",
    "The time at 15 mA (half IΔn)",
    "The time at 150 mA (5 × IΔn)",
    "All three times, added together into one figure"
   ],
   "answer": 0,
   "why": "The A4:2026 schedule records one RCD time, from a test at the RCD's rated current.",
   "src": "EICR form (IET BS 7671:2018+A4:2026) p5; 99.pdf (EAL Initial Verification slides) p147",
   "explain": {
    "what": "Column 28 is RCD disconnection time. The footnote says RCD effectiveness is verified with an AC test at the rated residual operating current (IΔn).",
    "why": "Your older slides show half, 1 × and 5 × tests; the A4 form only asks for the 1 × time, so check with your tutor what the assessor wants you to do.",
    "how": "Test at 30 mA and record the time in ms in column 28; also check the test button works.",
    "where": "EICR form page 5, column 28 and footnote ** (99.pdf slide p147)"
   },
   "scene": "A circuit is protected by a 30 mA RCD.",
   "form": {
    "doc": "EICR",
    "page": 5,
    "where": "Schedule of test results, column 28",
    "box": "RCD Disconnection time (ms)"
   }
  }
 ]
});
