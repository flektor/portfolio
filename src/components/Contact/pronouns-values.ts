const PronounsValues = {
  none: "None",
  sheHer: "She/Her",
  himHis: "Him/His",
  theyThem: "They/Them",
  custom: "Custom",
} as const;

export type Pronouns = typeof PronounsValues[keyof typeof PronounsValues];

export default PronounsValues;
