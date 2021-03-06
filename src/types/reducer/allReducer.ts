import { ICard } from "../Card";
import SettingsReducerDto from "./settings";

export default interface IAllReducer {
  snackbar: SettingsReducerDto["snackbar"];
  bucket: {
    list: Array<ICard>;
  };
  list: ICard[];
  pagination: {
    page: number;
    limit: number;
    totalPage: number;
  };
}
