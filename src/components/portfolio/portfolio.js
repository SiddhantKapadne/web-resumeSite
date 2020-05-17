import React, { Component } from 'react';
import ethLottery from './lottery.png';
import youtube from './youtube.png';
import covid from './covid-19.png';
import crowd from './CrowdCoin.png';
import '../portfolio/portfolio.css';

export default class contact extends Component{
    render(){
        return(
            <div className="port-card">
                <div className="scrollers">
                    <h2 className="header">My Projects</h2>
                    <div className="proj">
                        <div className="title">
                            <h4>Ethereum Lottery</h4>
                        </div>
                        <img className="ss" alt="project1" src={ethLottery} />
                    </div>

                    <div className="proj">
                        <div className="title">
                            <h4>Youtube Clone</h4>
                        </div>
                        <img className="ss" alt="project2" src={youtube} />
                    </div>
                    <div className="proj">
                        <div className="title">
                            <h4>Covid-19 Tracker</h4>
                        </div>
                        <img className="ss" alt="project2" src={covid} />
                    </div>
                    <div className="proj">
                        <div className="title">
                            <h4>Ethereum CrowdCoin</h4>
                        </div>
                        <img className="ss" alt="project2" src={crowd} />
                    </div>
                </div>
            </div>
        );
    }
}