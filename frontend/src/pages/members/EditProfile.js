import ProBuddyAPI from "../../api/ProBuddyAPI"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import {Form, Button, Stack, Row, Col } from 'react-bootstrap'
import LanguageChoices from "../../data/LanguageChoices.json"
import LevelChoices from "../../data/LevelChoices.json"

function EditProfile(props) {
  const navigate = useNavigate()
  const { memberId } = useParams()

  // states
  const [profileDetails, setProfileDetails] = useState(null)

  // effects
  useEffect(()=>{
    loadProfile()
  }, [])

  const loadProfile = async () => {
    const data = await ProBuddyAPI.getProfile(memberId)
    setProfileDetails(data ? data : null)
  }

  // event handlers
  const handleEditProfile = async (event) => {
    event.preventDefault()

    const profileData = {
      about: event.target.elements["about"].value,
      profile_pic: event.target.elements["profile-pic"].value,
      gender: event.target.elements["gender-select"].value,
      language: event.target.elements["language-select"].value,
      proficiency: event.target.elements["level-select"].value,
    }

    const userData = {
      first_name: event.target.elements["first-name"].value,
      last_name: event.target.elements["last-name"].value,
    }
    console.log("SENDING DATA....", profileData)
    const dataForUser = await ProBuddyAPI.editUser(memberId, userData)
    const data = await ProBuddyAPI.editProfile(memberId, profileData)
    if (data && dataForUser) {
      console.log("RECEIVED DATA", data)
      navigate(`/members/${memberId}`)
    }
  }

  // render
  const renderItems = ( itemList ) => {
    return itemList.map((item) => {
      return <option value={item.value}>{item.label}</option>
    })
  }

  // To edit user names, send patch to Users API
  return (
    <div>
      <Form onSubmit={ handleEditProfile } method="POST">
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Upload Profile Picture:</Form.Label>
          <Col>
            <Form.Control name="profile-pic" type="file" />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
            <Form.Label column sm={2}>First Name:</Form.Label>
          <Col>
            <Form.Control name="first-name" defaultValue={profileDetails && profileDetails.user.first_name } />
          </Col>
          </Form.Group>

        <Form.Group as={Row}>          
          <Form.Label column sm={2}>Last Name:</Form.Label>
          <Col>
            <Form.Control name="last-name" defaultValue={profileDetails && profileDetails.user.last_name } />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={2}>Gender:</Form.Label>
          <Col>
            <Form.Select name="gender-select">
              <option value="FM">Female</option>
              <option value="ML">Male</option>
              <option value="PF">Prefer not to say</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={2}>Language</Form.Label>
          <Col>
            <Form.Select name="language-select">
              { renderItems(LanguageChoices) }
            </Form.Select>
          </Col>
          <Form.Label column sm={2}>Proficiency</Form.Label>
          <Col>
            <Form.Select name="level-select">
              { renderItems(LevelChoices) }
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group>
          <Form.Label>About:</Form.Label>
          <Form.Control name="about" as="textarea" rows={6} defaultValue={profileDetails && profileDetails.about } />
        </Form.Group>

        <Stack gap={2} className="col-md-5 mx-auto">
          <Button variant="secondary" type="submit">Save Profile</Button>
          <Button variant="outline-secondary" onClick={() => navigate(-1)} >Cancel</Button>
        </Stack>
      </Form>
    </div>
  )
}

export default EditProfile;

