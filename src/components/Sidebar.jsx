import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import SocialIcons from './SocialIcons'
import logo_avatar from '../assets/images/coding_avatar2.png'

const Sidebar = () => {
    const location = useLocation();

    let buttonPath = "/skills";

    // Change path if the user is on the Skills page
    if (location.pathname === "/skills") {
        buttonPath = "/resume";
    }

    return (
        <section className='sidebar'>
            <div className='avatar-logo'>
                <Link to="/"><img src={logo_avatar} alt="Coding Avatar logo" /></Link>
            </div>
            <h2 className='title main-title'>Gaurav <br /> Gorade</h2>
            <p className='sub-title'><a className='link' rel="noreferrer" target='_blank' href="mailto:gauravgorade2929@gmail.com">gauravgorade2929@gmail.com</a></p>
            <hr />
            <p className='text'>With over 2 years in web development, I specialize in crafting engaging user experiences, primarily focusing on front-end development while maintaining full-stack proficiency. I enjoy collaborating with cross-functional teams, including technology and design.</p>
            <SocialIcons />
            <Link to={buttonPath}><button className='button'>Learn More</button></Link>
        </section>
    )
}

export default Sidebar
