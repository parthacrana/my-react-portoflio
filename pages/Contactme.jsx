import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';


// function name should always be capital...and be the same name as file name 
function Contactme() {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

    formData.append("access_key", "e9b24c12-593b-4058-96b4-d4255d7c219a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };






    // html always goes inside return statements 
    return (
        <div className='pg-bg-img'>
            <header>
                <h1 className='heading'>hello, welcome to the contact section</h1>
                <div className='menu-buttons'>
                    <Link to='/home'>
                        <button>home</button>
                    </Link>
                    <Link to='/colorpickerproject'>
                        <button>color picker app</button>
                    </Link>
                    <Link to='/resume'>
                        <button id='toggleDark'>resume</button>
                    </Link>
                </div>
            </header>


            <div className="for-contact-card " >
                <form className='for-card-border' onSubmit={onSubmit} action="">
                    <p>Enter your name:</p>
                    <input type="text" name='name' />
                    <p>Enter your email: </p>
                    <input className='for-email-section' type="email" name='email' />
                <br />
                    <button type='submit'>get in touch</button>
                </form> <br /> <br />
              
                
                
            </div>
            <span className='contact-result'>{result}</span>
            {/* closing div */}
        </div>
    )
}

// always export function/file name 
export default Contactme