import { SyntheticEvent } from 'react';
import { CompanySearch } from '../../types';
import AddPortfolio from '../portfolio/addPortfolio/AddPortfolio';
import './Card.css'

interface Props {
    id: string;
    result: CompanySearch;
    onPortfolioCreate: (e: SyntheticEvent) => void;
}

const Card = ({
    id,
    result: searchResult,
    onPortfolioCreate
}: Props) => {
    return (
        <div className='card'>
            <img alt="company logo" />
            <div className="details">
                <h2>{searchResult.name} ({searchResult.symbol})</h2>
                <p>${searchResult.currency}</p>
            </div>
            <p className="info">
                {searchResult.exchangeShortName} - {searchResult.stockExchange}
            </p>
            <AddPortfolio onPortfolioCreate={onPortfolioCreate} />
        </div>
    )
}
export default Card