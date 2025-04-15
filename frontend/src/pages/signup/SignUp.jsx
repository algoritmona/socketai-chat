import React from 'react'
import GenderCheckbox from './GenderCheckBox';

const SignUp = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-purple-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center text-white'>
                    Sign Up <span className='text-purple-950 '>Socketaí</span>
                </h1>

                <form className='mt-5'>
                    <div>
                        <input type="text" placeholder="enter full name" className="input input-md w-full bg-amber-50 text-black" />
                    </div>

                    <div className='mt-3'>
                        <input type="text" placeholder="create an username" className="input input-md w-full bg-amber-50 text-black" />
                    </div>
                    <div className='mt-3'>
                        <input type="text" placeholder="create a password" className="input input-md w-full bg-amber-50 text-black mb-5" />
                    </div>

                    <GenderCheckbox />

                    <div>
                        <button type="submit" className="btn btn-md w-full bg-amber-200 text-black mt-5">Sign Up</button>
                    </div>

                    <p className='text-sm font-medium text-white mt-2'>Already have an account? <a href="#" className='text-sm hover: underline hover:text-purple-950 mt-2 inline-block'>
                        Login
                    </a> </p>

                </form>
            </div>
        </div>
    )
}

export default SignUp;