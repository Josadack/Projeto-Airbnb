import React, { useState } from 'react'
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';


const AccProfile = () => {
    const {user, setUser} = useUserContext();
    const [redirect, setRedirect] = useState(false);

    const handleLogout = async () => {
        try {
            const { data } = await axios.post("/users/logout");
            console.log(data)

            setUser(null)
            setRedirect(true)
        } catch (error) {
            alert(JSON.stringify(error));
        }
    };

    if(redirect) return <Navigate to="/" />;


    if(!user) return <></>;

    return (
        <div className='flex flex-col items-center gap-4'>
            <p>Logado como  {user.name} ({user.email})</p>

            <button onClick={handleLogout} className='rounded-full bg-primary-400 text-white px-4 py-2 cursor-pointer transition min-w-44'>Logout</button>
        </div>
    )
}

export default AccProfile