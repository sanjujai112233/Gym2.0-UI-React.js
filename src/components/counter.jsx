import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    function handleChanges(event) {
        setName(event.target.value)
    }
    return (
        <div>

            <h2>Total Members: {count}</h2>
            <button onClick={() => setCount(count + 1)}>
                Add Members
            </button>
            <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>
                Remove member
            </button>

            <br></br>


            <h2>{name}</h2>
            <input onChange={handleChanges}>
            </input>



        </div>


    );
}
export default Counter;

