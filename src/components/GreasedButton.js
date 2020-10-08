import React from 'react'

function GreasedButton() {

    const showGreasedHogs = (props) => {
        console.log('FROM button', props.hogs)
    }

    return(
        <button onClick={showGreasedHogs}>Greased Hogs</button>
    )
}

export default GreasedButton