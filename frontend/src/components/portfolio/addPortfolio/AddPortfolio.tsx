import { SyntheticEvent } from "react";
import { CompanySearch } from "../../../types";

type Props = {
  onPortfolioCreate: (e: SyntheticEvent, result: CompanySearch) => void;
  result: CompanySearch;
};

const AddPortfolio = ({ onPortfolioCreate, result }: Props) => {
  return (
    <>
      <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
        <button
          onClick={(e) => onPortfolioCreate(e, result)}
          className="p-2 px-8 text-white bg-darkBlue rounded-lg hover:opacity-70 focus:outline-none"
        >
          Add Portfolio
        </button>
      </div>
    </>
  );
};
export default AddPortfolio;
