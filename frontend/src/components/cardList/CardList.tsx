import { SyntheticEvent } from "react";
import { CompanySearch } from "../../types";
import Card from "../card/Card";
import { v4 as uuidv4 } from "uuid";

interface Props {
  searchResult: CompanySearch[];
  onPortfolioCreate: (e: SyntheticEvent, result: CompanySearch) => void;
}

const CardList = ({ searchResult, onPortfolioCreate }: Props) => {
  return (
    <div className="flex flex-col items-center my-16">
      {searchResult.length > 0 ? (
        searchResult.map((result) => {
          return (
            <Card
              id={result.symbol}
              key={uuidv4()}
              result={result}
              onPortfolioCreate={onPortfolioCreate}
            />
          );
        })
      ) : (
        <p className="mb-3 mt-12 text-xl font-semibold text-center md:text-xl">
          Search results: Nothing found!
        </p>
      )}
    </div>
  );
};
export default CardList;
