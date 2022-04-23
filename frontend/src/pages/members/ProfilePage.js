import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom";
import ProBuddyAPI from "../../api/ProBuddyAPI";
import "./MembersStyle.css"
import {Button} from "react-bootstrap"

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

  // Put into function if (memberDetails)...
  return (
    <div>
      <h4>{ memberDetails && memberDetails.user.username }</h4>
      <p>{ memberDetails && memberDetails.user.first_name }</p>
      <p>{ memberDetails && memberDetails.user.last_name }</p>
      <p>{ memberDetails && memberDetails.about }</p>
      <img className="profile-pic" src={ memberDetails && memberDetails.profile_pic} />
      {memberDetails && memberDetails.language}
      {memberDetails && memberDetails.proficiency}
      {memberDetails && memberDetails.gender}
      <Link to={`/members/${memberId}/edit-profile`}><Button>Edit Profile</Button></Link>
    </div>
  )
}

export default ProfilePage