const multer = require('multer')
const path = require("path");
const multerGoogleStorage = require('multer-cloud-storage')
const connect = require('connect')
const uploadLocalPath = '/upload'

const multerUploadHandler = (filename, destination) => {
    if(process.env.NODE_ENV == 'production'){
        const multerGCSEngineOptions = {
            bucket: process.env.GCS_BUCKET_NAME,
            keyFilename: process.env.GCS_SA_KEY_PATH,
            projectId: process.env.GCS_PROJECT_ID,
            destination,
            filename
        }
        const multerGCS = multer({ 
            storage: multerGoogleStorage.storageEngine(multerGCSEngineOptions)
         })
        return multerGCS.any()
    }
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
          cb(null, path.join(process.cwd() + `${uploadLocalPath}${destination}`));
        },
        filename: (req, file, cb) => {
          cb(null, filename);
        },
      });
    const multerDev = multer({ storage })
    return multerDev.any()
}

const multerGetUrl = (filename, destination) => {
  return (req, res, next) => {
    if(process.env.NODE_ENV == 'production'){
      req.file = req.files[0].linkUrl
    }
    else {
      req.file = uploadLocalPath + destination + filename
    }
    next()
  }
}

const uploadHandler = (filename, destination) => {
  const chain = connect()
  const middlewares = [multerUploadHandler(filename, destination), multerGetUrl(filename, destination)]
  middlewares.forEach(function(middleware) {
    chain.use(middleware);
  });
  return chain;
}

module.exports = uploadHandler