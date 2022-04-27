import ProBuddyAPI from "../../api/ProBuddyAPI"
import {Form, Button, Stack} from 'react-bootstrap'
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function PostFormRender(props) {
  const navigate = useNavigate()

  // states
  const [forumLists, setForumLists] = useState([])  

  // effects
  useEffect(()=>{
    loadForumLists()
  }, [])

  const loadForumLists = async () =>{
    const item = "forums"
    const data = await ProBuddyAPI.getAllItems(item)
    setForumLists(data ? data : [] )
  }

  // render
  const renderForumNames = () => {
    return forumLists.map((forum) =>{
      return <option value={forum.id}>{forum.forum_title}</option>
    })
  }

  return (
    <div className="post-form-cont">
      <Form onSubmit={ props.handleCreatePost ? props.handleCreatePost : props.handleEditPost } method="POST"> 
      <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label>Title Your Post:</Form.Label>
        <Form.Control name="post-title" placeholder="Enter Title Here" defaultValue={props.postDetails && props.postDetails.post_title}/>
      </Form.Group>
      <Form.Group controlId="formDescription">
        <Form.Label>Post description:</Form.Label>
        <Form.Control name="post-description" as="textarea" rows={6} placeholder="Start typing here..." defaultValue={props.postDetails && props.postDetails.post_description}/>
      </Form.Group>
      <Form.Label>Select Forum:</Form.Label>
      <Form.Group>
      <Form.Select name="forum-selection">
        { renderForumNames() }
      </Form.Select>
      </Form.Group>
      <Stack gap={2} className="col-md-5 mx-auto mt-4">
      <Button variant="secondary" type="submit">Submit Post</Button>
      <Button variant="outline-secondary" onClick={() => navigate(-1)} >Cancel</Button>
      </Stack>
    </Form>
  </div>
  )
}

export default PostFormRender;