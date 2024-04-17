import { SyntheticEvent } from "react"

type Props = {
    onPortfolioCreate: (e: SyntheticEvent) => void;
};
const AddPortfolio = ({ onPortfolioCreate }: Props) => {
    return <button onClick={onPortfolioCreate}>AddPortfolio</button>;
};
export default AddPortfolio;