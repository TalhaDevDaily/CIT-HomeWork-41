import { RiUserLine } from "react-icons/ri";
import logo from "../assets/images/logo.png";
import React, { useState } from "react";
import { IoMailOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineEye, HiOutlineEyeDropper } from "react-icons/hi2";

const Register = () => {
  // For First Name only
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("dark:border-[#313442]");

  // For Email
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("dark:border-[#313442]");
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // For password
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("dark:border-[#313442]");
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (!name) return setNameError("border-red-500");
    // if (!email) return setEmailError("border-red-500");

    // // setNameError("");

    if (!emailRegex.test(email)) return setEmailError("border-red-500");
    if (!passwordRegex.test(password))
      return setPasswordError("border-red-500");
  };

  return (
    <>
      <section
        id="register"
        className="w-full h-screen dark:bg-[#313442] bg-[#E8EDF2] flex justify-center items-center"
      >
        <form
          onSubmit={handleSubmit}
          className="w-full lg:w-[440px] dark:bg-[#1F2128] bg-[#ffffff] rounded-[16px] p-10"
        >
          {/* ---------------- logo */}
          <div className="flex justify-center">
            <img src={logo} alt="Logo" />
          </div>

          <h2 className="text-[16px] lg:text-[24px] font-bold dark:text-[#f1f1f1] text-[#07070c] text-center mt-[15px] mb-[5px]">
            Create an account
          </h2>
          <p className="text-[12px] text-[#7E7E8F] dark:text-[#8B8B93] text-center lg:text-[14px]">
            You are welcome!
          </p>

          {/* ------------- Name field */}
          <div>
            <h2 className="lg:text-[14px] text-[12px] text-[#07070c] dark:text-[#F1F1F1] mt-[30px]">
              Your name
            </h2>

            <div className="flex justify-between items-center mt-2">
              <div
                className={`w-[170px] h-[48px] border border[#E8EDF2] ${nameError} rounded-[8px] flex items-center justify-between px-[15px]`}
              >
                <input
                  onChange={(alu) => {
                    setName(alu.target.value),
                      setNameError("dark:border-[#313442]");
                  }}
                  type="text"
                  placeholder="First name"
                  className="text-[14px] dark:placeholder:text-[#2C2C35] placeholder:text-[##C6CBD9] text-[#07070c] dark:text-[#f1f1f1] outline-none w-full"
                />

                <RiUserLine className="text-[#64646F] text-[18px]" />
              </div>

              <div className="w-[170px] h-[48px] border border[#E8EDF2] dark:border-[#313442] rounded-[8px] flex items-center justify-between px-[15px]">
                <input
                  type="text"
                  placeholder="Last name"
                  className="text-[14px] dark:placeholder:text-[#2C2C35] placeholder:text-[##C6CBD9] text-[#07070c] dark:text-[#f1f1f1] outline-none w-full"
                />

                <RiUserLine className="text-[#64646F] text-[18px]" />
              </div>
            </div>
          </div>

          {/* ------------- Email field */}
          <div>
            <h2 className="lg:text-[14px] text-[12px] text-[#07070c] dark:text-[#F1F1F1] mt-[30px]">
              E-mail
            </h2>

            <div
              className={`w-full h-[48px] border border[#E8EDF2] ${emailError} rounded-[8px] flex items-center justify-between px-[15px] mt-2`}
            >
              <input
                onChange={(e) => {
                  e.target.value;
                }}
                type="email"
                placeholder="Email"
                className="text-[14px] dark:placeholder:text-[#2C2C35] placeholder:text-[##C6CBD9] text-[#07070c] dark:text-[#f1f1f1] outline-none w-full"
              />

              <IoMailOutline className="text-[#64646F] text-[18px]" />
            </div>
          </div>

          {/* ------------- Phone no. field */}
          <div>
            <h2 className="lg:text-[14px] text-[12px] text-[#07070c] dark:text-[#F1F1F1] mt-[30px]">
              Phone numbers
            </h2>

            <div className="w-full h-[48px] border border[#E8EDF2] dark:border-[#313442] rounded-[8px] flex items-center justify-between px-[15px] mt-2">
              <input
                type="tel"
                placeholder="(+01)"
                className="text-[14px] dark:placeholder:text-[#2C2C35] placeholder:text-[##C6CBD9] text-[#07070c] dark:text-[#f1f1f1] outline-none w-full"
              />

              <BsTelephone className="text-[#64646F] text-[18px]" />
            </div>
          </div>

          {/* ------------- Password field */}
          <div>
            <h2 className="lg:text-[14px] text-[12px] text-[#07070c] dark:text-[#F1F1F1] mt-[30px]">
              Password
            </h2>

            <div
              className={`w-full h-[48px] border border[#E8EDF2] ${passwordError} rounded-[8px] flex items-center justify-between px-[15px] mt-2`}
            >
              <input
                onChange={(e) => {
                  setPassword(e.target.value),
                    setPasswordError("dark:border-[#313442]");
                }}
                type="password"
                placeholder="********"
                className="text-[14px] dark:placeholder:text-[#2C2C35] placeholder:text-[##C6CBD9] text-[#07070c] dark:text-[#f1f1f1] outline-none w-full"
              />

              <HiOutlineEye className="text-[#64646F] text-[18px]" />
            </div>
          </div>
          {/* ------------- Confirm Password field */}
          <div>
            <h2 className="lg:text-[14px] text-[12px] text-[#07070c] dark:text-[#F1F1F1] mt-[30px]">
              Confirm Password
            </h2>

            <div className="w-full h-[48px] border border[#E8EDF2] dark:border-[#313442] rounded-[8px] flex items-center justify-between px-[15px] mt-2">
              <input
                type="password"
                placeholder="********"
                className="text-[14px] dark:placeholder:text-[#2C2C35] placeholder:text-[##C6CBD9] text-[#07070c] dark:text-[#f1f1f1] outline-none w-full"
              />

              <HiOutlineEye className="text-[#64646F] text-[18px]" />
            </div>
          </div>

          <button
            type="submit"
            className="w-full h-[52px] bg-[#7364DB] rounded-[8px] text-base font-semibold text-[#ffffff] mt-5"
          >
            Sign up
          </button>
        </form>
      </section>
    </>
  );
};

export default Register;
