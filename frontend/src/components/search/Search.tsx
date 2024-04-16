import { ChangeEvent, SyntheticEvent, useState } from "react"

type Props = {}

const Search = (props: Props) => {

    const [search, setSearch] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        console.log(e);
    }

    const onClick = (e: SyntheticEvent) => {
        console.log(e);
    }

    return (
        <div>
            <input value={search} onChange={(e) => handleChange(e)}></input>
            <button onClick={(e) => onClick(e)}>Button</button>
        </div>
    )
}
export default Search