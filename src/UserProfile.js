import React from 'react'

export default function UserProfile({user}) {
    return (
        <div>
            <span>{user.firstName} </span> 
            <span>{user.lastName} </span>
            <div>{user.profilePicture}</div>
            <input type="text" value=""/>
            <button >Update Profile Picture</button>
        </div>
    )
}
