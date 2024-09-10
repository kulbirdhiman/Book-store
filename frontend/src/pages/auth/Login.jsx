import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useLoginMutation } from "../../redux/api/userAPiSlice";
import { trackForMutations } from '@reduxjs/toolkit/dist/immutableStateInvariantMiddleware';

const Login = () => {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [login] = useLoginMutation();
  const loginfrom = async()=>{
    try {
      await login({username,Password}).unwrap()
    } catch (error) {
      
    }
  }
  return (
    <section className='h-screen flex justify-center items-center text-white'>
          <div className='w-[30rem] border  p-4 rounded' >
            <h1 className='font-mono text-xl text-center '>Create an acccount</h1>
          <form action="" className=' ' >
            
            <div className='w-full my-2'>
            <p className='text-start mr-52'>Email</p>
              <input type="text" className='w-full rounded px-3 py-1' />
            </div>
            <div className='w-full my-2'>
            <p className='text-start mr-52'>Password</p>
              <input type="text" className='w-full rounded px-3 py-1' />
            </div>
           
            <p className='my-2'>don't have any account? <span><Link to="/signup">signup</Link></span></p>
            <button className='w-full  bg-green-400 rounded py-2'>Login</button>
            </form>
          </div>
    </section>
  )
}

export default Login