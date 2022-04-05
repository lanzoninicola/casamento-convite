import RevelationFormData from "../interfaces/RevelationFormData";
import { RevelationModel } from "../model/revelation.model";

export default class RevelationFormDeserializer {
  deserialize(formData: RevelationFormData): RevelationModel {
    const { formName, formBabyGender } = formData;

    return {
      name: this._name(formName),
      babySex: this._babySex(formBabyGender),
    };
  }

  private _name(formName: FormDataEntryValue | null): string {
    if (formName === null) {
      return "";
    }

    const _formName = String(formName).trim();

    return _formName;
  }

  private _babySex(formBabyGender: FormDataEntryValue | null): string {
    if (formBabyGender === null) {
      return "";
    }

    const _formBabySex = String(formBabyGender).trim();

    return _formBabySex;
  }
}
