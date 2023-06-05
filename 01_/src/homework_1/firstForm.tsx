import { useState } from "react";

export const FirstForm = () => {
  const [validEmail, setValidEmail] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
  });

  const validateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isValidEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (e.target?.value && e.target.value.match(isValidEmail)) {
      setValidEmail(true);
      setForm({ ...form, email: e.target.value });
    } else {
      setValidEmail(false);
    }
  };

  console.log("first form: ", form);
  return (
    <div>
      <h1>First Form</h1>
      <label>Name</label>
      <input
        type="text"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <label>Email</label>
      {!validEmail && <p className="danger">not a valid email</p>}
      <input type="email" onChange={(e) => validateEmail(e)} />
      <label>Role</label>
      <input
        type="text"
        onChange={(e) => setForm({ ...form, role: e.target.value })}
      />
      <button onClick={() => console.log("sending the form-1")}>Send</button>
    </div>
  );
};
