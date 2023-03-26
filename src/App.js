import React from 'react';
import './App.css';

import {Main} from "./features/Main/Main";
import {Header} from "./features/Header/Header";

function App() {
  return (
    <div className="App">
       <Header />
        <Main />
    </div>
  );
}

export default App;
