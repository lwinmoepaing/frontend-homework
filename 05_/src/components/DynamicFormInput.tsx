import { ChangeEvent } from "react";
import { LMPFormInterface } from "../types/FormInterface";
import { LMPPostFormInterface, MyPostFormInterface } from "../types/PostFormInterface";


const DynamicFormInput = ({ formData, setPostData }: { formData: LMPFormInterface, setPostData: React.Dispatch<React.SetStateAction<LMPPostFormInterface | MyPostFormInterface>> }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLTextAreaElement>, key: string) => {
    switch (key) {
      case "name":
        setPostData((prevState: LMPPostFormInterface | MyPostFormInterface) => {
          return { ...prevState, name: e.target.value };
        })
        break;
      case "email":
        setPostData((prevState: LMPPostFormInterface | MyPostFormInterface) => {
          return { ...prevState, email: e.target.value };
        })
        break;
      case "gender":
        setPostData((prevState: LMPPostFormInterface | MyPostFormInterface) => {
          return { ...prevState, gender: e.target.value };
        })
        break;
      case "city":
        setPostData((prevState: LMPPostFormInterface | MyPostFormInterface) => {
          return { ...prevState, city: e.target.value };
        })
        break;
      case "phone":
        setPostData((prevState: LMPPostFormInterface | MyPostFormInterface) => {
          return { ...prevState, phone: e.target.value };
        })
        break;
      case "note":
        setPostData((prevState: LMPPostFormInterface | MyPostFormInterface) => {
          return { ...prevState, note: e.target.value };
        })
        break;
      default:
        break;
    }
  }

  return (
    <>
      {
        formData.type === "input" &&
          <div className="mb-8">
            <label htmlFor="name" className="block mb-2">{formData.formName}</label>
            <input type="text" id="name" required={formData.isRequired} placeholder={formData.placeholder} onChange={(e) => handleChange(e, "name")} />
          </div>
      }

      {
        formData.type === "email" &&
          <div className="mb-8">
            <label htmlFor="email" className="block mb-2">{formData.formName}</label>
            <input type="email" id="email" required={formData.isRequired} placeholder={formData.placeholder} onChange={(e) => handleChange(e, "email")} />
          </div>
      }

      {
        formData.type === "radio" &&
          <div className="mb-8">
            <label htmlFor="gender" className="block mb-2">{formData.formName}</label>
            <div className="flex gap-2">
              {
                formData.options.map(option => {
                  return (
                    <div key={option.title}>
                      <label htmlFor={option.title}>{option.title}</label>
                      <input type="radio" id={option.title} required={formData.isRequired} placeholder={formData.placeholder} value={option.value} name="gender" onChange={(e) => handleChange(e, "gender")} />
                    </div>
                  )
                })
              }
            </div>
          </div>
      }

      {
        formData.type === "selectbox" &&
          <div className="mb-8">
            <label htmlFor="city" className="block mb-2">{formData.formName}</label>
            <select name="city" id="city" defaultValue="" onChange={(e) => handleChange(e, "city")} required={formData.isRequired}>
              <option value="" disabled>{formData.placeholder}</option>
              {
                formData.options.map(option => {
                  return (
                    <option value={option.value} key={option.title}>{option.title}</option>
                  )
                })
              }
            </select>
          </div>
      }

      {
        formData.type === "phoneinput" &&
          <div className="mb-8">
            <label htmlFor="phone" className="block mb-2">{formData.formName}</label>
            <input type="tel" name="phone" id="phone" required={formData.isRequired} placeholder={formData.placeholder} onChange={(e) => handleChange(e, "phone")} onBlur={() => console.log(formData.callbackUrl)} />
          </div>
      }

      {
        formData.type === "textarea" &&
          <div className="mb-8">
            <label htmlFor="note" className="block mb-2">{formData.formName}</label>
            <textarea name="note" id="note" placeholder={formData.placeholder} cols={30} rows={10} required={formData.isRequired} onChange={(e) => handleChange(e, "note")}></textarea>
          </div>
      }

      {
        formData.type === "submit" &&
          <div>
            <button>{formData.formName}</button>
          </div>
      }
    </>
  );
}

export default DynamicFormInput;