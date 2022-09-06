import axios from 'axios'

const BLUELYTICS_URL = 'https://api.bluelytics.com.ar/v2/latest'
const LOCAL_HOST_URL = 'http://localhost:3000'

export const api = axios.create({
  baseURL: BLUELYTICS_URL,
  timeout: 1000,
  headers: {},
})
