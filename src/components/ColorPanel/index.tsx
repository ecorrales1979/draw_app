import { useDispatch } from "react-redux";

import './style.css';
import { COLORS } from "./colors";
import { setStrokeColor } from "../../actions";

export const ColorPanel = () => {
  const dispatch = useDispatch()

  const handleColorChange = (color: string) => {
    dispatch(setStrokeColor(color));
  }

  return (
    <div className="window colors-panel">
      <div className="title-bar">
        <div className="title-bar-text">Colors</div>
      </div>
      <div className="window-body colors">
        {COLORS.map((color) => (
          <div key={color} onClick={() => handleColorChange(color)} className="color" style={{ backgroundColor: color }}></div>
        ))}
      </div>
    </div>
  )
};
