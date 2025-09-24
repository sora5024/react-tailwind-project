import API from './instances/NasaAPI'
import { AxiosResponse } from 'axios'

export const getUniverseImageOfTheDay = async (): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await API.get('/planetary/apod')
    return response.data
  } catch (error) {
    console.error('Error fetching Universe Image of the Day:', error)
    throw error
  }
}
