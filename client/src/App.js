import React, {useEffect, useState} from 'react';
import "./App.css"

export default function App(){
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
        data => {
          setBackendData(data)
        }
      )
  }, []);
  console.log(backendData);
  return(
    <main>
      {
          (typeof backendData.users === 'undefined') ? (<p>Loading...</p>) : (backendData.users.map((user, i) => {
            return (
              <div className='users--showcase'>
                <img src={user.img} />
                <p key={i}>User: {user.name}</p>
              </div>
            )
          }))
      }

    </main>
  )
}