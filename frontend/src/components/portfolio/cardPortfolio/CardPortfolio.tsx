import { Link } from "react-router-dom";
import { CompanySearch } from "../../../types";
import DeletePortfolio from "../deletePortfolio/DeletePortfolio";

interface Props {
  item: CompanySearch;
  onPortfolioDelete: (item: CompanySearch) => void;
}

const CardPortfolio = ({ item, onPortfolioDelete }: Props) => {
  return (
    <div className="flex flex-col w-full p-8 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
      <Link
        to={`/company/${item.symbol}/company-profile`}
        className="pt-6 text-xl font-bold"
      >
        {item.name}
      </Link>
      <DeletePortfolio item={item} onPortfolioDelete={onPortfolioDelete} />
    </div>
  );
};
export default CardPortfolio;
