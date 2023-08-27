const rankColors = [
  {
    "text": "#BD4225",
    "color": "red",
  },
  {
    "text": "#999999",
    "outline": "#555555",
    "color": "black",
  },
  {
    "text": "#8669C9",
    "color": "purple",
  },
  {
    "text": "#3C7EBB",
    "color": "blue",
  },
  {
    "text": "#EDB700",
    "color": "yellow",
  },
  {
    "text": "#E6E6E6",
    "color": "white",
  },
];

export default function (color: string) {
  return rankColors.find((item) => item.color === color);
}
