import React, { useRef, useState } from "react";
import { api as formApi } from "./api";

const FromList = ({
  form,
  nameRef,
  radioRef,
  selectRef,
  phoneRef,
  bodyRef,
}) => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handlePhone = (e) => {
    console.log(form.callbackUrl);
  };

  return (
    <div>
      {form.type === "input" && (
        <input
          type="text"
          className="border text-black"
          onChange={(e) => handleChange(e)}
          ref={nameRef}
          required={form.isRequired}
          placeholder={form.placeholder}
          name={form.formName}
        />
      )}

      {form.type === "radio" &&
        form.options.map((option) => (
          <label key={option.title}>
            <input
              type="radio"
              name={form.formName}
              value={option.value}
              required={form.isRequired}
              ref={radioRef}
            />
            {option.title}
          </label>
        ))}

      {form.type === "selectbox" && (
        <select
          name={form.formName}
          id=""
          className="text-black"
          required={form.isRequired}
          ref={selectRef}
        >
          {form.options.map((option) => (
            <option value={option.value} key={option.title}>
              {option.title}
            </option>
          ))}
        </select>
      )}

      {form.type === "phoneinput" && (
        <input
          type="tel"
          className="text-black"
          name={form.formName}
          required={form.isRequired}
          onBlur={(e) => handlePhone(e)}
          placeholder={form.placeholder}
          ref={phoneRef}
        />
      )}

      {form.type === "textarea" && (
        <textarea
          className="mt-2 text-black"
          placeholder={form.placeholder}
          required={form.isRequired}
          name={form.formName}
          ref={bodyRef}
        ></textarea>
      )}

      {form.type === "submit" && <button>Submit</button>}
    </div>
  );
};

const App2 = () => {
  const nameRef = useRef();
  const radioRef = useRef();
  const selectRef = useRef();
  const phoneRef = useRef();
  const bodyRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name: nameRef.current.value,
      gender: radioRef.current.value,
      city: selectRef.current.value,
      phone: phoneRef.current.value,
      textarea: bodyRef.current.value,
    };

    console.log(payload);
  };
  return (
    <div className="bg-indigo-500 max-w-md mx-auto p-10 text-white">
      <form action="" onSubmit={handleSubmit}>
        {formApi.map((form) => (
          <FromList
            key={form.formName}
            form={form}
            nameRef={nameRef}
            radioRef={radioRef}
            selectRef={selectRef}
            phoneRef={phoneRef}
            bodyRef={bodyRef}
          />
        ))}
      </form>
    </div>
  );
};

export default App2;
