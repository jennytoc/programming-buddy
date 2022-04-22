import ProBuddyAPI from "../../api/ProBuddyAPI"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

function EditPost(props) {
  const navigate = useNavigate()
  const { postId } = useParams()

  // states
  const [forumLists, setForumLists] = useState([])
  const [postDetails, setPostDetails] = useState(null)

  // effects
  useEffect(()=>{
    loadForumLists()
  }, []) // Change once we add authentication features for admin

  const loadForumLists = async () =>{
    const data = await ProBuddyAPI.getAllForums()
    setForumLists(data ? data : [] )
  }

  useEffect(() => {
    loadPost()
  }, [])

  const loadPost = async () => {
    const data = await ProBuddyAPI.getPostById(postId)
    setPostDetails(data ? data : null)
  }

  // event handlers
  const handleCreatePost = async (event) => {
    event.preventDefault()

    const postData = {
      post_title: event.target.elements["post-title"].value,
      post_description: event.target.elements["post-description"].value,
      forum: event.target.elements["forum-selection"].value, 
      // user: props.username.user_id
    }
    console.log("SENDING POST DATA...", postData)
    const data = await ProBuddyAPI.editPost(postId, postData)
    if (data) {
      console.log("RECEIVED DATA", data)
      navigate(`/forum/${data.forum_value}/${data.id}`)
    }
  }

  const renderForumNames = () => {
    return forumLists.map((forum) =>{
      return <option value={forum.id}>{forum.forum_title}</option>
    })
  }

  return (
    <div className="add-post">
      <form onSubmit={ handleCreatePost } method="PUT">
        <label>Post Title</label>
        <input name="post-title" defaultValue={postDetails && postDetails.post_title}/>
        <label>Description</label>
        <textarea id="post-description" name="post-description" rows="10" cols="90" defaultValue={postDetails && postDetails.post_description}></textarea>
        <label>Forum</label>
        <select name="forum-selection">
          { renderForumNames() }
        </select>
        <button type="submit">Save Post</button>
      </form>
    </div>
  )
}

export default EditPost;