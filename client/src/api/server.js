const API_URL = import.meta.env.API_URL || "http://localhost:5000";
// const KHALTI_AUTH_KEY = process.env.KHALTI_SECRET_KEY;
const handeleKhaltiapi = async (data) => {
  // console.log("Sending Data to Server=>", data);
  const response = await fetch(`${API_URL}/api/initiate-payment`, {
    method: "POST",
    headers: {
      // Authorization: `Key ${KHALTI_AUTH_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
};

export { handeleKhaltiapi };
