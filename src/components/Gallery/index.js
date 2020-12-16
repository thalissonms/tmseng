import React from 'react'
import ReactDOM from 'react-dom'

import ShowImg from '../ShowImg'

import noImg from '../../assets/img/noImg.svg'
import predio from '../../images/predio-313019310391.jpg'
import house from '../../images/house-1218037.jpg'
import muckross from '../../images/muckross-1228363.jpg'


export default function Gallery() {
    let rows = [];
    for (let i = 0; i < 55; i++) {
        rows.push(
            <div className="img" >
                <img src={noImg} alt="alt" />
            </div>
        )
    }
    const showDetail = (img, desc, alt) => {
        let container = document.getElementById("render")
        container.style.display = "flex"
        ReactDOM.render(<ShowImg img={img} desc={desc} alt={alt} />, container)
    }
    return (
        <>
            <div id="render" style={{ width: "100%", height: "100%", position: "absolute", display: "none", zIndex: 1000, justifyContent: "center" }} />
            <h1 id="title-gallery">Portfólio</h1>
            <div id="gallery">

                <div onClick={() => showDetail(predio, "Lindo prédio azul", "prédio")} className="img" style={{
                    backgroundImage: `url(${predio})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                }}
                />
                <div onClick={() => showDetail(house, "Linda casa Amarela", "Casa")} className="img" style={{
                    backgroundImage: `url(${house})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                }}
                />
                <div onClick={() => showDetail(muckross, "Linda casa no meio do nada com sabor de chocolate", "Casa no meio do nada")} className="img" style={{
                    backgroundImage: `url(${muckross})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                }}
                />
                {rows}
            </div>
        </>
    )
}