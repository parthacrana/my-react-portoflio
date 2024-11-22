import { Link } from 'react-router-dom'
import React, { useState } from 'react';
// importing new css file to start fresh 



// function name should always be capital...and be the same name as file name 
function Amazon() {

    // const/functions go inside function declarations and outside of return statements

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
        <div className='for-amazon-mock-website'>
            <header>
                <h1 className='heading heading-1-2'>hello, welcome to my amazon mock website</h1>
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


             
            
            <div className="for-whole-page">
                <div className="for-website-header"> 
                    
                </div>

                <div className="for-whole-section">
                    <div className="for-user-cart">
                        {/* cart goes here */}
                        <div className="for-cart-header">
                            <p><center>this page is a work in progress</center></p>
                        </div>
                         
                    </div>


                    <div className="for-cartsIn-item">
                        <div>
                            <div>
                                {/* render items in cart here  */}
                            </div>
                        </div>
                    </div>

                    <div className="for-deals-heading">
                        <div>
                            <div>
                                <h4 className='deals-for-you'>deals for you</h4>
                            </div>
                        </div>
                    </div>

                    {/* item 1 */}
                    <div className="for-item-card" > 
                         {/*dont try to resize image by attatching class to div tag -- attatch class to img tag  */}
                        <div>
                            <img className="for-item-image" src="../src/assets/jordan-13.jpg" alt="" />
                            
                        </div>
                        
                        <div className="for-item-title">
                            <h5>jordan 13</h5>
                            <button className='prev-next-btns' id='prev-btn'>&#8592;</button>
                            <button className='prev-next-btns'>&#8594; </button>
                        </div>
                        <div className="for-item-description">
                            <p>mens basketball shoe</p>
                        </div>
                        <div className="for-item-price">
                            <p><small>$150.99</small></p>
                            <button className='for-addToCart-btn'>add to cart</button>
                        </div>
                    </div>


                    
                    









                </div>












            </div>
            








            {/* end div tag */}
        </div>
    )
}

// always export function/file name 
export default Amazon