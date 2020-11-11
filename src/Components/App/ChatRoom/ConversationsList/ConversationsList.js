import { Paper, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import useStyles from "./ConversationsListStyles";


function ConversationsList({ className }) {
    const conversations = useSelector((store) => Object.values(store.conversations));
    const classes = useStyles();
    const lastMessage = conversations.lastMessage ? conversations.lastMessage.message : 'No messages';

    return (
        <div className={className}>
            <Typography variant='h5'>Conversations List</Typography>
            {
                conversations.map((conversation) => {
                    const lastMessage = conversation.lastMessage ? conversation.lastMessage.message : 'No messages';
                    return (
                        <Paper className={classes.conversation} key={conversation.id}>
                            <Typography noWrap className={classes.content} variant='h6'>{conversation.name}</Typography>
                            <Typography noWrap className={classes.content} title={lastMessage}>{lastMessage}</Typography>
                        </Paper>
                    )
                })
            }
        </div>
    );
}

export default ConversationsList;
