import React from 'react'
import gif from "../../assets/videoframe_5458.png"
import { Grid, Typography } from '@mui/material'
import image from "../../assets/birdseye-view.png"
import "./PlazaGif.css"

const PlazaGif = () => {
    return (
        <>

            <Grid container>
                <Grid item xs={0} md={6}>



                </Grid>
                <Grid item xs={12} md={6} padding={3}>

                    <img src={gif} />
                    <Typography className='footertext'>PLAZA</Typography>
                </Grid>
            </Grid>

            <div>
            <Grid container justifyContent="center" alignItems="center" spacing={2}>
            <Grid item xs={12} md={6}>
                <img src={image} style={{ padding: '1rem',margin:'0 auto' }} alt="Your Image" />
            </Grid>
            <Grid item xs={12} md={6}>
                <div>
                        <div className='horizontalYellowLine'></div>
                    <Typography className='plazaheading'>
                        Head outside and you’ll experience The Plaza:<br/>
                        a transformed landscaped outdoor environment<br/>
                        where cultural events, concerts, group fitness, and<br/> connection to fresh air and nature can all take place.
                    </Typography>
                    <Typography className='my-3 plazaBoldHeading'>
                        Culture. Community. Collaboration.<br/>
                        That’s our future.<br/>
                        Welcome to the WEP Community
                    </Typography>
                </div>
            </Grid>
        </Grid>
</div>

        </>
    )
}

export default PlazaGif