// App.js
import React, { useState } from 'react';
import './App.css';
import HomePage from './Components/HomePage';
import DuplicateLegalHeir from './Components/DuplicateLegalHeir';
import LegalHeir from './Components/LegalHeir';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProcesses, setSelectedProcesses] = useState({
    duplicate: false,
    transmission: false
  });

  const handleProceed = () => {
    if (selectedProcesses.duplicate && selectedProcesses.transmission) {
      setCurrentPage('transmission');
    } else if (selectedProcesses.duplicate) {
      setCurrentPage('duplicate');
    } else if (selectedProcesses.transmission) {
      setCurrentPage('legalheir');
    }
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return (
          <HomePage 
            selectedProcesses={selectedProcesses}
            setSelectedProcesses={setSelectedProcesses}
            onProceed={handleProceed}
          />
        );
      case 'duplicate':
        return <DuplicateLegalHeir setCurrentPage={setCurrentPage} />;
      case 'legalheir':
        return <LegalHeir setCurrentPage={setCurrentPage} />;
      case 'transmission':
        return <LegalHeir setCurrentPage={setCurrentPage} isTransmission={true} />;
      default:
        return <HomePage 
          selectedProcesses={selectedProcesses}
          setSelectedProcesses={setSelectedProcesses}
          onProceed={handleProceed}
        />;
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;