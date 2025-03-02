import React,{ useState } from "react";
import { useForm } from "react-hook-form";
import logo from "../assets/logo.svg";
import bgy from "../assets/images/2149856264 1.png";
import google from "../assets/google.svg";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Wrapper from "../components/reasurable/Wrapper";

const Login = () => {
  const { login } = useAuth(); // Get login function from AuthContext
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false); // Loading state

  const onSubmit = async (data) => {
    try {
      setLoading(true); // Start loading
      setLoginError(""); // Clear previous errors

      const res = await login(data.email, data.password);
      
      if (res) {
        localStorage.setItem("user", JSON.stringify(res)); // Store user in localStorage
        // toast.success("Login Successful!");
        
        setTimeout(() => {
          navigate("/"); // Redirect to home page after login
          setLoading(false); // Stop loading
        }, 2000);
      }
    } catch (err) {
      console.error("Login Error:", err.response ? err.response.data : err);
      setLoginError(err.message || "Login failed. Please check your credentials.");
      toast.error(err.message || "Invalid email or password.");
      setLoading(false);
    }
    
  };

  return (
    <div className="grid lg:grid-cols-2 items-center font-[Axiforma] mx-auto container">
      <Wrapper>
        <div className="py-5 px-3 lg:hidden">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="w-10" />
            <h1 className="font-bold text-lg">Healthy You</h1>
          </Link>
        </div>

        <div className="flex flex-col justify-center items-center bg-white lg:items-start px-3">
          <div className="w-full max-w-lg">
            <h1 className="font-bold text-3xl md:text-4xl mb-4 text-center">
              Welcome Back
            </h1>
            <p className="mb-6 text-center lg:text-left">
              Join us now by filling in your details below
            </p>

            {loginError && <p className="text-red-500 text-center mb-4">{loginError}</p>}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-5">
              {/* Email Input */}
              <div>
                <label className="block text-base md:text-lg font-semibold">Email</label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  placeholder="Enter your email address"
                  className={`w-full px-4 py-3 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-lg`}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>

              {/* Password Input */}
              <div className="relative">
                <label className="block text-base md:text-lg font-semibold">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Password must be at least 6 characters" },
                  })}
                  placeholder="Enter your password"
                  className={`w-full px-4 py-3 border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } rounded-lg`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-10 right-4 cursor-pointer"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
              </div>

              <a href="#" className="text-[#147C84] flex justify-end">Forgot password?</a>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-[#147C84] text-white py-3 rounded-lg text-base md:text-lg hover:bg-[#0F5A5F] transition duration-300 cursor-pointer disabled:opacity-50"
                disabled={loading} // Disable button while logging in
              >
                {loading ? "Logging in..." : "Continue"}
              </button>

             
              <span className="text-sm flex justify-center text-[16px] text-center">
                Don&apos;t have an account?{" "}
                <Link to="/SignUp" className="text-[#147C84]"> Sign up</Link>
              </span>
            </form>
          </div>
        </div>
      </Wrapper>

      {/* Background Image Section */}
      <div className="hidden lg:block relative h-screen">
        <div className="absolute top-6 left-6">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="w-10" />
            <h1 className="font-bold text-lg">Healthy You</h1>
          </Link>
        </div>
        <img src={bgy} alt="Background" className="w-full h-full object-cover rounded-l-2xl" />
      </div>
    </div>
  );
};

export default Login;
