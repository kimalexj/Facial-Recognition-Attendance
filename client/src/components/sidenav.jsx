import React from 'react';
import chalkback from '../images/chalkback.jpg';
import profile from '../images/profile.jpg';
import {Link} from 'react-router-dom';


function sidebar() {
    return (
        <div>
            <ul id="nav-mobile" class="sidenav sidenav-fixed">
                <li>
                    <div class="user-view">
                        <div class="background">
                            <img src={chalkback} alt=""/>
                        </div>
                        <a href="#user"><img class="circle" src={profile} alt=""/></a>
                        <a href="#name"><span class="white-text bold name">Bill Gates</span></a>
                        <a href="#email"><span class="white-text bold email">microsoft@outlook.com</span></a>
                    </div>
                </li>
                <li><Link to="/"><i class="material-icons">home</i>Home</Link></li>
                <li><Link to="/submit" class="waves-effect"><i class="material-icons">publish</i>Submit Attendance</Link></li>                 
                <li><Link to="/today" class="waves-effect"><i class="material-icons">event</i>Today</Link></li>                  
                <li><Link to="/week" class="waves-effect"><i class="material-icons">calendar_today</i>This Week</Link></li>
            </ul>
        </div>
    )
}

export default sidebar;