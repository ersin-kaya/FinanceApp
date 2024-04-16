import './Card.css'

interface Props {
    companyName: string;
    ticker: string;
    price: number;
}

const Card = ({ companyName, ticker, price }: Props) => {
    return (
        <div className='card'>
            <img src="" alt="" />
            <div className="details">
                <h2>{companyName} ({ticker})</h2>
                <p>${price}</p>
            </div>
            <p className="info">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum in possimus aspernatur voluptatibus harum omnis architecto ipsum animi non at?</p>
        </div>
    )
}
export default Card