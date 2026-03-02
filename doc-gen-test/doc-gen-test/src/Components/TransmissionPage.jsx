// components/TransmissionPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Styles/FormPages.css";

const TransmissionPage = () => {
  const [selectedHeir, setSelectedHeir] = useState(1);
  const [selectedProcesses, setSelectedProcesses] = useState({ duplicate: false, transmission: false });
  const [legalHeirs, setLegalHeirs] = useState({
    1: [{
      personal: {
        name: '',
        age: '',
        relation: '',
        fatherName: '',
        pan: '',
        demat: '',
        address: '',
        pincode: '',
        city: '',
        state: '',
        mobile: '',
        email: ''
      },
      bank: {
        accountNo: '',
        bankName: '',
        branch: '',
        ifsc: '',
        city: '',
        pincode: '',
        micr: ''
      }
    }],
    2: [{
      personal: {
        name: '',
        age: '',
        relation: '',
        fatherName: '',
        pan: '',
        demat: '',
        address: '',
        pincode: '',
        city: '',
        state: '',
        mobile: '',
        email: ''
      },
      bank: {
        accountNo: '',
        bankName: '',
        branch: '',
        ifsc: '',
        city: '',
        pincode: '',
        micr: ''
      }
    }],
    3: [{
      personal: {
        name: '',
        age: '',
        relation: '',
        fatherName: '',
        pan: '',
        demat: '',
        address: '',
        pincode: '',
        city: '',
        state: '',
        mobile: '',
        email: ''
      },
      bank: {
        accountNo: '',
        bankName: '',
        branch: '',
        ifsc: '',
        city: '',
        pincode: '',
        micr: ''
      }
    }]
  });

  const [shareholders, setShareholders] = useState([{
    sno: 1,
    name: '',
    dateOfDemise: ''
  }]);

  const [securities, setSecurities] = useState([{
    srNo: 1,
    certificateNo: '',
    distinctiveFrom: '',
    distinctiveTo: '',
    shares: '',
    totalShares: ''
  }]);

  const [otherInfo, setOtherInfo] = useState({
    formDate: '',
    folioNo: ''
  });

  const [company, setCompany] = useState({
    name: '',
    address: ''
  });

  const [rta, setRta] = useState({
    name: '',
    address: ''
  });

  const [documents, setDocuments] = useState({
    authLetter: false,
    requestLetter: false,
    isr1: false,
    sh13: false,
    isr4: false,
    formA: false,
    formB: false,
    isr5: false,
    annexureD1: false,
    annexureD2: false,
    annexureD3: false,
    annexureE: false,
    selectAll: false
  });

  const navigate = useNavigate();

  useEffect(() => {
    const processes = JSON.parse(localStorage.getItem('selectedProcesses') || '{}');
    setSelectedProcesses(processes);
  }, []);

  const addHeirEntry = (heirNum) => {
    setLegalHeirs(prev => ({
      ...prev,
      [heirNum]: [...prev[heirNum], { ...prev[heirNum][0] }]
    }));
  };

  const addShareholder = () => {
    setShareholders(prev => [...prev, {
      sno: prev.length + 1,
      name: '',
      dateOfDemise: ''
    }]);
  };

  const addSecurity = () => {
    setSecurities(prev => [...prev, {
      srNo: prev.length + 1,
      certificateNo: '',
      distinctiveFrom: '',
      distinctiveTo: '',
      shares: '',
      totalShares: ''
    }]);
  };

  const handleDocumentChange = (doc) => {
    if (doc === 'selectAll') {
      const newValue = !documents.selectAll;
      const allDocs = {};
      Object.keys(documents).forEach(key => {
        allDocs[key] = newValue;
      });
      setDocuments(allDocs);
    } else {
      setDocuments(prev => {
        const newState = { ...prev, [doc]: !prev[doc] };
        // Check if all documents are selected
        const allSelected = Object.keys(newState)
          .filter(key => key !== 'selectAll')
          .every(key => newState[key]);
        return { ...newState, selectAll: allSelected };
      });
    }
  };

  const handleSubmit = () => {
    console.log('Form data:', { legalHeirs, shareholders, securities, otherInfo, company, rta, documents });
    alert('Form submitted successfully!');
  };

  const handleReset = () => {
    window.location.reload();
  };

  const getDocumentList = () => {
    if (selectedProcesses.duplicate && selectedProcesses.transmission) {
      return [
        { id: 1, name: 'Authorization Letter' },
        { id: 2, name: 'Request Letter' },
        { id: 3, name: 'ISR 1' },
        { id: 4, name: 'SH-13' },
        { id: 5, name: 'ISR 4' },
        { id: 6, name: 'Form A' },
        { id: 7, name: 'Form B Identity' },
        { id: 8, name: 'ISR 5 - AnnexureC' },
        { id: 9, name: 'AnnexureD - Affidavit L H 1' },
        { id: 10, name: 'AnnexureD - Affidavit L H 2' },
        { id: 11, name: 'AnnexureD - Affidavit L H 3' },
        { id: 12, name: 'AnnexureE - Identity Form' }
      ];
    } else {
      return [
        { id: 1, name: 'Authorization Letter' },
        { id: 2, name: 'Request Letter' },
        { id: 3, name: 'ISR 1' },
        { id: 4, name: 'SH-13' },
        { id: 5, name: 'ISR 5 - AnnexureC' },
        { id: 6, name: 'AnnexureD - Affidavit L H 1' },
        { id: 7, name: 'AnnexureD - Affidavit L H 2' },
        { id: 8, name: 'AnnexureD - Affidavit L H 3' },
        { id: 9, name: 'AnnexureE - Identity Form' }
      ];
    }
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h1 className="form-title">Legal Heir Transmission</h1>
        
        <div className="selector-container">
          <label>Select Legal Heir:</label>
          <select 
            value={selectedHeir}
            onChange={(e) => setSelectedHeir(Number(e.target.value))}
            className="shareholder-select"
          >
            <option value={1}>Legal Heir 1</option>
            <option value={2}>Legal Heir 2</option>
            <option value={3}>Legal Heir 3</option>
          </select>
        </div>

        {legalHeirs[selectedHeir].map((heir, index) => (
          <div key={index} className="shareholder-section">
            <div className="section-header">
              <h2>Legal Heir {selectedHeir} - Entry {index + 1}</h2>
              {index === legalHeirs[selectedHeir].length - 1 && (
                <button 
                  className="add-btn"
                  onClick={() => addHeirEntry(selectedHeir)}
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
                  <label>Age *</label>
                  <input type="number" placeholder="Enter age" />
                </div>
                <div className="form-group">
                  <label>Relation with Shareholder *</label>
                  <input type="text" placeholder="Enter relation" />
                </div>
                <div className="form-group">
                  <label>Father's Name *</label>
                  <input type="text" placeholder="Enter father's name" />
                </div>
                <div className="form-group">
                  <label>PAN Card Number *</label>
                  <input type="text" placeholder="Enter PAN" />
                </div>
                <div className="form-group">
                  <label>Demat Account *</label>
                  <input type="text" placeholder="Enter Demat account" />
                </div>
                <div className="form-group full-width">
                  <label>Address *</label>
                  <textarea placeholder="Enter address" rows="2"></textarea>
                </div>
                <div className="form-group">
                  <label>Pin Code *</label>
                  <input type="text" placeholder="Enter pin code" />
                </div>
                <div className="form-group">
                  <label>City *</label>
                  <input type="text" placeholder="Enter city" />
                </div>
                <div className="form-group">
                  <label>State *</label>
                  <input type="text" placeholder="Enter state" />
                </div>
                <div className="form-group">
                  <label>Mobile Number *</label>
                  <input type="tel" placeholder="Enter mobile" />
                </div>
                <div className="form-group">
                  <label>Email *</label>
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
                <div className="form-group">
                  <label>City *</label>
                  <input type="text" placeholder="Enter city" />
                </div>
                <div className="form-group">
                  <label>Pin Code *</label>
                  <input type="text" placeholder="Enter pin code" />
                </div>
                <div className="form-group">
                  <label>MICR Number *</label>
                  <input type="text" placeholder="Enter MICR number" />
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Shareholders Information */}
        <div className="form-section">
          <div className="section-header">
            <h3>Shareholders Information</h3>
            <button className="add-btn" onClick={addShareholder}>+</button>
          </div>
          {shareholders.map((shareholder, index) => (
            <div key={index} className="security-entry">
              <h4>Shareholder {index + 1}</h4>
              <div className="form-grid">
                <div className="form-group">
                  <label>Name *</label>
                  <input type="text" placeholder="Enter shareholder name" />
                </div>
                <div className="form-group">
                  <label>Date of Demise *</label>
                  <input type="date" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Important Information */}
        <div className="form-section">
          <h3>Other Important Information</h3>
          <div className="form-grid">
            <div className="form-group">
              <label>Form Date *</label>
              <input type="date" />
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
            <button className="add-btn" onClick={addSecurity}>+</button>
          </div>
          {securities.map((security, index) => (
            <div key={index} className="security-entry">
              <h4>Entry {index + 1}</h4>
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
              {getDocumentList().map(doc => (
                <tr key={doc.id}>
                  <td>{doc.id}</td>
                  <td>{doc.name}</td>
                  <td>
                    <input 
                      type="checkbox" 
                      checked={documents[Object.keys(documents)[doc.id - 1]] || false}
                      onChange={() => handleDocumentChange(Object.keys(documents)[doc.id - 1])}
                    />
                  </td>
                </tr>
              ))}
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

export default TransmissionPage;