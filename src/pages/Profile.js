import React, { useState, useEffect } from "react"
import axios from "axios"
import { Accordion, AccordionPanel, Button, Box, Grid, Meter, Stack, Text } from "grommet";
import { grommet } from 'grommet/themes';
import { Toast } from "grommet-icons";
import { Link } from 'react-router-dom'

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


  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);
  const handleImageUpload = e => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      console.log(current)
      current.file = file;
      reader.onload = e => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
  // meter for main
  const mathValue = 98.6;
  const englishValue = 90.1;
  const scienceValue = 85.2;
  const historyValue = 92;


  console.log(user[0])
  return (
    <div >
      {/*Grid, area prop alternative  */}
      <Grid
        rows={['xxsmall', 'medium', 'xsmall']}
        columns={['1/3', '3/4']}
        areas={[
          ['header', 'header'],
          ['sidebar', 'main'],
        ]}
        gap="small"

      >
        <Box background="light-4" gridArea="sidebar" style={{}}>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            ref={imageUploader}
            style={{
              display: "none"
            }}
          />
          <h3 style={{ textAlign: "center" }} >User Profile</h3>
          <div style={{ height: "100px", width: "100px", }}>
            <img
              ref={uploadedImage}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: '50px',

              }}
            />
          </div >
          <Box >
            <Button icon={<Toast />} onClick={() => imageUploader.current.click()}></Button>
          </Box>
          <h3>Username:{}</h3>
          <h3>Email:{}</h3>
        </Box>

        <Box background="light-2" gridArea="main">
          <Box fill='horizontal'>
            <Accordion animate={true} multiple={true} margin='small'>
              <AccordionPanel label='Classes'>
                <Box background='light-1'><Link to="class">Classes</Link></Box>
              </AccordionPanel>
              <AccordionPanel label='Assignments'>
                <Box height='small' background='light-1'><Link to="assignment">Assignments</Link>
                  <ul>
                    <li>Math</li>
                    <li>English</li>
                    <li>Science</li>
                    <li>History</li>
                  </ul></Box>
              </AccordionPanel>
              <AccordionPanel label='Grades'>
                <Box height='medium' background='light-1'>
                  <ul>
                    <li>Math: 98.6%, A<Box align="end" pad="small">
                      <Stack anchor="center">
                        <Meter
                          type="bar"
                          background="light-5"
                          values={[{ value: mathValue }]}
                          size="xsmall"
                          thickness="small"
                        />
                        <Box direction="row" align="center" pad={{ bottom: 'xsmall' }}>
                          <Text size="small" weight="bold">
                            {mathValue}
                          </Text>
                          <Text size="xxsmall">%</Text>
                        </Box>
                      </Stack>
                    </Box></li>
                    <li>English: 90.1, A <Box align="end" pad="small">
                      <Stack anchor="center">
                        <Meter
                          type="circle"
                          background="light-5"
                          values={[{ value: englishValue }]}
                          size="xsmall"
                          thickness="small"
                        />
                        <Box direction="row" align="center" pad={{ bottom: 'xsmall' }}>
                          <Text size="small" weight="bold">
                            {englishValue}
                          </Text>
                          <Text size="small">%</Text>
                        </Box>
                      </Stack>
                    </Box></li>
                    <li>Science: 85.2%, B <Box align="end" pad="small">
                      <Stack anchor="center">
                        <Meter
                          type="bar"
                          background="light-5"
                          values={[{ value: scienceValue }]}
                          size="xsmall"
                          thickness="small"
                        />
                        <Box direction="row" align="center" pad={{ bottom: 'xsmall' }}>
                          <Text size="small" weight="bold">
                            {scienceValue}
                          </Text>
                          <Text size="small">%</Text>
                        </Box>
                      </Stack>
                    </Box></li>
                    <li>History: 92.3% A <Box align="end" pad="small">
                      <Stack anchor="center">
                        <Meter
                          type="bar"
                          background="light-5"
                          values={[{ value: historyValue }]}
                          size="xsmall"
                          thickness="small"
                        />
                        <Box direction="row" align="center" pad={{ bottom: 'xsmall' }}>
                          <Text size="small" weight="bold">
                            {historyValue}
                          </Text>
                          <Text size="small">%</Text>
                        </Box>
                      </Stack>
                    </Box></li>
                  </ul>
                </Box>
              </AccordionPanel>
            </Accordion>
          </Box>
        </Box>
      </Grid>
    </div>
  )
}

export default Profile

