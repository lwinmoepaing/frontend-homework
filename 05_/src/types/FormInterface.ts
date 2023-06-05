export interface LMPFormInterface {
  formName: string,
  placeholder: string,
  isRequired: boolean,
  type: string,
  value: string,
  isHidden: boolean,
  isAction: boolean,
  options: {
    title: string;
    value: string;
  }[] | [],
  callbackUrl?: undefined | string,
}