import { Brand, CallToAction, NavBar } from './components';
import { Features, Header, Possibility, WhatGPT3 } from './containers';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <NavBar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CallToAction />
    </div>
  );
}

export default App;
