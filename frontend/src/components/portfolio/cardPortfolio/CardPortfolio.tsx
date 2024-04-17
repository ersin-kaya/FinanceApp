import { CompanySearch } from "../../../types";

interface Props {
    item: CompanySearch;
}

const CardPortfolio = ({ item }: Props) => {
    return (
        <>
            <h4>{item.name}</h4>
            <button>X</button>
        </>
    )
}
export default CardPortfolio