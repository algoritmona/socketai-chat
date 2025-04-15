import React from 'react'
import { IoIosSearch } from "react-icons/io";


const SearchInput = () => {
    return (
        <form className='flex items-center gap-2'>
			<input
				type='text'
				placeholder='Search…'
				className='input input-sm rounded bg-white text-black'
			/>
			<button type='submit' className='btn btn-circle bg-black text-white hover:bg-purple-400'>
                <IoIosSearch className='w-6 h-6 outline-none'/>
			</button>
		</form>
    )
}

export default SearchInput