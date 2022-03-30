import apiUrl from '../apiConfig'
import axios from 'axios'

// index function
export const getAllPets = () => {
    return axios(`${apiUrl}/pets`)
}