import axios from "axios"
import apiHelpers from "./ApiHelpers"

const ProBuddyAPI = {}
const BASE_URL = "http://localhost:8000" // Backend

// Get forums
ProBuddyAPI.getAllForums = async () => {
  return await apiHelpers.tryCatchFetch(
    () => axios.get(`${BASE_URL}/forums/`)
  )
}
// Get posts from forums
// If forum equals forum.id, then push to list
ProBuddyAPI.getAllPosts = async () => {
  return await apiHelpers.tryCatchFetch(
    () => axios.get(`${BASE_URL}/posts/`)
  )
}

export default ProBuddyAPI