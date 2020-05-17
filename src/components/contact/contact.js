import React, { Component } from 'react';
import { GrLocation, GrMailOption } from 'react-icons/gr';
import { RiTwitterLine, RiLinkedinBoxLine, RiInstagramLine, RiGithubLine } from 'react-icons/ri';
import '../contact/contact.css';

export default class contact extends Component{
    render(){
        return(
            <div>
                    <div className="card-contact">
                           <div className="contact-details">
                                <h2 className="social">Contact Me</h2>
                                <p className="info-contact"> <GrLocation size={25} /> - India, Maharashtra, Mumbai</p>
                                <p className="info-contact"> <GrMailOption size={25} /> - ksiddhant46@gmail.com</p>
                                <p className="social-icon">
                                     <a href='https://www.linkedin.com/in/siddhant-kapadne-459013159'><RiLinkedinBoxLine size={30} /></a>
                                     <a href='https://www.instagram.com/siddhant_kapadne/'><RiInstagramLine size={30} /></a>
                                     <a href='https://pickpocket.co.in/wp-content/uploads/2019/03/coming-soon.jpg'> <RiTwitterLine size={30} /> </a> 
                                      <a href='https://pickpocket.co.in/wp-content/uploads/2019/03/coming-soon.jpg'> <RiGithubLine size={30} /> </a>
                                </p>
                           </div>

                            <h1 className="or-mid">[ or ]</h1>

                            <form className="contact-form">
                                <h2 className="hello-msg">Just drop a "Hello"</h2>
                                <input className="contact-input" placeholder="Email ID" />
                                <input className="contact-input" placeholder="Name" />
                                <textarea className="contact-input" placeholder="Message" />
                                <button className="contact-submit">Submit</button>
                            </form>
                    </div>
            </div>
        );
    }
}