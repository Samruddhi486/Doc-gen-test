// components/HomePage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Copy, Repeat, FileText } from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();
  const [selectedProcesses, setSelectedProcesses] = useState({
    duplicate: false,
    transmission: false
  });

  const handleCheckboxChange = (process) => {
    setSelectedProcesses(prev => ({
      ...prev,
      [process]: !prev[process]
    }));
  };

  const handleProceed = () => {
    if (selectedProcesses.duplicate && selectedProcesses.transmission) {
      navigate('/transmission');
    } else if (selectedProcesses.duplicate) {
      navigate('/duplicate');
    } else if (selectedProcesses.transmission) {
      navigate('/transmission');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main content */}
      <div className="relative bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 max-w-2xl w-full border border-white/20">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Share Transfer System
          </h1>
          <p className="text-gray-600 text-lg">Select the process type to continue</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Duplicate Card */}
          <div 
            className={`relative overflow-hidden rounded-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer
              ${selectedProcesses.duplicate 
                ? 'bg-gradient-to-br from-blue-500 to-blue-600 shadow-xl ring-4 ring-blue-300' 
                : 'bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-lg border-2 border-gray-200'}`}
            onClick={() => handleCheckboxChange('duplicate')}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl ${selectedProcesses.duplicate ? 'bg-white/20' : 'bg-blue-100'}`}>
                  <Copy className={`w-8 h-8 ${selectedProcesses.duplicate ? 'text-white' : 'text-blue-600'}`} />
                </div>
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={selectedProcesses.duplicate}
                    onChange={() => handleCheckboxChange('duplicate')}
                    className="w-6 h-6 accent-blue-600 rounded-lg cursor-pointer"
                  />
                </div>
              </div>
              <h2 className={`text-2xl font-bold mb-2 ${selectedProcesses.duplicate ? 'text-white' : 'text-gray-800'}`}>
                Duplicate
              </h2>
              <p className={`text-sm ${selectedProcesses.duplicate ? 'text-blue-100' : 'text-gray-600'}`}>
                Process duplicate share certificates and legal heir documentation
              </p>
            </div>
            {selectedProcesses.duplicate && (
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
            )}
          </div>

          {/* Transmission Card */}
          <div 
            className={`relative overflow-hidden rounded-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer
              ${selectedProcesses.transmission 
                ? 'bg-gradient-to-br from-purple-500 to-purple-600 shadow-xl ring-4 ring-purple-300' 
                : 'bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-lg border-2 border-gray-200'}`}
            onClick={() => handleCheckboxChange('transmission')}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl ${selectedProcesses.transmission ? 'bg-white/20' : 'bg-purple-100'}`}>
                  <Repeat className={`w-8 h-8 ${selectedProcesses.transmission ? 'text-white' : 'text-purple-600'}`} />
                </div>
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={selectedProcesses.transmission}
                    onChange={() => handleCheckboxChange('transmission')}
                    className="w-6 h-6 accent-purple-600 rounded-lg cursor-pointer"
                  />
                </div>
              </div>
              <h2 className={`text-2xl font-bold mb-2 ${selectedProcesses.transmission ? 'text-white' : 'text-gray-800'}`}>
                Transmission
              </h2>
              <p className={`text-sm ${selectedProcesses.transmission ? 'text-purple-100' : 'text-gray-600'}`}>
                Process transmission of shares to legal heirs
              </p>
            </div>
            {selectedProcesses.transmission && (
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
            )}
          </div>
        </div>

        {/* Summary Section */}
        <div className="mb-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
          <h3 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Selected Process Summary
          </h3>
          <div className="flex gap-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              selectedProcesses.duplicate 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 text-gray-600'
            }`}>
              Duplicate {selectedProcesses.duplicate ? '✓' : '○'}
            </span>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              selectedProcesses.transmission 
                ? 'bg-purple-500 text-white' 
                : 'bg-gray-200 text-gray-600'
            }`}>
              Transmission {selectedProcesses.transmission ? '✓' : '○'}
            </span>
          </div>
        </div>

        {/* Proceed Button */}
        <button
          onClick={handleProceed}
          disabled={!selectedProcesses.duplicate && !selectedProcesses.transmission}
          className={`w-full py-4 px-6 rounded-xl text-lg font-semibold flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-105
            ${selectedProcesses.duplicate || selectedProcesses.transmission
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl' 
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
        >
          Proceed to {selectedProcesses.duplicate && selectedProcesses.transmission 
            ? 'Transmission' 
            : selectedProcesses.duplicate 
              ? 'Duplicate' 
              : selectedProcesses.transmission 
                ? 'Transmission' 
                : 'Process'}
          <ArrowRight className="w-5 h-5" />
        </button>

        {/* Decorative elements */}
        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-pink-400 to-yellow-400 rounded-full opacity-20 blur-2xl"></div>
      </div>
    </div>
  );
};

export default HomePage;