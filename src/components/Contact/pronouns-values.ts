const PronounsValues = {
  None: "None",
  SheHer: "She/Her",
  HeHim: "He/Him",
  TheyThem: "They/Them",
  Custom: "Custom",
} as const;

export type Pronouns = typeof PronounsValues[keyof typeof PronounsValues];

export default PronounsValues;
