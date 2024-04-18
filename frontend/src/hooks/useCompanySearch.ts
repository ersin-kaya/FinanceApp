import { CompanyProfile } from './../types';
import { useEffect, useState } from "react"
import { CompanySearch } from "../types";
import axios from "axios";

export const useCompanySearch = async (query: string) => {

    const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const response = await axios.get(
                    `https://financialmodelingprep.com/api/v3/search-ticker?query=${query}&limit=10&exchange=NASDAQ&apikey=${import.meta.env.VITE_API_KEY}`
                );
                setSearchResult(response.data);
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    console.log("error: ", error.message);
                }
                else {
                    console.log("unexpected error: ", error);
                    return "An unexpected erorr has occured.";
                }
            }
        }
        fetchCompanies();
    }, []);
    return searchResult;
}

export const getCompanyProfile = async (companyName: string) => {
    try {
        const response = await axios.get<CompanyProfile[]>(
            `https://financialmodelingprep.com/api/v3/profile/${companyName}?apikey=${import.meta.env.VITE_API_KEY}`
        );
        return response;
    } catch (error: any) {
        console.log("error message from API: ", error.message);
    }
}