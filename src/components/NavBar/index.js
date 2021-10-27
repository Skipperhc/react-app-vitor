import React from 'react'

import './style.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const links = [
        { nome: 'Inicial', link: '/' },
        { nome: 'Home', link: '/home' },
        { nome: 'Login', link: '/login' },
        { nome: 'pag perfil', link: '/perfil' },
        { nome: 'pag cotitulares', link: '/cotitulares' },
        { nome: 'pag cadastro de cotitulares', link: '/cotitulares/cadastrar' },
        { nome: 'pag nao encontrado', link: '/nao-encontrado' }
    ]
    return (
        <div className="NavBar" >
            <p> Lista de Rotas: </p>
            {
                links.map((link) => {
                    return (
                        <div className="navItem">
                            <Link key={link.nome} to={link.link}>
                                abrir {link.nome}
                            </Link>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default NavBar;