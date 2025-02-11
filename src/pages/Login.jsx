import { useState } from "react";
import { useForm } from "react-hook-form";
import logo from "../assets/logo.svg";
import bgy from "../assets/images/2149856264 1.png";
import google from "../assets/google.svg";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");



const onSubmit = async (data) => {
  try {
    setLoginError("");
    const res = await login(data.email, data.password);
    console.log(res);

    // Show success toast
    toast.success("Login Successful!");

    // Redirect after a short delay
    setTimeout(() => {
      navigate("/");
    }, 2000);
  } catch (err) {
    setLoginError("Login failed. Please check your credentials.");
    console.error(err);
    toast.error(err.message || "Login failed.");
  }
};

  return (
    <div className="flex flex-col lg:flex-row  md:px-8 lg:container mx-auto">
      <div className="flex-1 flex flex-col justify-center  items-center    bg-white lg:items-start ">
        <div className="w-full max-w-md">
          <h1 className="font-bold text-3xl md:text-4xl mb-4 text-center lg:text-left">
            Welcome Back
          </h1>
          <p className="mb-6 text-center lg:text-left">
            Join us now by filling in your details below
          </p>

          {loginError && (
            <p className="text-red-500 text-center mb-4">{loginError}</p>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-5">
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
                className={`w-full px-4 py-3 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-lg`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

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
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password.message}</p>
              )}
            </div>

            <a href="#" className="text-[#147C84] flex justify-end">
              Forgot password?
            </a>

            <button
              type="submit"
              className="w-full bg-[#147C84] text-white py-3 rounded-lg text-base md:text-lg hover:bg-[#0F5A5F] transition duration-300 cursor-pointer"
            >
              Continue
            </button>

            <div className="flex items-center gap-3">
              <hr className="border-[#147C84] w-full" />
              <span className="text-gray-500">or</span>
              <hr className="border-[#147C84] w-full" />
            </div>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-lg hover:bg-gray-200 transition duration-300 cursor-pointer"
            >
              <img src={google} alt="Google" className="w-6" />
              Continue with Google
            </button>

            <span className="text-sm flex justify-center text-[16px] text-center">
              Don&apos;t have an account?{" "}
              <Link to="/SignUp" className="text-[#147C84]">
                {" "}
                Sign up
              </Link>
            </span>
          </form>
        </div>
      </div>

      <div className="hidden lg:block flex-1 relative min-h-[50vh] lg:min-h-[unset]">
        <div className="absolute top-6 left-6 ">
          <Link to='/' className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-10" />
          <h1 className="font-bold text-lg">Healthy You</h1></Link>
          
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

export default Login;
