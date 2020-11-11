import { IconButton, InputBase, Paper } from '@material-ui/core';
import { Send } from '@material-ui/icons';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { newMessage } from '../../../../redux/actions';
import useStyles from './ChatInputStyles';

const ChatInput = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [message, setMessage] = useState('');
    const conversation_id = useSelector((store) => store.currentConversation);
    const userId = useSelector((store) => store.currentSession.userId);
    const sendMessage = useSelector((store) => store.sendMessage);

    const handleSendClicked = () => {
        setMessage('')
        dispatch(newMessage({
            conversation_id,
            message: {
                message,
                user: {
                    id: userId
                },
                isPending: true,
                id: Date.now()
            },
        }));
        sendMessage({ message, conversation_id });
    }

    return (

        <div className={classes.root}>
            <Paper className={classes.container}>
                <InputBase
                    className={classes.textField}
                    placeholder="Write a message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyUp={(e) => {
                        e.key === "Enter" && handleSendClicked()
                    }}
                />
                <IconButton
                    className={classes.sendButton}
                    onClick={handleSendClicked}
                    disabled={message === ''}
                >
                    <Send />
                </IconButton>
            </Paper>
        </div>
    )
}

export default ChatInput;