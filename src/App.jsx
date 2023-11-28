import React, { useEffect, useState } from 'react';

// video: https://www.youtube.com/watch?v=0ZJgIjIuY7U&ab_channel=WebDevSimplified

const App = () => {
  const [resourceType, setRecourceType] = useState('posts')

   
   useEffect(() =>{
    console.log('rendereee');
  },[]) 
  

  return(
    <>
    <div>
      <button onClick={() => setRecourceType('posts')}>Posts</button>
      <button onClick={() => setRecourceType('Users')}>Users</button>
      <button onClick={() => setRecourceType('comments')}>Coments</button>
    </div>
    <h1>{resourceType}</h1>
    </>
    
  )

};


export default App

