import RevelationDatabaseService from "./revelation-database.service";

export interface RevelationCurrentResult {
  boys: number;
  girls: number;
}

export interface RevelationCurrentResultResponse {
  ok: boolean;
  payload?: RevelationCurrentResult;
}

export default class RevelationGameService {
  constructor(private revelationStoreService: RevelationDatabaseService) {}

  async currentResults(): Promise<RevelationCurrentResultResponse> {
    if (process.env.NODE_ENV === "development") {
      const mockResult = await this.mockCurrentResults();
      return mockResult;
    }

    const result = await this.revelationStoreService.getAll();

    if (result?.payload) {
      const { payload } = result;

      const boys = payload.filter((item) => item.babySex === "boy");
      const girls = payload.filter((item) => item.babySex === "girls");

      return {
        ok: true,
        payload: {
          boys: boys.length,
          girls: girls.length,
        },
      };
    }

    return {
      ok: false,
    };
  }

  async mockCurrentResults(): Promise<RevelationCurrentResultResponse> {
    return new Promise((resolve) => {
      resolve({
        ok: true,
        payload: {
          boys: 10,
          girls: 20,
        },
      });
    });
  }
}
