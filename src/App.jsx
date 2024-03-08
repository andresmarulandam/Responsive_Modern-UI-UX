import { Brand, NavBar } from './components';
import { Header, WhatGPT3 } from './containers';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <NavBar />
        <Header />
      </div>
      <div>
        <Brand />
        <WhatGPT3 />
      </div>
    </div>
  );
}

export default App;
