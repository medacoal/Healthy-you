import React, { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import paypal from "../../assets/icons/logos_paypal.png";
import paystack from "../../assets/icons/Vector (52).png"
import credit from "../../assets/icons/Group (3).png";

const paymentMethods = [
  { id: "paystack", name: "Paystack", img: paystack },
  { id: "credit-card", name: "Credit Card", img: credit },
  { id: "paypal", name: "Paypal", img: paypal },
];

const Payment = () => { 
  const [selectedMethod, setSelectedMethod] = useState(null);

  return (
    <div className="lg:w-[45%] p-8 bg-white rounded-lg shadow-md ">
      <h2 className="text-3xl font-semibold mb-4">Payment Gateway</h2>
      <RadioGroup value={selectedMethod} onChange={setSelectedMethod}>
        <div className="space-y-7">
          {paymentMethods.map((method) => (
            <RadioGroup.Option 
              key={method.id} 
              value={method} 
              className={({ checked }) => 
                `flex items-center justify-between p-3 border rounded-lg cursor-pointer transition-all ${
                  checked ? 'border-teal-500 bg-teal-50' : 'border-gray-300'
                }`
              }
            >
              {({ checked }) => (
                <>
                  <div className="flex items-center gap-3">
                    <img src={method.img} alt={method.name} className="w-6 h-6" />
                    <span className="font-semibold">{method.name}</span>
                  </div>
                  <div className={`w-5 h-5 border-2 rounded-full flex items-center justify-center ${
                    checked ? 'border-teal-500' : 'border-gray-400'
                  }`}>
                    {checked && <div className="w-2.5 h-2.5 bg-teal-500 rounded-full"></div>}
                  </div>
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
      <button className="mt-10 w-full bg-[#147C84] text-white py-2 rounded-lg cursor-pointer hover:bg-teal-700">Proceed</button>
    </div>
  );
}

export default Payment;
