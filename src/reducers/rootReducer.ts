import {
  Action,
  BEGIN_STROKE,
  UPDATE_STROKE,
  END_STROKE,
  SET_STROKE_COLOR,
  OPEN_COLOR_PANEL,
  CLOSE_COLOR_PANEL,
} from "../actions";
import { RootState } from "../utils/types";

const initialState: RootState = {
  currentStroke: {
    points: [],
    color: "#000",
  },
  strokes: [],
  viewColorPanel: false,
};

export const rootReducer = (
  state: RootState = initialState,
  action: Action
): RootState => {
  switch (action.type) {
    case BEGIN_STROKE:
      return {
        ...state,
        currentStroke: {
          ...state.currentStroke,
          points: [action.payload],
        },
      };
    case UPDATE_STROKE:
      return {
        ...state,
        currentStroke: {
          ...state.currentStroke,
          points: [...state.currentStroke.points, action.payload],
        },
      };
    case END_STROKE:
      if (!state.currentStroke.points.length) return state;
      return {
        ...state,
        currentStroke: {
          ...state.currentStroke,
          points: [],
        },
        strokes: [...state.strokes, state.currentStroke],
      };
    case SET_STROKE_COLOR:
      return {
        ...state,
        currentStroke: {
          ...state.currentStroke,
          ...{ color: action.payload },
        },
      };
    case OPEN_COLOR_PANEL:
      return {
        ...state,
        viewColorPanel: true,
      };
    case CLOSE_COLOR_PANEL:
      return {
        ...state,
        viewColorPanel: false,
      };
    default:
      return state;
  }
};

export const currentStrokeSelector = (state: RootState) => state.currentStroke;

export const colorPanelState = (state: RootState) => state.viewColorPanel;
