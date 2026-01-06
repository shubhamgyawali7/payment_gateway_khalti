import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const handeleKhaltiapi = async (data) => {
  console.log(data);
  try {
    // Correct Axios POST syntax: axios.post(url, data, config)
    const response = await axios.post(`${API_URL}/api/initiate-payment`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Axios returns the response body in the 'data' property
    return response.data;
  } catch (error) {
    console.error("API Call Error:", error.response?.data || error.message);
    throw error;
  }
};

export { handeleKhaltiapi };
