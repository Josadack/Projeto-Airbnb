import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';
import Perk from '../component/Perk';

const Place = () => {
    const { id } = useParams();
    const {user} = useUserContext();
    const [place, setPlace] = useState(null);
    const [overlay, setOverlay] = useState(false);
    const [checkin, setCheckin] = useState("");
    const [checkout, setCheckout] = useState("");
    const [guests, setGuests] = useState("");

    useEffect(() => {
        if (id) {
            const axiosGet = async () => {
                const { data } = await axios.get(`/places/${id}`)

                console.log(data)
                setPlace(data);
            };
            axiosGet();
        }

    }, [id])

    useEffect(() => {
        overlay ?
            document.body.classList.add('overflow-hidden')
            : document.body.classList.remove('overflow-hidden')

    })

    const handleBooking = (e) => {
        e.preventDefault();

        if(checkin && checkout && guests){
            console.log("Fez uma reserva")
        }else{
            alert("Preencha todas as informações antes de fazer uma reserva.")
        }
        
    }

    if (!place) return <></>

    return (
        <section >
            <div className='flex flex-col gap-4 sm:gap-6 p-4 sm:p-8 max-w-7xl mx-auto'>
                <div className='flex flex-col  sm:gap-1'>
                    <div className='text-xl sm:text-3xl font-bold'>{place.title}</div>



                    <div className='flex items-center gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        <p>{place.city}</p>
                    </div>

                    <div className='grid sm:grid-cols-[2fr_1fr] sm:grid-rows-2 sm:aspect-[3/2] rounded-2xl overflow-hidden gap-4 relative aspect-square'>
                        {place.photos
                            .filter((photo, index) => index < 3)
                            .map((photo, index) => (
                                <img
                                    className={`${index === 0 ? 'row-span-2 h-full object-center' : ""} aspect-square w-full sm:object-cover transition hover:opacity-75 cursor-pointer`}
                                    src={`http://localhost:4000/tmp/${photo}`}
                                    alt=""
                                    onClick={() => setOverlay(true)}
                                />
                            ))}

                        <div className='absolute right-2 bottom-2 bg-white border border-black rounded-xl py-1 px-2 flex gap-2 
                                        transition hover:scale-105 cursor-pointer hover:text-primary-400 hover:opacity-80' onClick={() => setOverlay(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
                            </svg>

                            <p>Mostrar mais imagens</p>
                        </div>

                    </div>

                    {/* Colunas  */}
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        <div className='order-2 md:order-none p-6 flex flex-col gap-5'>
                            <div className='flex flex-col gap-2'>
                                <p className='text-lg sm:text-2xl font-bold'>Descrição</p>
                                <p>{place.description}</p>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <p className='text-lg sm:text-2xl font-bold'>Horário e Restrições</p>
                                <div>
                                    <p>Checkin: {place.checkin}</p>
                                    <p>Checkout: {place.checkout}</p>
                                    <p>Máximo de convidados: {place.guests}</p>
                                </div>
                            </div>

                             <div className='flex flex-col gap-1'>
                                <p className='text-lg sm:text-2xl font-bold'>Diferenciais</p>
                                <div className='flex flex-col gap-2'> 
                                    {place.perks.map((perk) => (
                                        <div className='flex gap-2 items-center'><Perk perk={perk}></Perk></div>
                                    ))}
                                    
                                </div>
                            </div>
                            
                        </div>

                        {/* Revervas */}
                        <form className='order-1 md:order-none flex flex-col gap-4 justify-self-center self-center border border-gray-300 rounded-2xl px-3 sm:px-8 py-2 sm:py-4'>
                            <p className='text-lg sm:text-2xl font-bold text-center'>
                                Preço: R$ {place.price} por noite
                            </p>
                         
                           {/* Checkin Checkout */}
                            <div className='flex flex-col sm:flex-row'>
                                {/* checkin */}
                               <div className="rounded-t1-2x1 rounded-tr-2x1 border border-gray-300 px-4 py-2 sm: rounded-tr-none sm: rounded-bl-2x1">
                                    <p className='font-bold'>Checkin</p>
                                    <input className='w-full sm:w-full'  type="date" value={checkin}
                                        onChange={(e) => setCheckin(e.target.value)} />
                                </div>
                                {/* checkout */}
                               <div className="rounded-br-2x1 rounded-bl-2x1 border border-t-0 border-gray-300 px-4 py-2
sm:rounded-tr-2x1 sm:rounded-bl-none sm:border-t sm:border-1-0">
                                    <p className='font-bold'>Checkout</p>
                                    <input className='w-full sm:w-auto' type="date" value={checkout}
                                        onChange={(e) => setCheckout(e.target.value)} />
                                </div>
                            </div>

                            {/* Convvidados */}
                             <div className='border border-gray-300 rounded-2xl px-4 py-2 flex flex-col gap-2'>
                                 <p className='font-bold'>Nº de Convidados</p>
                                 <input className='border border-gray-300 rounded-2xl px-4 py-2'
                                        placeholder='2'
                                       type="number" value={guests}
                                        onChange={(e) => setGuests(e.target.value)} />
                             </div>

                            {user ? <button className='text-center bg-primary-400 text-white font-bold cursor-pointer w-full rounded-full border border-gray-300 px-4 py-2'
                                    onClick={handleBooking}>Reservar</button>
                                  :
                                  <Link to='/login' className='text-center  font-bold cursor-pointer w-full rounded-full border border-gray-300 px-4 py-2'>Faça seu Login</Link>
                            }

                            
                        </form>
                    </div>

                    {/*Extras*/}
                    <div className='rounded-2xl bg-gray-100 p-6 flex flex-col gap-2'>
                        <p className='text-lg sm:text-2xl font-bold'>Informações Extras</p>
                        <p>{place.extras}</p>
                    </div>

                    {/* OverLay */}
                    <div className={`${overlay ? 'flex' : 'hidden'} bg-black inset-0 fixed text-white items-start overflow-y-auto`}>

                        <div className='flex flex-col gap-8  p-8 max-w-7xl mx-auto'>
                            <div className='grid sm:grid-cols-2 gap-4 '>
                                {place.photos
                                    .map((photo, index) => (
                                        <img
                                            className={` aspect-square w-full object-cover`}
                                            src={`http://localhost:4000/tmp/${photo}`}
                                            alt=""
                                        />
                                    ))}
                            </div>
                        </div>

                        <button
                            className='absolute right-2 top-2 aspect-square w-8 cursor-pointer rounded-full bg-white font-bold text-black 
                                   transition hover:scale-105 hover:text-primary-400' onClick={() => setOverlay(false)}> X </button>
                    </div>
                </div>
            </div>

        </section >
    )
}

export default Place