import React from 'react';

function Entry(props) {
    const {faceID, picture, first, last, present} = props;

    var isPresent;
    if (present) {
        isPresent = <td className="green-text"> YES </td>
    } else {
        isPresent = <td className="red-text"> NO </td>
    }

    var fontStyling = {
        fontSize: '20px',
        fontWeight: 'bold'
    }

    return(
        <tr key={faceID} className="align-center" style={fontStyling}>
            <td><img src={picture} alt="not here"/></td>
            <td>{first}</td>
            <td>{last}</td>
            {isPresent}
        </tr>
    );
}

export default Entry;