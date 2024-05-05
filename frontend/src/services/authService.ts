import axios from "axios";
import { handleError } from "../helpers/errorHandler";
import { UserProfileTokenModel } from "../models/userProfileTokenModel";

const api = "https://api.financeapp.ersinkaya.dev/api/";

export const loginAPI = async (username: string, password: string) => {
  try {
    const data = await axios.post<UserProfileTokenModel>(
      api + "account/login",
      {
        username: username,
        password: password,
      }
    );
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const registerAPI = async (
  email: string,
  username: string,
  password: string
) => {
  try {
    const data = await axios.post<UserProfileTokenModel>(
      api + "account/register",
      {
        email: email,
        username: username,
        password: password,
      }
    );
    return data;
  } catch (error) {
    handleError(error);
  }
};
