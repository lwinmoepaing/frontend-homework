import { useRef, useState } from "react";
import formData from "../Form.json";
import DynamicComponents from "./DynamicComponents";
const Form = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const roleRef = useRef();
  const [respondData, setResponedData] = useState({});
  const submitHandler = (e) => {
    e.preventDefault();
  };
  const handleChange = (fieldName, value) => {
    setResponedData((prevRespond) => ({
      ...prevRespond,
      [fieldName]: value,
    }));
  };
  const secondSubmitHandler = () => {
    console.log(respondData);
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <label>Name</label>
          <input type="text" ref={nameRef} placeholder="Mike" />
        </div>
        <div>
          <label>email</label>
          <input type="email" ref={emailRef} placeholder="example@email.com" />
        </div>
        <div>
          <label>Role</label>
          <input type="text" ref={roleRef} placeholder="Admin" />
        </div>
        <button type="submit">Submit</button>
      </form>
      <br /> <br />

      <form onSubmit={secondSubmitHandler}>
        {formData.map((data) => {
          const options = data.options ? data.options.length > 0 : null;
          return (
            <DynamicComponents
              key={data.formName}
              data={data}
              op={options}
              options={data.options}
              handleChange={handleChange}
              secondSubmitHandler={secondSubmitHandler}
            ></DynamicComponents>
          );
        })}
      </form>
    </>
  );
};
export default Form;
