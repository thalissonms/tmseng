import React from "react"

import whatsapp from '../../assets/img/whatsapp.svg'
import instagram from '../../assets/img/instagram.svg'
import linkedin from '../../assets/img/linkedin.svg'
import facebook from '../../assets/img/facebook.svg'

export default function Lore ({name, text, links}) {
    return (
        <article id="index-txt">
        <header>
            <h1>{name}</h1>
        </header>
        <p>{text}</p>
        <footer id="social-midia">
            <a href={links[0]}><img id="social-midia-wpp" className="social" alt="Whatsapp" src={whatsapp} /></a>
            <a href={links[1]}><img id="social-midia-insta" className="social" alt="Instagram" src={instagram} /></a>
            <a href={links[2]}><img id="social-midia-in" className="social" alt="Linkedin" src={linkedin} /></a>
            <a href={links[3]}><img id="social-midia-face" className="social" alt="Facebook" src={facebook} /></a>
        </footer>
        </article>
    )
}