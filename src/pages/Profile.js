import React, { useState, useEffect } from "react"
import axios from "axios"
import ProLayout from '../components/ProLayout'


const Profile = props => {
  // making state for user 9:34am, thursday, 10/01/2020
  const [user, setUser] = useState("")
  const authorizationHeader = {
    headers: {'Authorization': `Bearer ${props.token}`}
  }
  console.log(props)
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/user/${props.currentUser.user_id}`, authorizationHeader)
      .then(res => {
        console.log('Here is the user data ya bitch: ', res.data)
        setUser(res.data)
      })
      .catch(err =>
        console.log(err, "You've hit an error in the axios call for user")
      )
  }, [props.token, props.currentUser])

  return (
    <div >
      
    <ProLayout user={user}/>
    
    </div>
  )
}

export default Profile

