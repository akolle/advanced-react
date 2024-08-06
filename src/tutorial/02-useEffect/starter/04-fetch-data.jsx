const url = 'https://api.github.com/users';
import { useState, useEffect } from "react";

const FetchData = () => {

  const [users, setUsers] = useState([]);

  
  useEffect(()=> {
    const fetchData = async() =>{
      try {
        const res = await fetch(url);
        const users = await res.json();
        console.log(users);
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    
  }, []);

  return (
    <div>
      <h4>github users</h4>
      <ul className="users">
        {users.map((user) => {
          const {login, id, avatar_url, html_url} = user;
          return (
            <li key={id}>
              <h4>user name: {login}</h4>
              <img src={avatar_url} alt={login}/>
            </li>      
          )
        })}
      </ul>
    </div>
  )
};
export default FetchData;
