import GiftDatabaseService from "./gift-database.service";

export interface GiftTotalByType {
  pix?: number | null;
  envelope?: number | null;
}

export default class GiftStatService {
  constructor(private giftDatabaseService: GiftDatabaseService) {}

  async getTotalByType(): Promise<GiftTotalByType> {
    const response = await this.giftDatabaseService.getAll();

    const { ok, payload } = response;

    if (ok && payload) {
      const totalByType: {
        [key: string]: number;
      } = payload.reduce<Record<string, number>>((acc, gift) => {
        const { type } = gift;

        if (type) {
          if (acc[type]) {
            acc[type] += 1;
          } else {
            acc[type] = 1;
          }
        }

        return acc;
      }, {});

      return totalByType;
    }

    return {
      pix: null,
      envelope: null,
    };
  }
}
