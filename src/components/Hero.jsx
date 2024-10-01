import React from 'react';
import Header from './Header';
import './Hero.css';
import hero_image from '/home/janewmwaura/personalprojectportfolio/FitClub-Starter/src/assets/hero_image.png';
import hero_image_back from '/home/janewmwaura/personalprojectportfolio/FitClub-Starter/src/assets/hero_image_back.png';
import Heart from '/home/janewmwaura/personalprojectportfolio/FitClub-Starter/src/assets/heart.png';
import Calories from '/home/janewmwaura/personalprojectportfolio/FitClub-Starter/src/assets/calories.png';
import { motion } from 'framer-motion';
import NumberCounter from 'number-counter';

const Hero = () => {
    const transition = {type: 'spring', duration: 3}
    return (
        <div className="hero">
            <div className='blur hero-blur'></div>

            <div className="left-h">


                <Header/>
                <div className="the-best-ad">
                    <motion.div
                    initial={{left: '238px'}}
                    whileInView={{left:'8px'}}
                    transition={{...transition, type: 'tween'}}
                    ></motion.div>
                    
                    <span>the best fitness club in the town</span>
                </div>
                {/*hero headings*/}
                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>Shape</span> 
                        <span> Your </span>

                    </div>
                    <div>
                        <span>Ideal body</span>
                    </div>
                    <div>
                        <span>
                        In here we will help you to shape and build your ideal body and 
                        live up your life to fullest
                        </span>
                    </div>
                </div>
                

                <div className="figures">
                    <div>
                        <span>
                            <NumberCounter end={140} start={100} delay='4' prefix='+'/>
                        </span>
                        <span>EXPERT COACHES</span>
                        </div>
                    <div>
                        <span>
                        <NumberCounter end={978} start={938} delay='4' prefix='+'/>
                        </span>
                        <span>MEMBERS JOINED</span>
                        </div>
                    <div>
                        <span>
                        <NumberCounter end={50} start={10} delay='4' prefix='+'/>
                        </span>
                        <span>FITNESS PROGRAMS</span>
                        </div>
                </div>
                {/*hero buttons*/}
                <div className="hero-buttons">
                    <buttons className="btn">Get Started</buttons>
                    <buttons className="btn">Learn More</buttons>
                </div>
                </div>
            <div className="right-h">
                <button className="btn">Join Now</button>
                <motion.div
                   initial={{right: "-1rem"}}
                   whileInView={{ right: "4rem"}}
                   transition={transition}
                 className="heart-rate">
                    <img src={Heart} alt=""/>
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>

            {/*hero images*/} 
            <img src={hero_image} alt="" className="hero-image" />
            <motion.img 
            initial={{right: '11rem'}}
            whileInView={{right: '20rem'}}
            transition={{transition}}
            src={hero_image_back} alt="" className="hero-image_back" />
            {/*calories*/} 
            <motion.div
              initial={{ right:"3rem"}}
              whileInView={{ right:"28rem"}}
              transition={transition}
            className="calories"
            >
                <img src={Calories} alt=""/>
                <div>
                <span>Calories Burned</span>
                <span>220 kcal</span>
                </div>
                </motion.div>
            </div>

                </div>  
    
    );
};

export default Hero;