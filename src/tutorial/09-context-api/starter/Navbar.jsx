import NavLinks from './NavLinks'

const Navbar = () => {
  const { user, setUser } = { name: 'Andy' }

  const logout = () => {
    setUser(null)
  }

  return (
    <div>
      <h2>Navbar</h2>
      <NavLinks user={user} />
    </div>
  )
}
export default Navbar
