import { ChangeEvent, SyntheticEvent, useState } from 'react'
import './App.css'
import CardList from './components/cardList/CardList'
import Search from './components/search/Search'
import { searchCompanies } from './api';
import { useCompanySearch } from './hooks/useCompanySearch';

function App() {
  const [search, setSearch] = useState("");
  const searchResult = useCompanySearch(search);
  const [serverError, setServerError] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e);
  }

  const handleClick = async (e: SyntheticEvent) => {
    // const result = await searchCompanies(search);
    // if (typeof result === "string") {
    //   setServerError(result);
    // }
    // else if (Array.isArray(result.data)) {
    //   setSearchResult(result.data);
    // }

    const result = await searchResult;

    console.log(result);
  }

  return (
    <div className='App'>
      <Search onClick={handleClick} search={search} handleChange={handleChange} />
      {serverError && <h1>{serverError}</h1>}
      <CardList />
    </div>
  )
}

export default App
