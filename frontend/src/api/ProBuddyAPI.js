import axios from "axios"
import apiHelpers from "./ApiHelpers"

const ProBuddyAPI = {}
const BASE_URL = "http://localhost:8000" // Backend

// Authentication methods
ProBuddyAPI.signup = async (signupData) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.post(`${BASE_URL}/users/`, signupData, apiHelpers.getCsrfConfig())
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

// Create posts
ProBuddyAPI.createPost = async (postData) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.post(`${BASE_URL}/posts/`, postData, apiHelpers.getCsrfConfig())
  )
}

// Edit posts
ProBuddyAPI.editPost = async (postId, postData) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.patch(`${BASE_URL}/posts/${postId}/`, postData, apiHelpers.getCsrfConfig())
  )
}

// Delete post
ProBuddyAPI.deletePost = async (postId) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.delete(`${BASE_URL}/posts/${postId}/`, apiHelpers.getCsrfConfig())
  )
}

// Get post by id
ProBuddyAPI.getPostById = async (postId) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.get(`${BASE_URL}/posts/${postId}/`, apiHelpers.getCsrfConfig())
  )
}

// Get comments
ProBuddyAPI.getAllComments = async () => {
  return await apiHelpers.tryCatchFetch(
    () => axios.get(`${BASE_URL}/comments/`, apiHelpers.getCsrfConfig())
  )
}

// Create comment
ProBuddyAPI.createComment = async (commentData) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.post(`${BASE_URL}/comments/`, commentData, apiHelpers.getCsrfConfig())
  )
}

// Edit comment
ProBuddyAPI.editComment = async (commentId, commentData) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.put(`${BASE_URL}/comments/${commentId}`, commentData, apiHelpers.getCsrfConfig())
  )
}

// Delete comment
ProBuddyAPI.deleteComment = async (commentId) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.delete(`${BASE_URL}/comments/${commentId}/`, apiHelpers.getCsrfConfig)
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