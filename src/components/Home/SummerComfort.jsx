import React from 'react'
import "./SummerComfort.css"
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import { Grid } from '@mui/material'

const SummerComfort = () => {
  return (
    <>
    <Grid container padding={4}>
    <Grid item xs={12} md={7} style={{border:'2px solid red'}}>
            <div className='overlap-container'>
              {/* <div className='overlap-element'> */}

                <img src={image1} alt="Discussion" className='element-1 '/>
                <img src={image2} alt="Workspace" className='element-2'/>
                {/* <img src={image3} alt="Contemplation"/> */}
              {/* </div> */}
            </div>
        
      {/*  <div className="item3">
      </div> */}
    
    </Grid>

    <Grid item xs={12} md={5} >

    </Grid>
    </Grid>
    </>
  )
}

export default SummerComfort