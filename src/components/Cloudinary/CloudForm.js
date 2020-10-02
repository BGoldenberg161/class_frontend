import React from "react";
import TextField from "@material-ui/core/TextField";
import { DropzoneArea } from "material-ui-dropzone";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import request from "superagent";
/*
useStyles is a custom hook from Material-UI.
*/
const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1)
    },
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
            width: 300
        }
    }
}));
const CLOUDINARY_UPLOAD_PRESET = "classCloudinary";
const CLOUDINARY_UPLOAD_URL =
    "https://api.cloudinary.com/v1_1/chamon562/image/upload";
const CloudForm = ({
    formData,
    setFormData,
    setChange,
    setUploadedFileUrl,
    uploadedFileUrl
}) => {
    const classes = useStyles();
    /*
  onSubmit is the main function that will handle the button click.
  Much like an `addEventListener` in vanilla JavaScript.
  'e' is shorthand for 'event'
  */
    const onSubmit = e => {
        e.preventDefault();
        setChange(false);
        setUploadedFileUrl({ uploadedFiles: e[0] });
        console.log(uploadedFileUrl.uploadedFiles);
        handleImageUpload(uploadedFileUrl.uploadedFiles);
    };
    /*
  handleChange changes the state of our formData state. It takes the value from the event
  and uses a spread operator to update the state of nested objects.
  It takes the name of the objects and spreads them through the state array.
  */
    const handleChange = e => {
        const value = e.target.value;
        setFormData({ ...formData, [e.target.name]: value });
    };
    /*
  According to the react-dropzone documentation, it will always return
  an array of the uploaded files. We pass that array to the files
  parameter of the onImageDrop function. Since we are only allowing one
  image at a time we know that the image will always be in the first
  position of the array ([0]).
  */
    const onImageDrop = e => {
        setUploadedFileUrl({ uploadedFiles: e[0] });
    };
    /*
  Here we harness the power of superagent request to upload the image to Cloudinary.
  */
    const handleImageUpload = file => {
        let upload = request
            .post(CLOUDINARY_UPLOAD_URL)
            .field("upload_preset", CLOUDINARY_UPLOAD_PRESET)
            .field("file", file);
        upload.end((err, response) => {
            if (err) {
                console.error(err);
            }
            if (response.body.secure_url !== "") {
                setUploadedFileUrl({
                    uploadedFiles: response.body.secure_url
                });
            }
        });
        console.log(uploadedFileUrl.uploadedFiles);
    };
    return (
        <form className={classes.root} onSubmit={onSubmit}>
            <Grid container direction="column" justify="center" alignItems="center">
                <h2 className="addImage">Add Image</h2>
                {/*     
        I added a few DropZone attributes to limit the size, 
        limit to images only and a few other self-explanatory items.
        */}
                <DropzoneArea
                    showFileNamesInPreview={true}
                    maxFileSize={10000000}
                    multiple="false"
                    accept="image/*"
                    onDrop={console.log}
                    dropzoneText="Add an image here"
                    type="file"
                    onChange={onImageDrop}
                ></DropzoneArea>
               
                <h2>About Me</h2>
                <TextField
                    type="text"
                    className={classes.root}
                    id="outlined-basic"
                    label="Description"
                    variant="outlined"
                    rows="4"
                    multiline
                    name="description"
                    onChange={handleChange}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                >
                    Save
        </Button>
            </Grid>
        </form>
    );
};
export default CloudForm;