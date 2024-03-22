import React from 'react'
import BgImage from "../../assets/RenovationBgImage.png"
import SouthIcon from '@mui/icons-material/South';
import { Typography } from '@mui/material';

const Renovation = () => {

  const handleScroll = () => {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });
};

  return (
    <div style={{
      backgroundImage: `url(${BgImage})`,
      backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100vh', position: 'relative',
      filter: 'brightness(70%)'
  }}>

      <div style={{
            position: "absolute",
            bottom: "20px",
            left: "50px"
      }}>
          <Typography
              style={{
                  fontSize: '100px', fontFamily: "Futura PT Demi-Normal-5taag63X",
                  textAlign: 'left', lineHeight: '101px', color: 'white'
              }}>
              Follow<br />the build.
          </Typography>

          <Typography className='paragraph'>
              THE NEW WORLD EXCHANGE PLAZA
          </Typography>

          {/* Down Arrow */}
          <div className='learnmore'>
              <div class="down-arrow"><SouthIcon /></div>
              <button onClick={handleScroll} className='text'>Learn More</button>
          </div>
      </div>
  </div>
  )
}

export default Renovation