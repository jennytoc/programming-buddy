import ProBuddyAPI from "../../api/ProBuddyAPI"
import { useNavigate, useParams } from "react-router-dom"
import ProfileRender from "../../components/members/ProfileRender"

function CreateProfile(props) {
  const navigate = useNavigate()
  const { memberId } = useParams()

  // event handlers
  const handleEditProfile = async (event) => {
    event.preventDefault()

    const profileData = {
      user: memberId,
      about: event.target.elements["about"].value,
      gender: event.target.elements["gender-select"].value,
      language: event.target.elements["language-select"].value,
      proficiency: event.target.elements["level-select"].value,
    }

    const userData = {
      first_name: event.target.elements["first-name"].value,
      last_name: event.target.elements["last-name"].value,
    }

    const dataForUser = await ProBuddyAPI.editUser(memberId, userData)
    const data = await ProBuddyAPI.createProfile(profileData)
    if (data && dataForUser) {
      console.log("RECEIVED DATA", data)
      navigate(`/members/${memberId}`)
    }
  }

  return (
    <div>
      <ProfileRender handleEditProfile={handleEditProfile} />
    </div>
  )
}

export default CreateProfile;