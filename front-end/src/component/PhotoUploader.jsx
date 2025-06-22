import axios from 'axios'


const PhotoUploader = ({ photolink, setPhotoLink, setPhotos, photos}) => {

    const uploadByLink = async (e) => {
        e.preventDefault()

        if (photolink) {
            const { data: filename } = await axios.post('/places/upload/link', {
                link: photolink,
            })

            setPhotos((prevValue) => [...prevValue, filename])

        } else {
            alert("Não existe nenhum link a ser enviado!")
        }
    };

    const uploadPhoto = async (e) =>{
        const { files } = e.target;
        const filesArray = [...files]

        const formData = new FormData();

        filesArray.forEach((file) => formData.append("files", file));

        const { data: urlArray } = await axios.post("/places/upload", formData, {
            headers: {"Content-Type": "multipart/form-data"},
        });

         setPhotos((prevValue) => [...prevValue, ...urlArray])

    }

    return (
        <div className='flex flex-col gap-1'>
            <label htmlFor='photos' className='ml-2 text-2xl font-bold'>Fotos</label>
            <div className='flex gap-2'>
                <input
                    className='rounded-full border border-gray-300 px-4 py-2 grow'
                    type="text"
                    placeholder='Adicione a foto pelo link dela.'
                    id='photolink'
                    value={photolink}
                    onChange={(e) => setPhotoLink(e.target.value)} />
                <button onClick={uploadByLink} className='transition hover:bg-gray-200 rounded-full border border-gray-300 px-4 py-2 bg-gray-100 cursor-pointer'>
                    Enviar foto</button>
            </div>

            <div className='grid grid-cols-5 gap-4 mt-2'>
                {photos.map((photo) => (
                 <img className='aspect-square object-cover rounded-2xl' 
                 src={`${axios.defaults.baseURL}/tmp/${photo}`}
                 alt='Imagens do lugar'
                 key={photo}
                 />
                 ))}
                <label htmlFor="file"
                    className='flex items-center justify-center aspect-square rounded-2xl border border-gray-300 cursor-pointer' >
                    <input 
                    type="file" 
                    id="file"
                    className='hidden' 
                    multiple
                    onChange={uploadPhoto}/>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                    </svg>
                    Upload
                </label>
            </div>
        </div>
    )
}

export default PhotoUploader