import { Link, Navigate, useNavigate } from "react-router-dom"
import ProBuddyAPI from "../api/ProBuddyAPI"

function LoginBar(props) {
  const navigate = useNavigate()

  // helpers
  const logMeOut = async () => {
    const data = await ProBuddyAPI.logout()
    if (data) {
      props.setUsername("")
      navigate("/")
    }
  }

  // render
  const renderAuthItems = () => {
    if (props.username === "") {
      return (
        <div>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      )
    }
    return (
      <div>
        <Link to="#" onClick= {logMeOut}>Logout</Link>
      </div>
    )
  }

  return (
    <div>
      { renderAuthItems() }
    </div>
  )

}

export default LoginBar