import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {Form, Button, Stack, Row, Col, Container } from 'react-bootstrap'
import axios from "axios"
import LanguageChoices from "../../data/LanguageChoices.json"
import LevelChoices from "../../data/LevelChoices.json"

function ProfileRender(props) {
  const navigate = useNavigate()
  //states 
  const [imageSelected, setImageSelected] = useState(null)
  const [imageSrc, setImageSrc] = useState(null);

  const uploadImage = async (event) => {
    event.preventDefault()

    const formData = new FormData();
    formData.append("file", imageSelected)
    formData.append("upload_preset", "my-uploads")

    const data = axios.post("https://api.cloudinary.com/v1_1/dbi5z0la5/image/upload", formData)
    .then((response)=>{
      console.log(response)
    })
    console.log(data)
    setImageSrc(data.secure_url)
  };

  console.log("IMAGE SOURCE:", imageSrc)

  // render
  const renderItems = ( itemList ) => {
    return itemList.map((item, index) => {
      return <option key={index} value={item.label}>{item.label}</option>
    })
  }

  return (
    <div className="profile-cont">
      <Row className="mb-3">
      <Form.Label column sm={2}>Upload Profile Picture:</Form.Label>
          <Col>
            <Form.Control name="profile-pic" type="file" onChange={(event)=> {setImageSelected(event.target.files[0])}}/>
          </Col>
          <Col><Button onClick={uploadImage}>Upload Image</Button></Col>
      </Row>
      <Form onSubmit={ props?.handleEditProfile ? props?.handleEditProfile : props.handleCreateProfile } method="POST">
        <Form.Group as={Row}>
            <Form.Label column sm={2}>First Name:</Form.Label>
          <Col>
            <Form.Control name="first-name" defaultValue={ props.profileDetails && props.profileDetails.user.first_name } />
          </Col>
          <Form.Label column sm={2}>Last Name:</Form.Label>
          <Col>
            <Form.Control name="last-name" defaultValue={ props.profileDetails && props.profileDetails.user.last_name } />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={2}>Gender:</Form.Label>
          <Col>
            <Form.Select name="gender-select">
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Prefer not to say">Prefer not to say</option>
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
          <Form.Control name="about" as="textarea" rows={6} defaultValue={ props.profileDetails && props.profileDetails.about } />
        </Form.Group>

        <Stack gap={2} className="col-md-5 mx-auto mt-3">
          <Button variant="secondary" type="submit">Save Profile</Button>
          <Button variant="outline-secondary" onClick={() => navigate(-1)} >Cancel</Button>
        </Stack>
      </Form>
    </div>
  )
}

export default ProfileRender;