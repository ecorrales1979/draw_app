import { useEffect, useRef } from 'react';

import './style.css';
import { ColorItem } from "./color";
import { COLORS } from "./colors";
import { draw } from '../../utils/drag';

export const ColorPanel = () => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divRef) {
      draw(divRef?.current?.id ?? '');
    }
  }, [divRef]);

  return (
    <div id="colors-panel" ref={divRef} className="window colors-panel">
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
