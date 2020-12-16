import React from 'react'
import Link from 'next/link'

import About from '../About'
import Form from '../Form'
import Gallery from '../Gallery'

import logo from '../../assets/img/logo.png'
import whatsapp from '../../assets/img/whatsapp.svg'
import instagram from '../../assets/img/instagram.svg'
import linkedin from '../../assets/img/linkedin.svg'
import facebook from '../../assets/img/facebook.svg'
import arrowBack from '../../assets/img/arrowBack.svg'

export default function NavPages({ to }) {
    var Page;
    switch (to.toLowerCase()) {
        case 'about':
            Page = About
            break;
        case 'form':
            Page = Form
            break
        case 'gallery':
            Page = Gallery
            break
    }

    return (
        <div id="container-nav">
            <img src={logo} alt="TMS Eng" id="logo-nav" />
            <Link href="/">
                <img src={arrowBack} alt="Voltar" id="arrowBack" />
            </Link>
            <div id="main" id="component-navpage">
                <Page />
            </div>

            <footer id="social-midia-nav">
                <ul>
                    <li><a href="https://www.google.com"><img src={whatsapp} alt="WhatsApp" /></a></li>
                    <li><a href="https://www.google.com"><img src={instagram} alt="Instagram" /></a></li>
                    <li><a href="https://www.google.com"><img src={linkedin} alt="Linkedin" /></a></li>
                    <li><a href="https://www.google.com"><img src={facebook} alt="Facebook" /></a></li>
                </ul>
            </footer>
        </div>
    )

}