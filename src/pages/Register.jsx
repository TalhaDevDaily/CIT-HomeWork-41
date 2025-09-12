import logo from "../assets/images/logo.png";
import React from "react";

const Register = () => {
  return (
    <>
      <section
        id="register"
        className="w-full h-screen dark:bg-[#313442] bg-[#E8EDF2] flex justify-center items-center"
      >
        <form className="w-full lg:w-[440px] dark:bg-[#1F2128] bg-[#ffffff] rounded-[16px] p-10">
          {/* ---------------- logo */}
          <div className="flex justify-center">
            <img src={logo} alt="Logo" />
          </div>

          <h2 className="text-[24px] font-bold dark:text-[#f1f1f1] text-[#07070c]">
            Create an account
          </h2>
        </form>
      </section>
    </>
  );
};

export default Register;
