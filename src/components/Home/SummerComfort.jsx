import React from 'react'
import "./SummerComfort.css"
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import { Grid } from '@mui/material'

const SummerComfort = () => {
  return (
    <>
    <Grid container style={{border:'2px solid red'}}>
        <Grid item xs={12} md={8}>
       <div className="grid-container">
      <div className="item1">
        <img src={image1} alt="Discussion" />
      </div>
      <div className="item2">
        <img src={image2} alt="Workspace" />
      </div>
      <div className="item3">
        <img src={image3} alt="Contemplation" />
      </div>
    </div>
    </Grid>

    <Grid item xs={12} md={4} style={{border:'2px solid red'}}>

    </Grid>
    </Grid>
    </>
  )
}

export default SummerComfort