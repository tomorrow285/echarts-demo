import Graph from "./Graph";
import Layout from "./Layout";

const vertices = [
  { id: 0 },
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
  { id: 11 },
  { id: 12 },
  { id: 13 },
  { id: 14 },
  { id: 15 },
];
const edges = [
  { from: 0, to: 1 },
  { from: 1, to: 0 },
  { from: 1, to: 2 },
  { from: 2, to: 3 },
  { from: 4, to: 5 },
  { from: 5, to: 3 },
];

const graph = new Graph({ vertices, edges });

export const layout = new Layout(graph);
