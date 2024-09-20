import React from 'react';
import './Programs.css';
import { programsData } from '/home/janewmwaura/personalprojectportfolio/FitClub-Starter/src/data/programsData.js';
import RightArrow from '/home/janewmwaura/personalprojectportfolio/FitClub-Starter/src/assets/rightArrow.png'
const Programs = () => {
    return (
        <div className="Programs" id= "programs">
            {/* header */}
            <div className="programs-header">
                <span className='stroke-text'>Explore our</span>
                <span>Programs</span>
                <span className='stroke-text'>to shape you</span>
            </div>

            <div className="programs-categories">
                {programsData.map((program)=> (
                    <div className="category">
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div className="join-now"><span>Join Now</span><img src={RightArrow}/></div>

                        
                    </div>
                )
            )}

            </div>


        </div>
    )
}

export default Programs;