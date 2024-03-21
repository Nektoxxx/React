import { useEffect, useState } from "react";
export default function UsersPage() {
    const [users, setUsers] = useState([])

    async function fetchUsers() {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const user = await response.json()
        setUsers(user)
    }
    useEffect(() => {
        fetchUsers()
    }, [])
    return (
        <>
            <main className="main__body mrtop">
                <div className="container">

                    <h1>Пользователи</h1>
                    <ul>

                        {users.map((user) => {
                            return (
                                <li>{user.name}</li>
                            )
                        })}
                    </ul>
                </div>
            </main>
        </>
    );
}
