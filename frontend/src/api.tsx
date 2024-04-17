// import axios from "axios"
// import { CompanySearch } from "./types";

// interface SearchResponse {
//     data: CompanySearch[];
// }

// export const searchCompanies = async (query: string) => {
//     try {
//         const data = await axios.get<SearchResponse>(
//             `https://financialmodelingprep.com/api/v3/search-ticker?query=${query}&limit=10&exchange=NASDAQ&apikey=${import.meta.env.VITE_API_KEY}`
//         );
//         return data;
//     } catch (error) {
//         if (axios.isAxiosError(error)) {
//             console.log("error message: ", error.message);
//             return error.message;
//         }
//         else {
//             console.log("unexpected error: ", error);
//             return "An unexpected erorr has occured."
//         }
//     }
// }

type Props = {}
const Api = (props: Props) => {
    return (
        <div>Fetch logic moved into custom hook!</div>
    )
}
export default Api