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

// Get items
ProBuddyAPI.getAllItems = async (item) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.get(`${BASE_URL}/${item}/`, apiHelpers.getCsrfConfig)
  )
}

// Get item by id
ProBuddyAPI.getItemById = async (item, itemId) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.get(`${BASE_URL}/${item}/${itemId}/`, apiHelpers.getCsrfConfig())
  )
}

// Create items
ProBuddyAPI.createItems = async (item, itemData) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.post(`${BASE_URL}/${item}/`, itemData, apiHelpers.getCsrfConfig())
  )
}

// Edit items
ProBuddyAPI.editItems = async (item, itemId, itemData) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.patch(`${BASE_URL}/${item}/${itemId}/`, itemData, apiHelpers.getCsrfConfig())
  )
}

// Delete item
ProBuddyAPI.deleteItem = async (item, itemId) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.delete(`${BASE_URL}/${item}/${itemId}/`, apiHelpers.getCsrfConfig())
  )
}

export default ProBuddyAPI