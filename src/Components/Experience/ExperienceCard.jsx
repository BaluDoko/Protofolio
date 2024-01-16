import React from 'react'
import Doko from "../../img/doko.jpg";
import Nlc from "../../img/nlc.png";

const ExperienceCard = ({ experience }) => {
    console.log(experience.img)
    return (
        <div className='Card'>
            <div className='top'>
                <img className='image' style={{background:"white"}} src={experience.img === "Doko" ? Doko : Nlc } />
                <div className='body'>
                    <h6>{experience.role}</h6>
                    <div className="company"><span >{experience.company}</span>
                        <span className='date' style={{}}>{experience.date}</span></div>
                </div>
            </div>
            <div className='description'>
                {experience?.id === 0 ?
                    <ul>
                        <li className='des'>Developed the core concept of our project — <b>Cargo Details Page</b>. This critical component, where individuals collaborated, serves as the focal point for <b>intricate Package Dimension Calculations</b>.</li>
                        <li className='des'><b>Implemented Tanstack Query</b> for data fetching, leading to <b>80% reduction in loader</b> time.</li>
                        <li className='des'><b>Salesync</b> : Internal portal for sales and business teams, developed entire frontend (React.js). <b>Integrated real-time communication</b> through live chat using <b>Socket.io</b>.</li>
                        <li className='des'>Created Rest API for role, internal management (Node, Express, MongoDB, Mongoose).</li>
                        <li className='des'><b>Salesync</b> : Integrated Socket.io for real-time communication.</li>
                        <li className='des'>Created a custom middleware for all API to authenticate the user and<b> Created mail templates using EJS</b>.</li>
                    </ul> :
                    <ul>
                        <li className='des'>"Voluntarily involved in creation of some webpages wherein employees would be able to raise complaints and automatic house allocation for employees in NLC India (HTML,CSS, Bootstrap).</li>
                  
                    </ul>
                }
            </div>
            {experience.doc &&
                <a href={experience.doc} target="new">
                    <div className='Document' src={experience.doc} />
                </a>
            }
        </div>
    )
}

export default ExperienceCard