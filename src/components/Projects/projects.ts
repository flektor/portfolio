export const projects = [
  {
    title: "Meet",
    description:
      "A social application where you can connect with others to participate in activities together. This project is developed using a powerful technology stack that includes TypeScript, React, Next.js, tRPC, Prisma, MySQL and TailwindCSS, also known as the t3 stack. tRPC provides an end-to-end type safety feature which makes this one of my best web development experiences so far. I commenced this project as my final project for the Spiced academy bootcamp and I am excited to continue working on it as my primary side project.",
    date: "Jul 2023",
    liveUrl: "meet.vercel.app",
    repoUrl: "https://github.com/flektor/meet",
    stack: [
      "TypeScript",
      "React",
      "Next.js",
      "tRPC",
      "Prisma",
      "MySQL",
      "Tailwind",
    ],
    mockup: {
      images: ["./images/Meet/1.png"],
      backgroundColor: "#FAF8EF",
      video: [
        "/video/meet.mp4",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-7926e.appspot.com/o/video%2Fmeet_min.mp4?alt=media&token=b61878d6-f716-42bb-ad8d-316f465601f1",
      ],
    },
  },
  {
    title: "Candle",
    description:
      "As part of a dynamic team of five, I led the development of a 2D game for single-player with the Unity engine. The project challenges the player to escape from a dungeon within a strict one-minute timeframe. As the game progresses, tension and adrenaline rise as the player must navigate through ever-narrower spaces. The project delivered a comprehensive development experience due to our team consisting of two programmers, an artist, a sound engineer, and a game designer.",
    date: "May 2023",
    liveUrl: "https://flektor.github.io/Candel/play/",
    repoUrl: "https://github.com/flektor/Candle",
    stack: ["Unity", "CSharp"],
    tag: "#mini-game-jam",
    location: "@SAE, Berlin",
    mockup: {
      images: ["./images/Candle.png"],
      backgroundColor: "#FAF8EF",
      video: [
        "/video/candle.mp4",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-7926e.appspot.com/o/video%2Fcandle.mp4?alt=media&token=153a608e-1682-4e89-9f50-ba3bfe48ba04",
      ],
    },
  },
  {
    title: "Tetrees",
    description:
      "At the three-day Global Game Jam, I worked with three experienced game industry professionals to form a dynamic team of four. With their guidance, I played an active role in developing an exciting Unity 2D game.The experience acted as an immersive learning journey, enabling me to acquire valuable knowledge and enhance my skills while co-creating a unique game where players tactically extend tree roots to access an underground water source.",
    date: "3-5 Feb 2023",
    liveUrl: "https://flektor.github.io/Tetrees/play/",
    repoUrl: "https://github.com/flektor/Tetrees",
    stack: ["Unity", "CSharp"],
    tag: "#global-game-jam",
    location: "@SAE, Berlin",
    mockup: {
      images: ["./images/Tetrees/2.png", "./images/Tetrees/1.png"],
      backgroundColor: "#FAF8EF",
      video: [
        "/video/tetrees.mp4",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-7926e.appspot.com/o/video%2Ftetrees.mp4?alt=media&token=0be1ad42-35fb-465d-9b39-1f5de6676ca4",
      ],
    },
  },
  {
    title: "Tetrion",
    tag: "#thesis",
    description:
      "A creative 3D version of the classic Tetris game available on the web. This project, developed as a crucial part of my thesis, uses Angular, TypeScript, Firebase, Sass and Three.js to bring the virtual game into a new visual dimension. Although the gameplay remains true to its traditional 2D nature, it offers an exciting twist upon clearing a line of bricks for players to enjoy. With an innovative approach, these bricks embrace dynamic physics and burst out of the scene, creating a unique amalgamation of traditional gameplay and dynamic 3D interactions. Blender was used to create all 3D elements for the game.",
    date: "May 2021",
    liveUrl: "https://tetrion-88a95.web.app/",
    repoUrl: "https://github.com/flektor/tetrion",
    stack: [
      "Angular",
      "TypeScript",
      "Firebase",
      "Three.js",
      "Sass",
      "Blender",
    ],
    mockup: {
      images: ["./images/Tetrion/1.png"],
      video: [
        "/video/tetrion.mp4",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-7926e.appspot.com/o/video%2Ftetrion.mp4?alt=media&token=ecc61b37-833c-4f4c-8332-976ae830ee56",
      ],
      backgroundColor: "#FAF8EF",
    },
  },

  {
    title: "Gallery",
    description:
      "During my time at SPICED Academy, my fellow student and I collaborated on a React gallery application. This task enabled us to integrate our coding abilities and develop an interactive gallery for displaying images. Through pair programming, we collaborated using React to organise our app and utilised Styled Components to improve its visual appeal. We guaranteed that each image dynamically resized to fit the responsive design.",
    date: "Jun 2023",
    liveUrl: "https://github.com/flektor/tsitsi",
    repoUrl: "https://flektor.github.io/tsitsi",
    stack: [
      "React",
      "JavaScript",
    ],
    mockup: {
      images: ["./images/Gallery/1.png"],
      backgroundColor: "#FAF8EF",
      video: [
        "/video/gallery.mp4",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-7926e.appspot.com/o/video%2Fgallery.mp4?alt=media&token=952f1dfe-ca23-4ac7-9247-d655e1184db8",
      ],
    },
  },
] as const;

export type ProjectDetails = typeof projects[number];

export type ProjectMockupProps = Pick<ProjectDetails, "mockup">["mockup"];

export function getProjectDetails(title: ProjectDetails["title"]) {
  return projects.find((proj) => proj.title === title);
}
