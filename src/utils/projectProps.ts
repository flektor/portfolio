export const projectsProps = [
  {
    name: "MeetPhone",
    images: ["./images/Meet/1.png"],
    backgroundColor: "#FAF8EF",
  },
  {
    name: "MeetTablet",
    images: ["./images/Meet/3.png"],
    backgroundColor: "#FAF8EF",
  },

  {
    name: "Candle",
    images: ["./images/Candle.png"],
    backgroundColor: "#FAF8EF",
  },

  {
    name: "Tetrion",
    images: ["./images/Tetrion/1.png"],
    backgroundColor: "#FAF8EF",
  },

  {
    name: "JChess",
    images: ["./images/JChess/1.png"],
    backgroundColor: "#FAF8EF",
  },

  {
    name: "Tetrees",
    images: ["./images/Tetrees/2.png", "./images/Tetrees/1.png"],
    backgroundColor: "#FAF8EF",
  },

  { name: "2048", images: ["./images/2048/1.png"], backgroundColor: "#FAF8EF" },
] as const;

export type ProjectProps = typeof projectsProps[number];

export function getProjectProps(
  projectName: ProjectProps["name"],
) {
  return projectsProps.find(({ name }) => name === projectName) as ProjectProps;
}
