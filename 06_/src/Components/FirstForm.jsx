import { useState } from "react";

const FirstForm = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  
  const handleClick = () => {
    console.log(user);
  };

  return (
    <div
      className={
        "border shadow-2xl absolute top-[8%] lg:left-[30%] md:left-[26%] sm:left-[20%] left-[0] opacity-100 z-40 lg:w-[550px] md:w-[540px] sm:w-[530px] w-[415px] h-[620px] bg-white"
      }
    >
      <div className="float-left m-2 md:float-right rounded-full p-2 bg-black text-white"></div>
      <div className="m-14">
        <h1 className="text-2xl font-bold uppercase">Sign In</h1>
        <p className="text-sm text-gray-500">
          Signing In and becoming a member of us
        </p>
      </div>
      <div className="max-w-full">
        <p className="sm:ml-16 sm:text-sm text-xs p-2 w-[50px] ml-[38px]">
          Email
        </p>
      </div>
      <div className="max-w-full">
        <input
          type="email"
          onChange={(evt) => setUser({ ...user, email: evt.target.value })}
          placeholder="Enter an email"
          className="sm:w-[400px] border-black border ml-[38px] sm:ml-[70px] p-4 focus:outline-none text-sm w-[300px] m-auto"
        />
      </div>
      <div className="max-w-full">
        <p className="sm:ml-16 sm:text-sm text-xs p-2 w-[50px] ml-[38px]">
          Password
        </p>
      </div>
      <div className="max-w-full">
        <input
          type="password"
          onChange={(evt) => setUser({ ...user, password: evt.target.value })}
          placeholder="Enter an email"
          className="sm:w-[400px] border-black border ml-[38px] sm:ml-[70px] p-4 focus:outline-none text-sm w-[300px] m-auto"
        />
      </div>
      <div className="text-sm flex justify-between sm:max-w-[400px] max-w-[300px] m-auto pt-3 cursor-pointer">
        <div className="flex ml-[-10px]">
          <p className="mr-2">Remember Me</p>
          <input type="radio" />
        </div>
        <p className="mr-4">Forget password</p>
      </div>
      <div
        className="sm:w-[400px] w-[300px] bg-black border sm:ml-[70px] ml-[40px] p-4 text-sm text-white mt-6 cursor-pointer"
        onClick={handleClick}
      >
        <p className="text-center tracking-wide">
          {" "}
          <a href="/main">Sign In</a>
        </p>
      </div>
      <div className="sm:w-[400px] w-[300px] bg-white border border-black sm:ml-[70px] ml-[40px] p-4 text-sm text-black mt-6 cursor-pointer">
        <p className="text-center tracking-wide"> Become a member</p>
      </div>
    </div>
  );
};

export default FirstForm;
