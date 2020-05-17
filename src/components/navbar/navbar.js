import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import '../navbar/navbar.css';

export default class navbar extends Component {
    render(){
        return(
             
            <div className="Navbar">
                 <Link to='/'>
                    <button className="logo">SK</button>
                 </Link>
                    <Link to='/Contact'>
                         <button className="NavItems">Contact</button>
                    </Link>
                    <Link to='/Portfolio'>
                         <button className="NavItems">Portfolio</button>
                    </Link>
                    <Link to="/Resume">
                         <button className="NavItems">Resume</button>
                    </Link>
                    <Link to='/AboutMe'>
                         <button className="NavItems">About Me</button>
                    </Link>
          </div>
        );
    }
}