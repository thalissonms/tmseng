import React from 'react'
import ReactDOM from 'react-dom'

//import noImg from '../../assets/img/noImg.svg'
import closeCircle from '../../assets/img/closeCircle.svg'

export default function ShowImg({ img, desc, alt }) {
    const closeDetail = () => {
        let container = document.getElementById("render")
        container.style.display = "none"
        ReactDOM.unmountComponentAtNode(container)
    }

    return (
        <>
            <div id="img-detail">
                <div onClick={() => closeDetail()} id="close" style={{ backgroundImage: `url(${closeCircle})` }} />
                <div id="img" >
                    <img src={img} alt={alt} />
                </div>
                <div id="img-describe">
                    <p>{desc}</p>
                </div>

            </div>
        </>
    )
}