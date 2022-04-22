import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ProBuddyAPI from "../../api/ProBuddyAPI";
import "./MembersStyle.css"

function ProfilePage(props) {
  // params
  const { memberId } = useParams()

  // states
  const [memberDetails, setMemberDetails] = useState(null)

  // effects
  useEffect(()=> {
    loadProfile()
  }, [])

  const loadProfile = async () => {
    const data = await ProBuddyAPI.getProfile(memberId)
    setMemberDetails(data ? data : null)
  }

  return (
    <div>
      {memberDetails && memberDetails.user.username}
      <p>{ memberDetails && memberDetails.about }</p>
      <img className="profile-pic" src={ memberDetails && memberDetails.profile_pic} />
    </div>
  )
}

export default ProfilePage