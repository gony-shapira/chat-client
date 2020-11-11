import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        flexDirection: "column",
        width: "34%",
        height: "40%",
        padding: '5vh',
        margin: "auto",
        justifyContent: 'space-evenly'
    },
    input: {
        margin: '2vh'
    }
}));

export default useStyles;