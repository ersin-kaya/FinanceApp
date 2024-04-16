import { useState } from "react"

type Props = {}

const Search = (props: Props) => {

    const [search, setSearch] = useState("");

    const onClick = (e: any) => {
        setSearch(e.target.value);
        console.log(e);
    }

    return (
        <div>
            <input value={search} onChange={(e) => onClick(e)}></input>
        </div>
    )
}
export default Search