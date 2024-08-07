import { SyntheticEvent } from "react";
import { CompanySearch } from "../../types";
import AddPortfolio from "../portfolio/addPortfolio/AddPortfolio";
import "./Card.css";
import { Link } from "react-router-dom";

interface Props {
  id: string;
  result: CompanySearch;
  onPortfolioCreate: (e: SyntheticEvent, result: CompanySearch) => void;
}

const Card = ({ id, result, onPortfolioCreate }: Props) => {
  return (
    <div
      className="flex flex-col items-center justify-between w-full my-2 lg:w-10/12 xl:w-8/12 p-6 bg-slate-200 hover:bg-slate-300 rounded-lg lg:flex-row"
      key={id}
      id={id}
    >
      <div>
        <Link
          to={`/company/${result.symbol}/company-profile`}
          className="font-bold text-center text-black md:text-left"
        >
          {result.name} - ({result.symbol})
        </Link>
        <p className="text-black">
          {result.exchangeShortName} - {result.stockExchange}
        </p>
        <p className="font-bold text-black">{result.currency}</p>
      </div>
      <div>
        <AddPortfolio onPortfolioCreate={onPortfolioCreate} result={result} />
      </div>
    </div>
  );
};
export default Card;
