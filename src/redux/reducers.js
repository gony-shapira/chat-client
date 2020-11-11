import { combineReducers } from 'redux';
import { SET_SESSION, SET_CONVERSATIONS, NEW_MESSAGE, SET_CURRENT_CONVERSATION, SET_SEND_MESSAGE, MESSAGE_DELIVERED } from './actions';

const currentSession = (state = { roomId: '', userId: '', userName: '' }, action) => {
    switch (action.type) {
        case SET_SESSION:
            return action.payload;
        default:
            return state;
    }
}

const currentConversation = (state = '', action) => {
    switch (action.type) {
        case SET_CURRENT_CONVERSATION:
            return action.payload;
        default:
            return state;
    }
}

const conversations = (state = {}, action) => {
    switch (action.type) {
        case SET_CONVERSATIONS:
            return action.payload;
        case NEW_MESSAGE:
            return {
                ...state,
                [action.payload.conversation_id]: {
                    ...state[action.payload.conversation_id],
                    conversationMessages: [
                        ...state[action.payload.conversation_id].conversationMessages,
                        action.payload.message
                    ],
                    lastMessage: action.payload.message
                }
            }
        case MESSAGE_DELIVERED:
            const { conversationMessages } = state[action.payload.conversation_id];
            const deliveredMessageIndex = conversationMessages.findIndex(
                (message) => message.isPending && message.message === action.payload.message.message
            );
            return {
                ...state,
                [action.payload.conversation_id]: {
                    ...state[action.payload.conversation_id],
                    conversationMessages: [
                        ...conversationMessages.slice(0, deliveredMessageIndex),
                        action.payload.message,
                        ...conversationMessages.slice(deliveredMessageIndex + 1)
                    ],
                    lastMessage: action.payload.message
                }
            }
        default:
            return state;
    }
}

const sendMessage = (state = null, action) => {
    switch (action.type) {
        case SET_SEND_MESSAGE:
            return action.payload;
        default:
            return state;
    }
}


export const rootReducer = combineReducers({
    currentSession,
    conversations,
    currentConversation,
    sendMessage
})