import { CompanySearch } from "../../../types";
import CardPortfolio from "../cardPortfolio/CardPortfolio";

interface Props {
    portfolio: CompanySearch[];
}

const ListPortfolio = ({ portfolio }: Props) => {
    return (
        <>
            <h3>My Portfolio</h3>
            <ul>
                {portfolio &&
                    portfolio.map((item) => {
                        return <CardPortfolio item={item} />;
                    })
                }
            </ul>
        </>
    )
}
export default ListPortfolio