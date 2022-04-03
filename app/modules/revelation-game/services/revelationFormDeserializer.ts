import RevelationFormData from "../interfaces/RevelationFormData";
import { RevelationModel } from "../model/revelation.model";

export default class RevelationFormDeserializer {
  deserialize(formData: RevelationFormData): RevelationModel {
    const { formName, formBabySex } = formData;

    return {
      name: this._name(formName),
      babySex: this._babySex(formBabySex),
    };
  }

  private _name(formName: FormDataEntryValue | null): string {
    if (formName === null) {
      return "";
    }

    const _formName = String(formName).trim();

    return _formName;
  }

  private _babySex(formBabySex: FormDataEntryValue | null): string {
    if (formBabySex === null) {
      return "";
    }

    const _formBabySex = String(formBabySex).trim();

    return _formBabySex;
  }
}
