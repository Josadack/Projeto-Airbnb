import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <section className='flex items-center'>
            <div className='gap-4 flex flex-col   max-w-96 mx-auto items-center w-full'>
                <h1 className='text-3xl font-bold'>Faça seu login</h1>

                <form className='flex flex-col gap-1.5 w-full'>
                  
                    <input 
                    className='w-full rounded-full border border-gray-300 px-4 py-2'
                    type="email" name="" id=""
                    placeholder='Digite seu e-mail' />
                    <input 
                    className='w-full rounded-full border border-gray-300 px-4 py-2'
                    type="password" name="" id=""
                    placeholder='Digite sua senha' />
                
                    <button className='bg-primary-400 text-white font-bold cursor-pointer w-full rounded-full border border-gray-300 px-4 py-2'>Login</button>
                </form>

                <p>Ainda não tem uma conta? <Link to="/register" className='underline font-semibold'> Registre-se aqui!</Link></p>
            </div>
        </section>
    )
}

export default Login