import axios from "axios"
import apiHelpers from "./ApiHelpers"

const ProBuddyAPI = {}
const BASE_URL = "http://localhost:8000" // Backend

// Authentication methods
ProBuddyAPI.signup = async (signupData) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.post(`${BASE_URL}/users`, signupData, apiHelpers.getCsrfConfig())
  )
}

ProBuddyAPI.login = async (loginData) => {
  console.log(loginData)
  return await apiHelpers.tryCatchFetch(
    () => axios.post(`${BASE_URL}/login/`, loginData, apiHelpers.getCsrfConfig())
  )
}

ProBuddyAPI.logout = async () => {
  return await apiHelpers.tryCatchFetch(
    () => axios.post(`${BASE_URL}/logout/`, null, apiHelpers.getCsrfConfig())
  )
}

// Get forums
ProBuddyAPI.getAllForums = async () => {
  return await apiHelpers.tryCatchFetch(
    () => axios.get(`${BASE_URL}/forums/`, apiHelpers.getCsrfConfig())
  )
}
// Get posts
ProBuddyAPI.getAllPosts = async () => {
  return await apiHelpers.tryCatchFetch(
    () => axios.get(`${BASE_URL}/posts/`, apiHelpers.getCsrfConfig())
  )
}

// Get post by id
ProBuddyAPI.getPostById = async (postId) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.get(`${BASE_URL}/posts/${postId}`, apiHelpers.getCsrfConfig())
  )
}

// Get comments
ProBuddyAPI.getAllComments = async () => {
  return await apiHelpers.tryCatchFetch(
    () => axios.get(`${BASE_URL}/comments/`, apiHelpers.getCsrfConfig())
  )
}

// Get users
ProBuddyAPI.getAllUsers = async () => {
  return await apiHelpers.tryCatchFetch(
    () => axios.get(`${BASE_URL}/users/`, apiHelpers.getCsrfConfig())
  )
}

// Get profile by ID
ProBuddyAPI.getProfile = async (userId) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.get(`${BASE_URL}/user-profiles/${userId}`, apiHelpers.getCsrfConfig())
  )
}

export default ProBuddyAPI