import React from 'react'

const StringComponent = (props) => {
    return (
        <div>
            <div>{props.animal}</div>
            <div>{props.beast}</div>
        </div>
    )
}

export default StringComponent