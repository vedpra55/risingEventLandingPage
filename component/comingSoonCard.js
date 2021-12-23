import { Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import theme from "../styles/theme"

const useStyles = makeStyles({
    mainContainer: {
        height: "30rem",
        [theme.breakpoints.down("sm")]: {
            height: "auto",
        }
    },
    container: {
        marginTop: "2rem",
        marginBottom: "2rem",
        margin: "4.5rem",
        backgroundImage: "linear-gradient(275.38deg, #6F2626 4.3%, rgba(96, 0, 17, 0) 94.04%), url(/images/event.webp)",
        backgroundRepeat:'no-repeat',
        backgroundPosition : "center",
        backgroundSize : "cover",
        [theme.breakpoints.down("sm")]: {
            margin: "1rem"
        }
    },
    text: {
        color: "white",
        fontSize: "4rem",
        [theme.breakpoints.down("sm")]: {
            fontSize: "2.5rem",
            padding: ".5rem"
        }
    }
})

const ComingSoonCard = () => {
    const classes = useStyles();

    return (
        <Grid container justifyContent="center" classes={{root:classes.mainContainer}}>
            <Grid item container classes={{root: classes.container}} justifyContent="center" alignItems="center">
                <Grid item>
                    <Typography classes={{root: classes.text}}>
                       Rising Event Coming Soon In Arrah
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ComingSoonCard;