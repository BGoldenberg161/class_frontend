import React, { useState } from "react";
import "./Cloud.css";
import CloudMediaCard from "./CloudMediaCard";
import CloudForm from "./CloudForm";

function Cloudinary() {
    const [edit, setEdit] = useState(false)

    //Add a state to track the URL of the image we add.
    const [uploadedFileUrl, setUploadedFileUrl] = useState({
        uploadedFiles: null
    });
    console.log(uploadedFileUrl);
    //Add a state to track the data entered in to our form.
    const [formData, setFormData] = useState({
        name: "",
        description: ""
    });
    //Add a state to trigger our change in our profile card.
    const [change, setChange] = useState(true);
    return (
        <div className="Cloud">
            <div className="container">
                <CloudMediaCard
                    change={change}
                    setChange={setChange}
                    formData={formData}
                    uploadedFileUrl={uploadedFileUrl}
                />
                <CloudForm
                    formData={formData}
                    setFormData={setFormData}
                    setChange={setChange}
                    setUploadedFileUrl={setUploadedFileUrl}
                    uploadedFileUrl={uploadedFileUrl}
                />
            </div>
        </div>
    );
}

export default Cloudinary;