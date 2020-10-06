import React, { useState } from "react"
import "./Cloud.css"
import CloudMediaCard from "./CloudMediaCard"
import CloudForm from "./CloudForm"

function Cloudinary() {

    // const [edit, setEdit] = useState(false)
    const [uploadedFileUrl, setUploadedFileUrl] = useState({ uploadedFiles: null })
    const [formData, setFormData] = useState({ name: "", description: "" })
    const [change, setChange] = useState(true)

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
    )
}

export default Cloudinary