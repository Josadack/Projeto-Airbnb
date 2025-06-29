import React from 'react'
import { Link } from 'react-router-dom'

const Booking = ({ booking, place = false }) => {
    return (
        <Link to={`/place/${booking.place._id}`}
            key={booking.place._id} className='bg-gray-100 rounded-2xl p-6 flex gap-6 items-center'>
            {
                place ?
                    ''
                    : <img className='max-w-56 object-center aspect-square rounded-2xl'
                        src={`http://localhost:4000/tmp/${booking.place.photos[0]}`}
                        alt="Foto da Acomodação" />
            }

            <div className='flex flex-col gap-2'>
                {
                    place ?
                        <p className='text-2xl font-medium'>Você já tem uma Reserva, para esse lugar.</p>
                        :
                        <p className='text-2xl font-medium'>{booking.place.title}</p>
                }


                <div>
                    <p><span className='font-bold'>Checkin:</span>{" "}
                        {new Date(booking.checkin + "GMT-03:00").toLocaleDateString("pt-BR")}
                    </p>
                    <p><span className='font-bold'>Checkout:</span>{" "}
                        {new Date(booking.checkout + "GMT-03:00").toLocaleDateString("pt-BR")}
                    </p>
                    <p><span className='font-bold'>Noites:</span>{" "}
                        {booking.nights}
                    </p>
                    <p><span className='font-bold'>Convidados:</span>{" "}
                        {booking.guests}
                    </p>
                    <p><span className='font-bold'>Preço Total:</span> R$ {" "}
                        {booking.total.toLocaleString()}
                    </p>
                </div>

            </div>
        </Link>
    )
}

export default Booking