// import { useState } from "react";
// import useIsMobile from "../hook/useIsMobile";
// import image from "../assets/signup.jpg";
// import hide from "../assets/hide.png";
// import see from "../assets/see.png";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();
//   const isMobile = useIsMobile();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");

//   const handleSignup = () => {
//     navigate("/signup");
//   };

//   const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const response = await axios.post(
//         `${import.meta.env.VITE_BACKEND_URL}/api/auth/login`,
//         {
//           email: email,
//           password: password,
//         }
//       );

//       if (response.status === 200) {
//         const { token } = response.data;

//         if (token) {
//           localStorage.setItem("token", token);

//           navigate("/home");
//         } else {
//           setError("Token not found in the response.");
//         }
//       }
//     } catch (e) {
//       setError("Login failed. Please check your credentials and try again.");
//     }
//   };

//   return (
//     <div className="flex justify-center mt-12">
//       <div className={`flex ${isMobile ? "flex-col" : "flex-row"}`}>
//         {!isMobile && (
//           <div className="flex-shrink-0 flex items-center justify-center w-1/2">
//             <img
//               src={image}
//               alt="Signup Illustration"
//               className="object-cover"
//             />
//           </div>
//         )}
//         <div
//           className={`Signup form bg-white border shadow-xl rounded-2xl overflow-hidden ${
//             isMobile ? "w-full p-6" : "w-1/2 p-12"
//           }`}
//         >
//           <h1 className="text-3xl font-Inter font-extrabold text-[#3A244A] mb-8 flex justify-between items-center">
//             <span id="1">
//               Fill What We Know<span className="text-red-600">!</span>
//             </span>
//           </h1>

//           <form className="space-y-5" onSubmit={handleLogin}>
//             <div>
//               <input
//                 id="email"
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full px-4 py-3 border-b-2 border-gray-300 focus:outline-none focus:ring-0 placeholder-gray-500"
//                 required
//               />
//             </div>

//             <div className="relative">
//               <input
//                 id="password"
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full px-4 py-3 border-b-2 border-gray-300 focus:outline-none focus:ring-0 placeholder-gray-500"
//                 required
//               />
//               <div
//                 className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 <img
//                   src={showPassword ? hide : see}
//                   alt={showPassword ? "Hide Password" : "Show Password"}
//                   className="h-8 w-8"
//                 />
//               </div>
//             </div>

//             {error && <p className="text-red-500 text-sm">{error}</p>}

//             <button
//               type="submit"
//               className="w-full font-Inter bg-[#3A244A] text-white py-3 rounded-2xl font-bold hover:bg-purple-950 transition duration-300"
//             >
//               Sign In
//             </button>
//             <button
//               type="button"
//               className="w-full font-Inter border-2 border-[#3A244A] bg-white py-3 rounded-2xl font-bold hover:bg-slate-200 transition duration-300"
//               onClick={handleSignup}
//             >
//               Sign Up
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;