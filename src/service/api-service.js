import axios from 'axios'
const BASE_URL ='https://youtube-v31.p.rapidapi.com'
const REACT_APP =process.env.REACT_APP_PUBLIC_KEY

const options = {
    params: {
        maxResults: '55'
      },
      headers: {
        'X-RapidAPI-Key': REACT_APP,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
      }
} 
export const ApiService={
   async fetching(url) {
    const response = await axios.get(`${BASE_URL}/${url}`,options)
    return response.data
   }
}    