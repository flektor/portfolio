export const projectsProps = [
  {
    name: "Meet",
    images: ["./images/Meet/1.png"],
    backgroundColor: "#FAF8EF",
    video: ["/video/meet.mp4"],
  },
  {
    name: "Candle",
    images: ["./images/Candle.png"],
    backgroundColor: "#FAF8EF",
    video: ["/video/candle.mp4"],
  },

  {
    name: "Tetrion",
    images: ["./images/Tetrion/1.png"],
    video: ["/video/tetrion.mp4"],
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
    video: ["/video/tetrees.mp4"],
  },

  {
    name: "Gallery",
    images: ["./images/Gallery/1.png"],
    backgroundColor: "#FAF8EF",
    video: ["/video/gallery.mp4"],
  },

  { name: "2048", images: ["./images/2048/1.png"], backgroundColor: "#FAF8EF" },
] as const;

export type ProjectProps = typeof projectsProps[number] & { video: string[] };

export function getProjectProps(
  projectName: ProjectProps["name"],
) {
  return projectsProps.find(({ name }) => name === projectName) as ProjectProps;
}
