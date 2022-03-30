import React, { useState, useEffect } from 'react'
import { getAllPets } from '../../api/pets'

const IndexPets = (props) => {
    const [pets, setPets] = useState(null)

    useEffect(() => {
        getAllPets()
            .then(res => {
                setPets(res.data.pets)
            })
            .catch(console.error)
    }, [])

    if (!pets) {
        return <p>loading...</p>
    } else if (pets.length === 0) {
        return <p>no pets yet, go add some</p>
    }

    let petsJsx

    if (pets.length > 0) {
        petsJsx = pets.map(pet => (
            <li key={pet.id}>
                {pet.fullTitle}
            </li>
        ))
    }

    return (
        <>
            <h3>All the pets</h3>
            <ul>
                {petsJsx}
            </ul>
        </>
    )
}

export default IndexPets