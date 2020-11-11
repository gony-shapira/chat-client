import { Paper, Typography } from "@material-ui/core";
import { DoneOutlined } from "@material-ui/icons";
import { useSelector } from "react-redux";
import useStyles from "./MessageStyles";

const getDisplayTime = (time) => {
    const date = new Date(time);
    return `${`0${date.getHours()}`.slice(-2)}:${`0${date.getMinutes()}`.slice(-2)}`
}

const Message = ({ message, time, user, isPending, isGrouped }) => {
    const classes = useStyles();
    const currentUserId = useSelector((store) => store.currentSession.userId);

    return (
        <Paper className={`${classes.root} ${currentUserId === user.id && classes.sent}`}>
            { (currentUserId !== user.id) && (!isGrouped) && <Typography variant='h6'>{user.name}</Typography>}
            <Typography align='left' className={classes.content}>{message}</Typography>
            <Typography variant='body2' color='textSecondary' className={classes.content}>
                {(currentUserId === user.id && !isPending) && <DoneOutlined fontSize='small' />}
                {getDisplayTime(time)}
            </Typography>
        </Paper>
    )
}

export default Message;