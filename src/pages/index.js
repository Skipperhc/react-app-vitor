import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';

const Routes = [
    { path: '/', page: < div > pagina inicial </div> },
    { path: '/login', page: <Login /> },
    { path: '/home', page: <Home /> },
    { path: '/perfil', page: <div><p>pag perfil</p></div> },
    { path: '/cotitulares', page: <div><p>pag cotitulares</p></div> },
    { path: '/cotitulares/cadastrar', page: <div><p>pag cadastro de cotitulares</p></div> },
    { path: '/nao-encontrado', page: <div><p>pag nao encontrado</p></div> }
]

const Router = () => {
    return (
        <BrowserRouter >
            <Switch> {
                Routes.map((rota) => {
                    return (
                        <Route key={rota.path} path={rota.path} exact >
                            {rota.page}
                        </Route>
                    )
                })
            }
                {/* Daora a dica, implementar a tela de erro */}
            </Switch>
        </BrowserRouter >
    )
}

export default Router;