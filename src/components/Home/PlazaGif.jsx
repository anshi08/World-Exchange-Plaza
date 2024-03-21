import React from 'react'
import gif from "../../assets/videoframe_5458.png"
import { Grid } from '@mui/material'

const PlazaGif = () => {
    return (
        <>
           
            <Grid container>
                <Grid item xs={0} md={6}>
                     
                    
            
                </Grid>
                <Grid item xs={12} md={6} padding={3}>
                     
                     <img src={gif} />
             
                 </Grid>
            </Grid>
        </>
    )
}

export default PlazaGif