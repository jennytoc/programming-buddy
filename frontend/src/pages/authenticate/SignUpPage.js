import { useNavigate } from "react-router-dom";
import ProBuddyAPI from "../../api/ProBuddyAPI";

function SignUpPage(props) {
  // router params
  const navigate = useNavigate()

  // event handlers
  const handleSignUp = async (event) => {
    event.preventDefault()

    let signupData = {
      username: event.target.elements["username"].value,
      password: event.target.elements["password"].value
    }
    console.log("SIGN UP:", signupData)
    const data = await ProBuddyAPI.signup(signupData)

    if (data) {
      navigate("/login")
    }
  }

  // render
  return (
    <div>
      <h4>Sign Up</h4>
      <form onSubmit={ handleSignUp } method="POST">
        <label>Username:</label>
        <input type="text" name="username" />
        <br />
        <label>Password:</label>
        <input type="password" name="password" />
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default SignUpPage;