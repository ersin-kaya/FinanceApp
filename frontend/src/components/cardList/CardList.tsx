import { CompanySearch } from "../../types"
import Card from "../card/Card"
import { v4 as uuidv4 } from "uuid"

interface Props {
    searchResult: CompanySearch[];
}

const CardList = ({ searchResult }: Props) => {
    return (
        <>
            {searchResult.length > 0 ? (
                searchResult.map((result) => {
                    return <Card id={result.symbol} key={uuidv4()} searchResult={result} />
                })
            ) : (
                <h1>No results</h1 >
            )}
        </>
    )
}
export default CardList