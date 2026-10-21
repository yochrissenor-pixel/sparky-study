// DRAFT lesson (v2, Unit 1) written from Tom's Access Training PDFs and the IET A4:2026 forms. Waiting for Checker + Tom's approval.
window.LESSONS = window.LESSONS || [];
window.LESSONS.push({
 "id": "a1-02",
 "topic": "isolation",
 "title": "Safe isolation, step by step",
 "awards": [
  "L2 Fundamental",
  "L3 Initial Verification",
  "L3 Periodic"
 ],
 "status": "draft",
 "unconfirmed": true,
 "note": "Your two course files put locking off at different points. 99.pdf (p25) proves the indicator, switches off, tests dead, THEN locks off and posts signs. 302.pdf (p138) switches off and locks off FIRST, then proves, tests and re-proves. The questions here avoid that step order. Ask your tutor which order the assessor expects. Also: the slides don't spell out what to do if the circuit is still live after you switch off; the answer here (stop, don't touch it, find the right isolation point and start again) follows from the steps, so check it with your tutor.",
 "sources": [
  {
   "file": "302.pdf (Domestic Electrical Installer course)",
   "ref": "pages given on each question"
  },
  {
   "file": "99.pdf (EAL Initial Verification slides)",
   "ref": "pages given on each question"
  }
 ],
 "checker": {
  "by": "Claude Checker",
  "date": "2026-10-12",
  "verdict": "unconfirmed",
  "notes": "The steps are right, but your two course files put locking off in different places and the slides don't say what to do if the circuit is still live, so the note asks you to confirm both with your tutor."
 },
 "approved": null,
 "intro": {
  "what": "Safe isolation is the routine that proves a circuit is dead, and keeps it dead, before you touch it.",
  "why": "Switching off on its own proves nothing: you might have the wrong device, or someone might switch it back on. The routine makes sure the circuit is isolated and can't be switched back on by accident.",
  "how": [
   "Ask permission to isolate, and think about who loses power (alarms, lighting)",
   "Identify the right isolation point and switch off",
   "Lock off, keep the only key on you, and post a warning sign (see the note: your two course files put this step in different places)",
   "Check your voltage indicator and leads (GS38) and prove it on the proving unit",
   "Test every pair, watching the indicator each time: L-N, L-E, N-E (10 tests on three-phase)",
   "Re-prove the indicator on the proving unit",
   "Only then start work"
  ],
  "where": "At the consumer unit or distribution board on the test board (the isolation point), then at the circuit's terminals where you test.",
  "reason": "Prove, test, re-prove. A tester that fails mid-test shows 'dead' on a live circuit, and re-proving is the only thing that catches it.",
  "numbers": [
   "Single-phase: 3 tests (L-N, L-E, N-E)",
   "Three-phase: 10 tests",
   "Dead = 0 V on every test"
  ]
 },
 "questions": [
  {
   "type": "choice",
   "q": "What do you do before you switch anything off?",
   "options": [
    "Switch off the main switch straight away",
    "Ask permission to remove the power",
    "Fit your lock to the breaker",
    "Start the continuity test"
   ],
   "answer": 1,
   "why": "Turning the power off can affect people and equipment, so you get permission first.",
   "src": "99.pdf (EAL Initial Verification slides) p20; 99.pdf (EAL Initial Verification slides) p25; 302.pdf (Domestic Electrical Installer course) p138",
   "scene": "The assessor points at the test board and says: 'Isolate the socket circuit and start your tests.'",
   "explain": {
    "what": "Both course files put asking permission before turning the power off.",
    "why": "Switching straight off can drop out alarms, computers or lighting someone is relying on. That's why 'just switch off' is the trap.",
    "how": "Say it on the day: 'Can I have permission to isolate this circuit?' Then think about how people will manage with no power.",
    "where": "Before you touch the board (99.pdf slides p20 and p25; 302.pdf p138 step 1)."
   }
  },
  {
   "type": "choice",
   "q": "The board you need to isolate feeds the fire alarm panel. What do you think about first?",
   "options": [
    "Nothing, the fire alarm has a battery",
    "Temporary power for safety services",
    "Isolating the fire alarm panel's fuse only",
    "Doing the job after everyone has gone home"
   ],
   "answer": 1,
   "why": "Safety services like fire alarms and emergency lighting may still be needed while the power is off.",
   "src": "99.pdf (EAL Initial Verification slides) p19",
   "scene": "Periodic inspection in a small office. The client mentions the fire alarm panel is fed from this board.",
   "explain": {
    "what": "Isolating affects other people, not just you.",
    "why": "The course lists telling people you're testing, warning signs, barriers, and temporary power or lighting for normal use or for safety services such as fire alarms and emergency lighting.",
    "how": "Before you isolate, ask what the board feeds. If it's a safety service, arrange temporary power and tell the people in the building.",
    "where": "Before isolation, at the board (99.pdf slides p19)."
   }
  },
  {
   "type": "order",
   "q": "Put the voltage indicator steps in order.",
   "steps": [
    "Check the indicator and leads (GS38)",
    "Prove it on the proving unit",
    "Test L-N, L-E and N-E at the circuit",
    "Re-prove it on the proving unit",
    "Start work"
   ],
   "why": "Prove, test, re-prove: a tester that fails mid-way can't fool you.",
   "src": "302.pdf (Domestic Electrical Installer course) p138; 99.pdf (EAL Initial Verification slides) p25",
   "scene": "The assessor watches you isolate a single-phase lighting circuit.",
   "explain": {
    "what": "These are the tester steps of safe isolation. Both course files agree on them.",
    "why": "You check the indicator, prove it, test, then prove it again. Skip the re-prove and a tester that failed during the test would show 'dead' on a live circuit.",
    "how": "Think 'prove, test, prove', and watch the indicator on every single test.",
    "where": "Proving unit on the bench, then the circuit's terminals (302.pdf p138-141; 99.pdf slides p25)."
   }
  },
  {
   "type": "choice",
   "q": "Which tests prove a single-phase circuit dead?",
   "options": [
    "L-N only",
    "L-E and N-E only",
    "L-N, L-E and N-E",
    "L-N and L-E only"
   ],
   "answer": 2,
   "why": "Three tests cover every pair of conductors, so no combination is missed.",
   "src": "99.pdf (EAL Initial Verification slides) p25",
   "explain": {
    "what": "To prove dead you test between all live conductors, and between each live conductor and earth.",
    "why": "Single-phase has three conductors (L, N, E), so three pairs: L-N, L-E and N-E. L-N alone would miss a line that is live to earth.",
    "how": "Count the conductors and test every pair, watching the indicator each time.",
    "where": "At the circuit's terminals, or the outgoing side of its device (99.pdf slides p25)."
   }
  },
  {
   "type": "fill",
   "q": "On a three-phase circuit you do ___ tests to prove it dead.",
   "answers": [
    "10",
    "ten"
   ],
   "why": "3 line-line, 3 line-neutral, 3 line-earth and 1 neutral-earth.",
   "src": "99.pdf (EAL Initial Verification slides) p26",
   "explain": {
    "what": "Three-phase has five conductors (L1, L2, L3, N, E), so there are more pairs to test.",
    "why": "Every pair gives 10 tests. Saying 9 forgets the N-E test.",
    "how": "Work in groups: lines to each other, lines to neutral, lines to earth, then neutral to earth.",
    "where": "Three-phase board on the L3 assessment (99.pdf slides p26)."
   }
  },
  {
   "type": "fill",
   "q": "How many more tests before you can say it is dead? ___",
   "answers": [
    "4",
    "four"
   ],
   "why": "You still need L1-E, L2-E, L3-E and N-E: 10 tests in total.",
   "src": "99.pdf (EAL Initial Verification slides) p26",
   "scene": "Three-phase board (L3 assessment). You've tested L1-L2, L2-L3, L3-L1, L1-N, L2-N and L3-N. All show no voltage.",
   "explain": {
    "what": "The 10 tests are 3 line-line, 3 line-neutral, 3 line-earth and 1 neutral-earth.",
    "why": "You've done the six tests between live conductors. The four to earth are still missing, and they're the ones that find a line live to earth.",
    "how": "Tick them off in groups so you don't lose count under pressure.",
    "where": "Three-phase distribution board (99.pdf slides p26)."
   }
  },
  {
   "type": "match",
   "q": "Three-phase: match each group to its tests.",
   "pairs": [
    [
     "Line to line",
     "L1-L2, L2-L3, L3-L1"
    ],
    [
     "Line to neutral",
     "L1-N, L2-N, L3-N"
    ],
    [
     "Line to earth",
     "L1-E, L2-E, L3-E"
    ],
    [
     "Neutral to earth",
     "N-E"
    ]
   ],
   "why": "3 + 3 + 3 + 1 = the 10 tests to prove a three-phase circuit dead.",
   "src": "99.pdf (EAL Initial Verification slides) p26",
   "explain": {
    "what": "Grouping the tests makes it easy to remember all 10.",
    "why": "Each line is tested against the other lines, against neutral and against earth, then neutral against earth.",
    "how": "Use the same groups on the board every time so you never skip one.",
    "where": "Three-phase board (99.pdf slides p26)."
   }
  },
  {
   "type": "choice",
   "q": "What do you do?",
   "options": [
    "Carry on: the L-N test read 0 V, so it's dead",
    "Stop: it isn't dead. Find the right isolation point",
    "Re-prove the indicator and then start work",
    "Note the reading on the schedule and carry on working"
   ],
   "answer": 1,
   "why": "Any voltage on any test means the circuit is not dead, so you don't work on it.",
   "src": "99.pdf (EAL Initial Verification slides) p25; 302.pdf (Domestic Electrical Installer course) p138; 302.pdf (Domestic Electrical Installer course) p140",
   "scene": "You've switched off the breaker and proved your indicator. L-N reads 0 V, but L-E reads 230 V.",
   "explain": {
    "what": "A dead circuit reads 0 V on every test. One reading with voltage means something is still live.",
    "why": "You may have switched off the wrong device, or the circuit may be fed from somewhere else. 0 V on L-N doesn't help when L-E shows 230 V.",
    "how": "Stop, don't touch it, and go back to identifying the isolation point (the first step in 302.pdf). Isolate the right one, then prove, test and re-prove from the start.",
    "where": "At the board and the circuit terminals (99.pdf slides p25; 302.pdf p138 and p140)."
   }
  },
  {
   "type": "choice",
   "q": "After locking off, where does the key go?",
   "options": [
    "Left in the lock",
    "Hung on the board door",
    "In your pocket or toolbox",
    "Given to the client"
   ],
   "answer": 2,
   "why": "Only you can then remove the lock, so nobody can switch back on while you work.",
   "src": "99.pdf (EAL Initial Verification slides) p25",
   "explain": {
    "what": "Locking off puts a lock on the isolating device so it can't be switched back on.",
    "why": "There's one key and you keep it in your pocket or toolbox. On the board or with the client, someone else could unlock it and switch on while you work.",
    "how": "Lock off, pocket the key, post the warning sign.",
    "where": "At the isolating device on the board (99.pdf slides p25-26)."
   }
  },
  {
   "type": "choice",
   "q": "Your lock is on the breaker. What else goes on?",
   "options": [
    "A warning sign",
    "A strip of insulating tape",
    "Your test results sheet",
    "Nothing else is needed"
   ],
   "answer": 0,
   "why": "The sign tells everyone why it's off and not to touch it.",
   "src": "99.pdf (EAL Initial Verification slides) p25",
   "scene": "You've isolated the circuit and fitted your locking-off device. The key is in your pocket.",
   "explain": {
    "what": "The lock stops it being switched on; the sign tells people why.",
    "why": "The course says lock off, keep the key and post warning signs. Tape isn't a lock and can be pulled off.",
    "how": "Carry a 'Danger: do not switch on' style label with your lock-off kit.",
    "where": "On the isolating device at the board (99.pdf slides p25; 302.pdf p138)."
   }
  },
  {
   "type": "choice",
   "q": "What is the point of locking off and labelling?",
   "options": [
    "So nobody can switch it back on by accident",
    "So the circuit discharges more quickly",
    "So the assessor knows which circuit you're on",
    "So the RCD can't trip during your tests"
   ],
   "answer": 0,
   "why": "The routine makes sure the circuit is isolated AND can't be switched back on by accident.",
   "src": "302.pdf (Domestic Electrical Installer course) p136",
   "explain": {
    "what": "Isolation is only safe if it stays isolated while you work.",
    "why": "302.pdf says the procedure makes sure the circuit is properly isolated and cannot be reinstated inadvertently. A switched-off breaker can be switched back on by anyone.",
    "how": "Treat the lock and label as part of the job, not an extra.",
    "where": "At the isolating device on the board (302.pdf p136-137)."
   }
  },
  {
   "type": "choice",
   "q": "What does this tell you?",
   "options": [
    "The circuit is dead and you can start",
    "The indicator failed: your 0 V readings can't be trusted",
    "The proving unit's battery is flat, ignore it",
    "The circuit has a fault to earth"
   ],
   "answer": 1,
   "why": "If it won't re-prove, it may have failed during your tests, so the 0 V readings mean nothing.",
   "src": "302.pdf (Domestic Electrical Installer course) p141",
   "scene": "Your three dead tests all read 0 V. You put the indicator back on the proving unit and no lamps light.",
   "explain": {
    "what": "Re-proving shows the indicator still worked all the way through your tests.",
    "why": "If the lamps don't light on the proving unit afterwards, a lamp or lead may have failed during the test. The 0 V readings could be false.",
    "how": "Get an indicator that proves, then prove it, test all the pairs again, and re-prove.",
    "where": "Proving unit, after the dead tests (302.pdf p139-141)."
   }
  },
  {
   "type": "fill",
   "q": "On a dead single-phase circuit, each of L-N, L-E and N-E should read ___ V.",
   "answers": [
    "0",
    "zero",
    "nil"
   ],
   "why": "All three tests show 0 V (lamps off) before you re-prove the tester.",
   "src": "302.pdf (Domestic Electrical Installer course) p140",
   "explain": {
    "what": "Dead means no voltage between any pair of conductors.",
    "why": "302.pdf shows 0 V on L-N, L-E and N-E with the lamps off. Any other reading means it isn't dead.",
    "how": "Watch the indicator on each of the three tests; don't rush them.",
    "where": "At the circuit's terminals (302.pdf p140)."
   }
  }
 ]
});
