import React from 'react'

const dayEntry = (props) => {
    let {key, date, classImg, count} = props;

    return (
        <div class="card horizontal hoverable" key={key}>
            <div class="card-image">
                <img src={classImg} />
            </div>
            <div class="card-stacked">
                <div class="card-content">
                    <p>Attendance for {date}</p>
                </div>
                <div class="card-action">
                    <p>Present Count: {count}</p>
                </div>
            </div>
        </div>
    )
}

export default dayEntry;