// importing css file  
import './App.css'
import React, { useState } from 'react'
import { DiGithubBadge } from "react-icons/di";
import { BsLinkedin } from "react-icons/bs";

import { Link, Route } from 'react-router-dom';



// must import Home from '/pages/Home' always in App.jsx file 
// javascript goes in function clause and before return clause 

function Home() {

    let user = 'partha'

    function projectInfo() {

    }



    // html always goes inside return statements
    return (
        // start div
        <div className='pg-bg-img'>
            <header>
                <h1 className='heading'>hello, welcome to my first react app, {user}</h1>
                <div className='menu-buttons'>
                    <Link to='/colorpickerproject'>
                        <button>color picker app</button>
                    </Link>
                    <Link to='/resume'>
                        <button>resume</button>
                    </Link>
                    <Link to='/contact'>
                        <button id='toggleDark'>contact me</button>
                    </Link>
                </div>
            </header>

            <div className='about-section'>
                <img className='pfp-image' src="../src/assets/pfp-img-linkedin.png" alt="picture of me" />
            </div>
            <div id='fade-in'>
                {/* fix fade in transition effect  */}
                <h3 className="mini-header"> <span className='h-wording'>h</span><span className='i-wording'>i</span>, i am partha rana, an aspiring web developer</h3>
            </div>

            <br />
            <div id='for-slide-animation' className='forAllCards'>

                <div className="wrapper">
                    {/* copy and paste starts from here */}
                <div class="card"><img src='../src/assets/pp-img.png' />
                    <div class="info">
                        <h1>prestige planners</h1>
                        <p>done in html css and js, and deployed live using vite + react app. group of 4, collaborating through github, pulling/pushing/merging changes and utilizing technologies to create user friendly experience and dashboard</p>
                        <a target='blank' href="https://github.com/parthacrana/12-challenge">
                            <button onClick={'projectInfo'}>learn more</button>
                        </a>
                        <a target='blank' href="https://prestigeplanners.netlify.app/">
                            <button>visit website</button>
                        </a>
                    </div>
                </div>
                {/* copy and paste ends here for 3 cards  */}

                {/* card 2 */}

                <div class="card"><img src='../src/assets/weather-img.png' />
                    <div class="info">
                        <h1>weather dashboard</h1>
                        <p>done in html css and js, incorporating a weather api for weathers of different cities </p>
                        <a target='blank' href='https://github.com/parthacrana/weatherdashboard'>
                            <button>learn more</button>
                        </a>
                        <a target='blank' href="https://parthacrana.github.io/weatherdashboard/">
                            <button>visit website</button>
                        </a>
                    </div>
                </div>
                {/* card 2 ends  */}





                {/* card 3 */}

                <div class="card"><img src='../src/assets/stocks-db.png' />
                    <div class="info">
                        <h1>stocks dashboard</h1>
                        <p>done in html css and js, group of 3 working via github, pulling/pushing/merging changes and deployed live through  </p>
                        <a target='blank' href='https://github.com/kalisurf3r/project-1'>
                            <button>learn more</button>
                        </a>
                        <a target='blank' href="https://kalisurf3r.github.io/project-1/index.html">
                            <button>visit website</button>
                        </a>
                    </div>
                </div>
                {/* card 3 ends  */}













            </div>
                

















                <div className="for-projects-tag">
                    <div className='below-projects-section'>
                        <p id='project-stat-one'>20+ projects completed</p>
                        <p>looking for a reputed company to utilize my skillset</p>
                    </div>
                </div>
            </div>

            {/* start of footer section  */}
            <div className='end-buttons'>
                <footer className='link-icons'>
                    <div id='icons'>
                        <Link className='icon-color' to='https://github.com/parthacrana?tab=repositories'>
                            <DiGithubBadge />
                        </Link>
                        <Link className='icon-color' to='https://www.linkedin.com/in/partharana/'>
                            <BsLinkedin />
                        </Link>
                    </div>
                </footer>
            </div>
            <contactme />
            {/* end div */}
        </div>

    )
}

function sayHello() {
    console.log('this website was created by XIXphantomzoneXIX');
}
sayHello()

export default Home

