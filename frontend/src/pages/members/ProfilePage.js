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
  console.log("IMAGE", memberDetails && memberDetails.profile_pic)
  // Put into function if (memberDetails)...

  const renderProfileItems = () => {
    if (memberDetails === null) {
      return (
        <Link to={`/members/${memberId}/create-profile`}><Button>Set Up Profile</Button></Link>
      )
    } return (
    <div>
      <h4>{ memberDetails && memberDetails.user.username }</h4>
      <p>{ memberDetails && memberDetails.user.first_name }</p>
      <p>{ memberDetails && memberDetails.user.last_name }</p>
      <p>{ memberDetails && memberDetails.about }</p>
      <img className="profile-pic" src="https://res.cloudinary.com/dbi5z0la5/image/upload/v1650772943/my-uploads/kkievty6jz98l7pg7sez.png" />
      {memberDetails && memberDetails.language}
      {memberDetails && memberDetails.proficiency}
      {memberDetails && memberDetails.gender}
      <Link to={`/members/${memberId}/edit-profile`}><Button>Edit Profile</Button></Link>
    </div>
    )
  }
  return (
    <div>
      { renderProfileItems() }
    </div>
  )
}

export default ProfilePage