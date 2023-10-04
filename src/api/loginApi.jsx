import axios from "axios";

export const loginUser = async (userData) => {
  const response = await axios.post(
    "https://ai-backend-lk9v.onrender.com/api/users/login",
    userData,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Unexpected response status: " + response.status);
  }
};
