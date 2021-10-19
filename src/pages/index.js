import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Routes = [
    { path: '/', page: <div>pagina inicial</div> },
    { path: '/login', page: <div>pagina Login</div> },
    { path: '/home', page: <div>pagina Home</div> }
]

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                {Routes.map((rota) => {
                    return (
                        <Route key={rota.path} path={rota.path} exact>
                            {rota.page}
                        </Route>
                    )
                })}
            </Switch>
        </BrowserRouter>
    )
}

export default Router;