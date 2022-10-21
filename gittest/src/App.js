import styled from 'styled-components';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [current, setNumb] = useState(0);

  const upNumb = () => {
    setNumb(current + 1);
  };
  const downNumb = () => {
    setNumb(current - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>{current}</div>
        <div className="contain">
          <button className="contain_button" onClick={upNumb}>
            {' '}
            +{' '}
          </button>
          <button className="contain_button" onClick={downNumb}>
            {' '}
            -{' '}
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
