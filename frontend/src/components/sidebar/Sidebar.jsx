import React from 'react'
import SearchInput from './SearchInput';
import Conversations from './Conversations';
import LogoutButton from './LogoutButton';

const Sidebar = () => {
    return (
        <div className='flex h-[80vh] w-[20vw] p-4 flex flex-col bg-black'>
            <SearchInput />
            <div className='divider px-3'></div>
            <Conversations />
			<LogoutButton />
        </div>
    )
}

export default Sidebar;