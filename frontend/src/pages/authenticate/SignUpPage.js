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
}