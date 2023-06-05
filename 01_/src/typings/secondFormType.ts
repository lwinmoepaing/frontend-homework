export interface secondFormType {
  Name: string;
  Gender: string;
  City: string;
  Phone_Number: string | undefined;
  Note: string;
}

interface OptionType {
  title: string;
  value: string;
}

export interface FormDemo {
  formName: string;
  placeholder: string;
  isRequired: boolean;
  type: string;
  value: string;
  isHidden: boolean;
  isAction: boolean;
  options: OptionType[];
}
