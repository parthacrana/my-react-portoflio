import { Link } from 'react-router-dom'
import '../src/Resume.css'

// function name should always be capital...and be the same name as file name 
function Resume(){

        // html always goes inside return statements 
    return(
        <>
        <div className='pg-bg-img'>
            <header>
                <h1 className='heading'>hello, welcome to the resume section</h1>
                
                <div className="menu-buttons">
                    <Link to='/home'>
                        <button> home</button>
                    </Link>
                    <Link to='/colorpickerproject'>
                        <button> color picker app</button>
                    </Link>
                    <Link to='/contact'>
                        <button> contact me</button>
                    </Link>
                </div>

            </header>

            {/* start of resume section */}
            <div className="for-resume-section">
            <div className="for-resume-bg">
            <div>
                <div className="for-resume-contact-section">
                    <p id='for-contact-heading'>contact me at: </p>
                    <p>parthacrana@gmail.com</p>
                    <p id='for-phone-number'>669-251-5168</p>
                    <p id='for-location'>california, usa. open to relocate </p>
                </div>
            <h3 className='resumeHeaders'>about me</h3>

                <p className='for-resume-intro'>
                Hello, I am Partha Rana and I've been a Business Analyst for +1 year. But recently I was part of a
                coding bootcamp offered by UC Berkeley, in which I learned the ins and outs of what it is to be a Full
                Stack Web Developer. I firmly believe that I have found my passion in coding and I eventually hope to be
                a Web Developer at a company that believes the aforementioned.
                    <br /><br /> console.log('I believe!');
                </p>
            </div>

            <div>
                <h3 className='resumeHeaders'>experience</h3>
                UC Berkeley Training | Full Stack Web Developer | June 2024 – Sept 2024, Remote, CA
                <ul>
                <li>
                    -Exposure to analysis methods while practicing Agile methodologies.
                </li>
                <li>
                    -Utilized SQL and Tableau on practice data sets.
                </li>
            </ul>
                
            </div>

            <div>
                <h3 className='resumeHeaders'>projects</h3>
                
            <ul>
                <li>
                    Personal Portfolio: 
                    
React, HTML, CSS, JS, DOM elements, eventListeners, configured for user experience.
                    
                </li>
                <br />
                <li>
                    Task Manager:
                    
Followed guidelines of MVC, via Postgres SQL, JS, team of 4, included stretch goals along with wins and losses to analyze progress of the project, executed stand up meetings following daily SCRUM meeting procedures.                    
                </li>
                <br />
                <li>
                    Group Event Manager:
                    
Contributed to front-end/back-end development, created database with seeds file as mock data. Collaborated with colleagues, creating and accepting pull requests via GitHub, utilizing branch commits and version control via terminal commands.                     
                </li>
                <br />
                <li>
                    Readme.md Generator:
                    
Built with JS, NPM package inquirer, generated Readme.md file after user answered questions.                    
                </li>
                <br />
                <li>
                    Web scraping & Data analysis via Python | Pandas • Requests • BeautifulSoup :
                    
HTML, CSS, JS, DOM elements, eventListeners, configured for user experience, with integration of Google API calendar along with easy-to-read code.
                    
                </li>
            </ul>
            
            </div>
            </div>
            </div>
            
            
            
            {/* closing div tag */}
        </div>
            
        </>
    )
}

// always export function/file name 
export default Resume