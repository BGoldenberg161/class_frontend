import React, { useState, useEffect } from "react"
import axios from "axios"
import ProLayout from '../components/ProLayout'
// import DjangoCSRFToken from "django-react-csrftoken"

const Profile = (props) => {
  console.log(props)
  const [user, setUser] = useState("")
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/user")
      .then(res => {
        console.log(res.data)
        setUser(res.data)
      })
      .catch(err =>
        console.log(err, "You've hit an error in the axios call for users")
      )
  }, [])


  return (
    <div >
    <ProLayout />
    
    </div>
  )
}

export default Profile

