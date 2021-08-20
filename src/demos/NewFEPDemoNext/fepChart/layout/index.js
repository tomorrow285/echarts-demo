import FRLayout from "./FRLayout";
import Graph from "./Graph";

class Layout {
  ctx = null;
  updateGraphics() {
    const ligandMap = this.ctx.nodeGroup.map;
    this.graph.forEachVertex(({ pos, id }) => {
      const ligand = ligandMap.get(id);
      ligand.moveTo(pos);
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

  init() {
    const ctx = this.ctx;
    const vertices = ctx.nodes;
    const edges = ctx.lines.map((line) => ({
      from: line.source,
      to: line.target,
    }));
    this.graph = new Graph({ vertices, edges });
    this.layoutAlgorithm = new FRLayout(
      {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
      },
      this.graph
    );
  }
  constructor(ctx) {
    this.ctx = ctx;
    this.init();
  }
}

export default Layout;
