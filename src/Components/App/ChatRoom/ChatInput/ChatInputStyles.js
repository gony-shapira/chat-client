import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '15%'

    },
    container: {
        width: '80%',
        display: 'flex'
    },
    textField: {
        flex: 13,
        margin: '1vw'
    },
    sendButton: {
        flex: 1,
    }
}))

export default useStyles;