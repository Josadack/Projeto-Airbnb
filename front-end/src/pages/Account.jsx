import React from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import AccProfile from '../component/AccProfile';
import AccPlaces from '../component/AccPlaces';
import { useUserContext } from '../context/UserContext';
import AccBookings from '../component/AccBookings';

const Account = () => {
    const {subpage} = useParams();
    const {user, ready} = useUserContext();

    const buttonClass = (button) => {
        let finalClass = 
        " rounded-full hover:bg-primary-400 hover:text-white px-4 py-2 cursor-pointer transition";
        
        if (button === subpage) finalClass += " bg-primary-400 text-white";

        return finalClass;
    };

    if(!user && ready) return <Navigate to="/login"/>

    return (
        <section className='p-8'>
            <div className='max-w-7xl mx-auto flex flex-col gap-8 items-center'>
                <div className='flex gap-2'>
                    <Link to="/account/profile" className={buttonClass("profile")}> Perfil </Link>
                    <Link to="/account/bookings" className={buttonClass("bookings")}> Reservas </Link>
                    <Link to="/account/places" className={buttonClass("places")}> Lugares </Link> 
                </div>

                {subpage === "profile" && <AccProfile />}
                {subpage === "places" && <AccPlaces />}
                {subpage === "bookings" && <AccBookings />}
            </div>
        </section>
    )
}

export default Account