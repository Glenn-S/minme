import React from 'react';
import { 
    Route, 
    Link, 
    NavLink, 
    BrowserRouter as Router, 
    Switch 
} from 'react-router-dom';

import Home from './Home'
import Contact from './Contact';
import User from './User';
import NotFound from './notfound';

class App extends React.Component {
    
    render() {
        const { params } = this.props.match;

        return (
            <Router>
            <div>
                <div className='ui secondary pointing menu'>
                    <NavLink exact className='item' to="/">
                        Home
                    </NavLink>
                    
                    <NavLink className='item' to="/contact">
                        Contact
                    </NavLink>
                    
                    <NavLink className='item' to="/user">
                        User
                    </NavLink>
                </div>
    
                <div className='ui segment'> 
                    {/* This displays what ever the router pulls up */}
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/user/" component={User} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </div>
        </Router>
        );
    }
}

export default App;