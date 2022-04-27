import ProBuddyAPI from "../../api/ProBuddyAPI"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import ProfileRender from "../../components/members/ProfileRender"
import "./MembersStyle.css"

function EditProfile() {
  const navigate = useNavigate()
  const { memberId } = useParams()
  const itemUser = "users"
  const itemProfiles = "user-profiles"

  // states
  const [profileDetails, setProfileDetails] = useState("")

  // effects
  useEffect(()=>{
    loadProfile()
  }, [])

  const loadProfile = async () => {
    const data = await ProBuddyAPI.getItemById(itemProfiles, memberId)
    setProfileDetails(data ? data : null)
  }

  // event handlers
  const handleEditProfile = async (event) => {
    event.preventDefault()

    const profileData = {
      about: event.target.elements["about"].value,
      gender: event.target.elements["gender-select"].value,
      language: event.target.elements["language-select"].value,
      proficiency: event.target.elements["level-select"].value,
    }

    const userData = {
      first_name: event.target.elements["first-name"].value,
      last_name: event.target.elements["last-name"].value,
    }

    const dataForUser = await ProBuddyAPI.editItems(itemUser, memberId, userData)
    const data = await ProBuddyAPI.editItems(itemProfiles, memberId, profileData)
    if (data && dataForUser) {
      console.log("RECEIVED DATA", data)
      navigate(`/members/${memberId}`)
    }
  }

  return (
    <div className="profile-items">
      <ProfileRender  handleEditProfile={handleEditProfile}  profileDetails={profileDetails} />
    </div>
  )
}

export default EditProfile;

