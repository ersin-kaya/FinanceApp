import { CompanySearch } from "../../../types"

interface Props {
    item: CompanySearch;
    onPortfolioDelete: (e: CompanySearch) => void;
}

const DeletePortfolio = ({ item, onPortfolioDelete }: Props) => {
    return (
        <button onClick={() => onPortfolioDelete(item)}>delete</button>
    )
}
export default DeletePortfolio