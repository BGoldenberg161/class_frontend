import React from "react"
import axios from "axios"
import { Box, Button, Form, FormField, TextInput, Select } from "grommet"
import { View, Hide, MailOption, ContactInfo, Sign } from "grommet-icons"

const Signup = props => {
  const [value, setValue] = React.useState("")
  const [reveal, setReveal] = React.useState(false)
  const [valueTwo, setValueTwo] = React.useState("")
  return (
    <div>
      <Box fill align="center" justify="center">
        <Box width="medium">
          <Form
            onChange={value => console.log("onChange", value)}
            onSubmit={event =>
              console.log("onSubmit", event.value, event.touched)
            }>
            <FormField
              reverse
              icon={<ContactInfo />}
              label="Name"
              name="name"
              required
              validate={{ regexp: /^[a-z]/i }}
            />
            <FormField
              reverse
              icon={<MailOption />}
              label="Email"
              name="email"
              type="email"
              required
            />
            <FormField
              reverse
              icon={<Sign />}
              label="Username"
              name="username"
              required
              validate={{ regexp: /^[a-z]/i }}
            />
            <FormField
              label="Password"
              name="password"
              type="password"
              required>
              <Box direction="row" justify="end">
                <TextInput
                  plain
                  type={reveal ? "text" : "password"}
                  value={value}
                  onChange={event => setValue(event.target.value)}
                />
                <Button
                  icon={
                    reveal ? <View size="medium" /> : <Hide size="medium" />
                  }
                  onClick={() => setReveal(!reveal)}
                />
              </Box>
            </FormField>
            <FormField
              label="Confirm Password"
              name="password2"
              type="password"
              required>
              <Box direction="row" justify="end">
                <TextInput
                  plain
                  type={reveal ? "text" : "password"}
                  value={valueTwo}
                  onChange={event => setValueTwo(event.target.value)}
                />
                <Button
                  icon={
                    reveal ? <View size="medium" /> : <Hide size="medium" />
                  }
                  onClick={() => setReveal(!reveal)}
                />
              </Box>
            </FormField>
            <FormField
              label="Are you a Teacher?"
              name="role"
              component={Select}
              onChange={event => console.log(event)}
              options={["Yes", "No"]}
            />
            <Box direction="row" justify="center" margin={{ top: "large" }}>
              <Button type="submit" label="Submit" primary />
            </Box>
          </Form>
        </Box>
      </Box>
    </div>
  )
}

export default Signup
