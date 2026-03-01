// components/DuplicatePage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Save, RotateCcw, ArrowLeft, User, Briefcase, CheckSquare } from 'lucide-react';

const DuplicatePage = () => {
  const navigate = useNavigate();
  const [activeShareholder, setActiveShareholder] = useState('1');
  const [formData, setFormData] = useState({
    shareholders: {
      1: {
        personal: {
          name: '', fathersName: '', pan: '', demat: ''
        },
        contact: {
          address: '', pincode: '', mobile: '', email: ''
        },
        bank: {
          accountNo: '', bankName: '', branch: '', ifsc: ''
        }
      },
      2: {
        personal: {
          name: '', fathersName: '', pan: '', demat: ''
        },
        contact: {
          address: '', pincode: '', mobile: '', email: ''
        },
        bank: {
          accountNo: '', bankName: '', branch: '', ifsc: ''
        }
      },
      3: {
        personal: {
          name: '', fathersName: '', pan: '', demat: ''
        },
        contact: {
          address: '', pincode: '', mobile: '', email: ''
        },
        bank: {
          accountNo: '', bankName: '', branch: '', ifsc: ''
        }
      }
    },
    otherInfo: {
      formDate: '', faceValue: '', folioNo: ''
    },
    securities: [{
      srNo: 1, certificateNo: '', distinctiveFrom: '', distinctiveTo: '', shares: '', totalShares: ''
    }],
    company: {
      name: '', address: ''
    },
    rta: {
      name: '', address: ''
    }
  });

  const [documents, setDocuments] = useState([
    { id: 1, name: 'Authorization letter', selected: false },
    { id: 2, name: 'Request letter', selected: false },
    { id: 3, name: 'ISR 1', selected: false },
    { id: 4, name: 'SH-13', selected: false },
    { id: 5, name: 'ISR 4', selected: false },
    { id: 6, name: 'Form A', selected: false },
    { id: 7, name: 'Form B identity', selected: false },
  ]);

  const handleInputChange = (section, shareholder, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [shareholder]: {
          ...prev[section][shareholder],
          [field]: value
        }
      }
    }));
  };

  const handleOtherInfoChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      otherInfo: { ...prev.otherInfo, [field]: value }
    }));
  };

  const handleSelectAll = () => {
    const allSelected = documents.every(doc => doc.selected);
    setDocuments(prev => prev.map(doc => ({ ...doc, selected: !allSelected })));
  };

  const handleDocumentToggle = (id) => {
    setDocuments(prev => prev.map(doc => 
      doc.id === id ? { ...doc, selected: !doc.selected } : doc
    ));
  };

  const handleSubmit = () => {
    console.log('Form Data:', formData);
    console.log('Documents:', documents);
    alert('Form submitted successfully!');
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all data?')) {
      // Reset logic here
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate('/')}
            className="p-2 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Duplicate Share Certificate Application
          </h1>
        </div>

        {/* Shareholder Selector */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <User className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg font-semibold text-gray-800">Select Shareholder</h2>
          </div>
          <select
            value={activeShareholder}
            onChange={(e) => setActiveShareholder(e.target.value)}
            className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="1">Shareholder 1</option>
            <option value="2">Shareholder 2</option>
            <option value="3">Shareholder 3</option>
          </select>
        </div>

        {/* Dynamic Form for Selected Shareholder */}
        <div className="space-y-6">
          {/* Personal Details */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <User className="w-5 h-5 text-blue-600" />
              Personal Details - Shareholder {activeShareholder}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                value={formData.shareholders[activeShareholder].personal.name}
                onChange={(e) => handleInputChange('shareholders', activeShareholder, 'name', e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Father's Name"
                value={formData.shareholders[activeShareholder].personal.fathersName}
                onChange={(e) => handleInputChange('shareholders', activeShareholder, 'fathersName', e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="PAN Card Number"
                value={formData.shareholders[activeShareholder].personal.pan}
                onChange={(e) => handleInputChange('shareholders', activeShareholder, 'pan', e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {activeShareholder === '1' && (
                <input
                  type="text"
                  placeholder="Demat Account"
                  value={formData.shareholders[activeShareholder].personal.demat}
                  onChange={(e) => handleInputChange('shareholders', activeShareholder, 'demat', e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              )}
            </div>
          </div>

          {/* Contact Details */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Details</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Address"
                value={formData.shareholders[activeShareholder].contact.address}
                onChange={(e) => handleInputChange('shareholders', activeShareholder, 'address', e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Pin Code"
                value={formData.shareholders[activeShareholder].contact.pincode}
                onChange={(e) => handleInputChange('shareholders', activeShareholder, 'pincode', e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                value={formData.shareholders[activeShareholder].contact.mobile}
                onChange={(e) => handleInputChange('shareholders', activeShareholder, 'mobile', e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={formData.shareholders[activeShareholder].contact.email}
                onChange={(e) => handleInputChange('shareholders', activeShareholder, 'email', e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Bank Details */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-blue-600" />
              Bank Details
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Account Number"
                value={formData.shareholders[activeShareholder].bank.accountNo}
                onChange={(e) => handleInputChange('shareholders', activeShareholder, 'accountNo', e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Bank Name"
                value={formData.shareholders[activeShareholder].bank.bankName}
                onChange={(e) => handleInputChange('shareholders', activeShareholder, 'bankName', e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Branch"
                value={formData.shareholders[activeShareholder].bank.branch}
                onChange={(e) => handleInputChange('shareholders', activeShareholder, 'branch', e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="IFSC Code"
                value={formData.shareholders[activeShareholder].bank.ifsc}
                onChange={(e) => handleInputChange('shareholders', activeShareholder, 'ifsc', e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Other Important Information */}
        <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Other Important Information</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <input
              type="date"
              placeholder="Form Date"
              value={formData.otherInfo.formDate}
              onChange={(e) => handleOtherInfoChange('formDate', e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="Face Value"
              value={formData.otherInfo.faceValue}
              onChange={(e) => handleOtherInfoChange('faceValue', e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="Folio Number"
              value={formData.otherInfo.folioNo}
              onChange={(e) => handleOtherInfoChange('folioNo', e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Securities Information */}
        <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Securities Information</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-2 text-left">Sr No.</th>
                  <th className="px-4 py-2 text-left">Certificate No.</th>
                  <th className="px-4 py-2 text-left">Distinctive No. From</th>
                  <th className="px-4 py-2 text-left">Distinctive No. To</th>
                  <th className="px-4 py-2 text-left">Shares</th>
                  <th className="px-4 py-2 text-left">Total Shares</th>
                </tr>
              </thead>
              <tbody>
                {formData.securities.map((security, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2">{security.srNo}</td>
                    <td className="px-4 py-2">
                      <input
                        type="text"
                        className="w-full px-2 py-1 border rounded"
                        value={security.certificateNo}
                        onChange={(e) => {
                          const newSecurities = [...formData.securities];
                          newSecurities[index].certificateNo = e.target.value;
                          setFormData(prev => ({ ...prev, securities: newSecurities }));
                        }}
                      />
                    </td>
                    <td className="px-4 py-2">
                      <input
                        type="text"
                        className="w-full px-2 py-1 border rounded"
                        value={security.distinctiveFrom}
                        onChange={(e) => {
                          const newSecurities = [...formData.securities];
                          newSecurities[index].distinctiveFrom = e.target.value;
                          setFormData(prev => ({ ...prev, securities: newSecurities }));
                        }}
                      />
                    </td>
                    <td className="px-4 py-2">
                      <input
                        type="text"
                        className="w-full px-2 py-1 border rounded"
                        value={security.distinctiveTo}
                        onChange={(e) => {
                          const newSecurities = [...formData.securities];
                          newSecurities[index].distinctiveTo = e.target.value;
                          setFormData(prev => ({ ...prev, securities: newSecurities }));
                        }}
                      />
                    </td>
                    <td className="px-4 py-2">
                      <input
                        type="text"
                        className="w-full px-2 py-1 border rounded"
                        value={security.shares}
                        onChange={(e) => {
                          const newSecurities = [...formData.securities];
                          newSecurities[index].shares = e.target.value;
                          setFormData(prev => ({ ...prev, securities: newSecurities }));
                        }}
                      />
                    </td>
                    <td className="px-4 py-2">
                      <input
                        type="text"
                        className="w-full px-2 py-1 border rounded"
                        value={security.totalShares}
                        onChange={(e) => {
                          const newSecurities = [...formData.securities];
                          newSecurities[index].totalShares = e.target.value;
                          setFormData(prev => ({ ...prev, securities: newSecurities }));
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Company Information */}
        <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Company's Information</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Company Name"
              value={formData.company.name}
              onChange={(e) => setFormData(prev => ({ ...prev, company: { ...prev.company, name: e.target.value } }))}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="Company Address"
              value={formData.company.address}
              onChange={(e) => setFormData(prev => ({ ...prev, company: { ...prev.company, address: e.target.value } }))}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* RTA Information */}
        <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">RTA's Information</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="RTA Name"
              value={formData.rta.name}
              onChange={(e) => setFormData(prev => ({ ...prev, rta: { ...prev.rta, name: e.target.value } }))}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="RTA Address"
              value={formData.rta.address}
              onChange={(e) => setFormData(prev => ({ ...prev, rta: { ...prev.rta, address: e.target.value } }))}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Document Checklist */}
        <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <CheckSquare className="w-5 h-5 text-blue-600" />
            Document Checklist
          </h2>
          
          <div className="mb-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={documents.every(doc => doc.selected)}
                onChange={handleSelectAll}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="text-sm font-medium text-gray-700">Select All</span>
            </label>
          </div>

          <div className="grid gap-3">
            {documents.map((doc) => (
              <label key={doc.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                <input
                    type="checkbox"
                    checked={doc.selected}
                    onChange={() => handleDocumentToggle(doc.id)}
                    className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">{doc.id}. {doc.name}</span>
                </label>
              ))}
            </div>
          </div>
  
          {/* Action Buttons */}
          <div className="flex gap-4 mt-8">
            <button
              onClick={handleSubmit}
              className="flex-1 py-3 px-6 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Save className="w-5 h-5" />
              Submit Application
            </button>
            <button
              onClick={handleReset}
              className="flex-1 py-3 px-6 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg font-semibold hover:from-gray-600 hover:to-gray-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-5 h-5" />
              Reset Form
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default DuplicatePage;