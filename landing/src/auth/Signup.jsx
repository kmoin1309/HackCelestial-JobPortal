import { useState } from "react";
import { useNavigate } from "react-router-dom";

import image from "../assets/signup.jpg";
import axios from "axios";
import SignupForm from "../utils/SignupForm";
import useIsMobile from "../hook/useMobile"

const Signup = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    retypePassword: "",
    type: "Applicant", // Default type as "Applicant"
  });

  const [error, setError] = useState("");

  const handleNavigateToLogin = () => {
    navigate("/login");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.retypePassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/auth/signup`,
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          type: formData.type,
        }
      );

      if (response.status === 200) {
        setSignupSuccess(true);
      }
    } catch (err) {
      setError("Email Already Exists, Try another or Sign in");
    }
  };

  return (
    <div className="flex justify-center mt-12">
      <div className={`flex ${isMobile ? "flex-col" : "flex-row"}`}>
        {!isMobile && (
          <div className="flex-shrink-0 flex items-center justify-center w-1/2">
            <img src={image} alt="Signup Illustration" className="object-cover" />
          </div>
        )}
        <div
          className={`Signup form bg-white border shadow-xl rounded-2xl overflow-hidden ${
            isMobile ? "w-full p-6" : "w-1/2 p-12"
          }`}
        >
          <h1 className="text-3xl font-Inter font-extrabold text-[#3A244A] mb-8 flex justify-between items-center">
            <span id="1">
              Let us know<span className="text-red-600">!</span>
            </span>
            <span
              id="2"
              className="text-base font-semibold underline text-end cursor-pointer"
              onClick={handleNavigateToLogin}
            >
              Sign <span className="text-red-600 underline text-end">in</span>
            </span>
          </h1>

          {!signupSuccess ? (
            <SignupForm
              formData={formData}
              handleChange={handleChange}
              handleSignup={handleSignup}
              error={error}
            />
          ) : (
            <div className="text-center">
              <h2 className="text-2xl font-bold text-green-600 mb-4">
                Signup Successful!
              </h2>
              <button
                onClick={handleNavigateToLogin}
                className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
              >
                Go to Login
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;

// import React, { useState } from 'react';

// const SignupPage = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: '',
//         role: 'Applicant' // Default role
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         // Replace this with your actual API endpoint
//         const apiUrl =  `${import.meta.env.VITE_BACKEND_URL}/api/auth/signup`;

//         try {
//             const response = await fetch(apiUrl, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(formData),
//             });

//             const data = await response.json();
//             console.log('Success:', data);
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     };

//     return (
//         <div>
//             <h1>Signup</h1>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Name:</label>
//                     <input
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Email:</label>
//                     <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Password:</label>
//                     <input
//                         type="password"
//                         name="password"
//                         value={formData.password}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Role:</label>
//                     <select name="role" value={formData.role} onChange={handleChange}>
//                         <option value="Applicant">Applicant</option>
//                         <option value="Recruiter">Recruiter</option>
//                     </select>
//                 </div>
//                 <button type="submit">Signup</button>
//             </form>
//         </div>
//     );
// };

// export default SignupPage;



// import React, { useState } from 'react';
// import { AlertCircle } from 'lucide-react';
// import { Alert, AlertDescription } from '@/components/ui/alert';

// export default function SignupPage() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     role: 'Applicant'
//   });
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccess(false);

//     try {
//       const response = await fetch('http://localhost:3000/api/auth/signup', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData)
//       });

//       if (response.ok) {
//         setSuccess(true);
//       } else {
//         const data = await response.json();
//         setError(data.message || 'An error occurred during signup');
//       }
//     } catch (err) {
//       setError('An error occurred during signup');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-black flex items-center justify-center">
//       <div className="bg-gray-900 p-8 rounded-lg shadow-md w-96">
//         <h2 className="text-2xl font-bold mb-6 text-white">Sign Up</h2>
//         {error && (
//           <Alert variant="destructive" className="mb-4">
//             <AlertCircle className="h-4 w-4" />
//             <AlertDescription>{error}</AlertDescription>
//           </Alert>
//         )}
//         {success && (
//           <Alert className="mb-4 bg-green-500">
//             <AlertDescription>Signup successful!</AlertDescription>
//           </Alert>
//         )}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label htmlFor="role" className="block text-sm font-medium text-gray-300">Role</label>
//             <select
//               id="role"
//               name="role"
//               value={formData.role}
//               onChange={handleChange}
//               className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
//               required
//             >
//               <option value="Applicant">Applicant</option>
//               <option value="Recruiter">Recruiter</option>
//             </select>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
//           >
//             Sign Up
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }