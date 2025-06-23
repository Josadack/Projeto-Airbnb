import React, { useEffect, useState } from 'react'
import Item from '../component/Item'
import axios from 'axios';

const Home = () => {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        const axiosGet = async () => {
            const { data } = await axios.get("/places/")
            setPlaces(data)
        }

        axiosGet();

    }, [])
    return (
        <div>
            <section>
                <div className='gap-8 grid grid-cols-[repeat(auto-fit,minmax(255px,1fr))] p-8 max-w-7xl mx-auto'>
                    {places.map((place) => (
                        <Item {...{ place }} key={place._id} />))}

                    {places.map((place) => (
                        <Item {...{ place }} key={place._id} />))}
                </div>

            </section>
        </div>
    )
}

export default Home