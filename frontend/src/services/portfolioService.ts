import axios from "axios";
import { PortfolioPostModel } from "../models/portfolioPostModel";
import { handleError } from "../helpers/errorHandler";
import { PortfolioDeleteModel } from "../models/portfolioDeleteModel";
import { PortfolioGetModel } from "../models/portfolioGetModel";

const api = "http://localhost:5189/api/portfolio";

export const portfolioGetAPI = async () => {
  try {
    const data = await axios.get<PortfolioGetModel[]>(api);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const portfolioAddAPI = async (item: any) => {
  // console.log(item);
  try {
    const data = await axios.post<PortfolioPostModel>(
      api + `?symbol=${item.symbol}`
    );
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const portfolioDeleteAPI = async (item: any) => {
  try {
    const data = await axios.delete<PortfolioDeleteModel>(
      api + `?symbol=${item.symbol}`
    );
    return data;
  } catch (error) {
    handleError(error);
  }
};
