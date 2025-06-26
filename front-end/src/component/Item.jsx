import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({place}) => {
  return (
    <Link to={`/place/${place._id}`} className='flex flex-col gap-2'>
        <img
        src={`http://localhost:4000/tmp/${place.photos[0]}`}
         alt="" 
         className=' aspect-square object-cover rounded-2xl'/>
         <div>
        <h3 className='text-xl font-semibold'>{place.city}</h3>
        <p className='truncate text-gray-600'>
          {place.description}
        </p>
        </div>
        <p><span className='font-semibold'>R$ {place.price}</span>  por noite</p>
        </Link>
  )
}

export default Item