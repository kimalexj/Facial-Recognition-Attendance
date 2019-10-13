import React from 'react'

function Submission() {
    return(
        <div className="row">
            <div className="col s1"></div>
            <div className="col s11">
                <h1>Submit Your Attendance</h1>
                <form method="POST">
                    <p> Submit your image here </p>
                    <input type="file" name="classImage"/>
                </form>
            </div>
        </div>
    )
}

export default Submission;