import { Grid, Typography } from "@material-ui/core"

import { makeStyles } from '@material-ui/core/styles'

import theme from "../styles/theme"

const useStyles = makeStyles({
    container: {
        height: "20rem",
        [theme.breakpoints.down("sm")]: {
            height: "auto",
        }
    },
    mainContainer: {
        marginTop: "2rem",
        marginBottom: "2rem",
        margin: "4.5rem",
        backgroundImage: "url(/images/contact.webp)",
        backgroundRepeat:'no-repeat',
        backgroundPosition : "center",
        backgroundSize: "cover",
        [theme.breakpoints.down("sm")] :{
            margin: "1rem",
            backgroundSize: "auto"
        },
    },
    title: {
        fontSize: "1.5rem",
        paddingBottom: ".5rem",
        paddingLeft: "2rem"
    },
    link: {
        textDecoration: "none",
        paddingLeft: "2rem",
        color: "black",
        fontSize: "1.5rem"
    }
})

const ContactUs = () => {
    const classes = useStyles()

    const data = [
        {title: "Whatsapp", value: "6203703070",  href:"https://wa.me/+918709553003"},
        {title: "Email" , value: "vedna400@gmail.com"},
        {title: "Address" , value: "Arrah, Bihar 802301"}
    ]

    return (
        <Grid container classes={{root: classes.container}} justifyContent="center" >
            <Grid item container classes={{root: classes.mainContainer}} alignItems="center">
                <Grid item container md={6}></Grid>
                <Grid item container direction="column" justifyContent="center" md={6}>
                    <h1 style={{fontFamily: "Helvetica Neue", paddingLeft: "2rem"}}>Contact us</h1>
                    {data.map((item, i) => (
                        <Grid item key={i}>
                            <Grid item container>
                                <Grid item>
                                    {item.href ? 
                                    <a 
                                    className={classes.link} 
                                    href={item.href}
                                    >
                                        {item.title}: {item.value}
                                    </a> 
                                    : (
                                        <Typography classes={{root: classes.title}}>
                                            {item.title}:   {item.value}
                                        </Typography>
                                    )}
                                </Grid>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    )

}

export default  ContactUs