import React from 'react'

class Buttons extends React.Component {


    handleShowGreasedHogs = (event) => this.props.showOnlyGreasedHogs()
    handleShowAllHogs = (event) => this.props.showAllHogs() 

    render(){

        return(
            <div>
                <button onClick={this.handleShowGreasedHogs}>Greased Hogs</button>
                <button onClick={this.handleShowAllHogs}>All Hogs</button>
            </div>
        )
    }

}

export default Buttons