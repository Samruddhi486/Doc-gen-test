// components/HomePage.js
import React from 'react';

function HomePage({ selectedProcesses, setSelectedProcesses, onProceed }) {
  const handleCheckboxChange = (process) => {
    setSelectedProcesses(prev => ({
      ...prev,
      [process]: !prev[process]
    }));
  };

  const isAnySelected = selectedProcesses.duplicate || selectedProcesses.transmission;

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to Legal Heir Management System</h1>
        <p>Streamline your legal documentation process with our comprehensive solution</p>
      </div>

      <div className="options-container">
        <div 
          className={`option-card ${selectedProcesses.duplicate ? 'selected' : ''}`}
          onClick={() => handleCheckboxChange('duplicate')}
        >
          <div className="option-icon">📄</div>
          <h2>Duplicate Legal Heir</h2>
          <p>Process duplicate legal heir certificates and documentation</p>
          <div className="checkbox-wrapper">
            <input
              type="checkbox"
              id="duplicate"
              checked={selectedProcesses.duplicate}
              onChange={(e) => {
                e.stopPropagation();
                handleCheckboxChange('duplicate');
              }}
            />
            <label htmlFor="duplicate" onClick={(e) => e.stopPropagation()}>
              Select Duplicate Process
            </label>
          </div>
        </div>

        <div 
          className={`option-card ${selectedProcesses.transmission ? 'selected' : ''}`}
          onClick={() => handleCheckboxChange('transmission')}
        >
          <div className="option-icon">🔄</div>
          <h2>Transmission</h2>
          <p>Handle transmission of shares and legal heir documentation</p>
          <div className="checkbox-wrapper">
            <input
              type="checkbox"
              id="transmission"
              checked={selectedProcesses.transmission}
              onChange={(e) => {
                e.stopPropagation();
                handleCheckboxChange('transmission');
              }}
            />
            <label htmlFor="transmission" onClick={(e) => e.stopPropagation()}>
              Select Transmission Process
            </label>
          </div>
        </div>
      </div>

      <div className="proceed-button">
        <button 
          className="proceed-btn" 
          onClick={onProceed}
          disabled={!isAnySelected}
        >
          Proceed to Documentation
        </button>
      </div>

      <div className="features-section">
        <div className="feature">
          <span>⚡</span>
          <h3>Fast Processing</h3>
          <p>Quick and efficient documentation process</p>
        </div>
        <div className="feature">
          <span>🔒</span>
          <h3>Secure & Confidential</h3>
          <p>Your data is safe with us</p>
        </div>
        <div className="feature">
          <span>📋</span>
          <h3>Comprehensive Forms</h3>
          <p>All necessary fields included</p>
        </div>
        <div className="feature">
          <span>✅</span>
          <h3>Easy to Use</h3>
          <p>User-friendly interface</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;