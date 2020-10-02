import React, { useState, useEffect } from "react"
import axios from "axios"
import {
  Accordion,
  AccordionPanel,
  Button,
  Box,
  Grid,
  Meter,
  Stack,
  Text,
  Heading,
} from "grommet"
import { Toast } from "grommet-icons"
import { Link } from "react-router-dom"
import Cloudinary from "../Cloudinary/Cloudinary"

// import DjangoCSRFToken from "django-react-csrftoken"

const ProLayout = props => {
  console.log(props)

  // meter for main
  const mathValue = 98.6
  const englishValue = 90.1
  const scienceValue = 85.2
  const historyValue = 92

  return (
    <div>
      {/*Grid, area prop alternative  */}
      <Grid
        rows={["xxsmall", "medium", "xxsmall"]}
        columns={["1/4", "3/4"]}
        areas={[
          ["header", "header"],
          ["sidebar", "main"],
        ]}
        gap="small">
        <Box>
          <Heading level="3" margin={{ vertical: "medium" }}>
            User Profile
          </Heading>
          <Heading level="6" margin={{ vertical: "medium" }}>
            <Cloudinary />
            Username:{props.user.username}
          </Heading>
          <Heading level="6" margin={{ vertical: "medium" }}>
            Email:{props.user.email}
          </Heading>
        </Box>

        <Box pad={{ horizontal: "medium" }} responsive={false} gridArea="main">
          <Box fill="horizontal">
            <Accordion animate={true} multiple={true} margin="small">
              <AccordionPanel label="Classes">
                <Box background="light-1">
                  <Link to="class">Classes</Link>
                </Box>
              </AccordionPanel>
              <AccordionPanel label="Assignments">
                <Box height="small" background="light-1">
                  <Link to="assignment">Assignments</Link>
                  <ul>
                    <li>Math</li>
                    <li>English</li>
                    <li>Science</li>
                    <li>History</li>
                  </ul>
                </Box>
              </AccordionPanel>
              <AccordionPanel label="Grades">
                <Box height="medium" background="light-1">
                  <ul>
                    <li>
                      Math: 98.6%, A{" "}
                      <Box align="end" pad="small">
                        <Stack anchor="center">
                          <Meter
                            type="bar"
                            background="light-5"
                            values={[{ value: mathValue }]}
                            size="xsmall"
                            thickness="small"
                          />
                          <Box
                            direction="row"
                            align="center"
                            pad={{ bottom: "xsmall" }}>
                            <Text size="small" weight="bold">
                              {mathValue}
                            </Text>
                            <Text size="xxsmall">%</Text>
                          </Box>
                        </Stack>
                      </Box>
                    </li>
                    <li>
                      English: 90.1, A{" "}
                      <Box align="end" pad="small">
                        <Stack anchor="center">
                          <Meter
                            type="bar"
                            background="light-5"
                            values={[{ value: englishValue }]}
                            size="xsmall"
                            thickness="small"
                          />
                          <Box
                            direction="row"
                            align="center"
                            pad={{ bottom: "xsmall" }}>
                            <Text size="small" weight="bold">
                              {englishValue}
                            </Text>
                            <Text size="small">%</Text>
                          </Box>
                        </Stack>
                      </Box>
                    </li>
                    <li>
                      Science: 85.2%, B{" "}
                      <Box align="end" pad="small">
                        <Stack anchor="center">
                          <Meter
                            type="bar"
                            background="light-5"
                            values={[{ value: scienceValue }]}
                            size="xsmall"
                            thickness="small"
                          />
                          <Box
                            direction="row"
                            align="center"
                            pad={{ bottom: "xsmall" }}>
                            <Text size="small" weight="bold">
                              {scienceValue}
                            </Text>
                            <Text size="small">%</Text>
                          </Box>
                        </Stack>
                      </Box>
                    </li>
                    <li>
                      History: 92.3% A{" "}
                      <Box align="end" pad="small">
                        <Stack anchor="center">
                          <Meter
                            type="bar"
                            background="light-5"
                            values={[{ value: historyValue }]}
                            size="xsmall"
                            thickness="small"
                          />
                          <Box
                            direction="row"
                            align="center"
                            pad={{ bottom: "xsmall" }}>
                            <Text size="small" weight="bold">
                              {historyValue}
                            </Text>
                            <Text size="small">%</Text>
                          </Box>
                        </Stack>
                      </Box>
                    </li>
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

export default ProLayout
