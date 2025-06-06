import { useState, useEffect } from "react";

function UseEffectHook() {

    const [user, setUser] = useState(null);
    const [count, setCount] = useState(0);
    useEffect(
        () =>{
    console.log('Component mounted! Fetching user...');
    fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(data => {
        setUser(data.results[0]);
      });
        },[count])

          if (!user) return <p>Loading...</p>;


    return (
        <div>
            <button onClick={() => setCount(count + 1)} style={{backgroundColor: 'red'}}>Fetch User</button>
            <h1>{user.name.first} {user.name.last}</h1>
            <h1>{user.email}</h1>
            <img src="{user.picture.large}" alt="user image" />
        </div>
    )
}

export default UseEffectHook;