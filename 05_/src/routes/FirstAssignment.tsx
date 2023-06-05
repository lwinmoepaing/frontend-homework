import { FormEvent, useState } from "react";
import DynamicFormInput from "../components/DynamicFormInput";
import dbForm from "../my_db.json";
import { LMPPostFormInterface, MyPostFormInterface } from "../types/PostFormInterface";

function FirstAssignment() {
  const [postData, setPostData] = useState<LMPPostFormInterface | MyPostFormInterface>({
    name: "",
    email: "",
    note: "",
  })

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(postData)
  }

  return (
    <>
      <div className="flex justify-center py-5">
        <form action="" onSubmit={(e) => onSubmit(e)}>
          {
            dbForm.map(dbInput => {
              return (
                <DynamicFormInput formData={dbInput} setPostData={setPostData} key={dbInput.formName} />
              )
            })
          }
        </form>
      </div>
    </>
  )
}

export default FirstAssignment;
