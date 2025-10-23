import axios from 'axios'

const API_KEY = import.meta.env.VITE_TMDB_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

export async function searchTMDB(query) {
  if (!query) return []
  try {
    const res = await axios.get(`${BASE_URL}/search/multi`, {
      params: { api_key: API_KEY, query },
    })
    return res.data.results || []
  } catch (err) {
    console.error('Error fetching TMDB data:', err)
    return []
  }
}

export async function getExternalIds(type, tmdbId) {
  try {
    const res = await axios.get(`${BASE_URL}/${type}/${tmdbId}/external_ids`, {
      params: { api_key: API_KEY },
    })
    return res.data.imdb_id
  } catch (err) {
    console.error('Error fetching external IDs:', err)
    return null
  }
}
