import React from 'react'

const Login = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto '>
            <div className='w-full p-6 rounded-lg shadow-md bg-purple-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-white'>
                    Login <span className='text-purple-950 '>Socketaí</span>
                </h1>
                <form className='mt-5'>
                    <div>
                        <input type="text" placeholder="enter username" className="input input-md w-full bg-amber-50 text-black" />
                    </div>

                    <div className='mt-3'>
                        <input type="text" placeholder="enter password" className="input input-md w-full bg-amber-50 text-black" />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-md w-full bg-amber-200 text-black mt-4">Login</button>
                    </div>

                    <p className='text-sm font-medium  text-white mt-2'>Don't have an account? <a href="#" className='text-sm hover: underline hover:text-purple-950 mt-2 inline-block'>
                        Sign Up
                    </a> </p>


                </form>
            </div>
        </div>
    )
}

export default Login;
