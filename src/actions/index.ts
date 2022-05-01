import { Point } from "../utils/types";

export const BEGIN_STROKE = "BEGIN_STROKE";
export const UPDATE_STROKE = "UPDATE_STROKE";
export const END_STROKE = "END_STROKE";
export const SET_STROKE_COLOR = "SET_STROKE_COLOR";
export const OPEN_COLOR_PANEL = "OPEN_COLOR_PANEL";
export const CLOSE_COLOR_PANEL = "CLOSE_COLOR_PANEL";

export type Action =
  | {
      type: typeof BEGIN_STROKE;
      payload: Point;
    }
  | {
      type: typeof UPDATE_STROKE;
      payload: Point;
    }
  | {
      type: typeof END_STROKE;
    }
  | {
      type: typeof SET_STROKE_COLOR;
      payload: string;
    }
  | {
      type: typeof OPEN_COLOR_PANEL;
    }
  | {
      type: typeof CLOSE_COLOR_PANEL;
    };

export const beginStroke = (x: number, y: number) => ({
  type: BEGIN_STROKE,
  payload: { x, y },
});

export const updateStroke = (x: number, y: number) => ({
  type: UPDATE_STROKE,
  payload: { x, y },
});

export const endStroke = () => ({
  type: END_STROKE,
});

export const setStrokeColor = (color: string) => ({
  type: SET_STROKE_COLOR,
  payload: color,
});

export const openColorPanel = () => ({
  type: OPEN_COLOR_PANEL,
});

export const closeColorPanel = () => ({
  type: CLOSE_COLOR_PANEL,
});
