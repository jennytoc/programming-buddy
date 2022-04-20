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
// Get posts
ProBuddyAPI.getAllPosts = async () => {
  return await apiHelpers.tryCatchFetch(
    () => axios.get(`${BASE_URL}/posts/`)
  )
}

// Get post by id
ProBuddyAPI.getPostById = async (postId) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.get(`${BASE_URL}/posts/${postId}`)
  )
}

// Get comments
ProBuddyAPI.getAllComments = async () => {
  return await apiHelpers.tryCatchFetch(
    () => axios.get(`${BASE_URL}/comments/`)
  )
}

// Get users
ProBuddyAPI.getAllUsers = async () => {
  return await apiHelpers.tryCatchFetch(
    () => axios.get(`${BASE_URL}/users/`)
  )
}

// Get profile by ID
ProBuddyAPI.getProfile = async ()

export default ProBuddyAPI