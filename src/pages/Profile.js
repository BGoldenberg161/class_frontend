import React, { useState, useEffect } from "react"
import axios from "axios"
import DjangoCSRFToken from "django-react-csrftoken"

const Profile = props => {
  useEffect(() => {
    axios
      .post("http://localhost:8000/api/user/", {
        username: "chiliWings344588",
        password: "passwordistaco",
        first_name: "chili",
        last_name: "wings",
        is_teacher: false,
        email: "chili@wings.com",
      })
      .then(res => {
        console.log(res)
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
