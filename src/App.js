import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Mainpage from './Components/Mainpage';
import React from 'react';


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <div className='Appcss'>
          <Mainpage />
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
