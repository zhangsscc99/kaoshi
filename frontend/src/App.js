import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import GradingPage from './pages/GradingPage';
import GradingPageNew from './pages/GradingPageNew';
import ResultPage from './pages/ResultPage';
import ResultPageNew from './pages/ResultPageNew';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/grading" replace />} />
          <Route path="/grading" element={<GradingPage />} />
          <Route path="/grading-new" element={<GradingPageNew />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/result-new" element={<ResultPageNew />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

