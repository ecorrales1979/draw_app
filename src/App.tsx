import React from 'react';
import './App.css';

function App() {
  return (
    <div className="window">
      <div className="title-bar">
        <div className="title-bar-text">Draw App</div>
        <div className="title-bar-controls">
          <button aria-label="Close" />
        </div>
      </div>
    </div>
  );
}

export default App;
