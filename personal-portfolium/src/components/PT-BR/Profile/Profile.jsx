import React from 'react'
import profile from '../../../images/profileBr.png'
import './Profile.css'

function Profile() {
  return (
    <div className="profile-content">
      <img src={profile} alt='profile' width="85%" />
    </div>
  )
}

export default Profile