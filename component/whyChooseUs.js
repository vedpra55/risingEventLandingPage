import { Grid, Typography } from "@material-ui/core"

import { makeStyles } from "@material-ui/styles"

import theme from "../styles/theme"

const useStyles = makeStyles({
    cardContainer: {
        marginTop: "2rem",
        marginBottom: "2rem",
        width: "25rem",
        height: "12rem",
        backgroundColor:"#E7E7E7",
        boxShadow:' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        [theme.breakpoints.down("sm")]: {
            margin: "1rem",
            height: "12rem"
        }
    },
    text: {
        fontSize: "1.2rem",
        color: "#9E00FF",
        padding: ".6rem"
    },
    heading: {
        marginTop: "2rem",
        fontSize: "1.7rem",
    }
})

const WhyChooseUs = () => {
    const classes = useStyles()

    const datas =  [
        {icon:'/trust.png', title: 'We know value of every movement'},
        {icon:'/affordable.png', title: 'We know value of every movement'},
        {icon:'/award.png', title:"We know value of every movement we are the best"}
    ]

    return (
        <Grid container>
            <Grid item container justifyContent="center">
                <Grid item>
                   <Typography align="center" classes={{root: classes.heading}}>Why choose us?</Typography>
                </Grid>
            </Grid>
            <Grid item container justifyContent='space-around' alignItems="center">
                {datas.map((item, i) => (
                   <Grid key={i} item classes={{root: classes.cardContainer}}>
                       <Grid item container direction="column" alignItems="center">
                           <Grid item>
                               <img src={item.icon} alt="icon" style={{width: "5rem", paddingTop: "1rem"}} />
                            </Grid>
                            <Grid item>
                                <Typography align="center" classes={{root: classes.text}}>{item.title}</Typography>
                            </Grid>
                      </Grid>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}

export default WhyChooseUs