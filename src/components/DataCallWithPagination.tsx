import { v4 as uuid } from "uuid";

export const DataCallWithPagination = async (
  url: string,
  loaded: any,
  newState: any,
  newError: any,
  amount?: number,
  setCurrent?: any
) => {
  try {
    const response = await fetch(url);
    const json = await response.json();

    const newArr = json.map((x: object) => ({
      ...x,
      id: uuid(),
    }));
    loaded(true);
    newState(newArr);
    setCurrent(newArr.slice(0, amount));
  } catch (error) {
    newError(true);
  }
};
