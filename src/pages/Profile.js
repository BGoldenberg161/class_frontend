import React, { useState, useEffect } from "react"
import axios from "axios"
// import ProLayout from '../components/Partials/ProLayout'
import ProfileBox from '../components/Profile/ProfileBox'

const Profile = props => {

  const [user, setUser] = useState("")

  const authorizationHeader = {
    headers: { 'Authorization': `Bearer ${props.token}` }
  }

  const renderProfile = () => {
    axios
      .get(`/api/user/${props.currentUser.user_id}`, authorizationHeader)
      .then(res => {
        console.log('Here is the user data ya bitch: ', res.data)
        setUser(res.data)
        props.updateUserData(res.data)
      })
      .catch(err =>
        console.log(err, "You've hit an error in the axios call for user")
      )
  }

  useEffect(() => {
    renderProfile()
  }, [props.token, props.currentUser])

  return (
    <div >
      {/* <ProLayout user={user} /> */}
      <ProfileBox {...props} renderProfile={renderProfile} user={user} currentUser={props.currentUser} token={props.token}/>
    </div>
  )
}

export default Profile

