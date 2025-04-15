import React from 'react'
import Messages from './Messsages'
import MessageInput from './MessageInput'
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
    const isChatSelected = false; 

    return (
        <div className='flex h-[80vh] w-[60vw] flex-col bg-purple-400'>
            {isChatSelected ? (
                <>
                    {/* Header */}
                    <div className='bg-black px-4 py-2 mb-2'>
                        <span className='label-text text-white mr-1'>To:</span> <span className='text-white font-bold'>John doe</span>
                    </div>
                    <Messages />
                    <MessageInput />
                </>
            ) : (
                <NoChatSelected /> 
            )}
        </div>
    )
}

export default MessageContainer;

const NoChatSelected = () => {
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
                <p>Select a chat to start messaging</p>
                <TiMessages className='text-3xl md:text-6xl text-center' />
            </div>
        </div>
    );
};
