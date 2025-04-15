import React from 'react'

const Conversation = () => {
    return ( 
        <>
            <div className='flex gap-3 items-center hover:bg-white/20 rounded py-1 cursor-pointer'>
                    <div className='avatar avatar-online'>
                        <div className='w-12 rounded-full'>
                            <img
                                src='https://img.freepik.com/vetores-premium/icone-de-perfil-de-avatar-padrao-imagem-de-usuario-de-midia-social-icone-de-avatar-cinza-silhueta-de-perfil-em-branco-ilustracao-vetorial_561158-3408.jpg?w=740'
                                alt='user avatar'
                            />
                        </div>
                    </div>

                    <div className='flex flex-col flex-1'>
                        <div className='flex gap-3 justify-between'>
                            <p className='font-bold text-gray-200'>John Doe</p>
                        </div>
                    </div>
                </div>

                <div className='divider my-0 py-0 h-1' />
        </>
    )
}

export default Conversation