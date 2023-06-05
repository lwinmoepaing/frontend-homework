import { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import cities from "../utlis/data";

const SecForm = () => {
  const [data, setData] = useState({
    name: "",
    gender: "",
    city: "",
    phonenumber: "",
    note: "",
  });

  const handleClick = () => {
    console.log(data);
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
          Name
        </p>
      </div>
      <div className="max-w-full">
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(evt) => setData({ ...data, name: evt.target.value })}
          className="sm:w-[400px] border-black border ml-[38px] sm:ml-[70px] p-4 focus:outline-none text-sm w-[300px] m-auto"
        />
      </div>

      <div className="text-sm flex justify-between sm:max-w-[400px] max-w-[300px] m-auto pt-3 cursor-pointer">
        <div className="flex ml-[-10px]">
          <p className="mr-2">Male</p>
          <input
            type="radio"
            name="gender"
            value="male"
            onClick={(evt) => setData({ ...data, gender: evt.target.value })}
          />
        </div>
        <div className="flex ml-[-10px]">
          <p className="mr-2">Female</p>
          <input 
            name="gender"
            type="radio" value="female" onClick={(evt) => setData({ ...data, gender: evt.target.value })} />
        </div>
      </div>

      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={cities}
        sx={{ width: 400, margin: "auto" }}
        renderInput={(params) => <TextField {...params} label="City" />}
        onChange={(evt, value) => setData({ ...data, city: value.value })}
      />
      <div className="max-w-full">
        <p className="sm:ml-16 sm:text-sm text-xs p-2 w-[50px] ml-[38px]">
          PhoneNumber
        </p>
      </div>
      <div className="max-w-full">
        <input
          type="text"
          onChange={(evt) =>
            setData({ ...data, phonenumber: evt.target.value })
          }
          placeholder="+959236xxxxxx"
          className="sm:w-[400px] border-black border ml-[38px] sm:ml-[70px] p-4 focus:outline-none text-sm w-[300px] m-auto"
        />
      </div>
      <div className="max-w-full">
        <p className="sm:ml-16 sm:text-sm text-xs p-2 w-[50px] ml-[38px]">
          Notes
        </p>
      </div>
      <div className="max-w-full text-center">
        <textarea
          className="w-[400px] p-2 border border-black hover:border-gray-500 rounded-md"
          rows={2}
          onChange={(evt) => setData({ ...data, note: evt.target.value })}
          placeholder="Your message"
        />
      </div>
      <div
        className="sm:w-[400px] w-[300px] bg-black border sm:ml-[70px] ml-[40px] p-4 text-sm text-white mt-6 cursor-pointer"
        onClick={handleClick}
      >
        <p className="text-center tracking-wide">
          {" "}
          <a href="/main">Submmit</a>
        </p>
      </div>
    </div>
  );
};

export default SecForm;
