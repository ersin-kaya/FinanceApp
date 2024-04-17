import { ChangeEvent, SyntheticEvent, useState } from 'react'
import './App.css'
import CardList from './components/cardList/CardList'
import Search from './components/search/Search'
import { CompanySearch } from './types';
import axios from 'axios';

function App() {
  const [search, setSearch] = useState("");
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

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e);
  }

  const onPortfolioCreate = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(e);
  }

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
      <CardList
        searchResult={searchResult}
        onPortfolioCreate={onPortfolioCreate} />
    </div>
  )
};


export default App
