// components/HomePage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Styles/HomePage.css";

const HomePage = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    duplicate: false,
    transmission: false
  });
  const navigate = useNavigate();

  const handleCheckboxChange = (option) => {
    setSelectedOptions(prev => ({
      ...prev,
      [option]: !prev[option]
    }));
  };

  const handleProceed = () => {
    // Store selection in localStorage for later use
    localStorage.setItem('selectedProcesses', JSON.stringify(selectedOptions));
    
    if (selectedOptions.transmission && selectedOptions.duplicate) {
      navigate('/transmission');
    } else if (selectedOptions.duplicate) {
      navigate('/duplicate');
    } else if (selectedOptions.transmission) {
      navigate('/transmission');
    }
  };

  return (
    <div className="home-container">
      <div className="home-card">
        <h1 className="home-title">Welcome to Share Transfer Portal</h1>
        <p className="home-subtitle">Please select the required process(es)</p>
        
        <div className="options-container">
          <div className={`option-card ${selectedOptions.duplicate ? 'selected' : ''}`}>
            <label className="checkbox-container">
              <input
                type="checkbox"
                checked={selectedOptions.duplicate}
                onChange={() => handleCheckboxChange('duplicate')}
              />
              <span className="checkmark"></span>
              <div className="option-content">
                <h2>Duplicate</h2>
                <p>Process for duplicate share certificates</p>
              </div>
            </label>
          </div>

          <div className={`option-card ${selectedOptions.transmission ? 'selected' : ''}`}>
            <label className="checkbox-container">
              <input
                type="checkbox"
                checked={selectedOptions.transmission}
                onChange={() => handleCheckboxChange('transmission')}
              />
              <span className="checkmark"></span>
              <div className="option-content">
                <h2>Transmission</h2>
                <p>Process for transmission of shares to legal heirs</p>
              </div>
            </label>
          </div>
        </div>

        {selectedOptions.duplicate && selectedOptions.transmission && (
          <div className="info-message">
            <p>Both processes selected. You'll be directed to the Transmission page (includes both processes).</p>
          </div>
        )}

        <button 
          className="proceed-btn"
          onClick={handleProceed}
          disabled={!selectedOptions.duplicate && !selectedOptions.transmission}
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default HomePage;