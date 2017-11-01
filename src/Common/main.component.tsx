import * as React from 'react';

import { NavLink } from 'react-router-dom';

class Main extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a href="#" className="navbar-brand">Scotch Cars</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li>
                                    <NavLink exact={true} to="/" activeClassName="is-active" >Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/cars" activeClassName="is-active" >Cars</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about" activeClassName="is-active" >About</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    {/* Mount child routes */}
                    { this.props.children }
                </div>  
            </div>
        );
    }
}

export default Main;