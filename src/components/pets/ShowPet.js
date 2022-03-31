import React, { useState, useEffect } from 'react'
import { getOnePet, updatePet, removePet } from '../../api/pets'
import { useParams } from 'react-router-dom'
import { Spinner, Container, Card, Button } from 'react-bootstrap'
import { showPetSuccess, showPetFailure } from '../shared/AutoDismissAlert/messages'
import EditPetModal from './EditPetModal'

const ShowPet = (props) => {

    const [pet, setPet] = useState(null)
    const [modalOpen, setModalOpen] = useState(false)
    const [updated, setUpdated] = useState(false)
    const { user, msgAlert } = props
    const { id } = useParams()
    console.log('id in showPet', id)
    // empty dependency array in useEffect to act like component did mount
    useEffect(() => {
        getOnePet(id)
            .then(res => setPet(res.data.pet))
            .then(() => {
                msgAlert({
                    heading: 'Here is the pet!',
                    message: showPetSuccess,
                    variant: 'success',
                })
            })
            .catch(() => {
                msgAlert({
                    heading: 'No pet found',
                    message: showPetFailure,
                    variant: 'danger',
                })
            })
    }, [updated])

    if (!pet) {
        return (
            <Container fluid className="justify-content-center">
                <Spinner animation="border" role="status" variant="warning" >
                    <span className="visually-hidden">Loading....</span>
                </Spinner>
            </Container>
        )
    }

    return (
        <>
            <Container className="fluid">
                <Card>
                    <Card.Header>{pet.fullTitle}</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <small>Age: {pet.age}</small><br />
                            <small>Type: {pet.type}</small><br />
                            <small>
                                Adoptable: {pet.adoptable ? 'yes' : 'no'}
                            </small>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button onClick={() => setModalOpen(true)} className="m-2" variant="warning">
                            Edit Pet
                        </Button>
                        <Button className="m-2" variant="danger">
                            Delete Pet
                        </Button>

                    </Card.Footer>
                </Card>
            </Container>
            <EditPetModal
                pet={pet}
                show={modalOpen}
                user={user}
                msgAlert={msgAlert}
                triggerRefresh={() => setUpdated(prev => !prev)}
                updatePet={updatePet}
                handleClose={() => setModalOpen(false)}
            />
        </>
    )
}

export default ShowPet
