import { useState } from 'react';
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';



function Header() {

    const [openMenu, setopenMenu] = useState(false);

 

    return (
        <header className={(openMenu) ? "header active" : "header"}>
            <div className="header-wraper">
            <Link to="/"><p className='logo'> GAURAV GORADE  </p></Link>
            <nav className="nav">
                <ul className="nav-list">
                    <li><Link to="/" className="nav-link">Home</Link></li>
                    <li><Link to="/skills" className="nav-link">Skills</Link></li>
                    <li> <Link to="/projects" className="nav-link">Projects</Link></li>
                    <li> <Link to="/resume" className="nav-link">Resume</Link></li>
                    <li><Link to="/contact" className="nav-link">Contact</Link></li>
                </ul>
            </nav>
            <div className="mobile-nav-btn">
                <IoMenuOutline name="menu-outline" onClick={() => setopenMenu(true)} className="mobile-nav-icon" />
                <IoCloseOutline name="close-outline" onClick={() => setopenMenu(false)} className="mobile-nav-icon" />
            </div>

            </div>
            
        </header>

    );

}

export default Header;