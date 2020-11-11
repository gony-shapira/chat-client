import { Button, Paper, TextField } from '@material-ui/core';
import { useState } from 'react';
import useStyles from './LoginPageStyles';

function LoginPage({ onLogin }) {
	const classes = useStyles();
	const [userName, setUserName] = useState('');
	const [roomId, setRoomId] = useState('');
	const [userId, setUserId] = useState('');

	return (
		<Paper className={classes.root}>
			<TextField
				margin='dense'
				className={classes.input}
				variant='outlined' label='Name'
				value={userName}
				onChange={(e) => setUserName(e.target.value)}
			/>
			<TextField
				margin='dense'
				className={classes.input}
				variant='outlined'
				label='User Id'
				value={userId}
				onChange={(e) => setUserId(e.target.value)}
			/>
			<TextField
				margin='dense'
				className={classes.input}
				variant='outlined'
				label='Room Id'
				value={roomId}
				onChange={(e) => setRoomId(e.target.value)}
			/>
			<Button color="primary" variant='contained' onClick={() => { onLogin({ userId, userName, roomId }) }}>
				Join Chat Room
			</Button>
		</Paper>
	);
}

export default LoginPage;
