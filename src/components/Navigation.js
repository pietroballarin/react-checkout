import React from 'react'

export default function Navigation(props) {
    return (
        <div>
            <button onClick={props.prev}>Previous</button>
            <button onClick={props.next}>Next</button>
        </div>
    )
}
