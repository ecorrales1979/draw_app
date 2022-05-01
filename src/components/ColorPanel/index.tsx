import './style.css';
import { ColorItem } from "./color";
import { COLORS } from "./colors";

export const ColorPanel = () => {
  return (
    <div className="window colors-panel">
      <div className="title-bar">
        <div className="title-bar-text">Colors</div>
      </div>
      <div className="window-body colors">
        {COLORS.map((color) => (
          <ColorItem key={color} color={color} />
        ))}
      </div>
    </div>
  )
};
