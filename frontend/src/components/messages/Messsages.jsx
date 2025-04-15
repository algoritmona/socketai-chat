import Message from "./Message";
import MessageContainer from "./MessageContainer";


const Messages = () => {
        return (
            <div className='px-4 flex-1 overflow-auto'>
                <Message />
                <Message />
                <Message />
                <Message />
            </div>
        );
};
export default Messages;