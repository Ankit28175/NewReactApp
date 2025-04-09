import React, { useState } from 'react'

const Login = ({HandleLogin}) => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

     
     const submitHandler = (e)=>{
          e.preventDefault()
          HandleLogin(email,password)
          setemail('')
          setpassword('')
     }
  return (
    <>
     <div className='flex h-screen w-screen justify-center items-center'>
        <div className='border-2 p-4 h-100  rounded-2xl border-emerald-400'>
           <h1 className='items-center justify-center flex font-bold text-3xl mb-5'>Login</h1>
            <form onSubmit={(e)=>{
                submitHandler(e)
            }} className='flex flex-col items-center justify-center'>
                <input required
                value={email}
                onChange={(e)=>{
                    setemail(e.target.value)
                }
                }
                className=' outline-none border-2 p-3 m-2  w-70 rounded-2xl border-emerald-400' type="email"  placeholder='enter email ' />
                <input required 
                  value={password}
                  onChange={(e)=>{
                      setpassword(e.target.value)}}
                className=' outline-none border-2 p-3 mt-3 m-2 w-70 rounded-2xl border-emerald-400' type="password"   placeholder='password'/>
                <button className='border-2 p-3 hover:bg-emerald-500 mt-15 m-2 w-30 rounded-2xl border-emerald-400'>Login</button>
            </form>
        </div>
     </div>
    </>
  )
}

export default Login