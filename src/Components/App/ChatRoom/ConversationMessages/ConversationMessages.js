import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import useStyles from "./ConversationMessagesStyles";
import Message from "./Message/Message";

const minute = 60000;


function ConversationMessages() {
    const messagesContainer = useRef(null)
    const messages = useSelector((store) => store.conversations[store.currentConversation].conversationMessages)
    const classes = useStyles();

    useEffect(() => {
        if (messagesContainer) {
            messagesContainer.current.addEventListener('DOMNodeInserted', event => {
                event.currentTarget.scroll({ top: event.currentTarget.scrollHeight, behavior: 'smooth' });
            });
        }
    }, []);

    const getMessages = () => {
        let prevUserId = '';
        let prevTime = 0;
        return messages.map((message) => {
            const isGrouped = (prevUserId === message.user.id) && message.time - prevTime <= minute;
            prevUserId = message.user.id;
            prevTime = message.time;
            return <Message key={message.id} isGrouped={isGrouped} {...message} />
        });
    };

    return (
        <div className={classes.root} ref={messagesContainer}>
            {
                getMessages()
            }
        </div>
    );
}

export default ConversationMessages;
