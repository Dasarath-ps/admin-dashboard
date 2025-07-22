import React, { useState } from "react";
import AuthLayout from "../components/layout/AuthLayout";
import Input from "../components/layout/Input";
import { Link } from "react-router-dom";
import { validationEmail } from "../utils/helper";
const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    if (!fullName) {
      setError("Please enter your name");
    }
    if (!validationEmail(email)) {
      setError("Please enter a valid email");
      return;
    }
    if (!email) {
      setError("Please enter email");
      return;
    }
    if (!password) {
      setError("Please enter Password");
      return;
    }
  };
  return (
    <AuthLayout>
      <form onSubmit={handleRegister} className="flex justify-center">
        <div className="flex flex-col justify-center items-center border-2 border-tertiary p-10 max-w-3/4 rounded-2xl">
          <Input
            label={"Full Name"}
            placeholder={"John Doe"}
            type={"text"}
            onChange={(e) => setFullName(e.target.value)}
          />
          <Input
            label={"Email Address"}
            placeholder={"john@gmail.com"}
            type={"email"}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label={"Password"}
            placeholder={"Min 8 Character"}
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
          {error ? <p className="text-red-500 text-center">{error}</p> : null}
          <p className="text-secondary text-center">
            Create new account{" "}
            <Link className="text-tertiary hover:underline" to={"/login"}>
              Login
            </Link>
          </p>
          <div className="flex justify-center items-center">
            <button
              className="flex justify-center items-center px-8 py-2.5 bg-green-600 text-secondary-alt text-xl font-bold rounded-3xl mt-4 hover:bg-tertiary hover:text-secondary duration-300 ease-in"
              type="submit"
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Register;
