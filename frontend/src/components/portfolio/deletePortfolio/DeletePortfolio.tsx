import { CompanySearch } from "../../../types";

interface Props {
  item: CompanySearch;
  onPortfolioDelete: (e: CompanySearch) => void;
}

const DeletePortfolio = ({ item, onPortfolioDelete }: Props) => {
  return (
    <button
      onClick={() => onPortfolioDelete(item)}
      className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-red-500 hover:text-red-500 hover:bg-white border-red-500"
    >
      X
    </button>
  );
};
export default DeletePortfolio;
