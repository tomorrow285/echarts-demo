import { Group } from "zrender";
import { Ligand, Line } from "./element";
import imgData from "./ligand.png";

export const ligandMap = new Map();
export const lineMap = new Map();

export class NodeGroup {
  group = new Group();
  map = ligandMap;
  constructor(nodes) {
    nodes.forEach((node) => {
      const ligand = new Ligand({
        img: imgData,
        id: node.id,
      });
      ligandMap.set(node.id, ligand);
      this.group.add(ligand.el);
    });
  }
}

export class LineGroup {
  group = new Group();
  map = lineMap;
  constructor(lines) {
    console.log("lines", lines);
    lines.forEach((node) => {
      const line = new Line(node);
      lineMap.set(node.id, line);
      this.group.add(line.el);
    });
    console.log("lines", lineMap);
  }
}
