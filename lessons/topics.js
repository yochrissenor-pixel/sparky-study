// Topic list for the topic map, roughly in the order you meet them on a board.
// id: what lessons point at. notion: the Topic name used in the Notion "Sparky Study App Log".
// weakSpot: true = one of Tom's known weak areas (flagged on the map before any lessons are done).
window.TOPICS = [
  { id: "safety",      notion: "Safety & rules",  name: "Rules, safety and test kit" },
  { id: "isolation",   notion: "Safe isolation",  name: "Safe isolation" },
  { id: "forms",       notion: "Forms",           name: "EIC, Minor Works and EICR forms" },
  { id: "inspection",  notion: "Inspection",      name: "Inspection" },
  { id: "earthing",    notion: "Earthing",        name: "Earthing systems and Ze" },
  { id: "dead-tests",  notion: "Dead tests",      name: "Dead tests (continuity, IR, polarity)", weakSpot: true },
  { id: "ring-finals", notion: "Ring finals",     name: "Ring final tests", weakSpot: true },
  { id: "breakers",    notion: "Breaker labels",  name: "Breaker labels and max Zs", weakSpot: true },
  { id: "live-tests",  notion: "Live tests",      name: "Live tests (Zs, fault current)" },
  { id: "rcd",         notion: "RCD",             name: "RCD tests", weakSpot: true },
  { id: "three-phase", notion: "Three-phase",     name: "Three-phase", weakSpot: true },
  { id: "eicr-codes",  notion: "EICR codes",      name: "EICR observation codes" },
  { id: "periodic",    notion: "Periodic",        name: "Periodic inspection and testing" },
  { id: "pat",         notion: "PAT",             name: "PAT (in-service inspection and testing)", weakSpot: true }
];
