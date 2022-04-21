import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ProBuddyAPI from "../../api/ProBuddyAPI";

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
    </div>
  ) // Eventually we'll add profile pic
}

export default ProfilePage