export const LIGAND_WIDTH = 100;
export const LIGAND_WIDTH_HALF = LIGAND_WIDTH / 2;
export const SCALE_1 = [1, 1];
export const SCALE_X = [1.5, 1.5];
export const EDGE_WIDTH = 1;
export const EDGE_SCALE_WIDTH = 10;
export const NORMAL_OPACITY = 1;
export const FADEOUT_OPACITY = 0.1;
export const ELEMENT_Z2 = 100;
const LIGAND_RADIUS = 4;
const LIGAND_SELECTED_COLOR = "#3E4BD5";
const LIGAND_HOVER_COLOR = "#93e8ed";
const LIGAND_FIRSTADD_COLOR = "#f0f";
const LIGAND_DEFAULT_SHADOWBLUR = 0;
const LIGAND_HIGHLIGHT_SHADOWBLUR = 14;

export const LIGAND_RECT_STYLE = {
  SELECTED: {
    STROKE: LIGAND_SELECTED_COLOR,
  },
  HOVER: {
    STROKE: LIGAND_HOVER_COLOR,
  },
  RELATEDHOVER: {
    STROKE: null,
  },
  FIRSTADD: {
    STROKE: LIGAND_FIRSTADD_COLOR,
  },
  DEFAULT: {
    FILL: "rgba(0,0,0,0)",
    STROKE: null,
  },
  INITIAL: {
    RADIUS: LIGAND_RADIUS,
    WIDTH: LIGAND_WIDTH,
    HEIGHT: LIGAND_WIDTH,
    ZLEVEL_THIRD: ELEMENT_Z2,
  },
};

export const LIGAND_IMAGE_STYLE = {
  SELECTED: {
    SHADOWCOLOR: LIGAND_SELECTED_COLOR,
    SHADOWBLUR: LIGAND_HIGHLIGHT_SHADOWBLUR,
  },
  HOVER: {
    SHADOWCOLOR: LIGAND_HOVER_COLOR,
    SHADOWBLUR: LIGAND_HIGHLIGHT_SHADOWBLUR,
  },
  RELATEDHOVER: {
    SHADOWBLUR: LIGAND_DEFAULT_SHADOWBLUR,
  },
  FIRSTADD: {
    SHADOWCOLOR: LIGAND_FIRSTADD_COLOR,
    SHADOWBLUR: LIGAND_HIGHLIGHT_SHADOWBLUR,
  },
  DEFAULT: {
    SHADOWBLUR: LIGAND_DEFAULT_SHADOWBLUR,
  },
  INITIAL: {
    WIDTH: LIGAND_WIDTH,
    HEIGHT: LIGAND_WIDTH,
    ZLEVEL_THIRD: ELEMENT_Z2,
  },
};

export const ANIMATE_CONFIG = {
  duration: 200,
  easing: "cubicOut",
};
