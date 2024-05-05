import { ChangeEvent, SyntheticEvent } from "react";

interface Props {
  onSearchSubmit: (e: SyntheticEvent) => void;
  search: string | undefined;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({ onSearchSubmit, search, handleSearchChange }: Props) => {
  return (
    <section className="relative bg-gray-900">
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <form
          className="form relative flex flex-col w-full p-10 space-y-4 bg-indigo-600 rounded-lg md:flex-row md:space-y-0 md:space-x-3"
          onSubmit={onSearchSubmit}
        >
          <input
            className="flex-1 p-3 border-4 text-sm shadow-md border-yellow-400 rounded-lg placeholder-black focus:outline-none"
            id="search-input"
            placeholder="Search companies (e.g. TSLA)"
            value={search}
            onChange={handleSearchChange}
          ></input>
        </form>
      </div>
    </section>
  );
};
export default Search;
