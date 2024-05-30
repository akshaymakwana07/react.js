import React from 'react'

function Header() {
  return (
    <div className='header'>
        <div className="sub-he">
        <div className="logo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRt66PBffPsFapByMVqzvwJbsqsCf34p87Fg&s" alt="" />
        </div>
        <div className="nav">
            <ul>
                <li>
                    <a href="">HOME</a>
                </li>

                <li>
                    <a href="">ABOUT</a>
                </li>

                <li>
                    <a href="">SKILLS</a>
                </li>

                <li>
                    <a href="">SERVICES</a>
                </li>

                <li>
                    <a href="">PROJECTS</a>
                </li>

                <li>
                    <a href="">BLOG</a>
                </li>

                <li>
                    <a href="">CONTACT</a>
                </li>
            </ul>
        </div>
        </div>
      
    </div>
  )
}

export default Header
