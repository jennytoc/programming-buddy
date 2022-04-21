import ProBuddyAPI from "../../api/ProBuddyAPI";
import { useNavigate } from "react-router-dom"

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
      props.setUsername(data.username)
      navigate("/")
    }
  }

  return (
    <div>
      <h4>Log In</h4>

      <form onSubmit={ handleLogin } method="POST">
        <label>Username:</label>
        <input type="text" name="username" />
        <br/>
        <label>Password:</label>
        <input type="password" name="password" />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginPage