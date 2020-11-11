export const SET_SESSION = 'setSession';
export const SET_CONVERSATIONS = 'setConversations';
export const SET_CURRENT_CONVERSATION = 'setCurrentConversation';
export const NEW_MESSAGE = 'newMessage';
export const MESSAGE_DELIVERED = 'messageDelivered'
export const SET_SEND_MESSAGE = 'setSendMessage';

export const setSession = (sessionInfo) => (
    {
        type: SET_SESSION,
        payload: sessionInfo
    }
);

export const setConversations = (conversations) => {

    return {
        type: SET_CONVERSATIONS,
        payload: conversations
    };
};

export const setCurrentConversation = (conversationId) => (
    {
        type: SET_CURRENT_CONVERSATION,
        payload: conversationId
    }
)

export const newMessage = (message) => (
    {
        type: NEW_MESSAGE,
        payload: message
    }
);

export const messageDelivered = (message) => (
    {
        type: MESSAGE_DELIVERED,
        payload: message
    }
);

export const setSendMessage = (sendMessage) => (
    {
        type: SET_SEND_MESSAGE,
        payload: sendMessage
    }
);
