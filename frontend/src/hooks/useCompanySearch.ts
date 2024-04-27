import {
  CompanyBalanceSheet,
  CompanyCashFlow,
  CompanyHistoricalDividend,
  CompanyIncomeStatement,
  CompanyKeyMetrics,
  CompanyProfile,
} from "./../types";
import { useEffect, useState } from "react";
import { CompanySearch } from "../types";
import axios from "axios";

export const useCompanySearch = async (query: string) => {
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get(
          `https://financialmodelingprep.com/api/v3/search-ticker?query=${query}&limit=10&exchange=NASDAQ&apikey=${
            import.meta.env.VITE_API_KEY
          }`
        );
        setSearchResult(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log("error: ", error.message);
        } else {
          console.log("unexpected error: ", error);
          return "An unexpected erorr has occured.";
        }
      }
    };
    fetchCompanies();
  }, []);
  return searchResult;
};

export const getCompanyProfile = async (companySymbol: string) => {
  try {
    const response = await axios.get<CompanyProfile[]>(
      `https://financialmodelingprep.com/api/v3/profile/${companySymbol}?apikey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    return response;
  } catch (error: any) {
    console.log("error message from API: ", error.message);
  }
};

export const getKeyMetrics = async (companySymbol: string) => {
  try {
    const response = await axios.get<CompanyKeyMetrics[]>(
      `https://financialmodelingprep.com/api/v3/key-metrics-ttm/${companySymbol}?apikey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    return response;
  } catch (error: any) {
    console.log("error message from API: ", error.message);
  }
};

export const getIncomeStatement = async (companySymbol: string) => {
  try {
    const response = await axios.get<CompanyIncomeStatement[]>(
      `https://financialmodelingprep.com/api/v3/income-statement/${companySymbol}?apikey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    return response;
  } catch (error: any) {
    console.log("error message from API: ", error.message);
  }
};

export const getBalanceSheet = async (companySymbol: string) => {
  try {
    const response = await axios.get<CompanyBalanceSheet[]>(
      `https://financialmodelingprep.com/api/v3/balance-sheet-statement/${companySymbol}?apikey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    return response;
  } catch (error: any) {
    console.log("error message from API: ", error.message);
  }
};

export const getCashflowStatement = async (companySymbol: string) => {
  try {
    const response = await axios.get<CompanyCashFlow[]>(
      `https://financialmodelingprep.com/api/v3/cash-flow-statement/${companySymbol}?apikey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    return response;
  } catch (error: any) {
    console.log("error message from API: ", error.message);
  }
};

export const getHistoricalDividend = async (companySymbol: string) => {
  try {
    const data = await axios.get<CompanyHistoricalDividend>(
      `https://financialmodelingprep.com/api/v3/historical-price-full/stock_dividend/${companySymbol}?apikey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
  }
};
