import React from 'react'
import axios from "../../api/axios"
import { useEffect, useState } from 'react'
import "../profile/Profile.css"

const Profile = () => {
    const[profile, setProfile] = useState({})

    useEffect (() => {
        axios("/auth/profile")
        .then((response) => {
            if(response.status === 200){
                setProfile(response.data)
            }
        })
    }, [])
  return (
 <div>
   {
<div className='profile'>
 
  <img className='profile-avatar' src={profile.avatar} alt="" />
  <h3 className='name'>{profile.name }.👨🏻‍💻 </h3>
  <h3 className='email'>📧{profile.email}</h3>

</div>

     
     
    
   }
 </div>
  )
}

export default Profile