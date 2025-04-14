import React, { useEffect, useState } from 'react'

const Github = () => {
    const [data, setData ] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/akashtyagi03')
        .then(Response => Response.json())
        .then(data=>{
            console.log(data);
            setData(data)
        })
    }, [])

  return (
    <div className='flex self-center p-7 gap-90'>
      github follower: {data.followers}
      <img src={data.avatar_url} alt="image"  className='flex self-center'/>
    </div>
  )
}

export default Github
