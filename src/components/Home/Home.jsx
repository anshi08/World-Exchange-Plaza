import React from 'react'
import Banner from "../../assets/good-hero-banner.png"
import { Typography } from '@mui/material'
import "./Home.css"
import SouthIcon from '@mui/icons-material/South';
import NewWEP from './NewWEP'
import Modernization from './Modernization'
import GroundFloor from './GroundFloor'
import Wellness from './Wellness'
import sofaImage from "../../assets/sofaImage.png"
import SummerComfort from './SummerComfort'
import Amenities from './Amenities'
import FoodCourt from './FoodCourt'
import Slider from './Slider';
import Community from './Community';
import PlazaGif from './PlazaGif';
import NavigationComponent from './NavigationComponent';
import Technology from './Technology';
import NoDropOutzone from './NoDropOutzone';
import imageNewWep from "../../assets/image.svg"
import modernizationImage from "../../assets/image 2.svg"
import wellnessImage from "../../assets/image 3.svg"
import AmenitiesImage from '../../assets/image4.svg';
import comImage from "../../assets/image5.svg"
import NavImage from "../../assets/image6.svg"
import techImage from "../../assets/image7.svg"


const Home = () => {

    const handleScroll = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };


    return (
        <>
            <div style={{
                backgroundImage: `url(${Banner})`,
                backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100vh', position: 'relative',
                filter: 'brightness(90%)'
            }}>

                <div style={{
                    position: 'absolute', top: '25%',
                    left: '10%'
                }}>
                    <p className="TransformingText">
                        Transforming<br />Place
                    </p>

                    <p className='paragraph'>
                        THE NEW WORLD EXCHANGE PLAZA
                    </p>

                    {/* Down Arrow */}
                    <div className='learnmore'>
                        <div class="down-arrow"><SouthIcon /></div>
                        <button onClick={handleScroll} className='text'>Learn More</button>
                    </div>
                </div>
            </div>

            <div className='flex' >
                <div style={{ border: '2px solid black', width: '10%' }}>

                    <a href='#NewWEP'><img src={imageNewWep} /></a>
                    <a href='#Modernization'><img src={modernizationImage} /></a>
                    <a href='#Wellness'><img src={wellnessImage} /></a>
                    <a href='#Amenities'><img src={AmenitiesImage} /></a>
                    <a href='#Community'><img src={comImage} /></a>
                    <a href='#Navigation'><img src={NavImage} /></a>
                    <a href='#Technology'><img src={techImage} /></a>
                </div>
                <div>

                    <div id="NewWEP" style={{ backgroundColor: 'rgb(249, 250, 252)', padding: '5%' }}>
                        <NewWEP />
                    </div>
                    <div id="Modernization" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
                        <Modernization />
                        <GroundFloor />
                        <FoodCourt />
                    </div>
                    <div id='Wellness' style={{ backgroundColor: 'rgb(249, 250, 252)' }}>
                        <Wellness />
                    </div>
                    <img src={sofaImage} />
                    <SummerComfort />
                    <div id='Amenities' style={{ backgroundColor: 'rgb(249, 250, 252)' }}>
                        <Amenities />
                        <Slider />
                    </div>
                    <div id='Community'>
                        <Community />
                    </div>
                    <div style={{ backgroundColor: 'rgb(249, 250, 252)' }}>
                        <PlazaGif />
                        <div id='Navigation'>
                            <NavigationComponent />
                        </div>
                        <div id='Technology'>
                            <Technology />
                        </div>
                        <div style={{ padding: '2rem' }}>
                            <NoDropOutzone />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home