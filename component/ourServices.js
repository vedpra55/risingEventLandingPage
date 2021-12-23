import { Grid, Typography } from "@material-ui/core"

import { makeStyles } from "@material-ui/core/styles"

import Service from "../component/service"

import theme from "../styles/theme"

const useStyles = makeStyles({
    heading: {
        marginBottom: "2rem",
        fontSize: "1.7rem",
        [theme.breakpoints.down("sm")]: {
            marginBottom: ".5rem"
        }
    }
})

const OurServices = () => {
    const classes = useStyles();

    const data = [
        {
            first: true,
            image: "/images/videography.webp",
            title: "High Defination VideoGraphy",
            list: [
                "Traditional Videography & Photography",
                "Professional Photoshoot",
                "Cinematic Shoot",
                "Drone"
            ]
        },
        {
            first: false,
            image: "/images/makeup.webp",
            title: "World Class Makeup",
            list: [
                "Advance Engegment Make-up",
                "Air Brush H.D Engegment Make-up",
                "Special Bridal Make-up",
                "H.D Bridal Make-up",
                "High Defination Air Brush"
            ]
        }
    ]

    return (
        <Grid container justifyContent="center">
            <Grid item container justifyContent="center">
                <Grid item>
                    <Typography classes={{root: classes.heading}}>Our Services</Typography>
                </Grid>
            </Grid>

            {data.map((item , i) => (
                <Service first={item.first} item={item} key={i} />
            ))}

        </Grid>
    )
}

export default OurServices;