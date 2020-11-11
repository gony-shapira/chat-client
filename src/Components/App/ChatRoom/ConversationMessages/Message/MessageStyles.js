import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {
        margin: '1vh',
        padding: '2vh',
        maxWidth: '60%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    sent: {
        alignSelf: 'flex-end'
    },
    content: {
        wordBreak: 'break-word'
    }

}));

export default useStyles;