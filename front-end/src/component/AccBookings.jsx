import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Booking from './Booking';

const AccBookings = () => {

    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const axiosGet = async () => {
            const { data } = await axios.get("/bookings/owner")
            setBookings(data)
        }

        axiosGet();

    }, [])

    return (
        <div className='w-full max-w-7xl flex flex-col gap-6'>
            {bookings.map((booking) => (
              <Booking booking={booking} key={booking._id} />
            ))}
        </div>
    )
}

export default AccBookings