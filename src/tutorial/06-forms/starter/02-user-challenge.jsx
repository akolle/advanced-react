import { useState } from 'react'
import { data } from '../../../data/'

const UserChallenge = () => {
  const [name, setName] = useState('')
  const [users, setUsers] = useState(data)

  const handleSubmit = (e) => {
    //do something
    e.preventDefault()
    // setUsers([name, ...data])
    if (!name) return
    const fakeId = Date.now()
    const newUser = { id: fakeId, name }
    const updatedUsers = [...users, newUser]
    setUsers(updatedUsers)
    setName('')
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}
      <h4>users</h4>
      {users.map((user) => {
        return <h5 key={user.id}>{user.name}</h5>
      })}
    </div>
  )
}
export default UserChallenge
