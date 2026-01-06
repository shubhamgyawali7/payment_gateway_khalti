import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PaymentComplete = () => {
  const location = useLocation();
  const pidx = new URLSearchParams(location.search).get("pidx");
  const status = new URLSearchParams(location.search).get("status");
  console.log("PaymentComplete pidx:", pidx);

  const [lookupResult, setLookupResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!pidx) {
      setError("Invalid payment reference");
      setLoading(false);
      return;
    }
    const SERVER = import.meta.env.VITE_API_URL;
    if (!SERVER) {
      console.error("VITE_API_URL is not defined in environment variables");
      return;
    }
    const verifyPayment = async () => {
      try {
        const response = await fetch(`${SERVER}/api/lookup-payment`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ pidx, status }),
        });

        const data = await response.json();
        console.log("Lookup Data=>", data);
        if (!response.ok) {
          throw new Error(data.message || "Lookup failed");
        }
        setLookupResult(data);
      } catch (err) {
        console.error("Verification failed:", err);
        setError("Payment verification failed");
      } finally {
        setLoading(false);
      }
    };

    verifyPayment();
  }, [pidx]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Payment Result</h1>

      {loading && <p className="text-gray-600">Verifying payment...</p>}

      {error && <div className="text-red-600 text-xl">❌ {error}</div>}

      {!loading &&
        lookupResult &&
        (lookupResult.status === "Completed" ? (
          <div className="text-green-600 text-xl">
            ✅ Payment Successful
            <br />
            <span className="text-sm">
              Transaction ID: {lookupResult.transaction_id}
            </span>
          </div>
        ) : (
          <div className="text-red-600 text-xl">
            ❌ Payment {lookupResult.status}
          </div>
        ))}

      <a
        href="/"
        className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
      >
        🔙 Back to Home
      </a>
    </div>
  );
};

export default PaymentComplete;
