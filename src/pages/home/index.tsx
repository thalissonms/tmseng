import React, { useState, useEffect } from 'react'
import Link from 'next/link'

// Components
import Carrousel from '../../components/Carrousel'
import Lore from '../../components/Lore'

// Assets IMG
import logo from '../../assets/img/logo.png'
import bars from '../../assets/img/bars.svg'
import eng1 from '../../assets/img/eng1.png'
import eng2 from '../../assets/img/eng2.png'
import arrowSelect from '../../assets/img/arrowSelect.svg'

// Images to slide
import img1 from '../../assets/img/carousel/img1.svg'
import img2 from '../../assets/img/carousel/img2.svg'
import img3 from '../../assets/img/carousel/img3.svg'

// From API
//ENG INFO
var engText = []
var engName = []
var engSocial = []
engSocial[0] = ["wpp", "insta", "in", "fb"]
engSocial[1] = ["wpp", "insta", "in", "fb"]
engName[0] = "Thalisson"
engText[0] = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr," +
    "sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat," +
    "sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd" +
    "gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet." +
    "Lorem ipsum dolor sit amet," +
    "consetetur sadipscing elitr, sed diam nonumy" +
    "eirmod tempor invidunt ut labore et dolore magna aliquyam erat," +
    "sed diam voluptua." +
    "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita"

engName[1] = "Silva"
engText[1] = "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to"

const Home: React.FC = () => {
    const [engNameShow, setEngNameShow] = useState(engName[0])
    const [engTextShow, setEngTextShow] = useState(engText[0])
    const [engSocialShow, setEngSocialShow] = useState(engSocial[0])

    const changeLore = (eng) => { // This function get the circle number with param
        let engB = 0;
        eng === 1 ? engB = 0 : engB = 1 // Verify if what circle was clicked
        let engArrow = document.getElementById("arrow-select-" + eng.toString()) // Define how arrow will show
        let engArrowB = document.getElementById("arrow-select-" + engB.toString()) // Define how arrow will hide
        let engImg = document.getElementById("eng-img-" + eng) // Define how circle will recive selected color
        let engImgB = document.getElementById("eng-img-" + engB) // Define how circle will recive no-selected color

        if (engArrow.style.opacity !== "1") { 
            // Verify if the clicked circle are selected
            //If not apply all changes

            engImg.classList.add("circle-selected") // Chance the clicked circle border color to selected color
            engImgB.classList.remove("circle-selected") 
            engImg.classList.remove("circle-no-selected") 
            engImgB.classList.add("circle-no-selected") // Chance the others circle border color to no-selected color

            // Add somes animations
            engArrow.classList.add("animate__animated", "animate__fadeIn", "animate__faster") 
            engArrowB.classList.add("animate__animated", "animate__fadeOut", "animate__faster")

            // After add animations classes change the state to apper the selected and hide the others
            engArrow.style.opacity = "1"
            engArrowB.style.opacity = "0"
            
            // Listen the animation end and remove all animations classes
            engArrowB.addEventListener("animationend", () => {
                engArrow.classList.remove("animate__animated", "animate__fadeIn", "animate__faster")
                engArrowB.classList.remove("animate__animated", "animate__fadeOut", "animate__faster")
            })

            // Change the text "about"
            setEngNameShow(engName[eng])
            setEngTextShow(engText[eng])
        }

    }
    const navAction = () => {
        let nav = document.getElementById("side-nav") //Get element Nav

        if (nav.classList[0]) {
            nav.classList.remove("hideClass")
            nav.classList.add("animate__animated", "animate__slideInLeft", "animate__faster")

            nav.addEventListener("animationend", () => {
                nav.classList.remove("animate__animated", "animate__slideInLeft", "hideClass", "animate__faster")

            })

        } else if (!nav.classList[2]) {
            nav.classList.add("animate__animated", "animate__slideOutLeft", "animate__faster")

            nav.addEventListener("animationend", () => {
                nav.classList.remove("animate__animated", "animate__slideOutLeft", "animate__faster")
                nav.classList.add("hideClass")
            })

        }


    }
    return (
        <div id="container" >
            <img alt="Menu" src={bars} className="bars" onClick={() => navAction()} />
            <nav id="side-nav" className="hideClass" >
                <ul>
                    <li>
                        <Link href="/portfolio">
                            <a>- Portfólio</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a>- Sobre</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <a>- Orçamento</a>
                        </Link>
                    </li>
                </ul>
                <footer>Desenvolvido por Thalisson M. Silva</footer>
            </nav>
            <img alt="Logo" src={logo} id="logo" />
            <div id="left-side">

                <Lore
                    name={engNameShow}
                    text={engTextShow}
                    links={engSocialShow}
                />
                <aside id="btn-orc">
                <Link href="/contact"><button id="btn-orcamento" >Orçamento</button></Link>
                </aside>

            </div>
            <aside id="right-side">
                <div id="arrow-select">
                    <img id="arrow-select-0" alt="Seta Engenheiro - 1" src={arrowSelect} />
                    <img id="arrow-select-1" alt="Seta Engenheiro - 2" src={arrowSelect} />
                </div>
                <div id="eng-circle">
                    <div onClick={() => { changeLore(0) }} id="eng-1" className="eng-click" >
                        <img src={eng1} alt="Engenheiro - 1" id="eng-img-0" className="eng circle-selected" />
                        <label>Thalisson</label>
                    </div>
                    <div onClick={() => { changeLore(1) }} id="eng-2" className="eng-click" >
                        <img src={eng2} alt="Engenheiro - 2" id="eng-img-1" className="eng circle-no-selected " />
                        <label>Silva</label>
                    </div>
                </div>
            </aside>
            <Carrousel imgs={[img1, img2, img3]} time={7000}></Carrousel>
        </div>

    )
}

export default Home