import React, { useEffect, useState } from 'react'
import Perks from './Parkes';
import { Navigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { useUserContext } from '../context/UserContext';
import PhotoUploader from './PhotoUploader';

const NewPlace = () => {
    const { id } = useParams();
    const { user } = useUserContext();
    const [title, setTitle] = useState("");
    const [city, setCity] = useState("");
    const [photos, setPhotos] = useState([]);
    const [perks, setPerks] = useState([]);
    const [description, setDescription] = useState("");
    const [extras, setExtras] = useState("");
    const [price, setPrice] = useState("")
    const [checkin, setCheckin] = useState("")
    const [checkout, setCheckout] = useState("")
    const [guests, setGuests] = useState("")
    const [redirect, setRedirect] = useState(false);
    const [photolink, setPhotoLink] = useState("")


    useEffect(() => {
        if (id) {
            const axiosGet = async () => {
                const { data } = await axios.get(`/places/${id}`)

                console.log(data)
                setTitle(data.title);
                setCity(data.city);
                setPhotos(data.photos);
                setPerks(data.perks);
                setDescription(data.description);
                setExtras(data.extras);
                setPrice(data.price);
                setCheckin(data.checkin);
                setCheckout(data.checkout);
                setGuests(data.guests);

            };
            axiosGet();
        }


    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (title &&
            city &&
            description &&
            photos.length > 0 &&
            price &&
            checkin &&
            checkout &&
            guests
        ) {
            if (id) {
                try {
                    const modifiedPlace = await axios.put(`/places/${id}`, {
                        title,
                        city,
                        photos,
                        description,
                        extras,
                        perks,
                        price,
                        checkin,
                        checkout,
                        guests,
                    });
                    console.log(modifiedPlace)
                } catch (error) {
                    console.error(JSON.stringify(error))
                    alert('Deu erro ao tentar atualizar o lugar')
                }

            } else {
                try {
                    const newPlace = await axios.post("/places", {
                        owner: user._id,
                        title,
                        city,
                        photos,
                        description,
                        extras,
                        perks,
                        price,
                        checkin,
                        checkout,
                        guests,
                    });
                    console.log(newPlace)
                } catch (error) {
                    console.error(JSON.stringify(error))
                    alert('Deu erro ao tentar criar um novo lugar')
                }
            }

            setRedirect(true);

        } else {
            alert("Preencha todas as informações antes de enviar")
        }
    };


    if (redirect) return <Navigate to="/account/places" />

    return (
        <form onSubmit={handleSubmit} className='w-full px-8 flex flex-col gap-7'>

            {/* Título */}
            <div className='flex flex-col gap-2'>
                <label htmlFor='title' className='ml-2 text-2xl font-bold'>Título</label>
                <input
                    className='rounded-full border border-gray-300 px-4 py-2'
                    type="text" placeholder='Digite um título do seu anúncio.'
                    id='title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            {/* Endereço */}
            <div className='flex flex-col gap-2'>
                <label htmlFor='city' className='ml-2 text-2xl font-bold'>Cidade e País</label>
                <input
                    className='rounded-full border border-gray-300 px-4 py-2'
                    type="text" placeholder='Digite a cidade e pais do seu anúncio.'
                    id='city'
                    value={city}
                    onChange={(e) => setCity(e.target.value)} />
            </div>

            {/* Photos */}
            <PhotoUploader {...{ photolink, setPhotoLink, setPhotos, photos }} />

            {/* Descrição */}
            <div className='flex flex-col gap-2'>
                <label htmlFor='description' className='ml-2 text-2xl font-bold'>Descrição</label>
                <textarea
                    className='rounded-2xl border border-gray-300 px-4 py-2 h-56 resize-none'
                    placeholder='Digite a descrição do seu anúncio.'
                    id='description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>

            {/* Comodidades */}
            <div className='flex flex-col gap-2'>
                <label htmlFor='perks' className='ml-2 text-2xl font-bold'>Comodidades</label>

                <Perks {...{ perks, setPerks }} />
            </div>

            {/* Informações Extras */}
            <div className='flex flex-col gap-2'>
                <label htmlFor='extras' className='ml-2 text-2xl font-bold'>Informações Extras</label>
                <textarea
                    className='rounded-2xl border border-gray-300 px-4 py-2 h-56 resize-none'
                    placeholder='Digite aqui  qualquer tipo de infomação extra sobre o anuncio.'
                    id='extras'
                    value={extras}
                    onChange={(e) => setExtras(e.target.value)}
                />
            </div>

            {/* Restrições e Preço */}
            <div className='flex flex-col gap-2'>
                <h2 htmlFor='extras' className='ml-2 text-2xl font-bold'>Restrições e Preço</h2>

                <div className='grid grid-cols-[repeat(auto-fit,minmax(225px,1fr))] gap-6'>

                    {/* preço */}
                    <div className='flex flex-col gap-2 '>
                        <label className='ml-2 text-xl font-bold' htmlFor="price">Preço</label>
                        <input
                            className='rounded-full border border-gray-300 px-4 py-2'
                            type="number"
                            placeholder='500.'
                            id='price'
                            value={price}
                            onChange={(e) => setPrice(e.target.value)} />
                    </div>

                    {/* checkin */}
                    <div className='flex flex-col gap-2 '>
                        <label className='ml-2 text-xl font-bold' htmlFor="checkin">Checkin</label>
                        <input
                            className='rounded-full border border-gray-300 px-4 py-2'
                            type="text"
                            placeholder='16:00'
                            id='checkin'
                            value={checkin}
                            onChange={(e) => setCheckin(e.target.value)} />
                    </div>

                    {/* checkout */}
                    <div className='flex flex-col gap-2 '>
                        <label className='ml-2 text-xl font-bold' htmlFor="checkout">Checkout</label>
                        <input
                            className='rounded-full border border-gray-300 px-4 py-2'
                            type="text"
                            placeholder='12:00'
                            id='checkout'
                            value={checkout}
                            onChange={(e) => setCheckout(e.target.value)} />
                    </div>

                    {/* convidado */}
                    <div className='flex flex-col gap-2 '>
                        <label className='ml-2 text-xl font-bold' htmlFor="guests">Nº Convidados</label>
                        <input
                            className='rounded-full border border-gray-300 px-4 py-2'
                            type="number"
                            placeholder='4'
                            id='guests'
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)} />
                    </div>
                </div>

            </div>

            <button className=' rounded-full hover:bg-primary-500  bg-primary-400 text-white px-4 py-2 cursor-pointer transition min-w-44'>Salvar informações</button>
        </form>
    )
}

export default NewPlace