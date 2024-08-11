import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <div>
            <div className="header">
                    <div className="box1 b pad">
                        <img id="logo" 
                        src="https://i.ytimg.com/vi/MPlru3C_YAQ/maxresdefault.jpg"
                         alt="Alternative" />
                    </div> 
                    
                <div className="box2 b">
                <Link to="/" className="box2 b">
                <i className="fa-solid fa-house"></i>
                    <p>HOME</p>
                </Link>
                </div>

                <div className="box3 b">
                <Link to="/about" className="box3 b">
                <i className="fa-brands fa-searchengin search"></i>
                    <p>ABOUT US</p>
                    </Link>
                </div>
                    <div className="box4 pad b">
                        <Link to="/products"  className="box4 b">
                    <i class="fa-brands fa-windows"></i>
                        <p>PRODUCTS</p>
                    </Link>
                    </div>
                    <div className="box8 pad b">
                        <Link to="/components" className="box8 b">
                    <i class="fa-sharp fa-solid fa-gear"></i>
                        <p>SERVICES</p>
                        </Link>
                    </div>
                    <div className="box9 pad b">
                        <Link to="/clients" className='box9 b'>
                    <i class="fa-solid fa-user"></i>
                        <p>CLIENTS</p>
                        </Link>
                    </div>
                <div className='endnav'>
                    <div className="box6 b">
                        <Link to="/contacts" className="box6 b">
                    <i class="fa-solid fa-phone"></i>
                        <p>CONTACTS</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar