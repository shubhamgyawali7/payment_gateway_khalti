// import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

const KHALTI_AUTH_KEY = process.env.KHALTI_SECRET_KEY;
const KHALTI_BASE_URL =
  "https://dev.khalti.com/api/v2/epayment" ||
  "https://khalti.com/api/v2/epayment";

const handlePayment = async (req, res) => {
  console.log("URL=>", KHALTI_BASE_URL);
  console.log("Request Body=>", req.body);
  console.log("Authorization Header:", `Key ${KHALTI_AUTH_KEY}`);

  try {
    const response = await fetch(`${KHALTI_BASE_URL}/initiate/`, {
      method: "POST",
      headers: {
        Authorization: `Key ${KHALTI_AUTH_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();
    if (!response.ok) {
      console.error("Khalti error:", data);
      return res.status(response.status).json(data);
    }
    res.json(data);
  } catch (error) {
    console.error("Error initiating Khalti payment:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const lookupPayment = async (req, res) => {
  console.log("Lookup Request Body=>", req.body);
  try {
    const response = await fetch(`${KHALTI_BASE_URL}/lookup/`, {
      method: "POST",
      headers: {
        Authorization: `Key ${KHALTI_AUTH_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pidx: req.body.pidx }),
    });

    const data = await response.json();
    console.log("Khalti Lookup Response=>", response);
    if (!response.ok) {
      console.error("Khalti lookup error:", data);
      return res.status(response.status).json(data);
    }
    res.json(data);
  } catch (error) {
    console.error("Error looking up Khalti payment:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export { handlePayment, lookupPayment };
