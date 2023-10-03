import axios from "axios";

export const signupUser = async (userData) => {
  const response = await axios.post(
    "https://ai-backend-lk9v.onrender.com/api/users",
    userData,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  console.log(response);
  if (response.status !== 201) {
    throw new Error("Network response was not ok");
  }

  return response.data;
};


