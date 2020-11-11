import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    conversation: {
        margin: '3vh',
        padding: '1vh',
        width: '85%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    content: {
        maxWidth: '100%'
    }

}));

export default useStyles;