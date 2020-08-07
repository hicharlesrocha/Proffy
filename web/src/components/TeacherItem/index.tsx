import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
        <header>
            <img src="https://avatars3.githubusercontent.com/u/13335847?s=460&u=76d5c2b43ea8d1e75e7d8a3c0426d457aa8fce8e&v=4" alt="Hicharles Rocha"/>
            <div>
                <strong>Hicharles Rocha</strong>
                <span>Química</span>
            </div>
        </header>

        <p>
            Entusiasta das melhores tecnologias de química avançada.
            <br /><br />
            Apaixonado por explodir coisas em laboratórios e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões
        </p>
        <footer>
            <p>Preço/hora
            <strong>R$ 80,00</strong>
            </p>
            <button type="button">
            <img src={whatsappIcon} alt="Whatsapp"/>
            Entrar em contato
        </button>
        </footer>
    </article>
    );
}

export default TeacherItem