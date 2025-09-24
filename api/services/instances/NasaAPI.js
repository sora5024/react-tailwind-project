import axios, { AxiosInstance } from 'axios'

const NasaAPI: AxiosInstance = axios.create({
  baseURL: 'https://corsproxy.io/?https://api.nasa.gov',
  params: {
    api_key: 'URuCgkp0pdwikhfdXMjM992RR74x6t1M12oqAxzK',
  },
})

export default NasaAPI
