import React from 'react'
import Hog from './Hog'

function HogContainer(props) {

    let arrayOfComponents = props.hogs.map((singleHogObj) => {
        return <Hog key={singleHogObj.id} hog={singleHogObj}/>
    })

    return(
        <div className="ui link cards"> { arrayOfComponents } </div>
    )
}

export default HogContainer