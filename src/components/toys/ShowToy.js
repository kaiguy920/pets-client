import React from 'react'
import { Card } from 'react-bootstrap'

const ShowToy = (props) => {
    console.log('props.toy', props.toy);

    return (
        <Card className="m-2" style={{ width: '18rem' }}>
            <Card.Header>{props.toy.name}</Card.Header>
        </Card>
    )
}

export default ShowToy