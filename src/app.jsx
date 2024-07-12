import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Nav from './navbar/Nav';
import Api from './apipage/Api';
import Home from './home/Home';
import Privacy from './privacy/Privacy';
import Term from './terms/Term';
import Reportpage from './report/Reportpage';
import Contact from './contact/Contact';
import Footerpage from './footer/Footerpage';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="" element={<Nav/>} />
          <Route path="" element={<Home/>} />
          <Route path="/api" element={<Api/>} />
          <Route path="/privacy" element={<Privacy/>} />
          <Route path="/term" element={<Term/>} />
          <Route path="/report" element={<Reportpage/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="" element={<Footerpage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
