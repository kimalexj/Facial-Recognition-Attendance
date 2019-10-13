import React from 'react';

function Entry(props) {
    const {faceID, picture, first, last, present} = props;

    var isPresent;
    if (present) {
        isPresent = <td className="green"> YES </td>
    } else {
        isPresent = <td className="red"> NO </td>
    }

    return(
        <tr key={faceID} className="align-center">
            <td><img src={picture} alt="not here"/></td>
            <td>{first}</td>
            <td>{last}</td>
            {isPresent}
        </tr>
    );
}

export default Entry;