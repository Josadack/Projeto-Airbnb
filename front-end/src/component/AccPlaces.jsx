import React from 'react'
import { Link, useParams } from 'react-router-dom';
import NewPlace from './NewPlace';

const AccPlaces = () => {
    const { action } = useParams();

    return (
        <div className='w-full max-w-7xl flex flex-col items-center'>
            {action !== "new" ? 
                <Link to="/account/places/new"
                    className='flex gap-2 rounded-full hover:bg-primary-500  bg-primary-400 text-white px-4 py-2 cursor-pointer transition min-w-44'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    Adicionar novo lugar
                </Link>
            : <NewPlace />}

        </div>
    )
}

export default AccPlaces