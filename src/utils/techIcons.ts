const icons = [
  { "alt": "React", "src": "logos/react.svg" },
  { "alt": "Next.js", "src": "logos/next.svg" },
  { "alt": "Prisma", "src": "logos/prisma.svg" },
  { "alt": "MySQL", "src": "logos/mysql.svg" },
  { "alt": "TypeScript", "src": "logos/typescript.svg" },
  { "alt": "JavaScript", "src": "logos/javascript.svg" },
  { "alt": "CSharp", "src": "logos/csharp.svg" },
  { "alt": "Unity", "src": "logos/unity.svg" },
  { "alt": "Three.js", "src": "logos/three.svg" },
  { "alt": "HTML", "src": "logos/html.svg" },
  { "alt": "CSS", "src": "logos/css.svg" },
  { "alt": "Sass", "src": "logos/sass.svg" },
  { "alt": "Tailwind", "src": "logos/tailwind.svg" },
  { "alt": "Angular", "src": "logos/angular.svg" },
  { "alt": "Firebase", "src": "logos/firebase.svg" },
  { "alt": "Blender", "src": "logos/blender.svg" },
  { "alt": "tRPC", "src": "logos/trpc.svg" },
];

export function getIcon(technology: string) {
  return icons.find((item) => item.alt === technology);
}

export function getIcons(technologies: string[]) {
  return icons.filter((item) => technologies.includes(item.alt));
}
