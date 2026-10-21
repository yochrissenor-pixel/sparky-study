// DRAFT lesson (v2) written from Tom's Access Training PDFs. Waiting for Checker + Tom's approval.
window.LESSONS = window.LESSONS || [];
window.LESSONS.push({
 "id": "a6-01",
 "topic": "pat",
 "title": "Equipment classes: tell them apart",
 "awards": [
  "L3 PAT"
 ],
 "status": "draft",
 "unconfirmed": false,
 "note": "The Class II construction mark is shown on the course slide as a picture only (113.pdf p43): it is a square inside a square, as described here. The slides don't show a Class III mark, so this lesson doesn't use one.",
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
  "notes": "Checked against the PAT slides, including the picture of the Class II mark (a square inside a square) on 113.pdf p43."
 },
 "approved": null,
 "intro": {
  "what": "Every item you test belongs to a class that says how it protects the user from a shock. Class I uses earthed metal, Class II uses extra (supplementary or reinforced) insulation with no earth, and Class III runs from a low, safe energy source called ES1.",
  "why": "The class decides which tests you do and which pass limit you use. The earth continuity test is only for Class I, and Class II needs twice the insulation resistance of Class I.",
  "how": [
   "Pick the item up and read the rating plate: look for the Class II construction mark (a square inside a square)",
   "Look at the flex: a Class I item always has a 3-core flex with an earth conductor",
   "Look for metal you can touch: on Class I it is earthed; on Class II any metal is kept away from live parts by extra insulation",
   "Check for 'FE' after Class II: the earth in a Class II FE item is there for the way it works, not for shock protection",
   "Items that run from a very low voltage supply (ES1) are Class III",
   "Decide the class first, then choose your tests and limits"
  ],
  "where": "On the bench: the rating plate, the flex and the case of the item in front of you. The class goes on your test record next to the item.",
  "reason": "Get the class wrong and you either skip the earth test on an item that relies on its earth, or fail a good item against the wrong limit.",
  "numbers": [
   "Class I insulation resistance: at least 1.0 MΩ",
   "Class II and Class II FE: at least 2.0 MΩ",
   "ES1: up to 30 V AC rms, 42.4 V peak or 60 V DC",
   "ES2: up to 50 V AC rms, 70.7 V peak or 120 V DC"
  ]
 },
 "questions": [
  {
   "type": "choice",
   "q": "What class is it?",
   "options": [
    "Class I",
    "Class II",
    "Class II FE",
    "Class III"
   ],
   "answer": 0,
   "why": "A 3-core flex with an earth conductor connected to touchable metal means Class I.",
   "src": "113.pdf (In-service Inspection & Testing slides) p33-34",
   "scene": "PAT bench: a metal-bodied toaster with a 3-core flex. The rating plate has no Class II mark.",
   "explain": {
    "what": "Class I equipment has basic insulation plus a way of connecting its exposed metal to the earth in the fixed wiring.",
    "why": "The slides say a Class I flex will always be 3-core with an earth conductor, and the metal case is earthed. Class II has no earth for shock protection, and Class III runs from an ES1 supply, not 230 V.",
    "how": "Look for the 3-core flex and touchable metal, and check there's no Class II mark on the rating plate.",
    "where": "The flex and rating plate of the item on your bench (course slides 113.pdf p33-34)."
   }
  },
  {
   "type": "choice",
   "q": "Which test do you leave out?",
   "options": [
    "Insulation resistance",
    "Earth continuity",
    "Formal visual inspection",
    "Functional check"
   ],
   "answer": 1,
   "why": "Class II has no protective earth, so there is nothing to test for continuity.",
   "src": "113.pdf (In-service Inspection & Testing slides) p37; 113.pdf (In-service Inspection & Testing slides) p43; 113.pdf (In-service Inspection & Testing slides) p75",
   "scene": "A plastic hair dryer with a 2-core flex. The rating plate carries the Class II construction mark (a square inside a square).",
   "explain": {
    "what": "Class II equipment relies on supplementary or reinforced insulation and has no way of connecting metal to a protective conductor.",
    "why": "The earth continuity test is only for Class I. Insulation resistance still applies, with the higher 2.0 MΩ limit, and so do the inspection and functional check.",
    "how": "Spot the square-in-a-square mark, then go straight from the visual inspection to insulation resistance.",
    "where": "Rating plate on the item (course slides 113.pdf p37, p43 and the test order on p75)."
   }
  },
  {
   "type": "choice",
   "q": "Is the bare metal stem a fault?",
   "options": [
    "Yes: all touchable metal must be earthed",
    "No: Class II may have unearthed metal",
    "Yes: fit a 3-core flex and earth the stem",
    "No: but do a high current earth test on it"
   ],
   "answer": 1,
   "why": "Class II items can have unearthed metal kept away from live parts by extra insulation.",
   "src": "113.pdf (In-service Inspection & Testing slides) p40-41",
   "scene": "A desk lamp with the Class II mark has a bare metal stem you can touch. There is no earth in its flex.",
   "explain": {
    "what": "Class II equipment can have a metal case or metal parts that are not earthed.",
    "why": "The slides show Class II items with unearthed metal separated from live parts by basic and supplementary insulation, and even an unearthed metal case. Adding an earth isn't the fix, and there's no earth path to test.",
    "how": "Check the case is undamaged, then do insulation resistance from the live conductors to that metal: it must be at least 2.0 MΩ.",
    "where": "The touchable metal on the item (course slides 113.pdf p40-41)."
   }
  },
  {
   "type": "choice",
   "q": "What is the earth conductor in this lead for?",
   "options": [
    "Shock protection, like Class I",
    "Functional reasons only",
    "Testing the plug fuse",
    "Earthing the monitor stand"
   ],
   "answer": 1,
   "why": "Class II FE relies on its insulation for shock protection; the earth is functional.",
   "src": "113.pdf (In-service Inspection & Testing slides) p42",
   "scene": "A desktop computer's rating plate says Class II FE. It is plugged in with a 3-core lead.",
   "explain": {
    "what": "Class II FE means Class II with a functional earth. It used to be called IT equipment.",
    "why": "Shock protection comes from supplementary or reinforced insulation. The protective conductor is there for the way the equipment works, so don't treat it as Class I.",
    "how": "Use the Class II limit (2.0 MΩ) for insulation resistance, and remember the protective conductor current test is allowed on Class II FE.",
    "where": "Rating plate of the item (course slides 113.pdf p42 and p83-84)."
   }
  },
  {
   "type": "match",
   "q": "Match each class to how it protects you.",
   "pairs": [
    [
     "Class I",
     "Basic insulation plus earthed metal"
    ],
    [
     "Class II",
     "Supplementary or reinforced insulation, no earth"
    ],
    [
     "Class III",
     "Supplied from an ES1 source"
    ],
    [
     "Electrical separation",
     "Supply isolated from other circuits and earth"
    ]
   ],
   "why": "Each class protects you a different way, and that decides your tests.",
   "src": "113.pdf (In-service Inspection & Testing slides) p33; 113.pdf (In-service Inspection & Testing slides) p37; 113.pdf (In-service Inspection & Testing slides) p44; 113.pdf (In-service Inspection & Testing slides) p49",
   "explain": {
    "what": "The slides list the classes by how they protect the user from shock.",
    "why": "Class I falls back on the earth if the basic insulation fails. Class II has a second layer of insulation instead. Class III keeps the energy too low to hurt. Electrical separation isolates the supply from everything else, including earth.",
    "how": "When you pick an item up, ask: is it earthed, double insulated, very low voltage, or fed from a separate isolated supply?",
    "where": "Course slides 113.pdf p33, p37, p44 and p49."
   }
  },
  {
   "type": "choice",
   "q": "Pass or fail?",
   "options": [
    "Pass: over 1.0 MΩ",
    "Fail: under 2.0 MΩ",
    "Pass: Class II FE isn't IR tested",
    "Retest at 1000 V for a higher reading"
   ],
   "answer": 1,
   "why": "Class II and Class II FE need at least 2.0 MΩ.",
   "src": "113.pdf (In-service Inspection & Testing slides) p83",
   "scene": "Class II FE computer monitor. Insulation resistance reads 1.6 MΩ.",
   "explain": {
    "what": "Insulation resistance shows how well the insulation keeps current where it should be.",
    "why": "Class I needs at least 1.0 MΩ; Class II and Class II FE need at least 2.0 MΩ because the insulation is the whole protection. 1.6 MΩ would pass on Class I but fails here.",
    "how": "Check the class on the rating plate before you judge the reading. Fail it, label it and remove it from service.",
    "where": "IR reading on your PAT tester (course slides 113.pdf p83)."
   }
  },
  {
   "type": "choice",
   "q": "Pass or fail?",
   "options": [
    "Fail: every item needs 2.0 MΩ",
    "Pass: Class I needs at least 1.0 MΩ",
    "Fail: kettles need at least 5 MΩ to pass",
    "Pass: kettles are not IR tested"
   ],
   "answer": 1,
   "why": "Same reading, different class: Class I only needs 1.0 MΩ.",
   "src": "113.pdf (In-service Inspection & Testing slides) p83",
   "scene": "Class I kettle. Insulation resistance reads 1.6 MΩ.",
   "explain": {
    "what": "The insulation resistance limit depends on the class.",
    "why": "Class I equipment also has its earth as protection, so its minimum is 1.0 MΩ. 2.0 MΩ is the Class II figure.",
    "how": "Write the class on your record first, then compare the reading with the right limit.",
    "where": "IR reading on your PAT tester (course slides 113.pdf p83)."
   }
  },
  {
   "type": "fill",
   "q": "ES1 limit for AC: ___ V rms",
   "answers": [
    "30",
    "30v",
    "30 v"
   ],
   "why": "ES1 is up to 30 V AC rms, 42.4 V peak or 60 V DC.",
   "src": "113.pdf (In-service Inspection & Testing slides) p48",
   "explain": {
    "what": "Energy source classes (ES1, ES2, ES3) replace older terms like SELV. Class III equipment relies on an ES1 supply.",
    "why": "ES1 is 30 V AC rms (42.4 V peak) or 60 V DC. 50 V AC rms is the ES2 limit, which is why it's tempting.",
    "how": "Remember 'ES1: 30 AC, 60 DC; ES2: 50 AC, 120 DC'.",
    "where": "Rating plate or power supply of a low-voltage item (course slides 113.pdf p44-48)."
   }
  },
  {
   "type": "choice",
   "q": "What class is the work light?",
   "options": [
    "Class I",
    "Class II",
    "Class III",
    "Class II FE"
   ],
   "answer": 2,
   "why": "It runs from an ES1 supply and generates nothing higher, so it's Class III.",
   "src": "113.pdf (In-service Inspection & Testing slides) p44; 113.pdf (In-service Inspection & Testing slides) p48",
   "scene": "A hand-held work light is marked 24 V AC and is fed from a supply that stays within ES1 limits.",
   "explain": {
    "what": "Class III equipment relies on being supplied from ES1 and doesn't generate ES3 itself.",
    "why": "24 V AC is under the 30 V AC rms ES1 limit. It has no earth (so not Class I) and doesn't rely on double insulation against 230 V (so not Class II).",
    "how": "Read the supply voltage on the rating plate and compare it with 30 V AC or 60 V DC.",
    "where": "Rating plate of the item (course slides 113.pdf p44 and p48)."
   }
  },
  {
   "type": "match",
   "q": "Match the energy source class to its effect on a person.",
   "pairs": [
    [
     "ES1",
     "Detectable, but not painful"
    ],
    [
     "ES2",
     "May be painful, not likely to injure"
    ],
    [
     "ES3",
     "Capable of causing injury"
    ]
   ],
   "why": "The higher the class number, the more dangerous the energy source.",
   "src": "113.pdf (In-service Inspection & Testing slides) p45-47",
   "explain": {
    "what": "The energy source classes describe what the energy would do if it touched you.",
    "why": "ES1 may be felt but isn't painful; ES2 may be painful but isn't likely to injure; ES3 can injure. Our 230 V supply is far above ES2, so it's ES3.",
    "how": "Think 1 = feel it, 2 = hurts, 3 = harms.",
    "where": "Course slides 113.pdf p45-47."
   }
  },
  {
   "type": "choice",
   "q": "How should you treat this lead?",
   "options": [
    "As Class I",
    "As Class II",
    "As Class III",
    "It isn't tested"
   ],
   "answer": 1,
   "why": "A 2-core lead has no earth, so treat it as Class II: insulation resistance and polarity.",
   "src": "113.pdf (In-service Inspection & Testing slides) p88",
   "scene": "A detachable 2-core appliance lead for a radio, tested on its own.",
   "explain": {
    "what": "Detachable appliance leads and extension leads are tested as separate items.",
    "why": "A 2-core lead is treated as Class II and tested for insulation resistance and polarity. With no earth conductor there's no continuity test.",
    "how": "Count the cores: 2 = Class II tests; 3 = Class I tests.",
    "where": "The lead on your bench (course slides 113.pdf p87-88)."
   }
  },
  {
   "type": "choice",
   "q": "How should you treat it?",
   "options": [
    "As Class II",
    "As Class I",
    "As Class II FE",
    "As Class III"
   ],
   "answer": 1,
   "why": "A 3-core lead is treated as Class I: earth continuity, insulation resistance and polarity.",
   "src": "113.pdf (In-service Inspection & Testing slides) p88",
   "scene": "A 3-core extension lead with no class marking anywhere on it.",
   "explain": {
    "what": "Extension leads have no rating plate class, so the slides tell you how to treat them.",
    "why": "A 3-core lead is treated as Class I, so it gets an earth continuity test as well as insulation resistance and polarity.",
    "how": "Plug the lead into your tester with the right adaptor and run the Class I tests plus polarity.",
    "where": "The lead on your bench (course slides 113.pdf p88)."
   }
  },
  {
   "type": "order",
   "q": "Class I toaster: put its tests in order.",
   "steps": [
    "Earth continuity",
    "Insulation resistance",
    "Touch or protective conductor current (if required)",
    "Functional check"
   ],
   "why": "Earth first, because only Class I has one to prove; function last.",
   "src": "113.pdf (In-service Inspection & Testing slides) p75",
   "explain": {
    "what": "After the preliminary inspection, the tests follow a set order.",
    "why": "Class I starts with the protective conductor continuity test. A Class II item would skip that step and start at insulation resistance.",
    "how": "Say it as: earth, insulation, leakage if needed, then make it work.",
    "where": "Your PAT tester's test sequence (course slides 113.pdf p75)."
   }
  },
  {
   "type": "choice",
   "q": "Why is the Class II insulation limit higher than Class I?",
   "options": [
    "Its insulation is the only protection",
    "It is always used in wetter, harsher places",
    "It runs at a higher voltage",
    "Its plug has no fuse"
   ],
   "answer": 0,
   "why": "With no earth to fall back on, the insulation has to do all the work.",
   "src": "113.pdf (In-service Inspection & Testing slides) p37; 113.pdf (In-service Inspection & Testing slides) p83",
   "explain": {
    "what": "Class I has two lines of defence: basic insulation and an earthed case. Class II has no earth.",
    "why": "The slides set the Class II minimum at 2.0 MΩ, double the 1.0 MΩ for Class I. That makes sense: with no earth, its supplementary or reinforced insulation is all that protects the user.",
    "how": "If you remember why, you won't mix the two limits up on the day.",
    "where": "Course slides 113.pdf p37 and p83."
   }
  }
 ]
});
