import ProBuddyAPI from "../../api/ProBuddyAPI"
import { useNavigate } from "react-router-dom"
import PostFormRender from "../../components/forum/PostFormRender"
import './ForumStyles.css'

function CreatePost(props) {
  const navigate = useNavigate()

  // event handlers
  const handleCreatePost = async (event) => {
    event.preventDefault()
    const item = "posts"
    const postData = {
      post_title: event.target.elements["post-title"].value,
      post_description: event.target.elements["post-description"].value,
      forum: event.target.elements["forum-selection"].value, 
      user: props.username.user_id
    }
    console.log("SENDING POST DATA...", postData)
    const data = await ProBuddyAPI.createItems(item, postData)
    if (data) {
      console.log("RECEIVED DATA", data)
      navigate(`/forum/${data.forum_value}/${data.id}`)
    }
  }

  return (
    <div className="post-form-items">
      <PostFormRender handleCreatePost={handleCreatePost} />
    </div>
  )
}

export default CreatePost;