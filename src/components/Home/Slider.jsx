import React, { useState } from 'react'
import image1 from "../../assets/Slider1.png"
import image2 from "../../assets/Slider2.png"
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import "./Slider.css"

const Slider = () => {
    // const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // const prevImage = () => {
    //     if (currentImageIndex > 0) {
    //         setCurrentImageIndex(currentImageIndex - 1);
    //     }
    // };

    // const nextImage = () => {
    //     if (currentImageIndex < images.length - 1) {
    //         setCurrentImageIndex(currentImageIndex + 1);
    //     }
    // };

    // const images = [image1, image2];
    return (
        <>
        
            <div class="row">
                <div class="column">
                <div className="image-container">
                        <img src={image2} alt="food court2" className='responsive' />
                        RESTAURANT INTERIOR
                        <ArrowForwardIosOutlinedIcon className="arrow-icon" />
                    </div> 
                </div>  
                <div class="column">
                <div className="image-container">
                        <img src={image1} alt="food court2" className='responsive' />
                        FOOD COURT
                        <ArrowBackIosNewOutlinedIcon className="left"  />
                    </div>  
                
                </div>

            </div>
            
        </>
    )
}

export default Slider