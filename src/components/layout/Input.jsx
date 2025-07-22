import React, { useState } from "react";
import { LuEye, LuEyeClosed } from "react-icons/lu";

const Input = ({ label, placeholder, type, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);
  // console.log(showPassword);
  const visiblePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex flex-col gap-2 h-20  max-w-[350px] m-auto text-secondary mb-4">
      <label className="p-2 text-tertiary">{label}</label>
      <div className="p-2 grid grid-cols-[300px_1fr] h-full border-2 border-secondary rounded-2xl justify-between items-center ">
        <input
          className="p-2] focus:outline-none"
          type={
            type == "password" ? (showPassword ? "text" : "password") : type
          }
          placeholder={placeholder}
          onChange={onChange}
        />
        <button onClick={visiblePassword}>
          {type == "password" ? (
            showPassword ? (
              <LuEye className="text-tertiary mr-6 text-2xl " />
            ) : (
              <LuEyeClosed className="text-tertiary mr-6 text-2xl " />
            )
          ) : null}
        </button>
      </div>
    </div>
  );
};

export default Input;
