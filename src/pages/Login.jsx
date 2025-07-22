import React, { useState } from "react";
import AuthLayout from "../components/layout/AuthLayout";
import { Link } from "react-router-dom";
import Input from "../components/layout/Input";
import { validationEmail } from "../utils/helper";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
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
      <form onSubmit={handleLogin}>
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
        />
        {error ? <p className="text-red-500 text-center">{error}</p> : null}
        <p className="text-secondary text-center">
          Create new account{" "}
          <Link className="text-tertiary hover:underline" to={"/register"}>
            Sign Up
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
      </form>
    </AuthLayout>
  );
};

export default Login;
