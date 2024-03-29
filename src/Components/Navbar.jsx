import React, { useState } from 'react'
import './Styles/navbar.css'
const Navbar = ({ handleClick }) => {

  const [isMobile,setIsMobile]=useState(false);
  return (
    <div id={isMobile ? 'navbar-container-nobg' : 'navbar-container' }  >        
        <div id="mob-button" onClick={()=>setIsMobile(isMobile=>!isMobile)}>
         { 
          !isMobile ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={"24px"}><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
         ):(
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width={"24px"} id="cross-button" ><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>
         )
        }
        </div>

        <ul className={!isMobile ? "show-ul" : "not-show"}  onClick={()=>setIsMobile(false)}>
            <li onClick={handleClick}> <a href='#home-container'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#contact'>Contact me</a></li>
        </ul>
        
    </div>
  )
}

export default Navbar