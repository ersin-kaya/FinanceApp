import { CompanySearch } from "../../../types";
import CardPortfolio from "../cardPortfolio/CardPortfolio";

interface Props {
    portfolio: CompanySearch[];
    onPortfolioDelete: (item: CompanySearch) => void;
}

const ListPortfolio = ({ portfolio, onPortfolioDelete }: Props) => {
    return (
        <>
            <h3>My Portfolio</h3>
            <ul>
                {portfolio &&
                    portfolio.map((item) => {
                        return <CardPortfolio item={item} onPortfolioDelete={onPortfolioDelete} />;
                    })
                }
            </ul>
        </>
    )
}
export default ListPortfolio