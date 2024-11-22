import { Link } from 'react-router-dom'
import React, { useState } from 'react';
// importing new css file to start fresh 
import '../src/Colorpicker.css'


// function name should always be capital...and be the same name as file name 
function Colorpicker() {

    // const/functions go outside of return statement and inside function declarations

    // must import useState from react to update selected element
    const [color, setColor] = useState('#FFFFFF')

    // event.target.value is selected user input 
    function handleColorChange(event) {
        setColor(event.target.value)
    }

    function resume(event){
        document.getElementById('seeResume')
        alert('you are trying to see my resume')
        event.preventDefault()
        

    }


    // html always goes inside return statements...dont need fragments...and only 1 parent element 
    return (
        // only 1 parent element...1 parent element can have multiple child elements
        <div className='pg-bg-img'>
            <header>
                <h1 className='heading'>hello, welcome to my first react app</h1>
                <div className='menu-buttons'>
                    <Link to='/home'>
                    <button>home</button>
                    </Link>
                    <Link to='/resume'>
                    <button>resume</button>
                    </Link>
                    <Link to='/contact'>
                    <button>contact me</button>
                    </Link>
                    
                </div>
            </header>
            <div className="color-picker-container" >
                <h2>
                    color picker app
                </h2>
                <div className='color-display' style={{ backgroundColor: color }}>
                    <p>selected color: {color}</p>
                </div>
                <label>select a color</label>
                {/* onChange is crucial to change input label to selected user input */}
                <input type="color" value={color} on onChange={handleColorChange} />
            </div>
        </div>
    )
}

// always export function/file name 
export default Colorpicker