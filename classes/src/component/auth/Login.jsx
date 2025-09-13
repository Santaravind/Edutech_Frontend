import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import { addEmail } from '../redux/emailSlice';

const Login = () => {

  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const apiUrl = import.meta.env.VITE_API_URL;
  // const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);

    try {
     // console.log(formData);
      
    const response= await axios.post(`${apiUrl}/auth/login`, formData);
      // Store token and user data
      localStorage.setItem('authToken', response.data.token);
      dispatch(addEmail(formData.email));
      // console.log("Login response:", response.data);
     
     dispatch(login({
        token: response.token,
        user: response.user
      }));
    toast.success('Login successful');

      // Redirect to dashboard or home page
      setTimeout(() => {
       
        navigate('/'); // Change to your target route
      }, 1500);
    } catch (error) {
      const resData = error.response?.data;

      // Show error toast
      toast.error(resData?.error || 'Network error. Please try again.');

      // If backend tells to verify email
      if (resData?.needsVerification) {
        toast.info('Please verify your email first.');
        setTimeout(() => {
          navigate('/verify', { state: { email: formData.email } });
        }, 1500);
      }
    }

    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto  bg-gradient-to-r from-gray-400 via-yellow-400 to-black bg-white p-8 rounded-xl shadow-lg m-12">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Please Login </h2>

      <div className="space-y-4">
        {/* Email */}
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

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Login Button */}
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full mt-6 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </div>
  );
};

export default Login;
