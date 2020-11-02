import React from 'react'
import {Link} from 'react-router-dom'
import './header.css'

function Header(){
    return(
        <header id='main-header'>
            <div className='header-content'>
                <Link to='/'>
                    DevBlog
                </Link>
                <div>
                    <Link to='/aboutus'>
                        About Us
                    </Link>
                    <Link to='/login'>
                        Log In
                    </Link>
                </div>
                
                
            </div>
        </header>
    )
}

export default Header