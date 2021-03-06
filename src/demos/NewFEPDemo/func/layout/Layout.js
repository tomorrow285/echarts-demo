import FRLayout from "./FRLayout";
import { init, Group, Rect } from "zrender";

class Layout {
  constructor(graph) {
    this.points = [];
    this.group = new Group();
    this.graph = graph;
    this.layoutAlgorithm = new FRLayout(
      {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
      },
      graph
    );

    this.graph.forEachVertex(() => {
      const rect = new Rect({
        shape: {
          width: 100,
          height: 100,
        },
      });
      this.points.push(rect);
      this.group.add(rect);
    });
  }

  updateGraphics() {
    this.graph.forEachVertex(({ pos }, i) => {
      const { x, y } = pos;
      this.points[i].attr({
        shape: {
          x,
          y,
        },
      });
    });
  }

  step() {
    this.layoutAlgorithm.updatePhysics();
    this.updateGraphics();
  }

  run() {
    window.requestAnimationFrame(() => {
      this.step();
      if (this.layoutAlgorithm.isDone()) return;
      this.run();
    });
  }

  init(el) {
    this.zr = init(el);
    this.zr.add(this.group);
  }
}

export default Layout;
