import React, { Component } from 'react';
import ReactTextTransition, { presets } from "react-text-transition";
import Profile from '../about/photo.jpeg';
import '../about/about.css';

const POSTS = [
    "Web Developer",
    "Web Designer",
    "Full Stack Developer",
    "dApp Developer",
    "Digital Artist",
    "Front End Developer",
    "Devoted & Focus"
];

export default class aboutMe extends Component{
    state={
        postIndex: 0
    };

    componentDidMount() {
        setInterval(() => {
            this.setState({
              postIndex: this.state.postIndex + 1
            });
        }, 3000);
    }

    render(){
        return(
            <div>

                <div className="bg-design"></div>
                <div className="info-card">
                <img className="Round-img" alt="profile" src={Profile} />
                <p className="postHead"><ReactTextTransition 
                    text={POSTS[this.state.postIndex % POSTS.length]}
                    springConfig={presets.wobbly}
                    inline
                /></p>
                {/* <p className="postHead">Web Developer</p> */}
                <h3 className="nameHead">Siddhant Kapadne</h3>
                <p className="my-info myself">
                    I’m a Web Developer based in India. 
                    My working experience covers the number of Projects 
                    I have Developed for Practice as well as Academic purpose. 
                    Other than Web Development I create Digital art and posters.
                    Currently, I am selfly studying Blockchain Technology and 
                    also Developing Web App using Blockchain(Ethereum). 
                </p>
                <button className="btn-cv">Download CV</button>
                </div>
            </div>
        );
    }
}