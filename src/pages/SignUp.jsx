import React,{ useState } from "react";
import { useForm } from "react-hook-form";
import logo from "../assets/logo.svg";
import bgy from "../assets/images/2149856264 1.png";
import google from "../assets/google.svg";
import frame from "../assets/Frame.svg";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Wrapper from "../components/reasurable/Wrapper";

const Register = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = watch("password");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state

const onSubmit = async (data) => {
  try {
    setLoading(true); // Start loading
    const res = await signup(data);
    console.log(res);
    
    // Show success toast
    // toast.success("Registration Successful! Redirecting...");

    // Redirect after a short delay
    setTimeout(() => {
      navigate("/login");
      setLoading(false); // Stop loading after redirection
    }, 2000);
  } catch (err) {
    console.error(err);
    toast.error(err.message || "Registration failed. Please try again.");
    setLoading(false); // Stop loading on error
  }
};


  return (
    <div className="grid lg:grid-cols-2 container mx-auto  items-center">
      <Wrapper>
        <div className="py-5 px-3 lg:hidden">
                  <Link to="/" className="flex items-center gap-3">
                    <img src={logo} alt="Logo" className="w-10" />
                    <h1 className="font-bold text-lg">Healthy You</h1>
                  </Link>
                </div>
      <div className="flex-1 flex flex-col justify-center items-center bg-white lg:items-start px-3">
        <div className="w-full max-w-lg">
          <h1 className="font-bold text-[34px] md:text-4xl mb-4">
            Register Now
          </h1>
          <p className="mb-6 text-[18px] text-left lg:text-left">
            Join us now by filling in your details below
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 md:space-y-5"
          >
            <div>
              <label className="block text-base md:text-lg font-semibold">
                Full Name
              </label>
              <input
                type="text"
                {...register("fullName", { required: "Full Name is required" })}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm">{errors.fullName.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-base md:text-lg font-semibold">
                Email
              </label>
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block text-base md:text-lg font-semibold">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              />
              {/* Eye Icon */}
              <img
                onClick={() => setShowPassword(!showPassword)}
                className="w-5 h-5 absolute top-10 right-4 cursor-pointer"
                src={frame}
                alt="Show Password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <label className="block text-base md:text-lg font-semibold">
                Confirm Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                placeholder="Confirm your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              />
              {/* Eye Icon */}
              <img
                onClick={() => setShowPassword(!showPassword)}
                className="w-5 h-5 absolute top-10 right-4 cursor-pointer"
                src={frame}
                alt="Show Password"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                {...register("terms", {
                  required: "You must agree to the terms",
                })}
              />
              <span className="text-sm">
                I agree to the{" "}
                <a href="#" className="text-[#147C84]">
                  Terms
                </a>{" "}
                and{" "}
                <a href="#" className="text-[#147C84]">
                  Privacy Policy
                </a>
              </span>
            </div>
            {errors.terms && (
              <p className="text-red-500 text-sm">{errors.terms.message}</p>
            )}

            {/* Submit Button */}
            <button
  type="submit"
  className="w-full bg-[#147C84] hover:bg-[#147C84] text-white py-3 rounded-lg text-base md:text-lg cursor-pointer disabled:opacity-50"
  disabled={loading} // Disable button while signing up
>
  {loading ? "Signing up..." : "Sign up"}
</button>

<span className="text-sm flex justify-center text-[16px] text-center">
  Already have an account?{" "}
  <a href="/login" className="text-[#147C84] ml-2">
    Login
  </a>
</span>

          </form>
        </div>
      </div>
      </Wrapper>

      <div className="hidden lg:block relative h-screen">
      <div className="absolute top-6 left-6">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-10" />
          <h1 className="font-bold text-lg">Healthy You</h1>
        </Link>
      </div>
      <img
        src={bgy}
        alt="Background"
        className="w-full h-full object-cover rounded-l-2xl"
      />
    </div>
    </div>
  );
};

export default Register;