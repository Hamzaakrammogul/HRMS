import React from 'react';
import { MainPanel, SignUp } from './components';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (

    <Routes>
      <Route path='*' element={<SignUp />} />
      <Route path='/main-panel' element={<MainPanel/>}/>
    </Routes>

  );
};

export default App;