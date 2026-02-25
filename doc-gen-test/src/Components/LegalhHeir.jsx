// components/LegalHeir.js
import React, { useState } from 'react';

function LegalHeir({ setCurrentPage, isTransmission = false }) {
  const [formData, setFormData] = useState({
    legalHeirs: [
      {
        id: 1,
        contactDetails: {
          name: '',
          age: '',
          relation: '',
          fathersName: '',
          panCard: '',
          dematAccount: '',
          address: '',
          pincode: '',
          city: '',
          state: '',
          mobile: '',
          email: '',
          accountNumber: '',
          bankName: '',
          branch: '',
          ifscCode: '',
          bankCity: '',
          bankPincode: '',
          micr: ''
        }
      },
      {
        id: 2,
        contactDetails: {
          name: '',
          age: '',
          relation: '',
          fathersName: '',
          panCard: '',
          dematAccount: '',
          address: '',
          pincode: '',
          city: '',
          state: '',
          mobile: '',
          email: '',
          accountNumber: '',
          bankName: '',
          branch: '',
          ifscCode: '',
          bankCity: '',
          bankPincode: '',
          micr: ''
        }
      },
      {
        id: 3,
        contactDetails: {
          name: '',
          age: '',
          relation: '',
          fathersName: '',
          panCard: '',
          dematAccount: '',
          address: '',
          pincode: '',
          city: '',
          state: '',
          mobile: '',
          email: '',
          accountNumber: '',
          bankName: '',
          branch: '',
          ifscCode: '',
          bankCity: '',
          bankPincode: '',
          micr: ''
        }
      }
    ],
    shareholders: [
      {
        sno: 1,
        name: '',
        dateOfDemise: ''
      },
      {
        sno: 2,
        name: '',
        dateOfDemise: ''
      },
      {
        sno: 3,
        name: '',
        dateOfDemise: ''
      }
    ],
    otherInfo: {
      formDate: '',
      folioNumber: ''
    },
    companyInfo: {
      name: '',
      address: ''
    },
    documents: {
      authorization: false,
      requestLetter: false,
      isr1: false,
      sh13: false,
      isr5: false,
      annexureD1: false,
      annexureD2: false,
      annexureD3: false,
      annexureE: false
    }
  });

  const documentList = [
    { id: 'authorization', label: 'Authorization Letter' },
    { id: 'requestLetter', label: 'Request Letter' },
    { id: 'isr1', label: 'ISR 1' },
    { id: 'sh13', label: 'SH-13' },
    { id: 'isr5', label: 'ISR 5 - Annexure C' },
    { id: 'annexureD1', label: 'Annexure D - Affidavit L H 1' },
    { id: 'annexureD2', label: 'Annexure D - Affidavit L H 2' },
    { id: 'annexureD3', label: 'Annexure D - Affidavit L H 3' },
    { id: 'annexureE', label: 'Annexure E - Identity Form' }
  ];

  const handleLegalHeirChange = (heirIndex, field, value) => {
    const updatedHeirs = [...formData.legalHeirs];
    updatedHeirs[heirIndex].contactDetails[field] = value;
    setFormData({
      ...formData,
      legalHeirs: updatedHeirs
    });
  };

  const handleShareholderChange = (index, field, value) => {
    const updatedShareholders = [...formData.shareholders];
    updatedShareholders[index][field] = value;
    setFormData({
      ...formData,
      shareholders: updatedShareholders
    });
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
    window.location.reload();
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h1>{isTransmission ? 'Transmission' : 'Legal Heir'} Application</h1>
        <button className="back-btn" onClick={() => setCurrentPage('home')}>
          ← Back to Home
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Legal Heirs Section */}
        {formData.legalHeirs.map((heir, index) => (
          <div key={heir.id} className="section">
            <h2>Legal Heir {index + 1} - Contact Details</h2>
            <div className="form-grid">
              <div className="form-group">
                <label>Name *</label>
                <input
                  type="text"
                  value={heir.contactDetails.name}
                  onChange={(e) => handleLegalHeirChange(index, 'name', e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Age *</label>
                <input
                  type="number"
                  value={heir.contactDetails.age}
                  onChange={(e) => handleLegalHeirChange(index, 'age', e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Relation with Shareholder *</label>
                <input
                  type="text"
                  value={heir.contactDetails.relation}
                  onChange={(e) => handleLegalHeirChange(index, 'relation', e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Father's Name *</label>
                <input
                  type="text"
                  value={heir.contactDetails.fathersName}
                  onChange={(e) => handleLegalHeirChange(index, 'fathersName', e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>PAN Card Number *</label>
                <input
                  type="text"
                  value={heir.contactDetails.panCard}
                  onChange={(e) => handleLegalHeirChange(index, 'panCard', e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Demat Account</label>
                <input
                  type="text"
                  value={heir.contactDetails.dematAccount}
                  onChange={(e) => handleLegalHeirChange(index, 'dematAccount', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Address *</label>
                <textarea
                  value={heir.contactDetails.address}
                  onChange={(e) => handleLegalHeirChange(index, 'address', e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Pin Code *</label>
                <input
                  type="text"
                  value={heir.contactDetails.pincode}
                  onChange={(e) => handleLegalHeirChange(index, 'pincode', e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>City *</label>
                <input
                  type="text"
                  value={heir.contactDetails.city}
                  onChange={(e) => handleLegalHeirChange(index, 'city', e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>State *</label>
                <input
                  type="text"
                  value={heir.contactDetails.state}
                  onChange={(e) => handleLegalHeirChange(index, 'state', e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Mobile Number *</label>
                <input
                  type="tel"
                  value={heir.contactDetails.mobile}
                  onChange={(e) => handleLegalHeirChange(index, 'mobile', e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email *</label>
                <input
                  type="email"
                  value={heir.contactDetails.email}
                  onChange={(e) => handleLegalHeirChange(index, 'email', e.target.value)}
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
                  value={heir.contactDetails.accountNumber}
                  onChange={(e) => handleLegalHeirChange(index, 'accountNumber', e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Bank Name *</label>
                <input
                  type="text"
                  value={heir.contactDetails.bankName}
                  onChange={(e) => handleLegalHeirChange(index, 'bankName', e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Branch *</label>
                <input
                  type="text"
                  value={heir.contactDetails.branch}
                  onChange={(e) => handleLegalHeirChange(index, 'branch', e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>IFSC Code *</label>
                <input
                  type="text"
                  value={heir.contactDetails.ifscCode}
                  onChange={(e) => handleLegalHeirChange(index, 'ifscCode', e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Bank City *</label>
                <input
                  type="text"
                  value={heir.contactDetails.bankCity}
                  onChange={(e) => handleLegalHeirChange(index, 'bankCity', e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Bank Pin Code *</label>
                <input
                  type="text"
                  value={heir.contactDetails.bankPincode}
                  onChange={(e) => handleLegalHeirChange(index, 'bankPincode', e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>MICR Number *</label>
                <input
                  type="text"
                  value={heir.contactDetails.micr}
                  onChange={(e) => handleLegalHeirChange(index, 'micr', e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
        ))}

        {/* Shareholders Information */}
        <div className="section">
          <h2>Shareholders Information</h2>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Name</th>
                  <th>Date of Demise</th>
                </tr>
              </thead>
              <tbody>
                {formData.shareholders.map((shareholder, index) => (
                  <tr key={index}>
                    <td>{shareholder.sno}</td>
                    <td>
                      <input
                        type="text"
                        value={shareholder.name}
                        onChange={(e) => handleShareholderChange(index, 'name', e.target.value)}
                        required
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={shareholder.dateOfDemise}
                        onChange={(e) => handleShareholderChange(index, 'dateOfDemise', e.target.value)}
                        required
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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

export default LegalHeir;