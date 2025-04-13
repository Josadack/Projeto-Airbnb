import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axio from 'axios'

const Login = ({user, setUser}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false)


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (email && password) {
            try {
                const {data: userDoc } = await axio.post("/users/login", {
                    email,
                    password,
                })

                setUser(userDoc);
                setRedirect(true);
            } catch (error) {
                alert(`Deu um erro ao logar: ${error.response.data}`)
            }

        } else {
            alert("Você precisa preencher o e-mail/senha")
        }

    }

    //Redirecionar para home
    if(redirect || user) return  <Navigate  to="/" />

    return (
        <section className='flex items-center'>
            <div className='gap-4 flex flex-col   max-w-96 mx-auto items-center w-full'>
                <h1 className='text-3xl font-bold'>Faça seu login</h1>

                <form className='flex flex-col gap-2 w-full' onSubmit={handleSubmit}>

                    <input
                        className='w-full rounded-full border border-gray-300 px-4 py-2'
                        type="email"
                        name='email'
                        placeholder='Digite seu e-mail'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />

                    <input
                        className='w-full rounded-full border border-gray-300 px-4 py-2'
                        type="password"
                        name='password'
                        placeholder='Digite sua senha'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />

                    <button className='bg-primary-400 text-white font-bold cursor-pointer w-full rounded-full border border-gray-300 px-4 py-2'>Login</button>
                </form>

                <p>Ainda não tem uma conta? <Link to="/register" className='underline font-semibold'> Registre-se aqui!</Link></p>
            </div>
        </section>
    )
}

export default Login