import React from 'react'
import ReactDOM from 'react-dom'

export default function Form(action) {
    return (
        <>
            <h1 id="title-form">Orçamento</h1>
            <form id="form">
                <label>Nome:</label>
                <input placeholder="Ex: Maria Silva" />
                <label>E-mail:</label>
                <input type="email" placeholder="exemplo@email.com" />
                <label>Mensagem:</label>
                <textarea></textarea>
                <span>*Assim que possível entraremos em contato</span>
                <button type="submit">Enviar</button>
            </form>
        </>
    )
}