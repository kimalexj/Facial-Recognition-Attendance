import React, { Component } from 'react'
import DayEntry from './dayEntry';

export class submission extends Component {
    state = {
        entries: []
    }

    componentDidMount() {
        fetch('/api/entries')
            .then(res => res.json())
            .then(entries => this.setState({entries: entries}, () => console.log(this.state.entries)))
    }

    render() {
        return (
            <div className="row">
                <div className="col s1"></div>
                <div className="col s11">
                    <h1> This Week's History </h1>
                    {
                        this.state.entries.map(entry => {
                            return(
                                <DayEntry key={entry.entryID} date={entry.date} classImg={entry.classImg} 
                                count={entry.studentCount}/>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default submission
