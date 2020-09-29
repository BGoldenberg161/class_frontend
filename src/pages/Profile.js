import React, { useState, useEffect } from "react"
import axios from "axios"
import DjangoCSRFToken from "django-react-csrftoken"

const Profile = props => {
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/user")
      .then(res => {
        console.log(res.data)
      })
      .catch(err =>
        console.log(err, "You've hit an error in the axios call for users")
      )
  }, [])

  return (
    <div>
      <h1>Profile, Tweet it.</h1>
    </div>
  )
}

export default Profile
