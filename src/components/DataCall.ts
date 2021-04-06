import { v4 as uuid } from "uuid";

const dataCall = async (
  url: string,
  loaded: any,
  newState: any,
  newError: any
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
  } catch (error) {
    newError(true);
  }
};
export default dataCall;
