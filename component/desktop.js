

import { Grid, Typography, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import { useState } from "react"

import Image from 'next/image'

import Airtable from 'airtable'

const base = new Airtable({apiKey: 'keygsnsZSnGuklxnI'}).base('appbV3RRRv4kdSLXb');

const useStyles = makeStyles({
    container: {
      height: "120vh",
    },
    mainContainer: {
  
      height: "100%",
      boxShadow:' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      backgroundImage:'linear-gradient(243.18deg, #CBBA26 0%, rgba(198, 20, 20, 0) 100%), url(/main2.jpg)',
      backgroundRepeat:'no-repeat',
      backgroundPosition : "center",
      backgroundSize : "cover",
    },
    heading: {
      fontSize: "4rem",
      fontWeight: "bold",
      fontFamily: "Monsent",
      lineHeight: "90px"
    },
    subheading: {
      color: '#9E00FF',
      paddingTop: "1rem",
      fontSize: "1.8rem",
      fontFamily: "Roboto"
    },
    registerText: {
      color: "#FF0000",
      paddingTop: "1.5rem",
      fontSize : "1.4rem"
    },
    locationText: {
      fontSize: "1.5rem",
    },
    btn: {
      marginTop: "1.5rem",
      width:"30rem",
      height: "3rem",
      backgroundColor: "black",
      "&:hover": {
        backgroundColor: "grey"
      }
    },
    btnText: {
      color: "white"
    },
    input : {
      marginTop: "1.5rem",
      width: "30rem",
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
  })

const Desktop = () => {
    const classes = useStyles()


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
        <Grid container classes={{root: classes.container}} justifyContent='center' alignItems='center'>
        <Grid item container classes={{root: classes.mainContainer}} direction='column' >
          <Grid item container justifyContent='center'>
            <Grid item>
              <Image width={220} height={120}  src="/logo.png" alt="logo" />
            </Grid>
          </Grid>

          <Grid item container justifyContent="flex-end">
            <Grid item md={6}>
              <Typography classes={{root: classes.locationText}}>
                Location : Bhojpur, bihar 802301
              </Typography>
              <Typography classes={{root: classes.heading}}>
                Make your event memorable
              </Typography>
              <Typography classes={{root: classes.subheading}}>
                Weeding, birthday, genral event and maymore
              </Typography>
              <Typography classes={{root: classes.registerText}}>
                Register Now for Launch Offer
              </Typography>
              <input type="name" value={name}  onChange={e => setName(e.target.value)} className={classes.input} placeholder="name"/>
              <input type="name" value={email} onChange={e => setEmail(e.target.value)} className={classes.input} placeholder="email"/>
              <input type="name" value={phone} onChange={e => setPhone(e.target.value)} className={classes.input} placeholder="phone"/>

              <Button disabled={!name || !email || !phone} variant="contained" classes={{root: classes.btn}} onClick={uploadData}>
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

export default Desktop