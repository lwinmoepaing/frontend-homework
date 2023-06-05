"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import GenerateForm from "./GenerateForm";
import formData from "./formData.json";

export default function ReactHomework2() {
  const [formValues, setFormValues] = useState<{ [name: string]: string }>({});

  const handleChange = (e: ChangeEvent<any>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formValues);
  };

  return (
    <form className="pt-32" onSubmit={submitHandler}>
      {formData.length > 0 &&
        formData.map((form, idx) => (
          <GenerateForm
            key={idx}
            {...form}
            handleChange={handleChange}
            formValues={formValues}
          />
        ))}
    </form>
  );
}
