const languages = [
  { name: "javascript", properName: "JavaScript" },
  { name: "typescript", properName: "TypeScript" },
  { name: "csharp", properName: "CSharp" },
];

export default function getProperLanguageName(language: string) {
  return (languages.find((item) => item.name === language))?.properName ||
    language;
}
