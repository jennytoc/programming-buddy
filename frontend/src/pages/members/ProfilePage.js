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

  const editProfileBtn = () => {
    if (props.username !== "") {
      return <Link to={`/members/${memberId}/edit-profile`}><Button variant="secondary">Edit Profile</Button></Link>
    }
  }

  const renderProfileItems = () => {
    if (memberDetails === null) {
      return (
        <div className="setup-div">
        <h3 className="my-4">This account has not been set up yet.</h3>
        <Link to={`/members/${memberId}/create-profile`}><Button>Set Up Profile</Button></Link>
        </div>
      )
    } return (
    <div>
      <Row>
        <Col xs={4}>
          <img className="profile-pic" src="https://res.cloudinary.com/dbi5z0la5/image/upload/v1650772943/my-uploads/kkievty6jz98l7pg7sez.png" />
          <h5 style={{fontWeight:'400'}}>{ memberDetails && memberDetails.user.first_name } { memberDetails && memberDetails.user.last_name }</h5>
          <p>{memberDetails && memberDetails.gender}</p>
          {editProfileBtn()}
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