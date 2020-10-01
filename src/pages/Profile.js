import React, { useState, useEffect } from "react"
import axios from "axios"
import ProLayout from '../components/ProLayout'
import jwtDecode from 'jwt-decode'

const Profile = props => {
  const authorizationHeader = {
    'Authorization': `Bearer ${props.token}`
  }

  useEffect(() => {
    // console.log(props.token)
    // console.log(props.currentUser)
    axios
      .get(`http://localhost:8000/api/user/${props.currentUser.user_id}`, authorizationHeader)
      .then(res => {
        console.log('Here is the user data ya bitch: ', res.data)

      })
      .catch(err =>
        console.log(err, "You've hit an error in the axios call for user")
      )
  }, [props.token, props.currentUser])


  return (
    <div >
    <ProLayout />
    
    </div>
  )
}

export default Profile

