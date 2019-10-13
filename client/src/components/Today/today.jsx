import React, { Component } from 'react'
import Entry from './entry'

export class submit extends Component {
    constructor() {
        super();
        var today = new Date();
        var date = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();
    
        this.state = {
            date: date,
            students: []
        };
    }

    // Fetch from DB on mount
    componentDidMount() {
        fetch('/api/attendance')
            .then(res => res.json())
            .then(students => this.setState({students: students}, () => console.log("Database uploaded")))
    };

    render() {
        return (
            <div className="dashboard container">
                <div className="container">
                    <h2 className="bold center-align">{this.state.date}</h2>
                </div>
                <table className="highlight responsive-table align-center">
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Present</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.students.map(student => {
                                //let picturePath = student.picture;
                                console.log("THIS IS A STUDENT", student);
                                return(
                                    <Entry key={student.id} first={student.firstName} last={student.lastName} 
                                    picture={`images/${student.firstName}_${student.lastName}.jpg`} present={student.present} />
                                )
                            })
                        }
                    </tbody>
            </table>
        </div>
        )
    }
}

export default submit
