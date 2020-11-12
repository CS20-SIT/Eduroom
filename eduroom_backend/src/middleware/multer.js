const multer = require('multer')
const path = require("path");
const multerGoogleStorage = require('multer-cloud-storage')

const uploadHandler = (filename, destination) => {
    if(process.env.NODE_ENV == 'production'){
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
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
          cb(null, path.join(process.cwd() + `/upload/${destination}`));
        },
        filename: (req, file, cb) => {
          cb(null, filename);
        },
      });
    const multerDev = multer({ storage })
    return multerDev.any()
}

 module.exports = uploadHandler