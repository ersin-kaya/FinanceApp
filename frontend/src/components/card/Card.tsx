import { SyntheticEvent } from 'react';
import { CompanySearch } from '../../types';
import AddPortfolio from '../portfolio/addPortfolio/AddPortfolio';
import './Card.css'

interface Props {
    id: string;
    result: CompanySearch;
    onPortfolioCreate: (e: SyntheticEvent, result: CompanySearch) => void;
}

const Card = ({
    id,
    result,
    onPortfolioCreate
}: Props) => {
    return (
        <div className='card'>
            <img alt="company logo" />
            <div className="details">
                <h2>{result.name} ({result.symbol})</h2>
                <p>${result.currency}</p>
            </div>
            <p className="info">
                {result.exchangeShortName} - {result.stockExchange}
            </p>
            <AddPortfolio onPortfolioCreate={onPortfolioCreate} result={result} />
        </div>
    )
}
export default Card