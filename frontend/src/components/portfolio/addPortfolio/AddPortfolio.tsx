import { SyntheticEvent } from "react";
import { CompanySearch } from "../../../types";

type Props = {
    onPortfolioCreate: (e: SyntheticEvent, result: CompanySearch) => void;
    result: CompanySearch;
};

const AddPortfolio = ({ onPortfolioCreate, result }: Props) => {
    return (
        <button onClick={(e) => onPortfolioCreate(e, result)}>AddPortfolio</button>
    );
};
export default AddPortfolio;