import {errorHandler} from "../errorHandler";
import {postRequest} from "../requestApi";

export const memberLogin = async (username: string, password: string) => {
  try {
    const loginResponse = await postRequest("auth/login", {username, password});

    return loginResponse.data;
  } catch (error: any) {
    errorHandler(error?.response);
  }
};
