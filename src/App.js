import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Default from './screens/Default/_components/Default';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Default />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
