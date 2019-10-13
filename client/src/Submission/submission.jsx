import React, { Component } from 'react'
import DayEntry from './dayEntry';

export class submission extends Component {
    state = {
        entries: []
    }

    componentDidMount() {
        fetch('/api/entries')
            .then(res => res.json())
            .then(entries => this.setState({entries: entries}, () => console.log('entries receieved')))
    }

    render() {
        return (
            <div>
                {
                    this.state.entries.map(entry => {
                        <DayEntry key={entry.entryID} date={entry.date} classImg={entry.classImg} 
                         count={entry.studentCount}/>
                    })
                }
            </div>
        )
    }
}

export default submission
