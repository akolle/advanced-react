import UserContainer from './UserContainer'

const NavLinks = ({ user }) => {
  return (
    <div>
      <h4>NavLinks</h4>
      <UserContainer user={user} />
    </div>
  )
}
export default NavLinks
