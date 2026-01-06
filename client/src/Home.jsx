// src/Home.jsx
import React, { useState } from "react";
import khalti from "./assets/khalti.png";
import { handeleKhaltiapi } from "./api/server.js"; // helper to call backend

const Home = () => {
  const [amount, setAmount] = useState(0);
  const CLIENT = import.meta.env.VITE_URL || "http://localhost:5173";
  const productName = "Test Product";
  const purchaseOrderId = "order" + Date.now(); // unique order ID
  const handlePayment = async () => {
    if (amount < 10) {
      alert("Minimum payment amount is Rs. 10");
      return;
    }

    try {
      const data = await handeleKhaltiapi({
        return_url: `${CLIENT}/payment-complete`,
        website_url: `${CLIENT}`,
        amount: Number(amount) * 1000,
        purchase_order_id: purchaseOrderId,
        purchase_order_name: productName,
        customer_info: {
          name: "Test User",
          email: "test@example.com",
          phone: "9800000001",
        },
      });
      console.log("Khalti Data=>", data);
      if (data.payment_url) {
        window.location.href = data.payment_url;
      } else {
        alert(data.detail || "Payment initiation failed");
      }
    } catch (error) {
      console.error(error);
      alert("Payment failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <label className="text-3xl font-bold mb-2">Enter the Amount</label>
      <input
        onChange={(e) => setAmount(e.target.value)}
        type="number"
        value={amount}
        className="border-2 border-gray-300 p-2 rounded-lg w-64"
        placeholder="Amount in NPR"
      />
      <button
        onClick={handlePayment}
        className="bg-[#5E338D] text-white px-4 py-2 rounded-lg mt-4 hover:bg-[#360B54]"
      >
        <img src={khalti} alt="Khalti Logo" className="inline-block mr-2 h-6" />
        Pay Now
      </button>
    </div>
  );
};

export default Home;
