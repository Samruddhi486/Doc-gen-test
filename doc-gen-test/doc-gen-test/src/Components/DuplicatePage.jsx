// components/DuplicatePage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Styles/FormPages.css";


const DuplicatePage = () => {
  const [selectedShareholder, setSelectedShareholder] = useState(1);
  const [shareholders, setShareholders] = useState({
    1: [{
      personal: {
        name: '',
        fatherName: '',
        pan: '',
        demat: ''
      },
      contact: {
        address: '',
        pincode: '',
        mobile: '',
        email: ''
      },
      bank: {
        accountNo: '',
        bankName: '',
        branch: '',
        ifsc: ''
      },
      other: {
        formDate: '',
        faceValue: '',
        folioNo: ''
      },
      securities: [{
        srNo: 1,
        certificateNo: '',
        distinctiveFrom: '',
        distinctiveTo: '',
        shares: '',
        totalShares: ''
      }],
      company: {
        name: '',
        address: ''
      },
      rta: {
        name: '',
        address: ''
      }
    }],
    2: [{
      personal: {
        name: '',
        fatherName: '',
        pan: ''
      },
      contact: {
        address: '',
        pincode: '',
        mobile: '',
        email: ''
      },
      bank: {
        accountNo: '',
        bankName: '',
        branch: '',
        ifsc: ''
      }
    }],
    3: [{
      personal: {
        name: '',
        fatherName: '',
        pan: ''
      },
      contact: {
        address: '',
        pincode: '',
        mobile: '',
        email: ''
      },
      bank: {
        accountNo: '',
        bankName: '',
        branch: '',
        ifsc: ''
      }
    }]
  });

  const [documents, setDocuments] = useState({
    authLetter: false,
    requestLetter: false,
    isr1: false,
    sh13: false,
    isr4: false,
    formA: false,
    formB: false,
    selectAll: false
  });

  const navigate = useNavigate();

  const addShareholderEntry = (shareholderNum) => {
    setShareholders(prev => ({
      ...prev,
      [shareholderNum]: [...prev[shareholderNum], { ...prev[shareholderNum][0] }]
    }));
  };

  const addSecurityEntry = () => {
    setShareholders(prev => ({
      ...prev,
      [selectedShareholder]: prev[selectedShareholder].map((sh, index) => {
        if (index === 0) {
          return {
            ...sh,
            securities: [...sh.securities, {
              srNo: sh.securities.length + 1,
              certificateNo: '',
              distinctiveFrom: '',
              distinctiveTo: '',
              shares: '',
              totalShares: ''
            }]
          };
        }
        return sh;
      })
    }));
  };

  const handleDocumentChange = (doc) => {
    if (doc === 'selectAll') {
      const newValue = !documents.selectAll;
      setDocuments({
        authLetter: newValue,
        requestLetter: newValue,
        isr1: newValue,
        sh13: newValue,
        isr4: newValue,
        formA: newValue,
        formB: newValue,
        selectAll: newValue
      });
    } else {
      setDocuments(prev => {
        const newState = { ...prev, [doc]: !prev[doc] };
        // Check if all are selected
        const allSelected = ['authLetter', 'requestLetter', 'isr1', 'sh13', 'isr4', 'formA', 'formB']
          .every(d => newState[d]);
        return { ...newState, selectAll: allSelected };
      });
    }
  };

  const handleSubmit = () => {
    console.log('Form data:', { shareholders, documents });
    alert('Form submitted successfully!');
  };

  const handleReset = () => {
    // Reset form logic here
    window.location.reload();
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h1 className="form-title">Duplicate Share Certificate</h1>
        
        <div className="selector-container">
          <label>Select Shareholder:</label>
          <select 
            value={selectedShareholder}
            onChange={(e) => setSelectedShareholder(Number(e.target.value))}
            className="shareholder-select"
          >
            <option value={1}>Shareholder 1</option>
            <option value={2}>Shareholder 2</option>
            <option value={3}>Shareholder 3</option>
          </select>
        </div>

        {shareholders[selectedShareholder].map((shareholder, index) => (
          <div key={index} className="shareholder-section">
            <div className="section-header">
              <h2>Shareholder {selectedShareholder} - Entry {index + 1}</h2>
              {selectedShareholder !== 1 && index === shareholders[selectedShareholder].length - 1 && (
                <button 
                  className="add-btn"
                  onClick={() => addShareholderEntry(selectedShareholder)}
                >
                  +
                </button>
              )}
            </div>

            {/* Personal Details */}
            <div className="form-section">
              <h3>Personal Details</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label>Name *</label>
                  <input type="text" placeholder="Enter full name" />
                </div>
                <div className="form-group">
                  <label>Father's Name *</label>
                  <input type="text" placeholder="Enter father's name" />
                </div>
                <div className="form-group">
                  <label>PAN Card Number *</label>
                  <input type="text" placeholder="Enter PAN" />
                </div>
                {selectedShareholder === 1 && (
                  <div className="form-group">
                    <label>Demat Account *</label>
                    <input type="text" placeholder="Enter Demat account" />
                  </div>
                )}
              </div>
            </div>

            {/* Contact Details */}
            <div className="form-section">
              <h3>Contact Details</h3>
              <div className="form-grid">
                <div className="form-group full-width">
                  <label>Address *</label>
                  <textarea placeholder="Enter complete address" rows="2"></textarea>
                </div>
                <div className="form-group">
                  <label>Pin Code *</label>
                  <input type="text" placeholder="Enter pin code" />
                </div>
                <div className="form-group">
                  <label>Mobile Number *</label>
                  <input type="tel" placeholder="Enter mobile number" />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input type="email" placeholder="Enter email" />
                </div>
              </div>
            </div>

            {/* Bank Details */}
            <div className="form-section">
              <h3>Bank Details</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label>Account Number *</label>
                  <input type="text" placeholder="Enter account number" />
                </div>
                <div className="form-group">
                  <label>Bank Name *</label>
                  <input type="text" placeholder="Enter bank name" />
                </div>
                <div className="form-group">
                  <label>Branch *</label>
                  <input type="text" placeholder="Enter branch" />
                </div>
                <div className="form-group">
                  <label>IFSC Code *</label>
                  <input type="text" placeholder="Enter IFSC code" />
                </div>
              </div>
            </div>

            {selectedShareholder === 1 && (
              <>
                {/* Other Important Information */}
                <div className="form-section">
                  <h3>Other Important Information</h3>
                  <div className="form-grid">
                    <div className="form-group">
                      <label>Form Date *</label>
                      <input type="date" />
                    </div>
                    <div className="form-group">
                      <label>Face Value *</label>
                      <input type="text" placeholder="Enter face value" />
                    </div>
                    <div className="form-group">
                      <label>Folio Number *</label>
                      <input type="text" placeholder="Enter folio number" />
                    </div>
                  </div>
                </div>

                {/* Securities Information */}
                <div className="form-section">
                  <div className="section-header">
                    <h3>Securities Information</h3>
                    <button className="add-btn" onClick={addSecurityEntry}>+</button>
                  </div>
                  {shareholder.securities.map((security, secIndex) => (
                    <div key={secIndex} className="security-entry">
                      <h4>Entry {secIndex + 1}</h4>
                      <div className="form-grid">
                        <div className="form-group">
                          <label>Certificate Number *</label>
                          <input type="text" placeholder="Enter certificate number" />
                        </div>
                        <div className="form-group">
                          <label>Distinctive From *</label>
                          <input type="text" placeholder="Enter from number" />
                        </div>
                        <div className="form-group">
                          <label>Distinctive To *</label>
                          <input type="text" placeholder="Enter to number" />
                        </div>
                        <div className="form-group">
                          <label>Shares *</label>
                          <input type="text" placeholder="Enter shares" />
                        </div>
                        <div className="form-group">
                          <label>Total Shares *</label>
                          <input type="text" placeholder="Enter total shares" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Company Information */}
                <div className="form-section">
                  <h3>Company Information</h3>
                  <div className="form-grid">
                    <div className="form-group full-width">
                      <label>Company Name *</label>
                      <input type="text" placeholder="Enter company name" />
                    </div>
                    <div className="form-group full-width">
                      <label>Company Address *</label>
                      <textarea placeholder="Enter company address" rows="2"></textarea>
                    </div>
                  </div>
                </div>

                {/* RTA Information */}
                <div className="form-section">
                  <h3>RTA Information</h3>
                  <div className="form-grid">
                    <div className="form-group full-width">
                      <label>RTA Name *</label>
                      <input type="text" placeholder="Enter RTA name" />
                    </div>
                    <div className="form-group full-width">
                      <label>RTA Address *</label>
                      <textarea placeholder="Enter RTA address" rows="2"></textarea>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}

        {/* Document List */}
        <div className="form-section document-section">
          <h3>Document List</h3>
          <table className="document-table">
            <thead>
              <tr>
                <th>No.</th>
                <th>Document List</th>
                <th>Select (Yes/No)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Authorization Letter</td>
                <td>
                  <input 
                    type="checkbox" 
                    checked={documents.authLetter}
                    onChange={() => handleDocumentChange('authLetter')}
                  />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Request Letter</td>
                <td>
                  <input 
                    type="checkbox"
                    checked={documents.requestLetter}
                    onChange={() => handleDocumentChange('requestLetter')}
                  />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>ISR 1</td>
                <td>
                  <input 
                    type="checkbox"
                    checked={documents.isr1}
                    onChange={() => handleDocumentChange('isr1')}
                  />
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>SH-13</td>
                <td>
                  <input 
                    type="checkbox"
                    checked={documents.sh13}
                    onChange={() => handleDocumentChange('sh13')}
                  />
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>ISR 4</td>
                <td>
                  <input 
                    type="checkbox"
                    checked={documents.isr4}
                    onChange={() => handleDocumentChange('isr4')}
                  />
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>Form A</td>
                <td>
                  <input 
                    type="checkbox"
                    checked={documents.formA}
                    onChange={() => handleDocumentChange('formA')}
                  />
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td>Form B Identity</td>
                <td>
                  <input 
                    type="checkbox"
                    checked={documents.formB}
                    onChange={() => handleDocumentChange('formB')}
                  />
                </td>
              </tr>
              <tr className="select-all-row">
                <td colSpan="2">Select All</td>
                <td>
                  <input 
                    type="checkbox"
                    checked={documents.selectAll}
                    onChange={() => handleDocumentChange('selectAll')}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Form Actions */}
        <div className="form-actions">
          <button className="submit-btn" onClick={handleSubmit}>Submit</button>
          <button className="reset-btn" onClick={handleReset}>Reset</button>
          <button className="back-btn" onClick={() => navigate('/')}>Back to Home</button>
        </div>
      </div>
    </div>
  );
};

export default DuplicatePage;