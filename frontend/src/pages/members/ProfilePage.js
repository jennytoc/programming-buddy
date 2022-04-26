import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom";
import ProBuddyAPI from "../../api/ProBuddyAPI";
import "./MembersStyle.css"
import { Button, Row, Col } from "react-bootstrap"

function ProfilePage(props) {
  const item = "user-profiles"

  // params
  const { memberId } = useParams()

  // states
  const [memberDetails, setMemberDetails] = useState(null)

  // effects
  useEffect(()=> {
    loadProfile()
  }, [])

  const loadProfile = async () => {
    const data = await ProBuddyAPI.getItemById(item, memberId)
    setMemberDetails(data ? data : null)
  }

  const renderProfileItems = () => {
    if (memberDetails === null) {
      return (
        <Link to={`/members/${memberId}/create-profile`}><Button>Set Up Profile</Button></Link>
      )
    } return (
    // <div>
    //   <h4>{ memberDetails && memberDetails.user.username }</h4>
    //   <p>{ memberDetails && memberDetails.user.first_name }</p>
    //   <p>{ memberDetails && memberDetails.user.last_name }</p>
    //   <p>{ memberDetails && memberDetails.about }</p>
    //   <img className="profile-pic" src="https://res.cloudinary.com/dbi5z0la5/image/upload/v1650772943/my-uploads/kkievty6jz98l7pg7sez.png" />
    //   {memberDetails && memberDetails.language}
    //   {memberDetails && memberDetails.proficiency}
    //   {memberDetails && memberDetails.gender}
    //   <Link to={`/members/${memberId}/edit-profile`}><Button>Edit Profile</Button></Link>
    // </div>
    <div className="profile-cont">
      <Row>
        <Col xs={4}>
          <img className="profile-pic" src="https://res.cloudinary.com/dbi5z0la5/image/upload/v1650772943/my-uploads/kkievty6jz98l7pg7sez.png" />
          <h5 style={{fontWeight:'400'}}>{ memberDetails && memberDetails.user.first_name } { memberDetails && memberDetails.user.last_name }</h5>
          <p>{memberDetails && memberDetails.gender}</p>
          <Link to={`/members/${memberId}/edit-profile`}><Button variant="secondary">Edit Profile</Button></Link>
        </Col>
        <Col xs={7}>
          <h4>{ memberDetails && memberDetails.user.username }'s profile</h4>
          <p>{ memberDetails && memberDetails.about }</p>
          <Row className="lang-cont align-items-center">
            <Col><p style={{fontWeight:'700'}}>Preferred Language:</p></Col>
            <Col><p>{memberDetails && memberDetails.language}</p></Col>
            <Col><p style={{fontWeight:'700'}}>Proficiency:</p></Col>
            <Col><p>{memberDetails && memberDetails.proficiency}</p></Col>
          </Row>
        </Col>
      </Row>
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