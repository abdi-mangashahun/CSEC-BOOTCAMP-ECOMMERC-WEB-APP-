
import React, { useEffect, useState } from 'react';


function RenderUsers({ users }) {
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h1>Name: {user.name}</h1>

          <h3>UserName: {user.username}</h3>

          <h3>Email: {user.email}</h3>
        </div>
      ))}
    </div>
  );
}

function FetchUsersAndRender() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "GET",
        }
      );

      const data = await response.json();

      setUsers(data);
    }

    fetchData();
  }, []);

  console.log(users);
  return (
    <div>
      <h1>Users</h1>
      <RenderUsers users={users} />
    </div>
  );
}

export default FetchUsersAndRender;


// function ClickLogger() {
//     const [clicks, setClicks] = useState(0);
  
//     useEffect(() => {
//       console.log(clicks );
//     }); // Hint: Run when `clicks` changes
  
//     return (<div className='flex justify-center items-center gap-5'>
//       <button className='text-xl bg-black text-white' onClick={() => setClicks(clicks + 1)}>
//         Click me! 
//       </button> <h1 className='text-xl'>{clicks} clicks</h1></div>
//     );
//   }
//   export default ClickLogger;