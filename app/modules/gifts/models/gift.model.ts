import { GiftCashType } from "../interface/gift.interface";

export default interface GiftModel {
  guestName: string | null;
  type: GiftCashType;
}
