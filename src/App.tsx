import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { beginStroke, endStroke, updateStroke } from './actions'
import { ColorPanel } from './components/ColorPanel';
import { Toolbar } from './components/Toolbar';
import { currentStrokeSelector } from './reducers/rootReducer';
import { clearCanvas, drawStroke, setCanvasSize } from './utils/canvasUtils';

const WIDTH = 1024
const HEIGHT = 768

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const currentStroke = useSelector(currentStrokeSelector);

  const getCanvasWithContext = (canvas = canvasRef.current) => {
    return {
      canvas,
      context: canvas?.getContext('2d')
    }
  }

  const isDrawing = !!currentStroke.points.length;

  const dispatch = useDispatch();
  
  const draw = ({ nativeEvent }: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = nativeEvent;
    dispatch(updateStroke(offsetX, offsetY));
  };
  
  const endDrawing = () => {
    if (isDrawing) dispatch(endStroke());
  };

  const startDrawing = ({ nativeEvent }: React.MouseEvent<HTMLCanvasElement>) => {
    const { offsetX, offsetY } = nativeEvent;
    dispatch(beginStroke(offsetX, offsetY));
  };

  useEffect(() => {
    const { canvas, context } = getCanvasWithContext();
    if (!canvas || !context) return;

    setCanvasSize(canvas, WIDTH, HEIGHT);

    context.lineJoin = 'round';
    context.lineCap = 'round';
    context.lineWidth = 5;
    context.strokeStyle = 'black';

    clearCanvas(canvas);
  }, []);

  useEffect(() => {
    const { context } = getCanvasWithContext();
    if (!context) return;

    requestAnimationFrame(() => {
      drawStroke(context, currentStroke.points, currentStroke.color);
    })
  }, [currentStroke]);

  return (
    <div id="main-window" className="window">
      <div className="title-bar">
        <div className="title-bar-text">Draw App</div>
        <div className="title-bar-controls">
          <button aria-label="Close" />
        </div>
      </div>
      <Toolbar />
      <div id="content" className="window-body">
        <ColorPanel />
        <canvas
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseOut={endDrawing}
          onMouseUp={endDrawing}
          ref={canvasRef}
        />
      </div>
    </div>
  );
}

export default App;
