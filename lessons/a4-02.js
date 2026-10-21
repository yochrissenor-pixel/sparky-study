// DRAFT lesson (v2 rewrite) from the IET A4:2026 EIC form and Tom's Access Training PDFs. Waiting for Checker + Tom's approval.
window.LESSONS = window.LESSONS || [];
window.LESSONS.push({
 "id": "a4-02",
 "topic": "forms",
 "title": "EIC: supply and earthing boxes",
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
  "notes": "Every box and value matches the A4:2026 EIC Sections F and G and your slides; the Ze, Ipf and electrode sums are right."
 },
 "approved": null,
 "intro": {
  "what": "Sections F and G on EIC page 3 describe the supply and how the installation is earthed: earthing arrangement, live conductors, voltage and frequency, Ipf, Ze, the DNO fuse, means of earthing, earthing and bonding conductors, and the main switch.",
  "why": "These boxes tell the next person what the installation is connected to. Ze and Ipf are the starting point for every Zs check and for checking breakers can break the fault current.",
  "how": [
   "Find the earthing arrangement (ask the DNO, or look at the cut-out and earthing): TN-C-S, TN-S or TT.",
   "Get nominal voltage and frequency from the DNO: they can't be measured.",
   "Measure Ze at the origin with the earthing conductor off the MET, then put it back.",
   "Measure PSCC (L-N) and PEFC (L-E) and record the bigger one as Ipf, in kA.",
   "Copy the DNO cut-out fuse details into 'Supply Protective Device'.",
   "Check the earthing conductor and main bonding, record their sizes and tick each service that is bonded.",
   "Fill in the main switch, using the RCD side if the main switch is an RCD."
  ],
  "where": "EIC page 3, Section F (supply) and Section G (installation), just above the schedule of inspections.",
  "reason": "Ze is your own measurement with the earth disconnected, and Ipf is the bigger of the two fault currents: both get used in every later check.",
  "numbers": [
   "TN-C-S Ze ≤ 0.35 Ω",
   "TN-S Ze ≤ 0.8 Ω",
   "TT Ze < 200 Ω",
   "Ipf = bigger of PSCC and PEFC",
   "TT main switch: 100 mA S-type (time-delay) RCD"
  ]
 },
 "questions": [
  {
   "type": "choice",
   "q": "Which earthing arrangement box do you tick?",
   "options": [
    "TN-S",
    "TT",
    "TN-C-S (PME)",
    "TN-C-S (PNB)"
   ],
   "answer": 2,
   "why": "The DNO told you it is TN-C-S (PME), so tick that box.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p3; 99.pdf (EAL Initial Verification slides) p139",
   "explain": {
    "what": "The earthing arrangement is how the supply gives the installation its earth.",
    "why": "TN-C-S uses a combined neutral and earth (PEN) conductor, also called PME. TN-S takes its earth from the supply cable sheath; TT uses an earth rod.",
    "how": "Get it from the DNO or look at the cut-out and earthing, then tick one box only.",
    "where": "EIC form page 3, Section F, left column 'Earthing arrangements'. Also 99.pdf slide p139."
   },
   "scene": "Assessment board, origin. The supply is TN-C-S (PME), single-phase (one line, one neutral), 230 V, 50 Hz. ",
   "form": {
    "doc": "EIC",
    "page": 3,
    "where": "Section F: Supply characteristics and earthing arrangements",
    "box": "Earthing arrangements"
   }
  },
  {
   "type": "choice",
   "q": "Which earthing arrangement box do you tick?",
   "options": [
    "TN-S",
    "TN-C-S (PME)",
    "TT",
    "IT"
   ],
   "answer": 0,
   "why": "Earth from the sheath of the supply cable is TN-S.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p3; 99.pdf (EAL Initial Verification slides) p85; 99.pdf (EAL Initial Verification slides) p139",
   "explain": {
    "what": "TN-S means the supply company's earth comes through the metal sheath of the supply cable.",
    "why": "TN-C-S/PME uses the combined PEN conductor instead, and TT uses an earth electrode at the property.",
    "how": "Look at where the earthing conductor connects: to the cable sheath means TN-S.",
    "where": "EIC form page 3, Section F. Also 99.pdf slides p85 and p139."
   },
   "scene": "Job: an older house. The main earthing conductor is clamped to the metal sheath of the DNO's supply cable.",
   "form": {
    "doc": "EIC",
    "page": 3,
    "where": "Section F: Supply characteristics and earthing arrangements",
    "box": "Earthing arrangements"
   }
  },
  {
   "type": "choice",
   "q": "Which 'Number and Type of Live Conductors' box do you tick?",
   "options": [
    "AC 3-phase, 4-wire",
    "AC 2-phase, 3-wire",
    "AC 1-phase, 2-wire",
    "DC 2-wire"
   ],
   "answer": 2,
   "why": "One line and one neutral on an AC supply is 1-phase, 2-wire.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p3",
   "explain": {
    "what": "This box describes how many live conductors the supply has.",
    "why": "A normal house supply has one line and one neutral: that is two wires on one phase. 3-phase, 4-wire would be three lines plus a neutral.",
    "how": "Tick AC, then tick the line that matches the number of phases and wires you have.",
    "where": "EIC form page 3, Section F, 'Number and Type of Live Conductors'."
   },
   "scene": "Assessment board, origin. The supply is TN-C-S (PME), single-phase (one line, one neutral), 230 V, 50 Hz. ",
   "form": {
    "doc": "EIC",
    "page": 3,
    "where": "Section F: Supply characteristics and earthing arrangements",
    "box": "Number and Type of Live Conductors"
   }
  },
  {
   "type": "choice",
   "q": "Nominal voltage and frequency are marked (1) on the form. What does (1) mean?",
   "options": [
    "By measurement only",
    "By calculation",
    "By enquiry",
    "Leave blank on domestic jobs"
   ],
   "answer": 2,
   "why": "The form's note says (1) = by enquiry: you get these from the DNO.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p3; 99.pdf (EAL Initial Verification slides) p48",
   "explain": {
    "what": "Nominal voltage (U/U0) and nominal frequency are the supply's declared values.",
    "why": "Your course says these are the two values that can't be measured and can only be found by asking the DNO. Ze and Ipf are different: they can be measured.",
    "how": "Use the figures the DNO gives (e.g. 230 V, 50 Hz).",
    "where": "EIC form page 3, Section F, note under 'Nature of Supply Parameters'. Also 99.pdf slide p48."
   },
   "form": {
    "doc": "EIC",
    "page": 3,
    "where": "Section F: Supply characteristics and earthing arrangements",
    "box": "Nominal voltage, U/U0 (1) … V / Nominal frequency, f (1) … Hz"
   }
  },
  {
   "type": "choice",
   "q": "Ipf and Ze are marked (2). What does (2) mean?",
   "options": [
    "By enquiry only",
    "By enquiry or by measurement",
    "By calculation from cable size",
    "Copied from the last EICR"
   ],
   "answer": 1,
   "why": "The form's note says (2) = by enquiry or by measurement.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p3; 99.pdf (EAL Initial Verification slides) p47",
   "explain": {
    "what": "Prospective fault current (Ipf) and external earth fault loop impedance (Ze) describe the supply at the origin.",
    "why": "Unlike voltage and frequency, these can be measured with your tester, or you can get them from the DNO.",
    "how": "On the assessment board you normally measure them at the origin and write your readings in.",
    "where": "EIC form page 3, Section F, note '(2) by enquiry or by measurement'. Also 99.pdf slide p47."
   },
   "form": {
    "doc": "EIC",
    "page": 3,
    "where": "Section F: Supply characteristics and earthing arrangements",
    "box": "Prospective fault current, Ipf (2) / External earth fault loop impedance, Ze (2)"
   }
  },
  {
   "type": "order",
   "q": "Put the Ze test at the origin in order.",
   "steps": [
    "Isolate the circuits, keeping the supply to the board",
    "Remove the earthing conductor from the MET",
    "Test line to the earthing conductor and note Ze",
    "Reconnect the earthing conductor to the MET"
   ],
   "why": "Disconnecting the earthing conductor removes parallel earth paths, so you measure only the supply side.",
   "src": "99.pdf (EAL Initial Verification slides) p138",
   "explain": {
    "what": "Ze is the earth fault loop impedance outside the installation, measured at the origin.",
    "why": "If the earthing conductor stays on the MET, bonding and pipework give parallel paths and Ze reads low. Forgetting to reconnect it leaves the installation without an earth.",
    "how": "Do it carefully on the board, and say out loud that you are reconnecting the earth before you move on.",
    "where": "99.pdf slide p138 (Ze at the origin). The reading goes in EIC page 3, Section F."
   },
   "scene": "Assessment board, origin. The supply is TN-C-S (PME), single-phase (one line, one neutral), 230 V, 50 Hz. You are about to measure Ze for Section F."
  },
  {
   "type": "fill",
   "q": "Fill in this box. Ze = ___ Ω",
   "answers": [
    "0.28",
    "0.28Ω",
    "0.28 ohms"
   ],
   "why": "Write the Ze you measured at the origin.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p3; 99.pdf (EAL Initial Verification slides) p138-139",
   "explain": {
    "what": "Ze is the part of the earth fault loop outside the installation (the supply side).",
    "why": "You measured 0.28 Ω, which is within the 0.35 Ω typical maximum for TN-C-S on your course slides.",
    "how": "Write the reading straight into Section F; it is also your starting point for checking every Zs.",
    "where": "EIC form page 3, Section F, 'External earth fault loop impedance, Ze'. Also 99.pdf slides p138-139."
   },
   "scene": "Assessment board, origin. The supply is TN-C-S (PME), single-phase (one line, one neutral), 230 V, 50 Hz. With the earthing conductor off the MET you measure Ze = 0.28 Ω.",
   "form": {
    "doc": "EIC",
    "page": 3,
    "where": "Section F: Supply characteristics and earthing arrangements",
    "box": "External earth fault loop impedance, Ze (2) … Ω"
   }
  },
  {
   "type": "fill",
   "q": "Fill in this box. Ipf = ___ kA",
   "answers": [
    "1.6",
    "1.6kA",
    "1.60"
   ],
   "why": "Record the greater of PSCC and PEFC: 1.6 kA.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p6; 99.pdf (EAL Initial Verification slides) p140; 99.pdf (EAL Initial Verification slides) p143",
   "explain": {
    "what": "Ipf is the biggest fault current that could flow at the origin.",
    "why": "The form notes and your slides say record the greater of the prospective short-circuit current and the prospective earth fault current, so 1.6 kA, not 1.1 kA.",
    "how": "Measure PSCC (L-N) and PEFC (L-E) at the origin, then write the bigger number in kA.",
    "where": "EIC form page 3, Section F; the rule is in the page 6 notes. Also 99.pdf slides p140 and p143."
   },
   "scene": "Assessment board, origin. The supply is TN-C-S (PME), single-phase (one line, one neutral), 230 V, 50 Hz. At the origin you measure PSCC = 1.6 kA and PEFC = 1.1 kA.",
   "form": {
    "doc": "EIC",
    "page": 3,
    "where": "Section F: Supply characteristics and earthing arrangements",
    "box": "Prospective fault current, Ipf (2) … kA"
   }
  },
  {
   "type": "fill",
   "q": "Fill in this box. Rated current = ___ A",
   "answers": [
    "100",
    "100A"
   ],
   "why": "The supply protective device is the DNO's cut-out fuse, marked 100 A.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p3; 99.pdf (EAL Initial Verification slides) p46",
   "explain": {
    "what": "'Supply Protective Device' is the DNO's fuse at the origin, not your main switch.",
    "why": "The rated current is the number marked on the cut-out fuse. Your consumer unit main switch goes in the separate 'Main switch' box in Section G.",
    "how": "Read the cut-out fuse marking (BS (EN) number, type, rating) and copy it in.",
    "where": "EIC form page 3, Section F, right-hand column 'Supply Protective Device'. Also 99.pdf slide p46 (type and rating of the device at the origin)."
   },
   "scene": "Assessment board, origin. The supply is TN-C-S (PME), single-phase (one line, one neutral), 230 V, 50 Hz. The DNO cut-out fuse is marked 100 A.",
   "form": {
    "doc": "EIC",
    "page": 3,
    "where": "Section F: Supply characteristics and earthing arrangements",
    "box": "Supply Protective Device: Rated current … A"
   }
  },
  {
   "type": "choice",
   "q": "Which 'Means of Earthing' box do you tick in Section G?",
   "options": [
    "Distributor's facility",
    "Installation earth electrode",
    "Both boxes, to cover both",
    "Neither: leave it blank on TT"
   ],
   "answer": 1,
   "why": "On a TT system the earth comes from your own electrode, so tick 'Installation earth electrode'.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p3; 99.pdf (EAL Initial Verification slides) p139",
   "explain": {
    "what": "'Means of Earthing' says where the installation actually gets its earth from.",
    "why": "'Distributor's facility' is an earth provided by the DNO (TN-S or TN-C-S). A TT system relies on an earth electrode at the property.",
    "how": "Tick 'Installation earth electrode' and then fill in the 'Details of Installation Earth Electrode' box (type, location, resistance). On TN systems that box is left, as it says 'where applicable'.",
    "where": "EIC form page 3, Section G, top left. Also 99.pdf slide p139."
   },
   "scene": "Job: a farm workshop. No earth is provided by the DNO; there is an earth rod outside. The system is TT.",
   "form": {
    "doc": "EIC",
    "page": 3,
    "where": "Section G: Particulars of installation referred to in the certificate",
    "box": "Means of Earthing"
   }
  },
  {
   "type": "fill",
   "q": "Fill in this box. Electrode resistance = ___ Ω",
   "answers": [
    "45",
    "45Ω",
    "45 ohms"
   ],
   "why": "Write the reading you got for the electrode: 45 Ω.",
   "src": "99.pdf (EAL Initial Verification slides) p137; EIC form (IET BS 7671:2018+A4:2026) p3",
   "explain": {
    "what": "The earth electrode box records the type, location and resistance of the installation's own earth electrode.",
    "why": "Your course's method uses an earth fault loop tester between line at the origin and the electrode, the same way as a Ze test. 45 Ω is well under the 200 Ω course limit for TT.",
    "how": "Switch off the supply before disconnecting the earthing conductor, test, reconnect, then write the type (rod), where it is, and the reading.",
    "where": "EIC form page 3, Section G, 'Details of Installation Earth Electrode'. Also 99.pdf slides p137 and p139."
   },
   "scene": "Job: the TT farm workshop. With the earthing conductor disconnected, your loop tester reads 45 Ω between line at the origin and the earth rod.",
   "form": {
    "doc": "EIC",
    "page": 3,
    "where": "Section G: Particulars of installation referred to in the certificate",
    "box": "Details of Installation Earth Electrode: Type … Location … Electrode resistance/impedance … Ω"
   }
  },
  {
   "type": "fill",
   "q": "Fill in this box. Earthing conductor csa = ___ mm²",
   "answers": [
    "16",
    "16mm2",
    "16mm²"
   ],
   "why": "The earthing conductor is the one from the supply earth to the MET: 16 mm².",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p3",
   "explain": {
    "what": "The earthing conductor connects the main earthing terminal (MET) to the means of earthing.",
    "why": "The 10 mm² cables go to the gas and water: those are main protective bonding conductors, which have their own line below.",
    "how": "Write material (copper) and csa, then tick 'Connection / continuity verified' once you have checked it.",
    "where": "EIC form page 3, Section G, 'Main Protective Conductors'."
   },
   "scene": "Assessment board: at the MET there is a 16 mm² copper conductor going to the DNO earth terminal, and two 10 mm² copper conductors going to the gas and water pipes.",
   "form": {
    "doc": "EIC",
    "page": 3,
    "where": "Section G: Particulars of installation referred to in the certificate",
    "box": "Main Protective Conductors: Earthing conductor  Material … csa … mm²"
   }
  },
  {
   "type": "choice",
   "q": "Which bonding boxes do you tick?",
   "options": [
    "Water and gas pipes",
    "Structural steel",
    "Oil pipes and lightning protection",
    "'To other': gas and water"
   ],
   "answer": 0,
   "why": "Tick a box for each service that is actually bonded.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p3",
   "explain": {
    "what": "The bonding tick boxes show which services and metalwork the main protective bonding goes to.",
    "why": "Only water and gas are bonded here. 'To other' is only for something not already listed.",
    "how": "Tick each box that applies; use 'To other  Specify' for anything not listed.",
    "where": "EIC form page 3, Section G, under 'Main protective bonding conductors'."
   },
   "scene": "Job: main bonding goes to the incoming water pipe and the gas pipe. There is no oil, no exposed structural steel and no lightning protection.",
   "form": {
    "doc": "EIC",
    "page": 3,
    "where": "Section G: Particulars of installation referred to in the certificate",
    "box": "Main protective bonding conductors: To water / gas / oil / structural steel / lightning protection / other"
   }
  },
  {
   "type": "fill",
   "q": "Fill in this box. Rated residual operating current (IΔn) = ___ mA",
   "answers": [
    "100",
    "100mA"
   ],
   "why": "It's an RCD main switch, so fill the 'If RCD main switch' side with 100 mA.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p3; 99.pdf (EAL Initial Verification slides) p86; 99.pdf (EAL Initial Verification slides) p149",
   "explain": {
    "what": "IΔn is the residual current the RCD is designed to trip at.",
    "why": "On a TT system your slides say the main switch is normally a 100 mA S-type (time-delay) RCD. The 'If overcurrent protective device' side is for a fuse or breaker main switch instead.",
    "how": "Copy IΔn from the device; also fill RCD type, rated time delay and the operating time you measured.",
    "where": "EIC form page 3, Section G, 'Main switch', right-hand part. Also 99.pdf slides p86 and p149."
   },
   "scene": "Job: TT house. The main switch in the board is a 100 mA S-type (time-delay) RCD.",
   "form": {
    "doc": "EIC",
    "page": 3,
    "where": "Section G: Particulars of installation referred to in the certificate",
    "box": "Main switch: If RCD main switch, Rated residual operating current (IΔn) … mA"
   }
  }
 ]
});
