import { RevelationModel } from "../model/revelation.model";

export default class RevelationStatsService {
  constructor() {}

  getTotalBoy(revelations: RevelationModel[]) {
    return revelations.filter((revelation) => revelation.babySex === "boy")
      .length;
  }

  getTotalGirl(revelations: RevelationModel[]) {
    return revelations.filter((revelation) => revelation.babySex === "girl")
      .length;
  }
}
