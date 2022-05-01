import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './style.css';
import { ColorItem } from "./color";
import { COLORS } from "./colors";
import { closeColorPanel } from '../../actions';
import { colorPanelState } from '../../reducers/rootReducer';
import { draw } from '../../utils/drag';

export const ColorPanel = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const panelState = useSelector(colorPanelState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (divRef) {
      draw(divRef?.current?.id ?? '');
    }
  }, [divRef]);

  const handleClose = () => {
    dispatch(closeColorPanel());
  }

  return (
    <div
      id="colors-panel"
      ref={divRef}
      className="window colors-panel"
      style={{
        display: panelState ? 'block' : 'none',
      }}
    >
      <div className="title-bar">
        <div className="title-bar-text">Colors</div>
        <div className="title-bar-controls">
          <button aria-label="Close" onClick={handleClose} />
        </div>
      </div>
      <div className="window-body colors">
        {COLORS.map((color) => (
          <ColorItem key={color} color={color} />
        ))}
      </div>
    </div>
  )
};
