import React, { useState } from 'react';
import axios from 'axios';
import { Mail, Loader } from 'lucide-react';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

function Verifycation() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const email = state?.email || '';
  const apiUrl = import.meta.env.VITE_API_URL;

  const [verificationCode, setVerificationCode] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${apiUrl}/auth/verify`, {
        email,
        verificationCode,
      });

      toast.success('Email verified successfully');
      
      // Navigate to login page after short delay
      setTimeout(() => {
        navigate('/login');
      }, 2000);

    } catch (error) {
      const msg = error.response?.data?.error || 'Verification failed';
      toast.error(msg);

      // Navigate to signup page after short delay
      setTimeout(() => {
        navigate('/signin');
      }, 2000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Verify Email</h2>

      <div className="text-center text-gray-600 mb-6">
        <Mail className="mx-auto mb-2" size={48} />
        <p>We've sent a 6-digit verification code to:</p>
        <p className="font-semibold text-gray-800">{email}</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Verification Code</label>
          <input
            type="text"
            name="verificationCode"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
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
    </div>
  );
}

export default Verifycation;
