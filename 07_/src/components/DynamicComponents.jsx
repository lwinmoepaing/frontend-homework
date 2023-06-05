import React from "react";

const DynamicComponents = ({
  data,
  op,
  options,
  handleChange,
  secondSubmitHandler,
}) => {
  const handleFieldChange = (e) => {
    if (data.type === "radio") {
      handleChange(data.formName, e.target.value);
    } else {
      handleChange(data.formName, e.target.value);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    secondSubmitHandler();
  };

  const onBlur = () => {
    if (data.type === "phoneinput") {
      console.log("test.com/checkphonenumber");
    }
  };

  return (
    <>
      {data.type === "submit" ? (
        <button type="submit" onClick={submitHandler}>
          {data.formName}
        </button>
      ) : (
        <div>
          <label placeholder={data.placeholder}>{data.formName}</label>
          {op ? (
            data.type === "radio" ? (
              options.map((option) => (
                <div key={option.value}>
                  <input
                    type="radio"
                    name={data.formName}
                    onChange={handleFieldChange}
                    value={option.value}
                  />
                  <label>{option.title}</label>
                </div>
              ))
            ) : (
              <select onChange={handleFieldChange}>
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.title}
                  </option>
                ))}
              </select>
            )
          ) : (
            <input
              onChange={handleFieldChange}
              type={data.type}
              onBlur={onBlur}
              //   hidden={data.type == "radio" || "selectbox"}
              required={data.isRequired}
            />
          )}
        </div>
      )}

      <br />
    </>
  );
};

export default DynamicComponents;
