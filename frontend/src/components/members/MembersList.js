import { Link } from "react-router-dom"

function MembersList(props) {
  return (
    <div>
      <Link key={ props.member.id } to={ `/members/${props.member.id}` }>
        <p>{props.member && props.member.username}</p>
      </Link>
    </div>
  )
}

export default MembersList