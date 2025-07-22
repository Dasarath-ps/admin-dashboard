import React from "react";
import image from "../../assets/images/login_image.png";
import { LuTrendingUpDown } from "react-icons/lu";
const AuthLayout = ({ children }) => {
  return (
    <div className="flex w-full bg-primary">
      <div className="w-[60vw] h-screen flex flex-col justify-center gap-10">
        <div className="flex justify-center items-center text-center">
          <h2
            className="text-6xl font-bold text-tertiary"
            style={{
              WebkitTextStroke: "2px #1ce480",
              WebkitTextFillColor: "transparent",
            }}
          >
            Expenses Tracker
          </h2>
        </div>
        {children}
      </div>
      <div className="w-[40vw] flex flex-col justify-center gap-10">
        <StarInfo />
        <div className="">
          <img src={image} alt="Loading..." />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;

const StarInfo = () => {
  return (
    <div className="flex justify-center">
      <div className="flex justify-around items-center border-2 border-tertiary rounded-2xl w-[400px] py-5">
        <div className="h-20 w-20 bg-dark rounded-full flex justify-center items-center ">
          <LuTrendingUpDown className="text-tertiary text-3xl overflow-hidden font-bold" />
        </div>
        <div className="text-secondary text-2xl flex flex-col items-center">
          <h2>Your Income</h2>
          <p>$1056</p>
        </div>
      </div>
    </div>
  );
};
