import { useState } from "react";
import { useForm } from "react-hook-form";
import logo from "../assets/logo.svg";
import bgy from "../assets/2149856264 1.png";
import google from "../assets/google.svg";
import frame from "../assets/Frame.svg";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

 8
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen  md:px-8 lg:container mx-auto ">
      {/* Left Section - Form */}
      <div className="flex-1 flex flex-col justify-center  items-center    bg-white lg:items-start ">
        <div className="w-full max-w-md">
          <h1 className="font-bold text-[34px] md:text-4xl mb-4 text-center lg:text-left">
            Register Now
          </h1>
          <p className="mb-6 text-[18px] text-center lg:text-left">
            Join us now by filling in your details below
          </p>
          <form onSubmit={handleSubmit((data) => console.log(data))} className="space-y-4 md:space-y-5">
            
            {/* Full Name */}
            <div>
              <label className="block text-base md:text-lg font-semibold">Full Name</label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            {/* Email */}
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block text-base md:text-lg font-semibold">Password</label>
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
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <label className="block text-base md:text-lg font-semibold">Confirm Password</label>
              <input
                type={showPassword ? "text" : "password"}
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: (value) => value === password || "Passwords do not match",
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
              {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
            </div>

            {/* Terms Check box */}
            <div className="flex items-center gap-2">
              <input type="checkbox" {...register("terms", { required: "You must agree to the terms" })} />
              <span className="text-sm">
                I agree to the{" "}
                <a href="#" className="text-[#147C84]">Terms</a> and{" "}
                <a href="#" className="text-[#147C84]">Privacy Policy</a>
              </span>
            </div>
            {errors.terms && <p className="text-red-500 text-sm">{errors.terms.message}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#147C84] hover:bg-lime-950  text-white py-3 rounded-lg text-base md:text-lg 
                          cursor-pointer"
            >
              Sign up
            </button>

            {/* OR Divider */}
            <div className="flex items-center gap-3">
              <hr className="border-[#147C84] w-full" />
              <span className="text-gray-500">or</span>
              <hr className="border-[#147C84] w-full  " />
            </div>

            {/* Google Signup */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-lg 
                         hover:bg-gray-200 transition duration-300 cursor-pointer"
            >
              <img src={google} alt="Google" className="w-6" />
              Continue with Google
            </button>
            <span className="text-sm flex justify-center text-[16px] text-center">
                Already have an account?{" "}
                <a href="/login" className="text-[#147C84]">Login</a> 
              </span>
          </form>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="hidden lg:block flex-1 relative min-h-[50vh] lg:min-h-screen">
        <div className="absolute top-6 left-6 flex items-center">
          <img src={logo} alt="Logo" className="w-10" />
          <h1 className="font-bold text-lg">Healthy You</h1>
        </div>
        <img
          src={bgy}
          alt="Background"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Register;
