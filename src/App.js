
import { useState } from 'react';
import axios from 'axios';
import './stylemain.css';
import Heading from './Componenet/Heading';
import InputLocation from './Componenet/InputLocation';

function App() {
  return (
    <div className='container'>
      <div className='row row1 mt-1'>
        <div className='col-md-8 col-sm-12'>
          <Heading />
          <InputLocation />
        </div>
      </div>
    </div >
  );
}

export default App;
