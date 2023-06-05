import { useRef } from "react";

const App = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const bodyRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      body: bodyRef.current.value,
      password: passwordRef.current.value,
    };

    console.log(payload);
  };

  return (
    <div className="bg-indigo-500 max-w-md mx-auto p-10">
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="border mb-2"
          ref={nameRef}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border mb-2"
          ref={emailRef}
        />
        <br />
        <textarea
          id=""
          cols="30"
          rows="10"
          className="mb-2 broder"
          placeholder="Body text"
          ref={bodyRef}
        ></textarea>
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="mb-2 border"
          ref={passwordRef}
        />
        <br />
        <button type="submit" className="bg-red-500 text-white p-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
