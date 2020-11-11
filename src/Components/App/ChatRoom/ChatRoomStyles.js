import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        flexDirection: "row",
        flex: 1,
        height: "100%",
    },
    chat: {
        display: "flex",
        width: '75%',
        flexDirection: "column",
        backgroundColor:'linen'
    },
    conversationsList: {
        width: '25%',
        display: "flex",
        flexDirection: "column",
        paddingTop: '2vh'
    }

}))

export default useStyles;