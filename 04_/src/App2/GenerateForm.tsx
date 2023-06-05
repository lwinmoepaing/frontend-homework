import React from 'react';

interface FormData {
  formName: string;
  placeholder: string;
  isRequired: boolean;
  type: string;
  value: string;
  isAction: boolean;
  isHidden: boolean;
  options: { title: string; value: string }[];
  handleChange: (e: any) => void;
  formValues: { [name: string]: string };
}

const simpleFormTypes = [
  "text",
  "tel",
  "number",
  "password",
  "email",
  "textarea",
];

const SelectForm = ({
  formName,
  isAction,
  isRequired,
  placeholder,
  options,
  value,
  handleChange,
  formValues,
}: FormData) => (
  <div>
    <label htmlFor={formName}>{formName}:</label>
    <select
      name={formName}
      id={formName}
      required={isRequired}
      onBlur={({ target }) => isAction && console.log(target.value)}
      defaultValue={value}
      value={formValues[formName] ?? ""}
      onChange={handleChange}
    >
      <option value="">{placeholder}</option>
      {options.map((opt) => (
        <option value={opt.value} key={opt.value}>
          {opt.title}
        </option>
      ))}
    </select>
  </div>
);

const RadioForm = ({
  formName,
  isRequired,
  options,
  handleChange,
}: FormData) => (
  <div>
    <p>{formName}</p>
    {options.map((opt) => (
      <>
        <label htmlFor={opt.value}>
          <input
            type="radio"
            id={opt.value}
            name={formName}
            value={opt.value}
            required={isRequired}
            onChange={handleChange}
          />
          {opt.title}
        </label>
      </>
    ))}
  </div>
);

const SimpleForm = ({
  formName,
  isAction,
  isRequired,
  placeholder,
  type: formType,
  value,
  handleChange,
  formValues,
}: FormData) => (
  <div>
    <h2>{formName}</h2>
    {formType === "textarea" ? (
      <textarea
        name={formName}
        defaultValue={value}
        placeholder={placeholder}
        required={isRequired}
        onBlur={({ target }) => isAction && console.log(target.value)}
        value={formValues[formName] ?? ""}
        onChange={handleChange}
      />
    ) : (
      <input
        name={formName}
        defaultValue={value}
        type={formType}
        placeholder={placeholder}
        required={isRequired}
        onBlur={({ target }) => isAction && console.log(target.value)}
        value={formValues[formName] ?? ""}
        onChange={handleChange}
      />
    )}
  </div>
);

const SubmitBtn = (formData: FormData) => <button type="submit">Submit</button>;

const forms = [
  { Component: SelectForm, type: "selectbox" },
  { Component: RadioForm, type: "radio" },
  { Component: SimpleForm, type: simpleFormTypes },
  { Component: SubmitBtn, type: "submit" },
];

export default function GenerateForm(formData: FormData) {
  const { type: formType, isHidden, handleChange, formValues } = formData;

  return (
    <>
      {!isHidden &&
        forms.map((form, idx) => {
          if (Array.isArray(form.type) && form.type.includes(formType)) {
            return (
              <form.Component
                key={idx}
                {...formData}
                handleChange={handleChange}
                formValues={formValues}
              />
            );
          } else {
            return (
              form.type === formType && (
                <form.Component
                  {...formData}
                  handleChange={handleChange}
                  formValues={formValues}
                />
              )
            );
          }
        })}
    </>
  );
}
