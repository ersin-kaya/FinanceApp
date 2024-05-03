import { ChangeEvent, SyntheticEvent, useState } from "react";
import { CompanySearch } from "../../types";
import axios from "axios";
import Search from "../../components/search/Search";
import ListPortfolio from "../../components/portfolio/listPortfolio/ListPortfolio";
import CardList from "../../components/cardList/CardList";
import { toast } from "react-toastify";

interface Props {}

const SearchPage = (props: Props) => {
  const [search, setSearch] = useState("");
  const [portfolio, setPortfolio] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);

  const companySearch = async (query: string) => {
    try {
      const response = await axios.get<CompanySearch[]>(
        `https://financialmodelingprep.com/api/v3/search-ticker?query=${query}&limit=10&exchange=NASDAQ&apikey=${
          import.meta.env.VITE_API_KEY
        }`
      );
      // console.log(response.data);
      setSearchResult(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error: ", error.message);
        toast.error(
          "[TR]: Sistemde kayıtlı olan API Key'e ait istek hakkı dolmuş olabilir. Lütfen daha sonra yeniden deneyiniz. \n[EN]: The request amount for the API Key registered in the system may have been exceeded. Please try again later."
        );
      } else console.log("unexpected error");
    }
  };

  const handlePortfolioDelete = (item: CompanySearch) => {
    setPortfolio(
      portfolio.filter((element) => {
        return element.name !== item.name;
      })
    );
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    // console.log(e);
  };

  const onPortfolioCreate = (e: SyntheticEvent, result: CompanySearch) => {
    // console.log(e);
    if (!portfolio.find((item) => item.name === result.name)) {
      setPortfolio([...portfolio, result]);
    }
    console.log(portfolio);
  };

  const handleSearchSubmit = async (e: SyntheticEvent) => {
    // console.log(result);
    e.preventDefault();
    companySearch(search);
  };

  return (
    <>
      <Search
        onSearchSubmit={handleSearchSubmit}
        search={search}
        handleSearchChange={handleSearchChange}
      />
      {serverError && <h1>{serverError}</h1>}
      {portfolio.length > 0 && (
        <ListPortfolio
          portfolio={portfolio}
          onPortfolioDelete={handlePortfolioDelete}
        />
      )}
      <CardList
        searchResult={searchResult}
        onPortfolioCreate={onPortfolioCreate}
      />
    </>
  );
};
export default SearchPage;
