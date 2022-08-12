import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import { useState } from 'react';
import Navbar from './Navbar';
import Heroes from './Heroes';
import Dashboard from './Dashboard';
import HeroDetails from './HeroDetails';
import NewEntry from './NewEntry';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Routes>

      <Route exact path='/heroes' element={<Heroes />} />

      <Route exact path='/dashboard' element={<Dashboard />} />

      <Route exact path='/heroes/:id' element={<HeroDetails />} />

      <Route exact path='/newEntry' element=
      {<NewEntry />} />

      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
