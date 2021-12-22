import { Grid, Typography, Button } from "@material-ui/core"

import { makeStyles } from "@material-ui/core"

import { useState } from "react"

import Image from "next/image"

import Airtable from 'airtable'

const base = new Airtable({apiKey: 'keygsnsZSnGuklxnI'}).base('appbV3RRRv4kdSLXb');


const useStyles = makeStyles({
    container: {
        height:"auto"
    },
    mainContainer : {
        height: "100%",
        boxShadow:' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        backgroundImage:'linear-gradient(180deg, #CBBA27 0%, rgba(192, 94, 0, 0.5625) 54.17%, rgba(198, 20, 20, 0) 100%), url(/mobile.jpg)',
        backgroundRepeat:'no-repeat',
        backgroundPosition : "center",
        backgroundSize : "cover",
    },
    heading: {
        fontSize: "2.5rem",
        fontWeight: "bold",
        fontFamily: "Monsent",
        lineHeight: "50px"
    },
    subheading: {
        color: '#3B29FF',
        paddingTop: "2rem",
        fontSize: "1.5rem",
        fontFamily: "Roboto"
    },
    locationText: {
        fontSize: "1.2rem",
    },
    registerText: {
        color: "#fff",
        paddingTop: "1.5rem",
        fontSize : "1.4rem"
    },
    input : {
        marginTop: "1.5rem",
        width: "15rem",
        height: "3rem",
        color: "black",
        fontSize : "1.5rem",
        backgroundColor: "#E4DD99",
        border : "none",
        borderRadius : "3px",
        padding: "8px",
        outline : "none",
        "&::placeholder" : {
            color: "#black",
            fontWeight :400,
            fontSize : "1.2rem"
        },
        "&::label" : {
            color: "black",
            fontSize: "1.5rem"
        },
    },
    btn: {
        marginTop: "1.5rem",
        marginBottom: "1rem",
        width:"15rem",
        height: "3rem",
        backgroundColor: "black",
        "&:hover": {
          backgroundColor: "grey"
        }
      },
      btnText: {
        color: "white"
      },
})

const Mobile = () => {
    const classes = useStyles();

    const [ name, setName ] = useState("")
    const [ email, setEmail ] = useState ("")
    const [ phone, setPhone ] = useState("")
  
    const [upload, setUpload] = useState(false)
  
    const uploadData = () => {
      base('Table 1').create([
        {
          "fields": {
            "title": "Name",
            "field": name
          }
        },
        {
          "fields": {
            "title": "Email",
            "field": email
          }
        },
        {
          "fields": {
            "title": "Phone",
            "field": phone
          }
        }
      ], function(err, records) {
        if (err) {
          console.error(err);
          return;
        }
        setUpload(true)
        records.forEach(function (record) {
          console.log(record.getId());
        });
      });
    }

    return (
        <Grid container classes={{root: classes.container}}>
            <Grid item container>
                <Grid item container direction="column" justifyContent='center' alignItems="center" >
                <Grid item>
                    <Image width={150} height={100} alt="Picture of the author" src="/logo.png" />
                </Grid>
                <Grid item>
                    <Typography align="center" classes={{root: classes.heading}}>
                        Make your event memorable
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography align="center" classes={{root: classes.subheading}}>
                        Weeding, birthday,genral event and manymore
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography classes={{root: classes.registerText}}>
                        Register now for Launch Offer 
                    </Typography>
                </Grid>
                <Grid item>
                    <input type="name" value={name}  onChange={e => setName(e.target.value)} className={classes.input} placeholder="name"/>
                </Grid>
                <Grid item>
                    <input type="name" value={email} onChange={e => setEmail(e.target.value)} className={classes.input} placeholder="email"/>
                </Grid>
                <Grid item>
                    <input type="name" value={phone} onChange={e => setPhone(e.target.value)} className={classes.input} placeholder="phone"/>
                </Grid>

                <Grid item>
                   <Button variant="contained" classes={{root: classes.btn}} onClick={uploadData}>
                      <Typography classes={{root: classes.btnText}}>
                         { upload ? "Your data is successfully register" : "Register Now"}
                      </Typography>
                    </Button>
                </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Mobile;