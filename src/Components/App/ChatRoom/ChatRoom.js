import ConversationMessages from "./ConversationMessages/ConversationMessages";
import ConversationsList from "./ConversationsList/ConversationsList";
import ChatInput from "./ChatInput/ChatInput";
import useStyles from "./ChatRoomStyles";

function ChatRoom() {
    const classes = useStyles()
	return (
		<div className={classes.root}>
			<ConversationsList className={classes.conversationsList}/>
            <div className={classes.chat}>
                <ConversationMessages/>
                <ChatInput/>
            </div>
		</div>
	);
}

export default ChatRoom;
