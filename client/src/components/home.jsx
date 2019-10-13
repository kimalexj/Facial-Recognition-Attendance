import React from 'react';
import mainThumbnail from '../images/AttendanceThumbnail.jpg'

var additions = {
    paddingBottom: '50px'
}

function Home() {
    return (
        <div>
            <div className="center-align" style={additions}>
                <img src={mainThumbnail} alt="no thumbnail"/>
            </div>
            <div className="center-align">
                <a href="/submit" class="waves-effect waves-light btn-large light pink hoverable">
                    <i class="material-icons left">assignment_ind</i>Start</a>
            </div>
        </div>
    );
}

export default Home;