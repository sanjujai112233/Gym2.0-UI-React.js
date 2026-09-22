import { useEffect, useState } from "react";
import { resumeToPipeableStream } from "react-dom/server";
import useFetch from "../Hooks/useFetch";

function ApiLoader() {
    // const[users, setUsers] = useState([]);
    // const[loading, setLoading] = useState(true);
    // const[error, setEroor] = useState("");

    // useEffect(() => {
    //     async function fetchUsers() {
    //         try{
    //             const response = await fetch(
    //                 "https://jsonplaceholder.typicode.com/users"
    //             );
    //             if(!response.ok)
    //                 throw new Error("Failed to fetch users");

    //             const data = await response.json();
    //             setUsers(data);

    //         }
    //         catch(error){
    //             setEroor(error.message)
    //         }
    //         finally{
    //             setLoading(false);
    //         }
            
    //     }

    //     fetchUsers();
    // }, []);

    //After making the useFecth i don't need this . 

    const {data: users, loading, error} =
    useFetch("https://jsonplaceholder.typicode.com/users");

    if(loading){
        return <h2>Loading...</h2>
    }
    if(error){
        return <h2>{error}</h2>
    }

    return(
        <div>
            <h1>Users</h1>

            <ul>
                {users.map(user => (
                    <li key = {user.id}>
                        {user.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ApiLoader;