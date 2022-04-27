import ProBuddyAPI from "../../api/ProBuddyAPI"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import PostFormRender from "../../components/forum/PostFormRender"
import './ForumStyles.css'

function EditPost(props) {
  const navigate = useNavigate()
  const { postId } = useParams()
  const itemPost = "posts"

  // states
  const [postDetails, setPostDetails] = useState(null)

  useEffect(() => {
    loadPost()
  }, [])

  const loadPost = async () => {
    const data = await ProBuddyAPI.getItemById(itemPost, postId)
    setPostDetails(data ? data : null)
  }

  // event handlers
  const handleEditPost = async (event) => {
    event.preventDefault()

    const postData = {
      post_title: event.target.elements["post-title"].value,
      post_description: event.target.elements["post-description"].value,
      forum: event.target.elements["forum-selection"].value, 
    }

    console.log("SENDING POST DATA...", postData)

    const data = await ProBuddyAPI.editItems(itemPost, postId, postData)

    if (data) {
      console.log("RECEIVED DATA", data)
      navigate(`/forum/${data.forum_value}/${data.id}`)
    }
  }

  return (
    <div className="post-form-items">
      <PostFormRender handleEditPost={handleEditPost} postDetails={postDetails} />
    </div>
  )
}

export default EditPost;