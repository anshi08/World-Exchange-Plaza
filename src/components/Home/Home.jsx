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
                filter:'brightness(70%)'
            }}>

                <div style={{
                    position: 'absolute', top: '25%',
                    left: '10%'
                }}>
                    <Typography
                        style={{
                            fontSize: '100px', fontFamily: "Futura PT Demi-Normal-5taag63X",
                            textAlign: 'left', lineHeight: '101px', color: 'white'
                        }}>
                        Transforming<br />Place
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

            {/* <div className='flex'> */}
            {/* <div style={{border:'5px solid black'}}>
                    
                    <h1>Hello</h1>
                </div> */}
            {/* <div> */}

            <div style={{ backgroundColor: 'rgb(249, 250, 252)', padding: '5%' }}>
                <NewWEP />
            </div>
            <div style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
                <Modernization />
                <GroundFloor />
                <FoodCourt />
            </div>
            <div style={{ backgroundColor: 'rgb(249, 250, 252)' }}>
                <Wellness />
            </div>
            <img src={sofaImage} />
            <SummerComfort />
            <Amenities />
            <div style={{ backgroundColor: 'rgb(249, 250, 252)' }}>
                <Slider />
            </div>
            <Community />
            <div style={{ backgroundColor: 'rgb(249, 250, 252)' }}>
                <PlazaGif />

                <NavigationComponent />
                <Technology />
                <div style={{ padding: '2rem' }}>
                    <NoDropOutzone />
                </div>
            </div>
            {/* </div>
            </div> */}
        </>
    )
}

export default Home