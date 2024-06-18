import fileUpload from "express-fileupload"

const fileUploadConfig = fileUpload({
    limits: { fileSize: 5000000 },
    abortOnLimit: true,
    responseOnLimit: "El archivo sobrepasa el límite de peso."
})

export default fileUploadConfig