import { ChangeEvent, SyntheticEvent, useState } from 'react'
import './App.css'
import CardList from './components/cardList/CardList'
import Search from './components/search/Search'
import { CompanySearch } from './types';
import axios from 'axios';
import ListPortfolio from './components/portfolio/listPortfolio/ListPortfolio';

function App() {
  const [search, setSearch] = useState("");
  const [portfolio, setPortfolio] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);

  const companySearch = async (query: string) => {
    try {
      const response = await axios.get<CompanySearch[]>(
        `https://financialmodelingprep.com/api/v3/search-ticker?query=${query}&limit=10&exchange=NASDAQ&apikey=${import.meta.env.VITE_API_KEY
        }`
      );
      // console.log(response.data);
      setSearchResult(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error: ", error.message);
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
  }

  const onPortfolioCreate = (
    e: SyntheticEvent,
    result: CompanySearch
  ) => {
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
  }

  return (
    <div className='App'>
      <Search
        onSearchSubmit={handleSearchSubmit}
        search={search}
        handleSearchChange={handleSearchChange} />
      {serverError && <h1>{serverError}</h1>}
      {portfolio.length > 0 && <ListPortfolio portfolio={portfolio} onPortfolioDelete={handlePortfolioDelete} />}
      <CardList
        searchResult={searchResult}
        onPortfolioCreate={onPortfolioCreate} />
    </div>
  )
};


export default App
