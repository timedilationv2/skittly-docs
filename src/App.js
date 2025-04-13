import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import WikiPage from './WikiPage';

function App() {
  return (
    <Router>
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold mb-4">Skittly Documentation</h1>

        <nav className="flex gap-4 mb-8">
          <Link to="/wiki/Home" className="text-blue-500">Home</Link>
          <Link to="/wiki/Frontend-Application" className="text-blue-500">Frontend</Link>
          <Link to="/wiki/Backend-and-API" className="text-blue-500">Backend & API</Link>
          <Link to="/wiki/Packages-and-Releases" className="text-blue-500">Packages</Link>
          <Link to="/wiki/CI-CD-Workflows" className="text-blue-500">CI/CD</Link>
        </nav>

        <Routes>
          <Route path="/wiki/:page" element={<WikiPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

