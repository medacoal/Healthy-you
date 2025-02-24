import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Dat from "../assets/icons/Vector (50).png";
import Clock from "../assets/icons/Vector (51).png";
import x from "../assets/icons/Stockholm-icons.png";

const Book = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const [loading, setLoading] = useState(false); // Loading state

  const onSubmit = (data) => {
    if (Object.keys(errors).length > 0) {
      return; // Stop submission if there are errors
    }

    setLoading(true); // Start loading

    setTimeout(() => {
      console.log(data);
      navigate("/booking"); // Navigate after "loading"
    }, 2000); // Simulate loading delay
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-300 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Book Doctor</h2>
          <img
            src={x}
            alt="Close"
            className="w-8 h-8 cursor-pointer"
            onClick={() => navigate("/finddoctor")}
          />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold">Full Name</label>
            <input
              {...register("fullName", { required: "Full Name is required" })}
              className="w-full border border-gray-300 p-2 rounded mt-1"
              placeholder="Enter your full name"
            />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Email</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email format",
                },
              })}
              className="w-full border border-gray-300 p-2 rounded mt-1"
              placeholder="Enter your Email"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Phone Number</label>
            <input
              {...register("phone", {
                required: "Phone Number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Invalid phone number",
                },
              })}
              className="w-full border border-gray-300 p-2 rounded mt-1"
              placeholder="123-456-7890"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Appointment Type</label>
            <select
              {...register("appointmentType", {
                required: "Appointment Type is required",
              })}
              className="w-full border border-gray-300 py-2 px-1 rounded mt-1"
            >
              <option value="">Select Type</option>
              <option value="General Checkup">General Checkup</option>
              <option value="Specialist Consultation">Specialist Consultation</option>
            </select>
            {errors.appointmentType && <p className="text-red-500 text-sm">{errors.appointmentType.message}</p>}
          </div>

          <div className="flex flex-row space-x-4">
            <div>
              <label className="block text-gray-700 font-semibold">Preferred Date</label>
              <div className="relative">
                <input
                  type="text"
                  {...register("preferredDate", {
                    required: "Preferred Date is required",
                  })}
                  className="w-full border border-gray-300 p-2 rounded mt-1 pr-10"
                  placeholder="August 24, 2024"
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.type = "text")}
                />
                <img src={Dat} className="absolute right-3 top-4 text-gray-500" alt="Date Icon" />
              </div>
              {errors.preferredDate && <p className="text-red-500 text-sm">{errors.preferredDate.message}</p>}
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">Preferred Time</label>
              <div className="relative">
                <input
                  type="text"
                  {...register("preferredTime", {
                    required: "Preferred Time is required",
                  })}
                  className="w-full border border-gray-300 p-2 rounded mt-1 pr-10"
                  placeholder="10:00 AM"
                  onFocus={(e) => (e.target.type = "time")}
                  onBlur={(e) => (e.target.type = "text")}
                />
                <img src={Clock} className="absolute right-3 top-4 text-gray-500" alt="Clock Icon" />
              </div>
              {errors.preferredTime && <p className="text-red-500 text-sm">{errors.preferredTime.message}</p>}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Reason for Appointment</label>
            <textarea
              {...register("reason", {
                required: "Reason for Appointment is required",
              })}
              className="w-full border border-gray-300 p-3 rounded mt-1 max-h-[300px]"
            ></textarea>
            {errors.reason && <p className="text-red-500 text-sm">{errors.reason.message}</p>}
          </div>

          {/* Submit button with static "Loading..." text when clicked */}
          <button
            type="submit"
            className={`w-full text-white font-semibold border-gray-300 p-2 rounded ${
              loading ? "bg-[#147C84] cursor-not-allowed" : "bg-[#147C84] hover:bg-[#147d84dc]"
            }`}
            disabled={loading} // Disable button when loading
          >
            {loading ? "Loading..." : "Book Appointment"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Book;
