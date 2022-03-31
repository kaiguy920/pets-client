import React from 'react'
import { Card } from 'react-bootstrap'

const ShowToy = (props) => {
    const { toy } = props

    const setBgCondition = (cond) => {
        if (cond === 'new') {
            return { width: '18rem', backgroundColor: 'green' }
        } else if (cond === 'used') {
            return { width: '18rem', backgroundColor: 'yellow' }
        } else {
            return { width: '18rem', backgroundColor: 'red' }
        }
    }

    console.log(setBgCondition(toy.condition))

    return (
        <Card className="m-2" style={setBgCondition(toy.condition)}>
            <Card.Header>{toy.name}</Card.Header>
            <Card.Body>
                <small>{toy.description}</small><br />
                <small>
                    {toy.isSqueaky ? 'squeak squeak' : 'stoic silence'}
                </small><br />
                <Card.Footer >
                    {toy.condition}
                </Card.Footer>
            </Card.Body>
        </Card>
    )
}

export default ShowToy