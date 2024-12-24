import React from 'react'
import "./AutherPage.css";

const AutherPage = ({data}) => {
  return (
    <div className='container'>
        <p className='autherId'>{data.id}</p>
        <p className='autherName'>{data.name}</p>
        <p className='autherEmail'>{data.email}</p>
        <img className='autherProfilePicture'>{data.profilePicture}</img>
    </div>
  )
}

export default AutherPage;