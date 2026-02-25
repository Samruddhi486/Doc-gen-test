// components/DuplicateLegalHeir.js
import React, { useState } from 'react';

function DuplicateLegalHeir({ setCurrentPage }) {
  const [formData, setFormData] = useState({
    legalHeirs: [
      {
        id: 1,
        personalDetails: {
          name: '',
          fathersName: '',
          panCard: '',
          dematAccount: ''
        },
        contactDetails: {
          address: '',
          pincode: '',
          mobile: '',
          email: ''
        },
        bankDetails: {
          accountNumber: '',
          bankName: '',
          branch: '',
          ifscCode: ''
        }
      },
      {
        id: 2,
        personalDetails: {
          name: '',
          fathersName: '',
          panCard: '',
          // No demat account for legal heir 2
        },
        contactDetails: {
          address: '',
          pincode: '',
          mobile: '',
          email: ''
        },
        bankDetails: {
          accountNumber: '',
          bankName: '',
          branch: '',
          ifscCode: ''
        }
      },
      {
        id: 3,
        personalDetails: {
          name: '',
          fathersName: '',
          panCard: '',
          // No demat account for legal heir 3
        },
        contactDetails: {
          address: '',
          pincode: '',
          mobile: '',
          email: ''
        },
        bankDetails: {
          accountNumber: '',
          bankName: '',
          branch: '',
          ifscCode: ''
        }
      }
    ],
    otherInfo: {
      formDate: '',
      faceValue: '',
      folioNumber: ''
    },
    securities: [
      {
        srNo: 1,
        certificateNumber: '',
        distinctiveFrom: '',
        distinctiveTo: '',
        shares: '',
        totalShares: ''
      }
    ],
    companyInfo: {
      name: '',
      address: ''
    },
    rtaInfo: {
      name: '',
      address: ''
    },
    documents: {
      authorization: false,
      requestLetter: false,
      isr1: false,
      sh13: false,
      isr4: false,
      formA: false,
      formB: false
    }
  });

  const [shareholders, setShareholders] = useState([
    {
      id: 1,
      // Same structure as legalHeirs but for shareholders
      ...formData.legalHeirs[0]
    },
    {
      id: 2,
      ...formData.legalHeirs[1]
    },
    {
      id: 3,
      ...formData.legalHeirs[2]
    }
  ]);

  const documentList = [
    { id: 'authorization', label: 'Authorization Letter' },
    { id: 'requestLetter', label: 'Request Letter' },
    { id: 'isr1', label: 'ISR 1' },
    { id: 'sh13', label: 'SH-13' },
    { id: 'isr4', label: 'ISR 4' },
    { id: 'formA', label: 'Form A' },
    { id: 'formB', label: 'Form B Identity' }
  ];

  const handleLegalHeirChange = (heirIndex, section, field, value) => {
    const updatedHeirs = [...formData.legalHeirs];
    updatedHeirs[heirIndex][section][field] = value;
    setFormData({
      ...formData,
      legalHeirs: updatedHeirs
    });
  };

  const handleShareholderChange = (shareholderIndex, section, field, value) => {
    const updatedShareholders = [...shareholders];
    updatedShareholders[shareholderIndex][section][field] = value;
    setShareholders(updatedShareholders);
  };

  const handleDocumentChange = (docId) => {
    setFormData({
      ...formData,
      documents: {
        ...formData.documents,
        [docId]: !formData.documents[docId]
      }
    });
  };

  const selectAllDocuments = () => {
    const allSelected = Object.values(formData.documents).every(value => value);
    const newDocState = {};
    documentList.forEach(doc => {
      newDocState[doc.id] = !allSelected;
    });
    setFormData({
      ...formData,
      documents: newDocState
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  const handleReset = () => {
    // Reset logic here
    window.location.reload();
  };

  const addSecurityRow = () => {
    const newRow = {
      srNo: formData.securities.length + 1,
      certificateNumber: '',
      distinctiveFrom: '',
      distinctiveTo: '',
      shares: '',
      totalShares: ''
    };
    setFormData({
      ...formData,
      securities: [...formData.securities, newRow]
    });
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h1>Duplicate Legal Heir Application</h1>
        <button className="back-btn" onClick={() => setCurrentPage('home')}>
          ← Back to Home
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Legal Heirs Section */}
        {formData.legalHeirs.map((heir, index) => (
          <div key={heir.id} className="section">
            <h2>Legal Heir {index + 1}</h2>
            
            <h3>Personal Details</h3>
            <div className="form-grid">
              <div className="form-group">
                <label>Name *</label>
                <input
                  type="text"
                  value={heir.personalDetails.name}
                  onChange={(e) => handleLegalHeirChange(index, 'personalDetails', 'name', e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Father's Name *</label>
                <input
                  type="text"
                  value={heir.personalDetails.fathersName}
                  onChange={(e) => handleLegalHeirChange(index, 'personalDetails', 'fathersName', e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>PAN Card Number *</label>
                <input
                  type="text"
                  value={heir.personalDetails.panCard}
                  onChange={(e) => handleLegalHeirChange(index, 'personalDetails', 'panCard', e.target.value)}
                  required
                />
              </div>
              {index === 0 && (
                <div className="form-group">
                  <label>Demat Account</label>
                  <input
                    type="text"
                    value={heir.personalDetails.dematAccount}
                    onChange={(e) => handleLegalHeirChange(index, 'personalDetails', 'dematAccount', e.target.value)}
                  />
                </div>
              )}
            </div>

            <h3>Contact Details</h3>
            <div className="form-grid">
              <div className="form-group">
                <label>Address *</label>
                <textarea
                  value={heir.contactDetails.address}
                  onChange={(e) => handleLegalHeirChange(index, 'contactDetails', 'address', e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Pin Code *</label>
                <input
                  type="text"
                  value={heir.contactDetails.pincode}
                  onChange={(e) => handleLegalHeirChange(index, 'contactDetails', 'pincode', e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Mobile Number *</label>
                <input
                  type="tel"
                  value={heir.contactDetails.mobile}
                  onChange={(e) => handleLegalHeirChange(index, 'contactDetails', 'mobile', e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email Address *</label>
                <input
                  type="email"
                  value={heir.contactDetails.email}
                  onChange={(e) => handleLegalHeirChange(index, 'contactDetails', 'email', e.target.value)}
                  required
                />
              </div>
            </div>

            <h3>Bank Details</h3>
            <div className="form-grid">
              <div className="form-group">
                <label>Account Number *</label>
                <input
                  type="text"
                  value={heir.bankDetails.accountNumber}
                  onChange={(e) => handleLegalHeirChange(index, 'bankDetails', 'accountNumber', e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Bank Name *</label>
                <input
                  type="text"
                  value={heir.bankDetails.bankName}
                  onChange={(e) => handleLegalHeirChange(index, 'bankDetails', 'bankName', e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Branch *</label>
                <input
                  type="text"
                  value={heir.bankDetails.branch}
                  onChange={(e) => handleLegalHeirChange(index, 'bankDetails', 'branch', e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>IFSC Code *</label>
                <input
                  type="text"
                  value={heir.bankDetails.ifscCode}
                  onChange={(e) => handleLegalHeirChange(index, 'bankDetails', 'ifscCode', e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
        ))}

        {/* Shareholders Section */}
        <div className="section">
          <h2>Shareholders Information</h2>
          {shareholders.map((shareholder, index) => (
            <div key={shareholder.id} className="shareholder-section">
              <h3>Shareholder {index + 1}</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label>Name *</label>
                  <input
                    type="text"
                    value={shareholder.personalDetails.name}
                    onChange={(e) => handleShareholderChange(index, 'personalDetails', 'name', e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Father's Name *</label>
                  <input
                    type="text"
                    value={shareholder.personalDetails.fathersName}
                    onChange={(e) => handleShareholderChange(index, 'personalDetails', 'fathersName', e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>PAN Card Number *</label>
                  <input
                    type="text"
                    value={shareholder.personalDetails.panCard}
                    onChange={(e) => handleShareholderChange(index, 'personalDetails', 'panCard', e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Important Information */}
        <div className="section">
          <h2>Other Important Information</h2>
          <div className="form-grid">
            <div className="form-group">
              <label>Form Date *</label>
              <input
                type="date"
                value={formData.otherInfo.formDate}
                onChange={(e) => setFormData({
                  ...formData,
                  otherInfo: { ...formData.otherInfo, formDate: e.target.value }
                })}
                required
              />
            </div>
            <div className="form-group">
              <label>Face Value *</label>
              <input
                type="text"
                value={formData.otherInfo.faceValue}
                onChange={(e) => setFormData({
                  ...formData,
                  otherInfo: { ...formData.otherInfo, faceValue: e.target.value }
                })}
                required
              />
            </div>
            <div className="form-group">
              <label>Folio Number *</label>
              <input
                type="text"
                value={formData.otherInfo.folioNumber}
                onChange={(e) => setFormData({
                  ...formData,
                  otherInfo: { ...formData.otherInfo, folioNumber: e.target.value }
                })}
                required
              />
            </div>
          </div>
        </div>

        {/* Securities Information */}
        <div className="section">
          <h2>Securities Information</h2>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Sr No.</th>
                  <th>Certificate Number</th>
                  <th>Distinctive From</th>
                  <th>Distinctive To</th>
                  <th>Shares</th>
                  <th>Total Shares</th>
                </tr>
              </thead>
              <tbody>
                {formData.securities.map((security, index) => (
                  <tr key={index}>
                    <td>{security.srNo}</td>
                    <td>
                      <input
                        type="text"
                        value={security.certificateNumber}
                        onChange={(e) => {
                          const updatedSecurities = [...formData.securities];
                          updatedSecurities[index].certificateNumber = e.target.value;
                          setFormData({ ...formData, securities: updatedSecurities });
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={security.distinctiveFrom}
                        onChange={(e) => {
                          const updatedSecurities = [...formData.securities];
                          updatedSecurities[index].distinctiveFrom = e.target.value;
                          setFormData({ ...formData, securities: updatedSecurities });
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={security.distinctiveTo}
                        onChange={(e) => {
                          const updatedSecurities = [...formData.securities];
                          updatedSecurities[index].distinctiveTo = e.target.value;
                          setFormData({ ...formData, securities: updatedSecurities });
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={security.shares}
                        onChange={(e) => {
                          const updatedSecurities = [...formData.securities];
                          updatedSecurities[index].shares = e.target.value;
                          setFormData({ ...formData, securities: updatedSecurities });
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={security.totalShares}
                        onChange={(e) => {
                          const updatedSecurities = [...formData.securities];
                          updatedSecurities[index].totalShares = e.target.value;
                          setFormData({ ...formData, securities: updatedSecurities });
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button type="button" onClick={addSecurityRow} className="select-all">
            Add More Securities
          </button>
        </div>

        {/* Company Information */}
        <div className="section">
          <h2>Company's Information</h2>
          <div className="form-grid">
            <div className="form-group">
              <label>Company Name *</label>
              <input
                type="text"
                value={formData.companyInfo.name}
                onChange={(e) => setFormData({
                  ...formData,
                  companyInfo: { ...formData.companyInfo, name: e.target.value }
                })}
                required
              />
            </div>
            <div className="form-group">
              <label>Company Address *</label>
              <textarea
                value={formData.companyInfo.address}
                onChange={(e) => setFormData({
                  ...formData,
                  companyInfo: { ...formData.companyInfo, address: e.target.value }
                })}
                required
              />
            </div>
          </div>
        </div>

        {/* RTA Information */}
        <div className="section">
          <h2>RTA's Information</h2>
          <div className="form-grid">
            <div className="form-group">
              <label>RTA Name *</label>
              <input
                type="text"
                value={formData.rtaInfo.name}
                onChange={(e) => setFormData({
                  ...formData,
                  rtaInfo: { ...formData.rtaInfo, name: e.target.value }
                })}
                required
              />
            </div>
            <div className="form-group">
              <label>RTA Address *</label>
              <textarea
                value={formData.rtaInfo.address}
                onChange={(e) => setFormData({
                  ...formData,
                  rtaInfo: { ...formData.rtaInfo, address: e.target.value }
                })}
                required
              />
            </div>
          </div>
        </div>

        {/* Document List */}
        <div className="document-section">
          <h2>Document List</h2>
          {documentList.map((doc) => (
            <div key={doc.id} className="document-item">
              <input
                type="checkbox"
                id={doc.id}
                checked={formData.documents[doc.id]}
                onChange={() => handleDocumentChange(doc.id)}
              />
              <label htmlFor={doc.id}>{doc.label}</label>
              <select>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          ))}
          <button type="button" onClick={selectAllDocuments} className="select-all">
            Select All
          </button>
        </div>

        {/* Form Actions */}
        <div className="form-actions">
          <button type="submit" className="submit-btn">
            Submit Application
          </button>
          <button type="button" onClick={handleReset} className="reset-btn">
            Reset Form
          </button>
        </div>
      </form>
    </div>
  );
}

export default DuplicateLegalHeir;