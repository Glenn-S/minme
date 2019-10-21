import React,{ useState } from 'react';
import { 
    Route, 
    Link, 
    NavLink, 
    BrowserRouter as Router, 
    Switch 
} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { AuthContext } from '../context/auth';

import Home from './pages/Home';
import Admin from './pages/Admin';
import Register from './pages/Register';
import NotFound from './pages/notfound';
import Login from './pages/Login';

const App = () => {
    
    const [authTokens, setAuthTokens] = useState();

    const setTokens = (data) => {
        localStorage.setItem("tokens", JSON.stringify(data));
        setAuthTokens(data);
    }

    return (
        <AuthContext.Provider value={false}>
            <Router>
                <div>
                    <div className='ui secondary pointing menu'>
                        <NavLink exact className='item' to="/">
                            Home
                        </NavLink>
                        <NavLink exact className='item' to='/admin'>
                            Admin
                        </NavLink>
                    </div>
            
                    <div className='ui segment'> 
                        {/* This displays what ever the router pulls up */}
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/login" component={Login} />
                            <Route path="/register" component={Register} />
                            <PrivateRoute path="/admin" component={Admin} />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </div>
            </Router>
        </AuthContext.Provider>
    );
}


export default App;