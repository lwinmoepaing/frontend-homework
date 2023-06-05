import { useState } from "react";
import formDataDemo from "../../data.json";
import { DynamicForm } from "../utils/DynamicForm";
import { secondFormType } from "../typings/secondFormType";

const defaultFormData = {
  Name: "",
  Gender: "",
  City: "",
  Phone_Number: "",
  Note: "",
};

export const SecondForm = () => {
  const [formData, setFormData] = useState<secondFormType>(defaultFormData);
  console.log("second form: ", formData)
  return (
    <>
      <h1>Second Form</h1>
      {formDataDemo.map((form) => (
        <div className="formInput" key={form.formName}>
          <DynamicForm
            formDemo={form}
            setFormData={setFormData}
            formData={formData}
          />
        </div>
      ))}
    </>
  );
};
