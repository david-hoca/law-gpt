import { Route, Routes } from "react-router-dom";
import { Welcome } from "@pages/welcome/Welcome";
import { Signup } from "@pages/auth/Signup";
import { Login } from "@pages/auth/Login";

const Routings = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default Routings;
