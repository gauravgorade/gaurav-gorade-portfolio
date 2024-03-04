import { CiMail } from 'react-icons/ci'
import { VscGithubAlt } from 'react-icons/vsc'
import { PiLinkedinLogoLight } from 'react-icons/pi'



function Footer() {

    const currentYear = new Date().getFullYear(); // Get the current year
    const domainName = window.location.hostname; // Get the domain name
    const domainAddress = window.location.href; // Get the full domain address

    return (
        <>
            {/* <footer>
                <div className="f-col">
                    <div className="nav-logo">
                        <img src={logo} alt="Funkar-logo" />
                    </div>
                    <a href="#" className="footer-link"><VscGithubAlt className="footer-icon " /></a>
                    <a href="#" className="footer-link"><CiMail className="footer-icon" /></a>
                    <a href="#" className="footer-link"><PiLinkedinLogoLight className="footer-icon" /></a>
                </div>
                <div className="f-col">
                    <a href=""><img className="logo" src={logo} alt="Gaurav Logo" /></a>
                </div>
                <div className="f-col">
                    &copy;&nbsp;{currentYear}&nbsp; <a href={domainAddress} className="footer-link">{domainName}</a>.
                </div>
            </footer> */}
        </>
    );
}
export default Footer;