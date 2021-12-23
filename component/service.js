import { Grid, Typography, useMediaQuery } from "@material-ui/core"

import { makeStyles } from "@material-ui/core/styles"

import theme from "../styles/theme"

const useStyles = makeStyles({
    container: {
        marginBottom: "2rem",
        [theme.breakpoints.down("sm")]: {
            margin: "1rem"
        }
    },
    mainContainer: {
        width: "75rem",
        height: "20rem",
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            height: "auto",
        }
    },
    img: {
        height:"18rem",
        paddingLeft: "2rem",
        [theme.breakpoints.down("sm")]: {
            padding: ".5rem",
            height: "16rem"
        }
    },
    title: {
        fontSize: "2rem",
        fontWeight: 600, 
        fontFamily: "Helvetica Neue",
    },
    detailContainer: {
        paddingLeft: "8rem",
        [theme.breakpoints.down("sm")]: {
            paddingLeft: "1.2rem",
        }
    },
    infoText: {
        fontSize: "1.4rem",
        paddingTop: ".6rem"
    }
})

const Service = ({ item, first}) => {
    const classes = useStyles();

    const MatchesSM = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <div className={classes.container} style={{backgroundColor:first? "#FADEB4" : "#4CE3D1"}}>
        <Grid 
        item 
        container 
        classes={{root: classes.mainContainer}} 
        justifyContent={MatchesSM ? "center": undefined}
        alignItems="center" 
        >
            <Grid item md={5}>
                <img className={classes.img} src={item.image} alt={item.title} />
            </Grid>

            <Grid 
            item 
            container 
            direction="column" 
            md={7} 
            classes={{root: classes.detailContainer}}
            >
                <Grid item>
                    <Typography classes={{root: classes.title}}>{item.title}</Typography>
                </Grid>
                {item.list.map((data, i) => (
                    <Grid item key={i}>
                        <Typography classes={{root:classes.infoText}}>{i+1}. {data}</Typography>
                    </Grid>
                ))}
            </Grid>
        </Grid>
        </div>
    )
}

export default Service