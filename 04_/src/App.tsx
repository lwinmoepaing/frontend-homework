import React, { useRef } from "react";

export default function ReactHomework1() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const noteRef = useRef<HTMLTextAreaElement>(null);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const note = noteRef.current?.value;

    console.log({ name, email, note });
  };

  return (
    <form onSubmit={submitHandler} className="pt-32">
      <input ref={nameRef} type="text" placeholder="Name" required /> <br />
      <input ref={emailRef} type="email" placeholder="Email" required /> <br />
      <textarea ref={noteRef} name="" id="" placeholder="Note" required />
      <br />
      <button>Submit</button>
    </form>
  );
}
