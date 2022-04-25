import ProBuddyAPI from "../../api/ProBuddyAPI";
import { useNavigate } from "react-router-dom"
import { Form, Button, Container } from "react-bootstrap"
import './AuthenticateStyles.css'

function LoginPage(props) {
  // router params
  const navigate = useNavigate()

  // event handlers
  const handleLogin = async (event) => {
    event.preventDefault()

    let loginData = {
      username: event.target.elements["username"].value,
      password: event.target.elements["password"].value
    }
    console.log("LOGIN:", loginData)
    const data = await ProBuddyAPI.login(loginData)

    if (data) {
      // props.setUsername(data.username)
      props.setUsername(data)
      console.log("LOGINPAGE DATA:", data)
      navigate("/")
    }
  }

  return (
    <Container className="auth-cont">
      <Form onSubmit={ handleLogin } method="POST" className="form">
        <h1 className="form-title">Login to your account</h1>
        <Form.Group className="mt-3">
          <Form.Label>Username:</Form.Label>
          <Form.Control type="text" name="username" placeholder="Username"/>
        </Form.Group>
        <Form.Group className="mt-3">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password"/>
        </Form.Group>
        <Button variant="outline-light" className="submit" type="submit" style={{backgroundColor: "#1B4965"}}>Submit</Button>
      </Form>
    </Container>
  )
}

export default LoginPage