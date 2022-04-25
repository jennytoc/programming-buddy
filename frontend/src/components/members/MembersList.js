import { Link } from "react-router-dom"

function MembersList(props) {
  console.log(props.member)
  return (
    <div>
      <Link key={ props.member.id } to={ `/members/${props.member.id}` }>
        <p>{props?.member?.user?.username ? props.member.user.username : props.member.username }</p>
      </Link>
    </div>
  )
}

export default MembersList