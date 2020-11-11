import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import useStyles from "./ChatAppBarStyles";

const ChatAppBar = () => {
	const currentSession = useSelector((store) => store.currentSession);
	const classes = useStyles();

	return (
		<AppBar position='sticky'>
			<Toolbar className={classes.toolbar} variant='dense'>
				{currentSession.roomId !== '' && <Typography>Room No. {currentSession.roomId}</Typography>}
				{currentSession.userName !== '' && <Typography>Hello, {currentSession.userName}!</Typography>}
			</Toolbar>
		</AppBar>
	)
};

export default ChatAppBar;