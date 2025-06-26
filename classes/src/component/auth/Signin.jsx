// import React, { useState, useEffect } from 'react';
// import { User, Mail, Lock, Eye, EyeOff, CheckCircle, AlertCircle, Loader, Phone, Calendar } from 'lucide-react';
// import axios from 'axios'

// // Signup Component
// const Signin=()=>  {

//   const [formData, setFormData] = useState({
//     firstName: '',
//     middleName: '',
//     lastName: '',
//     fatherName: '',
//     age: '',
//     mobileNo: '',
//     email: '',
//     password: ''
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState({ type: '', text: '' });

//  //API 
//  const apiUrl=import.meta.env.VITE_API_URL;

//    console.log("API URL :",apiUrl);
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async () => {
//   setLoading(true);
//   setMessage({ type: '', text: '' });

//   try {
//     const response = await axios.post(`${apiUrl}/auth/signup`, {
//       ...formData,
//       age: parseInt(formData.age),
//       mobileNo: parseInt(formData.mobileNo)
//     });

//     setMessage({ type: 'success', text: response.data.message });

//     // Optional: redirect or callback
//     setTimeout(() => {
//       if (typeof onSuccess === 'function') {
//         onSuccess(formData.email);
//       }
//     }, 2000);

//   } catch (error) {
//     if (error.response && error.response.data) {
//       setMessage({ type: 'error', text: error.response.data.error });
//     } else {
//       setMessage({ type: 'error', text: 'Network error. Please try again.' });
//     }
//   }

//   setLoading(false);
// };
import React, { useState } from 'react';
import {
  User, Mail, Lock, Eye, EyeOff, CheckCircle, AlertCircle, Loader, Phone, Calendar
} from 'lucide-react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Form, useNavigate } from 'react-router-dom';

const Signin = () => {
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;

  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    fatherName: '',
    age: '',
    mobileNo: '',
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
   

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
     console.log(formData);
   try{
    const response = await axios.post(
      `${apiUrl}/auth/signup`,
      formData
    );
        
      toast.success('Signup is complete');
      toast.info('Email verification code sent to your email ID');

      // Navigate after short delay
      setTimeout(() => {
        navigate('/verify', { state: { email: formData.email } });
      }, 2000);

    }catch (error) {
  if (error.response?.data?.error) {
    // Show backend error directly
    toast.error(error.response.data.error);

    // If it's a duplicate email error, navigate to login after a delay
    if (
      error.response.data.error.toLowerCase().includes('email') &&
      error.response.data.error.toLowerCase().includes('exists')
    ) {
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    }
  } else {
    toast.error('Network error. Please try again.');
  }
}
  };


  return (
    <div className="max-w-2xl mx-auto
    bg-gradient-to-r from-gray-400 via-yellow-400 to-black
    bg-white p-8 rounded-xl shadow-lg m-3">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Create Account</h2>
      
      <form onSubmit={handleSubmit}
      >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter first name"
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>
        </div>

        {/* Middle Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Middle Name</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
              placeholder="Enter middle name"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter last name"
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>
        </div>

        {/* Father Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Father's Name *</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              placeholder="Enter father's name"
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>
        </div>

        {/* Age */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Age *</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter age"
              min="1"
              max="120"
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number *</label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="tel"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleChange}
              placeholder="Enter mobile number"
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>
        </div>

        {/* Email */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
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
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Password *</label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password (min 6 characters)"
              minLength="6"
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
 <button
        type='submit'
        disabled={loading}
        className="w-full mt-8 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 disabled:opacity-50 transition-colors flex items-center justify-center gap-2"
      >
        {loading && <Loader className="animate-spin" size={20} />}
        {loading ? 'Creating Account...' : 'Sign Up'}
      </button>
</form> 
      <div className="mt-6 text-center">
        <button
         
          className="text-blue-600 hover:underline"
        >
          Already have an account? Login
        </button>
      </div>
    </div>
  );
};


export default Signin
