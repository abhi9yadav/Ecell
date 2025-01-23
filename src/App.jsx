import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ResponsiveContainer from './pages/page1';
import Page2 from './pages/Page2';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Page2 />} />
        <Route path="/grid" element={<ResponsiveContainer />} />
      </Routes>
    </Router>
  );
}

export default App;