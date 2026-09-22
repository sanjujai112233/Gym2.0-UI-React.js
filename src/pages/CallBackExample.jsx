import { useCallback, useState } from "react";
import MemberList from "../components/MemberList";

function CallBackExample() {

    const [count, setCount] = useState(0);

    const handleMemberClick = useCallback(() =>
        console.log("Member Selected")
    ), [];

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(prev => prev + 1)}>
                Increase
            </button>

            <MemberList onMemberClick={handleMemberClick} />
        </div>

    );
}