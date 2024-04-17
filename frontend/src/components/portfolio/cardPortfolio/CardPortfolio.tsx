import { CompanySearch } from "../../../types";
import DeletePortfolio from "../deletePortfolio/DeletePortfolio";

interface Props {
    item: CompanySearch;
    onPortfolioDelete: (item: CompanySearch) => void;
}

const CardPortfolio = ({ item, onPortfolioDelete }: Props) => {
    return (
        <>
            <h4>{item.name}</h4>
            <DeletePortfolio
                item={item}
                onPortfolioDelete={onPortfolioDelete} />
        </>
    )
}
export default CardPortfolio