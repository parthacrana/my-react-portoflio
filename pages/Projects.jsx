import { Link } from 'react-router-dom'




// function name should always be capital...and be the same name as file name 
function Projects(){

        // html always goes inside return statements 
    return(
        <>
            <div>
                <header>
                    <h1 className='heading'>hello, welcome to the projects section</h1>
                    <div className='menu-buttons'>
                        <Link to='/home'>
                        <button>home</button>

                        </Link>
                        <button>resume</button>
                        <button>contact me</button>
                        
                        
                    </div>


                </header>
            </div>
        </>
    )
}

// always export function/file name 
export default Projects