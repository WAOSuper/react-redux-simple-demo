import React, { Component } from 'react' 
import { Link } from 'react-router' 

export default class App extends Component {
    render() {
        return(
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <span className="navbar-brand" href="#">
                                <Link to="/">Redux</Link>
                            </span>
                        </div>
                        <ul className="nav navbar-nav">
                            <li>
                                <Link to="/index" activeStyle={{color: '#555', backgroundColor: '#e7e7e7'}}>index</Link>
                            </li>
                            <li>
                                <Link to="/foo" activeStyle={{color: '#555', backgroundColor: '#e7e7e7'}}>foo</Link>
                            </li>
                            <li>
                                <Link to="/bar" activeStyle={{color: '#555', backgroundColor: '#e7e7e7'}}>bar</Link>
                            </li>
                            <li>
                                <Link to="/antd" activeStyle={{color: '#555', backgroundColor: '#e7e7e7'}}>antd</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="panel panel-default">
                    <div className="panel-body">
                        { this.props.children }
                    </div>
                </div>
            </div>
        )
    }
}