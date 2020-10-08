import React from 'react'
import { Card, Image } from 'semantic-ui-react'

class Hog extends React.Component {

    state = {
        display: false
    }
    
    toggleInfo = (event) => {
        this.setState({
            display: !this.state.display
        })
    }


    render() {
        let { name, specialty, greased, weight }  = this.props.hog
        let highest_medal_achieved = this.props.hog['highest medal achieved']
        let imagePigName = name.toLowerCase().split(" ").join("_")
        let pigImage = require(`../hog-imgs/${imagePigName}.jpg`)

        return (

            <Card onClick={this.toggleInfo}>
            <Image src={pigImage} wrapped ui={false} alt={name} />
            <Card.Content>
                <Card.Header>{name}</Card.Header>

                { this.state.display ?
                    <Card.Description>
                        Specialty: {specialty}
                        <br></br>
                        Weight: {weight}
                        <br></br>
                        Highest Medal Achived: {highest_medal_achieved}
                        <br></br>
                        Greased: {greased.toString()}
                    </Card.Description>
                    : 
                    null 
                }

            </Card.Content>
            </Card>

        )
    }


}



export default Hog