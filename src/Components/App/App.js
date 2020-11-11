import './App.css';
import LoginPage from './LoginPage/LoginPage';
import ChatRoom from './ChatRoom/ChatRoom';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { messageDelivered, newMessage, setConversations, setCurrentConversation, setSendMessage, setSession } from '../../redux/actions';
import ChatAppBar from './ChatAppBar/ChatAppBar';

function App() {
	const [ws, setWs] = useState(null);
	const currentUserId = useSelector((store) => store.currentSession.userId);
	const [isLoading, setIsLoading] = useState(false);
	const dispatch = useDispatch();

	const login = useCallback(({ userId, userName, roomId }) => {
		dispatch(setSession({ userId, userName, roomId }));
		setWs(new WebSocket(`ws://localhost:8080/?room_id=${roomId}&user_id=${userId}&user_name=${userName}`));
		setIsLoading(true);
	}, [dispatch, setWs, setIsLoading]);

	useEffect(() => {
		if (ws) {
			ws.onclose = (e) => {
				window.alert('connection Error');
				setWs(null);
				setIsLoading(false);
				dispatch(setSession({ userId: '', userName: '', roomId: '' }));
			};
			ws.onmessage = ({ data }) => {
				const event = JSON.parse(data);
				switch (event.eventName) {
					case 'roomInfo':
						const conversationsObject = event.payload.room.conversations_list.reduce((obj, conv) => {
							return {
								...obj,
								[conv.id]: conv
							}
						}, {});

						dispatch(setCurrentConversation(event.payload.room.conversations_list[0].id));
						dispatch(setConversations(conversationsObject));
						setIsLoading(false);
						break;
					case 'newMessage':
						if (event.payload.message.user.id === currentUserId) {
							dispatch(messageDelivered(event.payload));
						} else {
							dispatch(newMessage(event.payload));
						}
						break;
					default:
						break;
				}
			};
			dispatch(setSendMessage(
				({ message, conversation_id }) => {
					ws.send(JSON.stringify({
						eventName: 'newMessage',
						payload: { message, conversation_id }
					}))
				})
			);
		}
	}, [ws, dispatch, currentUserId]);

	return (
		<div className="App">
			<ChatAppBar />
			<div className={'appContent'}>
				{
					ws
						? isLoading
							? <div className="flex flex-col self-center">
								<span>Loading data</span>
							</div>
							: <ChatRoom />
						: <LoginPage onLogin={login} />
				}
			</div>
		</div>
	);
}

export default App;
