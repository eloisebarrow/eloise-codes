import React from 'react';
import './App.css';
import HorizontalScroll from './components/HorizontalScroll';
import ProgressBar from './components/ProgressBar';
import Effect from './components/Effect'; // useEffect counter example
import ReactPlayerComp from './components/ReactPlayerComp'; // embed a video
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      {/* <HorizontalScroll />
      <ProgressBar /> */}
      <Form />
    </div>
  );
}

export default App;
