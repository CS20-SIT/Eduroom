const multer = require('multer')
const multerGoogleStorage = require('multer-cloud-storage')

const uploadHandler = (filename, destination) => {
    const multerGCSEngineOptions = {
        bucket: process.env.GCS_BUCKET_NAME,
        keyFilename: process.env.GCS_SA_KEY_PATH,
        projectId: process.env.GCS_PROJECT_ID,
        destination,
        filename
    }
    console.log(multerGCSEngineOptions);
    const multerGCS = multer({ 
        storage: multerGoogleStorage.storageEngine(multerGCSEngineOptions)
     })
     return multerGCS.any()
}

 module.exports = uploadHandler