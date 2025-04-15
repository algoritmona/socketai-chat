import React from 'react'

const Message = () => {
    return (
        <div className='chat chat-end'	>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img alt='Tailwind CSS chat bubble component' src='https://img.freepik.com/vetores-premium/icone-de-perfil-de-avatar-padrao-imagem-de-usuario-de-midia-social-icone-de-avatar-cinza-silhueta-de-perfil-em-branco-ilustracao-vetorial_561158-3408.jpg?w=740' />
				</div>
			</div>
			<div className={'chat-bubble text-white chat-bubble-primary bg-black'}>Hi! What is up?</div>
			<div className='chat-footer opacity-80 text-xs flex gap-1 items-center text-black'>12:42</div>
		</div>
    )
}

export default Message