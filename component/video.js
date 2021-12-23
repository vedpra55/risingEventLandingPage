import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"

import theme from "../styles/theme"

const useStyles = makeStyles({
    video: {
        width: "50rem",
        height: "30rem",
        marginBottom: "2rem",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            height: "100%"
        }
    }
})

const Video = () => {
    const classes = useStyles()
    return (
        <Grid container>
            <Grid item container justifyContent="center">
                <Grid item  classes={{root: classes.container}}>
                <iframe className={classes.video} src="https://www.youtube.com/embed/DMqfYgAopRA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Video