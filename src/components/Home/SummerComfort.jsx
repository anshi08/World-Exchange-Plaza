import React from 'react'
// import "./SummerComfort.css"
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import { Grid } from '@mui/material'

const SummerComfort = () => {
  return (
    <>
    <Grid container >
    <Grid item xs={12} md={7} style={{ display: 'flex', justifyContent: 'center' }}>
    <div style={{float:'left'}}>
        <img src={image2} alt="Workspace" />
      </div>
            <div style={{ width: '80%', textAlign: 'center' }}>
                <img src={image1} alt="Discussion" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
   
      {/*  <div className="item3">
        <img src={image3} alt="Contemplation" />
      </div> */}
    
    </Grid>

    <Grid item xs={12} md={5} >

    </Grid>
    </Grid>
    </>
  )
}

export default SummerComfort