import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
// import AttachFile from '@material-ui/icons/AttachFile' 
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"

const styles = {
  card: {
    width: 350,
    marginBottom: 10
  },
  media: {
    height: 400
  }
}

const CloudMediaCard = ({ classes, change, formData, uploadedFileUrl }) => {

  return (
    <Card className={classes.card}>
      <CardActionArea>
        {change ? (
          <CardMedia
            className={classes.media}
            image="https://www.placecage.com/300/300"
            title="Profile Card"
          />
        ) : (
          <CardMedia
            className={classes.media}
            image={uploadedFileUrl.uploadedFiles}
            title="Profile Card"
          />
        )}
        <CardContent>
          {change ? (
            <Typography gutterBottom variant="h5" component="h2">
              Nicholas Cage
            </Typography>
          ) : (
            <Typography gutterBottom variant="h5" component="h2">
              {formData.name}
            </Typography>
          )}
          {change ? (
            <Typography component="p">
              I'm baby tousled cold-pressed marfa, flexitarian street art
              bicycle rights skateboard blue bottle put a bird on it seitan etsy
              distillery. Offal tattooed meditation hammock normcore migas tbh
              fashion axe godard kogi beard knausgaard.
            </Typography>
          ) : (
            <Typography component="p">{formData.description}</Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
CloudMediaCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(CloudMediaCard)