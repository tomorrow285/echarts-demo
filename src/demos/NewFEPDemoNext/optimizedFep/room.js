// 每个分子需要使用的面积 => 1000px * 1000px 的尺寸下容纳 20 个分子
const baseMolNum = 20;
const baseArea = (1000 * 1000) / baseMolNum;

class Room {
  width = 0;
  height = 0;
  parentScale = 1;
  translateX = 0;
  translateY = 0;

  init(len) {
    const parentW = this.parent.offsetWidth;
    const parentH = this.parent.offsetHeight;
    const parentArea = parentW * parentH;
    const molNum = Math.floor(parentArea / baseArea);
    const scale = len / molNum;

    if (scale < 1) {
      this.width = parentW;
      this.height = parentH;
    } else {
      const edgeScale = Math.sqrt(scale);
      this.parentScale = 1 / edgeScale;
      this.width = parentW * edgeScale;
      this.height = parentH * edgeScale;
    }

    this.translateX = (parentW - this.width) / 2;
    this.translateY = (parentH - this.height) / 2;
    this.dom.style.width = this.width + "px";
    this.dom.style.height = this.height + "px";
    this.dom.style.transform = `translate(${this.translateX}px, ${this.translateY}px)`;
    this.parent.style.transform = `scale(${this.parentScale})`;
  }

  constructor(parent, dom) {
    this.parent = parent;
    this.dom = dom;
  }
}

export default Room;