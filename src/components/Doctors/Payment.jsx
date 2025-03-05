import React, { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { usePaystackPayment } from "react-paystack";
import paypal from "../../assets/icons/logos_paypal.png";
import paystack from "../../assets/icons/Vector (52).png";
import credit from "../../assets/icons/Group (3).png";

const paymentMethods = [
  { id: "paystack", name: "Paystack", img: paystack },
  { id: "credit-card", name: "Credit Card", img: credit },
  { id: "paypal", name: "Paypal", img: paypal },
];

const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [email, setEmail] = useState("");
  const [amountInUSD, setAmountInUSD] = useState("");

  const paystackPublicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;
  const exchangeRate = 800;
  const amountInNGN = amountInUSD ? amountInUSD * exchangeRate : 0;
  const amountInKobo = amountInNGN * 100;

  const config = {
    reference: new Date().getTime().toString(),
    email: email,
    amount: amountInKobo,
    currency: "NGN",
    publicKey: paystackPublicKey,
  };

  const initializePayment = usePaystackPayment(config);

  const handlePayment = () => {
    if (!email || !amountInUSD || isNaN(amountInUSD) || amountInUSD <= 0) {
      alert("Please enter a valid email and amount.");
      return;
    }

    if (!paystackPublicKey) {
      alert("Missing Paystack public key. Check .env file.");
      return;
    }

    if (selectedMethod?.id === "paystack") {
      initializePayment(
        (response) => {
          console.log("Payment successful:", response);

          // Immediately redirect to the homepage after payment success
          window.location.replace("/"); // Use replace for a clean redirect
        },
        (error) => {
          console.log("Payment closed:", error);
        }
      );
    } else {
      alert("Please select Paystack as the payment method.");
    }
  };

  return (
    <div className="lg:w-[45%] p-8 bg-white rounded-lg shadow-md relative">
      <h2 className="text-3xl font-semibold mb-4">Payment Gateway</h2>

      {/* Email Input */}
      <div className="mb-5">
        <label className="block text-gray-700 font-semibold mb-2">Enter Your Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-[#d3d4d7] rounded-lg focus:ring-2 focus:ring-teal-500"
        />
      </div>

      {/* Amount Input */}
      <div className="mb-5">
        <label className="block text-gray-700 font-semibold mb-2">Enter Amount in USD</label>
        <input
          type="number"
          value={amountInUSD}
          onChange={(e) => setAmountInUSD(e.target.value)}
          className="w-full p-2 border border-[#d3d4d7] rounded-lg focus:ring-2 focus:ring-teal-500"
          min="1"
        />
      </div>

      {/* Payment Methods */}
      <RadioGroup value={selectedMethod} onChange={setSelectedMethod}>
        <div className="space-y-7">
          {paymentMethods.map((method) => (
            <RadioGroup.Option
              key={method.id}
              value={method}
              className={({ checked }) =>
                `flex items-center justify-between p-3 border rounded-lg cursor-pointer ${
                  checked ? "border-teal-500 bg-teal-50" : "border-gray-300"
                }`
              }
            >
              {({ checked }) => (
                <>
                  <div className="flex items-center gap-3">
                    <img src={method.img} alt={method.name} className="w-6 h-6" />
                    <span className="font-semibold">{method.name}</span>
                  </div>
                  <div
                    className={`w-5 h-5 border-2 rounded-full flex items-center justify-center ${
                      checked ? "border-teal-500" : "border-gray-400"
                    }`}
                  >
                    {checked && <div className="w-2.5 h-2.5 bg-teal-500 rounded-full"></div>}
                  </div>
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>

      {/* Proceed Button */}
      <button
        onClick={handlePayment}
        className="mt-10 w-full bg-[#147C84] text-white py-2 rounded-lg hover:bg-teal-700"
      >
        Proceed
      </button>
    </div>
  );
};

export default Payment;
