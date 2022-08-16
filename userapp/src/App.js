import { useState, useEffect } from "react";
import "./App.css";
import SocialCard from "./SocialCard";

function App() {
  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      let userData;
      try {
        const handleclick = await fetch("https://reqres.in/api/users?page=1");
        userData = await handleclick.json();
      } catch (error) {
        console.log(error);
        userData = [];
      }
      setAllUsers(userData.data);
      setUsers(userData.data);
    })();
  }, []);

  const filterCards = event => {
    const value = event.target.value.toLowerCase();
    const filteredUsers = allUsers.filter(user => (`${user.first_name} ${user.last_name}`.toLowerCase().includes(value)));
    setUsers(filteredUsers);
  }

  return (
    <div className="App">
      <div className='navbar'>
      <h1>TASK 2</h1>
      <button onClick>Get Users</button>
      </div>
      <div className="cards-container">
      {users.map((user, index) => (
        <SocialCard key={index} userData={user} />
        ))}
      </div>
  </div>
  );
}

export default App;
  