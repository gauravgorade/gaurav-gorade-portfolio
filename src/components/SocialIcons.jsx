import React from 'react'
import { CiMail } from 'react-icons/ci'
import { VscGithubAlt } from 'react-icons/vsc'
import { PiLinkedinLogoLight } from 'react-icons/pi'

const SocialIcons = () => {

    
    return (
        <div className="social-icons">
            <a  target='_blank' rel="noreferrer" href="mailto:gauravgorade2929@gmail.com"> <CiMail className="social-icon" /></a>
            <a  target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/gauravgorade/"> <PiLinkedinLogoLight className="social-icon" /></a>
            <a  target='_blank' rel="noreferrer" href="https://github.com/gauravgorade"><VscGithubAlt className="social-icon " /></a>
        </div>
    )
}

export default SocialIcons