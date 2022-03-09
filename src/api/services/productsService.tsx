import {errorHandler} from "../errorHandler";
import {getRequest} from "../requestApi";

export const getAllProducts = async () => {
  try {
    const loginResponse = await getRequest("products");

    return loginResponse.data;
  } catch (error: any) {
    errorHandler(error?.response);
  }
};
