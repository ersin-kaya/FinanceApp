import { CompanySearch } from '../../types';
import './Card.css'

interface Props {
    id: string;
    searchResult: CompanySearch;
}

const Card = ({
    id,
    searchResult
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
        </div>
    )
}
export default Card