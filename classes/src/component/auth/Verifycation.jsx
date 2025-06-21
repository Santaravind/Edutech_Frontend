import React, { useState } from 'react';
import axios from 'axios';
import { Mail, Loader } from 'lucide-react';
import { toast } from 'react-toastify';



function Verifycation() {
  
   const [formData, setFormData] = useState({
    email: email || '',
    verificationCode: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/api/verify-email', formData);
      toast.success(response.data.message);
      setTimeout(() => onSuccess && onSuccess(), 2000);
    } catch (error) {
      const msg = error.response?.data?.error || 'Network error. Please try again.';
      toast.error(msg);
    }

    setLoading(false);
  };

  const handleResendCode = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/resend-verification', {
        email: formData.email
      });

      toast.success(response.data.message);
    } catch (error) {
      const msg = error.response?.data?.error || 'Network error. Please try again.';
      toast.error(msg);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Verify Email</h2>

      <div className="text-center text-gray-600 mb-6">
        <Mail className="mx-auto mb-2" size={48} />
        <p>We've sent a 6-digit verification code to:</p>
        <p className="font-semibold text-gray-800">{formData.email}</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address"
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Verification Code</label>
          <input
            type="text"
            name="verificationCode"
            value={formData.verificationCode}
            onChange={handleChange}
            placeholder="Enter 6-digit code"
            maxLength="6"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-center text-2xl font-mono tracking-widest"
          />
        </div>
      </div>

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
      >
        {loading && <Loader className="animate-spin" size={20} />}
        {loading ? 'Verifying...' : 'Verify Email'}
      </button>

      <div className="mt-6 text-center space-y-2">
        <button
          onClick={handleResendCode}
          disabled={loading}
          className="text-blue-600 hover:underline disabled:opacity-50"
        >
          Resend verification code
        </button>
        <br />
        <button
          onClick={onSwitchToLogin}
          className="text-gray-600 hover:underline text-sm"
        >
          Back to login
        </button>
      </div>
    </div>
  );
};


  


export default Verifycation
