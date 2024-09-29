import React from 'react'
import { plansData } from '/home/janewmwaura/personalprojectportfolio/FitClub-Starter/src/data/plansData.js'
import whiteTick from '/home/janewmwaura/personalprojectportfolio/FitClub-Starter/src/assets/whiteTick.png'
import './Plans.css'


const Plans = () => {
    return (
    <div className="plans-container">
        <div className="blur plans-blur-1"></div>
        <div className="blur plans-blur-2"></div>
        <div className="programs-header" style={{gap: '3px'}}>
            <span className='stroke-text'> READY TO START </span>

            <span> YOUR JOURNEY </span>
            
            <span className='stroke-text'> WITH US </span>
        </div>
        {/* plans card */}
        <div className="plans">
            {plansData.map((plan, i)=>(
                <div className="plan" key={i}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>$ {plan.price}</span>
                    <div className="features">
                        {plan.features.map((feature, i)=> (
                        <div className="feature">
                            <img src= {whiteTick} alt="" />
                            <span key={i}>{feature}</span>
                        </div>
                        ))}
                    </div>
                    <div><span>See more benefits -</span>
                    </div>
                    <button className="btn"> Join now</button>
                </div>
            ))}

        </div>
    </div>
    )
}

export default Plans