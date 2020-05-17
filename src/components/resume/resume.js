import React, { Component } from 'react';
import CountUp from 'react-countup';
import '../resume/resume.css';

const marks = ["76", "79", "6"];
const markD =["60", "65", "29"];

export default class contact extends Component{
    render(){
        return(
            <div>
                <div className="card-resume">
                <h2 className="resume-header">EDUCATION</h2>
                    <table className="edu-info">
                        <tr>
                            <th className="Xstd">X(Secondary)</th>
                            <th className="Dip">IT Diploma</th>
                            <th className="Deg">IT Degree</th>
                        </tr>
                        <tr>
                            <td className="Xstd light">SSC Board 2014</td>
                            <td className="Dip light">MSBTE 2017</td>
                            <td className="Deg light">Mumbai University</td>
                        </tr>
                        <tr>
                            <td className="Xstd thick">
                                <CountUp start={0} end={marks[0]} duration={1.35} />
                                .
                                <CountUp start={0} end={markD[0]} delay={0.3} duration={2} />
                                %
                            </td>
                            <td className="Dip thick">
                                <CountUp start={0} end={marks[1]} duration={1.35} />
                                .
                                <CountUp start={0} end={markD[1]} delay={0.3} duration={2} />
                                %
                            </td>
                            <td className="Deg thick">
                                <CountUp start={0} end={marks[2]} duration={1.35} />
                                .
                                <CountUp start={0} end={markD[2]} delay={0.3} duration={2} />    
                                /10
                            </td>
                        </tr>
                    </table>
                    <hr />
                    <h2 className="Skill-head">SKILLS</h2>
                    <table className="skills-info">
                        <tr>
                            <th className="skill-Header thick">HTML/CSS</th>
                            <th className="skill-Header thick">Javascript</th>
                            <th className="skill-Header thick">React.js</th>
                            <th className="skill-Header thick">PHP</th>
                        </tr>
                        <tr>
                            <td className="lvl light">(Advanced)</td>
                            <td className="lvl light">(Intermediate)</td>
                            <td className="lvl light">(Intermediate)</td>
                            <td className="lvl light">(Intermediate)</td>
                        </tr>
                        <tr>
                            <th className="skill-Header thick space">WordPress</th>
                            <th className="skill-Header thick space">MySQL</th>
                            <th className="skill-Header thick space">Photoshop</th>
                            <th className="skill-Header thick space">Ethereum</th>
                        </tr>
                        <tr>
                            <td className="lvl light">(Intermediate)</td>
                            <td className="lvl light">(Intermediate)</td>
                            <td className="lvl light">(Intermediate)</td>
                            <td className="lvl light">(Intermediate)</td>
                        </tr>
                        <tr>
                            <th className="skill-Header thick space">Adobe XD</th>
                            <th className="skill-Header thick space">Figma</th>
                        </tr>
                        <tr>
                            <td className="lvl light">(Intermediate)</td>
                            <td className="lvl light">(Beginner)</td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}