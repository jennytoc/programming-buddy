
function PostRender(props) {
  const renderComments = () => {
    return props.commentsList.map((comment)=> {
      return <div className="comment">
        <p>{comment.comment_description}</p>
        <p>{comment.user.username}</p>
        </div>
    })
  }
  // Ok...I'm so confused about props.user....without the logical operator, it throws an error saying username is undefined...why would user be null? 
  return (
    <div>
      <div className="original-post">
        <p>{ props.post_title }</p>
        <p>{props.post_description}</p>
        <p>{ props.user && props.user.username}</p>
        <p>{props.post_date_created}</p>
      </div>
      {renderComments()}
    </div>
  )
}

export default PostRender;