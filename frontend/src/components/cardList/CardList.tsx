import { SyntheticEvent } from "react";
import { CompanySearch } from "../../types"
import Card from "../card/Card"
import { v4 as uuidv4 } from "uuid"

interface Props {
    searchResult: CompanySearch[];
    onPortfolioCreate: (e: SyntheticEvent, result: CompanySearch) => void;
}

const CardList = ({ searchResult, onPortfolioCreate }: Props) => {
    return (
        <>
            {searchResult.length > 0 ? (
                searchResult.map((result) => {
                    return (
                        <Card
                            id={result.symbol}
                            key={uuidv4()}
                            result={result}
                            onPortfolioCreate={onPortfolioCreate}
                        />
                    )
                })
            ) : (
                <h1>No results</h1 >
            )}
        </>
    )
}
export default CardList