import { useMemo, useState } from "react";
import Input from "../components/Input";

function SearchFilter() {

    const [search, setSearch] = useState("");

    const members = [
        "Rahul",
        "Amit",
        "Raj",
        "Vikas",
        "Rohit",
        "Ankit"
    ];

    const filterdMembers = useMemo(() => {
        return members.filter(
            member =>  member.toLowerCase().includes(search.toLowerCase())

        );
    }, [search]);


    return (
        <div>
            <h1>Member Search</h1>
            <Input placeholder="Search Member"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
             />

             <ul>
                {filterdMembers.map(member => (
                    <li key={member}>
                        {member}
                    </li>
                ))}
             </ul>
        </div>

    );
}

export default SearchFilter;

