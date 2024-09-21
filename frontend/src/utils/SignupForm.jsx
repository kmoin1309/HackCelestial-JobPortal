import { useState } from "react";
import hide from "../assets/hide.png";
import see from "../assets/see.png";

const SignupForm = ({ formData, handleChange, handleSignup, error }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);

  return (
    <form className="space-y-5" onSubmit={handleSignup}>
      <div>
        <input
          id="firstName"
          type="text"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full px-4 py-3 border-b-2 border-gray-300 focus:outline-none focus:ring-0 placeholder-gray-500"
          required
        />
      </div>
      <div>
        <input
          id="lastName"
          type="text"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full px-4 py-3 border-b-2 border-gray-300 focus:outline-none focus:ring-0 placeholder-gray-500"
          required
        />
      </div>
      <div className="relative">
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="Set Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-3 border-b-2 border-gray-300 focus:outline-none focus:ring-0 placeholder-gray-500"
          required
        />
        <div
          className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          <img
            src={showPassword ? hide : see}
            alt={showPassword ? "Hide Password" : "Show Password"}
            className="h-8 w-8"
          />
        </div>
      </div>
      <div className="relative">
        <input
          id="retypePassword"
          type={showRetypePassword ? "text" : "password"}
          placeholder="Retype Password"
          value={formData.retypePassword}
          onChange={handleChange}
          className="w-full px-4 py-3 border-b-2 border-gray-300 focus:outline-none focus:ring-0 placeholder-gray-500"
          required
        />
        <div
          className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
          onClick={() => setShowRetypePassword(!showRetypePassword)}
        >
          <img
            src={showRetypePassword ? hide : see}
            alt={showRetypePassword ? "Hide Password" : "Show Password"}
            className="h-8 w-8"
          />
        </div>
      </div>
      <div>
        <select
          id="contact-mode"
          className="w-full px-4 py-3 border-b-2 border-gray-300 focus:outline-none focus:ring-0 text-gray-500"
          required
        >
          <option value="">Contact Mode</option>
          <option className="bg-white hover:bg-purple-800">Email</option>
        </select>
      </div>

      <div>
        <input
          id="email"
          type="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border-b-2 border-gray-300 focus:outline-none focus:ring-0 placeholder-gray-500"
          required
        />
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        type="submit"
        className="w-full font-Inter bg-[#3A244A] text-white py-3 rounded-2xl font-bold hover:bg-purple-950 transition duration-300"
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignupForm;
