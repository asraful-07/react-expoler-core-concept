import { useEffect, useState } from "react"
import Friend from "./Friend"

export default function Users(){

    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])
    return(
        <div>
        <h3>User: {users.length}</h3>
        {
            users.map(user => <Friend friend={user}></Friend>)
        }
        </div>
    )
}



/**
 * 
 * 1. state to hold data
 * 2. use effect with dependency array 
 * 3. use fetch to load data
 * 4. set load data to the state
 * 5. display data on the component
 * 
 **/