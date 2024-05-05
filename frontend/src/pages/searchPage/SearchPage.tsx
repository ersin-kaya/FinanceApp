import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import { CompanySearch } from "../../types";
import axios from "axios";
import Search from "../../components/search/Search";
import ListPortfolio from "../../components/portfolio/listPortfolio/ListPortfolio";
import CardList from "../../components/cardList/CardList";
import { toast } from "react-toastify";
import { PortfolioGetModel } from "../../models/portfolioGetModel";
import {
  portfolioAddAPI,
  portfolioDeleteAPI,
  portfolioGetAPI,
} from "../../services/portfolioService";

interface Props {}

const SearchPage = (props: Props) => {
  const [search, setSearch] = useState("");
  const [portfolio, setPortfolio] = useState<PortfolioGetModel[] | null>([]);
  const [serverError, setServerError] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [portfolioListLoading, setPortfolioListLoading] =
    useState<boolean>(true);

  useEffect(() => {
    getPortfolio();
  }, []);

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

  const handlePortfolioDelete = (e: any) => {
    // e.preventDefault();
    portfolioDeleteAPI(e).then((response) => {
      if (response?.status == 200) {
        toast.success("Stock deleted from portfolio!");
        getPortfolio();
      }
    });
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    // console.log(e);
  };

  const getPortfolio = () => {
    setPortfolioListLoading(true);

    setTimeout(() => {
      portfolioGetAPI()
        .then((response) => {
          if (response?.data) {
            setPortfolioListLoading(false);
            setPortfolio(response.data);
          }
        })
        .catch((e) => {
          setPortfolioListLoading(false);
          toast.warning("Could not get portfolio values!");
        });
    }, 300);
  };

  const onPortfolioCreate = (e: any, item: any) => {
    e.preventDefault();
    portfolioAddAPI(item)
      .then((response) => {
        if (response?.status === 204) {
          toast.success("Stock added to portfolio!");
          getPortfolio();
        }
      })
      .catch((e) => {
        toast.warning("Could not create portfolio item!");
      });
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
      {portfolio!.length > 0 && (
        <ListPortfolio
          portfolio={portfolio!}
          onPortfolioDelete={handlePortfolioDelete}
          loading={portfolioListLoading}
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
