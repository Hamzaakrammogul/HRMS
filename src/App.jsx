import React from 'react';
import { MainPanel } from './components';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (

    <Routes>
      <Route path='*' element={<MainPanel />} />
    </Routes>

  );
};

export default App;