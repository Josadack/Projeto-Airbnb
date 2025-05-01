import React, { useState } from 'react'
import Perks from './Parkes';

const NewPlace = () => {
    const [title, setTitle] = useState("");
    const [city, setCity] = useState("");
    const [photos, setPhotos] = useState("");
    const [description, setDescription] = useState("");
    const [extras, setExtras] = useState("");
    const [price, setPrice] = useState("")
    const [checkin, setCheckin] = useState("")
    const [checkout, setCheckout] = useState("")
    const [guests, setGuests] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
    }



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
            <div className='flex flex-col gap-1'>
                <label htmlFor='photos' className='ml-2 text-2xl font-bold'>Fotos</label>

                <div className='flex gap-2'>
                    <input
                        className='rounded-full border border-gray-300 px-4 py-2 grow'
                        type="text"
                        placeholder='Adicione a foto pelo link dela.'
                        id='photos'
                        value={photos}
                        onChange={(e) => setPhotos(e.target.value)} />
                    <button className='transition hover:bg-gray-200 rounded-full border border-gray-300 px-4 py-2 bg-gray-100 cursor-pointer'>
                        Enviar foto</button>
                </div>

                <div className='grid grid-cols-5 gap-4 mt-2'>
                    <label htmlFor="file"
                        className='flex items-center justify-center aspect-square rounded-2xl border border-gray-300 cursor-pointer' >
                        <input type="file" id="file" className='hidden' />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                        </svg>
                        Upload
                    </label>
                </div>
            </div>

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

               <Perks />
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