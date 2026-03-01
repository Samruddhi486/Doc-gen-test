// components/TransmissionPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Save, RotateCcw, ArrowLeft, User, Heart, FileText } from 'lucide-react';

const TransmissionPage = () => {
  const navigate = useNavigate();
  const [activeLegalHeir, setActiveLegalHeir] = useState('1');
  const [formData, setFormData] = useState({
    legalHeirs: {
      1: {
        personal: {
          name: '', age: '', relation: '', fathersName: '', pan: '', demat: '',
          address: '', pincode: '', city: '', state: '', mobile: '', email: ''
        },
        bank: {
          accountNo: '', bankName: '', branch: '', ifsc: '', city: '', pincode: '', micr: ''
        }
      },
      2: {
        personal: {
          name: '', age: '', relation: '', fathersName: '', pan: '', demat: '',
          address: '', pincode: '', city: '', state: '', mobile: '', email: ''
        },
        bank: {
          accountNo: '', bankName: '', branch: '', ifsc: '', city: '', pincode: '', micr: ''
        }
      },
      3: {
        personal: {
          name: '', age: '', relation: '', fathersName: '', pan: '', demat: '',
          address: '', pincode: '', city: '', state: '', mobile: '', email: ''
        },
        bank: {
          accountNo: '', bankName: '', branch: '', ifsc: '', city: '', pincode: '', micr: ''
        }
      }
    },
    shareholderInfo: {
      sno: '', name: '', dateOfDemise: ''
    },
    otherInfo: {
      formDate: '', folioNo: ''
    },
    company: {
      name: '', address: ''
    }
  });

  const [documents, setDocuments] = useState([
    { id: 1, name: 'Authorization letter', selected: false },
    { id: 2, name: 'Request letter', selected: false },
    { id: 3, name: 'ISR 1', selected: false },
    { id: 4, name: 'SH-13', selected: false },
    { id: 5, name: 'ISR 5 - AnnexureC', selected: false },
    { id: 6, name: 'AnnexureD - Affidavit L H 1', selected: false },
    { id: 7, name: 'AnnexureD - Affidavit L H 2', selected: false },
    { id: 8, name: 'AnnexureD - Affidavit L H 3', selected: false },
    { id: 9, name: 'AnnexureE - Identity Form', selected: false },
  ]);

  const handleInputChange = (section, legalHeir, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [legalHeir]: {
          ...prev[section][legalHeir],
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
    console.log('Transmission Form Data:', formData);
    console.log('Documents:', documents);
    alert('Transmission application submitted successfully!');
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all data?')) {
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-purple-50 to-pink-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate('/')}
            className="p-2 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Transmission of Shares Application
          </h1>
        </div>

        {/* Legal Heir Selector */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <Heart className="w-5 h-5 text-purple-600" />
            <h2 className="text-lg font-semibold text-gray-800">Select Legal Heir</h2>
          </div>
          <select
            value={activeLegalHeir}
            onChange={(e) => setActiveLegalHeir(e.target.value)}
            className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="1">Legal Heir 1</option>
            <option value="2">Legal Heir 2</option>
            <option value="3">Legal Heir 3</option>
          </select>
        </div>

        {/* Dynamic Form for Selected Legal Heir */}
        <div className="space-y-6">
          {/* Personal Details */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <User className="w-5 h-5 text-purple-600" />
              Personal Details - Legal Heir {activeLegalHeir}
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Name"
                value={formData.legalHeirs[activeLegalHeir].personal.name}
                onChange={(e) => handleInputChange('legalHeirs', activeLegalHeir, 'name', e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <input
                type="number"
                placeholder="Age"
                value={formData.legalHeirs[activeLegalHeir].personal.age}
                onChange={(e) => handleInputChange('legalHeirs', activeLegalHeir, 'age', e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Relation with Shareholder"
                value={formData.legalHeirs[activeLegalHeir].personal.relation}
                onChange={(e) => handleInputChange('legalHeirs', activeLegalHeir, 'relation', e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Father's Name"
                value={formData.legalHeirs[activeLegalHeir].personal.fathersName}
                onChange={(e) => handleInputChange('legalHeirs', activeLegalHeir, 'fathersName', e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="PAN Card Number"
                value={formData.legalHeirs[activeLegalHeir].personal.pan}
                onChange={(e) => handleInputChange('legalHeirs', activeLegalHeir, 'pan', e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Demat Account"
                value={formData.legalHeirs[activeLegalHeir].personal.demat}
                onChange={(e) => handleInputChange('legalHeirs', activeLegalHeir, 'demat', e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Address"
                value={formData.legalHeirs[activeLegalHeir].personal.address}
                onChange={(e) => handleInputChange('legalHeirs', activeLegalHeir, 'address', e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Pin Code"
                value={formData.legalHeirs[activeLegalHeir].personal.pincode}
                onChange={(e) => handleInputChange('legalHeirs', activeLegalHeir, 'pincode', e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="City"
                value={formData.legalHeirs[activeLegalHeir].personal.city}
                onChange={(e) => handleInputChange('legalHeirs', activeLegalHeir, 'city', e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="State"
                value={formData.legalHeirs[activeLegalHeir].personal.state}
                onChange={(e) => handleInputChange('legalHeirs', activeLegalHeir, 'state', e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                value={formData.legalHeirs[activeLegalHeir].personal.mobile}
                onChange={(e) => handleInputChange('legalHeirs', activeLegalHeir, 'mobile', e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.legalHeirs[activeLegalHeir].personal.email}
                onChange={(e) => handleInputChange('legalHeirs', activeLegalHeir, 'email', e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Bank Details */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Bank Details</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Account Number"
                value={formData.legalHeirs[activeLegalHeir].bank.accountNo}
                onChange={(e) => handleInputChange('legalHeirs', activeLegalHeir, 'accountNo', e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Bank Name"
                value={formData.legalHeirs[activeLegalHeir].bank.bankName}
                onChange={(e) => handleInputChange('legalHeirs', activeLegalHeir, 'bankName', e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Branch"
                value={formData.legalHeirs[activeLegalHeir].bank.branch}
                onChange={(e) => handleInputChange('legalHeirs', activeLegalHeir, 'branch', e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="IFSC Code"
                value={formData.legalHeirs[activeLegalHeir].bank.ifsc}
                onChange={(e) => handleInputChange('legalHeirs', activeLegalHeir, 'ifsc', e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="City"
                value={formData.legalHeirs[activeLegalHeir].bank.city}
                onChange={(e) => handleInputChange('legalHeirs', activeLegalHeir, 'city', e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Pin Code"
                value={formData.legalHeirs[activeLegalHeir].bank.pincode}
                onChange={(e) => handleInputChange('legalHeirs', activeLegalHeir, 'pincode', e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="MICR Number"
                value={formData.legalHeirs[activeLegalHeir].bank.micr}
                onChange={(e) => handleInputChange('legalHeirs', activeLegalHeir, 'micr', e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Shareholder Information */}
        <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Shareholder Information</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="S.No."
              value={formData.shareholderInfo.sno}
              onChange={(e) => setFormData(prev => ({ ...prev, shareholderInfo: { ...prev.shareholderInfo, sno: e.target.value } }))}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="Name"
              value={formData.shareholderInfo.name}
              onChange={(e) => setFormData(prev => ({ ...prev, shareholderInfo: { ...prev.shareholderInfo, name: e.target.value } }))}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <input
              type="date"
              placeholder="Date of Demise"
              value={formData.shareholderInfo.dateOfDemise}
              onChange={(e) => setFormData(prev => ({ ...prev, shareholderInfo: { ...prev.shareholderInfo, dateOfDemise: e.target.value } }))}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Other Important Information */}
        <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Other Important Information</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="date"
              placeholder="Form Date"
              value={formData.otherInfo.formDate}
              onChange={(e) => handleOtherInfoChange('formDate', e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="Folio Number"
              value={formData.otherInfo.folioNo}
              onChange={(e) => handleOtherInfoChange('folioNo', e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
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
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="Company Address"
              value={formData.company.address}
              onChange={(e) => setFormData(prev => ({ ...prev, company: { ...prev.company, address: e.target.value } }))}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Document Checklist */}
        <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-purple-600" />
            Document Checklist
          </h2>
          
          <div className="mb-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={documents.every(doc => doc.selected)}
                onChange={handleSelectAll}
                className="w-4 h-4 text-purple-600 rounded focus:ring-purple-500"
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
                  className="w-4 h-4 text-purple-600 rounded focus:ring-purple-500"
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
            className="flex-1 py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <Save className="w-5 h-5" />
            Submit Transmission Application
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

export default TransmissionPage;