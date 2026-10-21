// DRAFT lesson (v2) written from Tom's Access Training PDFs and the IET A4:2026 forms. Waiting for Checker + Tom's approval.
window.LESSONS = window.LESSONS || [];
window.LESSONS.push({
 "id": "a2-06",
 "topic": "dead-tests",
 "title": "Polarity",
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
  },
  {
   "file": "302.pdf (Domestic Electrical Installer course)",
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
  "verdict": "pass",
  "notes": "Polarity rules, live polarity readings and the 'no X on an EIC' rule all match the slides and the A4 form."
 },
 "approved": null,
 "intro": {
  "what": "Polarity means line is where line should be: every fuse and single-pole switch or device is in the line conductor only, the centre contact of bayonet and Edison screw lampholders is on line with the outer or screw contact on neutral, and sockets and accessories are wired correctly.",
  "why": "A switch or fuse in the neutral leaves the fitting live even when it's switched off. On an Edison screw lampholder, line on the screw thread puts a live part where fingers go.",
  "how": [
   "Do it dead, usually during the short lead (R1+R2) continuity test.",
   "With line linked to CPC at the board, test line to CPC at each point.",
   "Operate each switch: the reading should come and go.",
   "At sockets, a reading between the line and CPC terminals proves them.",
   "On a ring, steps 2 and 3 already prove polarity.",
   "Later, check supply polarity live: L–N 230 V, L–E 230 V, N–E 0 V."
  ],
  "where": "At every switch, light point, lampholder and socket on the board. Polarity is column 26 of the Schedule of Test Results; on an EIC it can't be an X, because incorrect polarity can't be certified.",
  "reason": "Wrong polarity is fixed before you sign, never written down as an X on an EIC. If you find it, put it right and re-test.",
  "numbers": [
   "Live supply polarity: L–N 230 V, L–E 230 V, N–E 0 V"
  ]
 },
 "questions": [
  {
   "type": "choice",
   "q": "Which conductor must a single-pole switch or fuse be in?",
   "options": [
    "Neutral",
    "Line only",
    "CPC",
    "Either, it doesn't matter"
   ],
   "answer": 1,
   "why": "Single-pole devices for protection or switching go in the line conductor only.",
   "src": "99.pdf (EAL Initial Verification slides) p54; 99.pdf (EAL Initial Verification slides) p129",
   "explain": {
    "what": "A single-pole device only breaks one conductor, so it has to be the one that's dangerous.",
    "why": "Switching or fusing the neutral would leave line connected to the fitting or appliance all the time. That's why polarity is checked.",
    "how": "At every switch and fused spur, check the line is what's being broken.",
    "where": "Switches, fused spurs and breakers on the board (course slides 99.pdf p54, p129)"
   },
   "scene": "Inspecting the lighting circuit on the board before you test."
  },
  {
   "type": "choice",
   "q": "What's the danger?",
   "options": [
    "None, the lamp still goes off",
    "The fitting stays live when off",
    "The RCD won't trip on a fault",
    "It lowers the IR reading"
   ],
   "answer": 1,
   "why": "A switch in the neutral leaves line connected to the fitting.",
   "src": "99.pdf (EAL Initial Verification slides) p54",
   "explain": {
    "what": "The lamp goes out either way, so a switch in the neutral looks like it's working.",
    "why": "But line is still at the fitting, so anyone changing the lamp or working on the fitting with the switch off can get a shock.",
    "how": "Swap the connections so the switch breaks the line, then re-test.",
    "where": "Switch and ceiling rose (course slides 99.pdf p54)"
   },
   "scene": "During the polarity check you find a single-pole light switch wired in the neutral."
  },
  {
   "type": "choice",
   "q": "On an Edison screw lampholder, the outer screw contact goes to…",
   "options": [
    "Line",
    "Neutral",
    "Earth",
    "Nothing"
   ],
   "answer": 1,
   "why": "The screw thread is easy to touch, so it goes to neutral.",
   "src": "99.pdf (EAL Initial Verification slides) p129",
   "explain": {
    "what": "The polarity rule for centre-contact bayonet and Edison screw lampholders: the outer or screw contact is on the neutral, the centre contact on line.",
    "why": "The thread is the part you can touch while screwing a lamp in, so it must not be line. (E14 and E27 lampholders to BS EN 60238 are the exception the slide mentions.)",
    "how": "At an ES lampholder, check line goes to the centre terminal and neutral to the screw.",
    "where": "Lampholders on the lighting circuit (course slides 99.pdf p129)"
   },
   "scene": "Lighting circuit with an Edison screw (ES) pendant lampholder."
  },
  {
   "type": "choice",
   "q": "Is this lampholder wired correctly?",
   "options": [
    "Yes, the centre is the neutral",
    "No: the outer screw should be neutral",
    "No: the screw should go to earth",
    "Only with an LED lamp fitted"
   ],
   "answer": 1,
   "why": "Line should be on the centre contact, neutral on the screw.",
   "src": "99.pdf (EAL Initial Verification slides) p129",
   "explain": {
    "what": "This lampholder is wired the wrong way round.",
    "why": "With line on the screw thread, the part your fingers touch when changing a lamp is live. The type of lamp makes no difference.",
    "how": "Swap the two conductors at the lampholder and re-test.",
    "where": "ES lampholder on the lighting circuit (course slides 99.pdf p129)"
   },
   "scene": "ES lampholder: centre contact on neutral, outer screw contact on line."
  },
  {
   "type": "choice",
   "q": "What has that proved?",
   "options": [
    "The switch is in the line and works",
    "The switch is in the neutral",
    "The CPC is joined to the neutral",
    "The lamp is the right wattage"
   ],
   "answer": 0,
   "why": "With line linked to CPC, only a switch in the line can break the reading.",
   "src": "99.pdf (EAL Initial Verification slides) p97",
   "explain": {
    "what": "The short lead test can prove polarity and switch function as well as continuity.",
    "why": "Line is linked to the CPC at the board. If operating the switch makes the reading come and go, the switch must be in the line conductor and working.",
    "how": "At each light, hold the probes on switched line and CPC and have the switch operated.",
    "where": "Ceiling rose and switch (course slides 99.pdf p97)"
   },
   "scene": "Short lead R1+R2 on a lighting circuit. At the ceiling rose the reading disappears when the switch goes off and returns when it goes on."
  },
  {
   "type": "choice",
   "q": "Is polarity proved on this radial?",
   "options": [
    "No, polarity is a live test only",
    "Yes, that test can prove it",
    "Only for the CPC terminal",
    "Only with the long lead"
   ],
   "answer": 1,
   "why": "A reading line to CPC at the right terminals of each socket shows they're connected right.",
   "src": "99.pdf (EAL Initial Verification slides) p130",
   "explain": {
    "what": "The course says polarity in a radial may have been proved by the short lead test.",
    "why": "With line linked to CPC at the board, you only get a reading between the line and CPC terminals if line is really in the line terminal. Dead polarity is a dead test; supply polarity is the live one.",
    "how": "Tell the assessor how you proved it, and tick column 26.",
    "where": "Every socket on the radial (course slides 99.pdf p130)"
   },
   "scene": "Radial socket circuit. You did the short lead R1+R2 test at every socket. The assessor asks if polarity is proved."
  },
  {
   "type": "choice",
   "q": "Is polarity proved on the ring?",
   "options": [
    "Yes: steps 2 and 3 prove it",
    "No, test each socket again",
    "Only at the first socket",
    "Only once it's live"
   ],
   "answer": 0,
   "why": "All three ring steps completed proves the ring's polarity.",
   "src": "99.pdf (EAL Initial Verification slides) p130",
   "explain": {
    "what": "The course says polarity in a ring final has already been proved if all three stages of the ring test were completed.",
    "why": "Step 2 shows the CPC is in the right place, step 3 shows line and neutral are; together that covers every socket.",
    "how": "No extra test needed: tick polarity for the ring in column 26.",
    "where": "Every socket on the ring (course slides 99.pdf p112-113, p130)"
   },
   "scene": "Ring final: steps 1, 2 and 3 all done, every socket matched your sums."
  },
  {
   "type": "choice",
   "q": "Can you put an X in the polarity column?",
   "options": [
    "Yes, and add a remark",
    "No: fix it, re-test, then tick",
    "Yes, if the client agrees",
    "Only on the Minor Works"
   ],
   "answer": 1,
   "why": "An X for incorrect polarity can't go on a schedule issued with an EIC.",
   "src": "EIC form (IET BS 7671:2018+A4:2026) p5",
   "explain": {
    "what": "Column 26 on the Schedule of Test Results is Polarity.",
    "why": "The form's own note says an 'X', denoting incorrect polarity, cannot be entered on the schedule when it's issued with an Electrical Installation Certificate. You can't certify new work that's wired wrong.",
    "how": "Put the fault right, re-test, then tick column 26.",
    "where": "EIC page 5, Schedule of Test Results, column 26 (Polarity)"
   },
   "scene": "Initial verification (EIC). One socket on the radial has line and neutral swapped.",
   "form": {
    "doc": "EIC",
    "page": 5,
    "where": "Schedule of Test Results",
    "box": "column 26: Polarity"
   }
  },
  {
   "type": "fill",
   "q": "Live supply polarity check: N–E should read ___ V",
   "answers": [
    "0",
    "0v",
    "zero"
   ],
   "why": "L–N 230 V, L–E 230 V, N–E 0 V.",
   "src": "302.pdf (Domestic Electrical Installer course) p153",
   "explain": {
    "what": "Supply polarity is the first live test, checked with a GS38 approved tester.",
    "why": "Correct is L–N 230 V, L–E 230 V and N–E 0 V. Any other readings could indicate incorrect polarity.",
    "how": "Test all three pairs and compare with 230 / 230 / 0.",
    "where": "At the origin or a socket, live (302.pdf p153)"
   },
   "scene": "Supply on. You're checking polarity live at the origin with a GS38 approved tester."
  },
  {
   "type": "choice",
   "q": "What does this tell you?",
   "options": [
    "All correct for a socket",
    "Line and neutral are swapped",
    "There is no earth",
    "The RCD has tripped"
   ],
   "answer": 1,
   "why": "Normal is L–E 230 V and N–E 0 V; here they're the other way round.",
   "src": "302.pdf (Domestic Electrical Installer course) p153",
   "explain": {
    "what": "On a correct supply, line is 230 V to both neutral and earth, and neutral is 0 V to earth.",
    "why": "Here L–E is 0 V and N–E is 230 V, so the conductor in the 'neutral' terminal is actually the line. That's incorrect polarity.",
    "how": "Isolate, correct the connections, then re-test dead and live.",
    "where": "At the socket, live (302.pdf p153)"
   },
   "scene": "Live polarity check at a socket: L–N 230 V, L–E 0 V, N–E 230 V."
  },
  {
   "type": "match",
   "q": "Match each item to what correct polarity looks like.",
   "pairs": [
    [
     "Single-pole light switch",
     "Breaks the line conductor"
    ],
    [
     "ES lampholder screw contact",
     "Connected to neutral"
    ],
    [
     "Socket-outlet",
     "L, N and E in the right terminals"
    ]
   ],
   "why": "Polarity covers switches and fuses, lampholders, and socket and accessory wiring.",
   "src": "99.pdf (EAL Initial Verification slides) p129",
   "explain": {
    "what": "The polarity slide lists three things to verify.",
    "why": "Single-pole devices in the line only; centre-contact bayonet and ES lampholders with the outer or screw contact on neutral; and wiring correctly connected in socket-outlets and similar accessories.",
    "how": "Run through all three at each point as you do your short lead test.",
    "where": "Switches, lampholders and sockets on the board (course slides 99.pdf p129)"
   },
   "scene": "The assessor asks what you're checking for when you check polarity."
  },
  {
   "type": "order",
   "q": "Put the dead polarity check on a lighting point in order.",
   "steps": [
    "Link line to CPC at the board",
    "Go to the light point",
    "Probe switched line and CPC",
    "Operate the switch: reading should come and go",
    "Tick polarity in column 26"
   ],
   "why": "Polarity is checked as part of the short lead test.",
   "src": "99.pdf (EAL Initial Verification slides) p96-97",
   "explain": {
    "what": "Dead polarity on a lighting circuit is done during the short lead R1+R2 test.",
    "why": "The link makes line and CPC one loop. At the light, the switch should make and break the reading, proving it's in the line. Then you record it.",
    "how": "Link, go, probe, switch, tick.",
    "where": "Board, light point and switch (course slides 99.pdf p96-97)"
   },
   "scene": "Lighting radial, isolated and proved dead. Leads nulled.",
   "form": {
    "doc": "EIC",
    "page": 5,
    "where": "Schedule of Test Results",
    "box": "column 26: Polarity"
   }
  },
  {
   "type": "choice",
   "q": "What code goes on the EICR?",
   "options": [
    "C1",
    "C2",
    "C3",
    "No code needed"
   ],
   "answer": 1,
   "why": "A protective device in the neutral conductor only is listed as C2.",
   "src": "49.pdf (EAL Condition Reporting slides) p41",
   "explain": {
    "what": "On a periodic, wrong polarity is coded rather than just fixed.",
    "why": "The course lists 'protective device installed in neutral conductor only' under C2, potentially dangerous: the circuit stays live when the device operates.",
    "how": "Record it as a C2 observation on the EICR.",
    "where": "EICR observations (course slides 49.pdf p41)"
   },
   "scene": "L3 Periodic. An old fuse board has a circuit with its fuse in the neutral only."
  }
 ]
});
