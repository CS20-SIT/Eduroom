const multer = require('multer')
const multerGoogleStorage = require('multer-cloud-storage')
const connect = require('connect')
const { v1: uuidv1 } = require('uuid')

const uploadLocalPath = '/upload'

const uploadToGCSMulter = (destination) => {
	const multerGCSEngineOptions = {
		bucket: process.env.GCS_BUCKET_NAME,
		keyFilename: process.env.GCS_SA_KEY_PATH,
		projectId: process.env.GCS_PROJECT_ID,
		destination,
		filename: (req, file, cb) => {
			const spiltString = file.originalname.split('.')
			const uniqueSuffix = uuidv1()
			cb(null, `${uniqueSuffix}.${spiltString[spiltString.length - 1]}`)
		},
	}
	const multerGCS = multer({
		storage: multerGoogleStorage.storageEngine(multerGCSEngineOptions),
	})
	return multerGCS.any()
}

const uploadToLocalHandler = () => {
	const multerLocalOptions = {
		destination: uploadLocalPath,
		filename: (req, file, cb) => {
			const spiltString = file.originalname.split('.')
			const uniqueSuffix = uuidv1()
			cb(null, `${uniqueSuffix}.${spiltString[spiltString.length - 1]}`)
		},
	}
	const localStorage = multer.diskStorage(multerLocalOptions)
	return multer({ storage: localStorage }).any()
}

// const multerGetUrl = (filename, destination) => {
// 	return (req, res, next) => {
// 		req.file = req.files[0].linkUrl
// 		next()
// 	}
// }

// const uploadHandler = (filename, destination) => {
// 	const chain = connect()
// 	const middlewares = [multerUploadHandler(filename, destination), multerGetUrl(filename, destination)]
// 	middlewares.forEach((middleware) => {
// 		chain.use(middleware)
// 	})
// 	return chain
// }

const editFileUrl = () => {
	return (req, res, next) => {
		req.files.forEach((file) => {
			file.linkUrl = `https://storage.googleapis.com/${process.env.GCS_BUCKET_NAME}/${file.path}`
		})
		next()
	}
}

const uploadToGCSHandler = (destination) => {
	const chain = connect()
	const middlewares = [uploadToGCSMulter(destination), editFileUrl()]
	middlewares.forEach((middleware) => {
		chain.use(middleware)
	})
	return chain
}

module.exports = {
	uploadToGCSHandler,
	uploadToLocalHandler,
}
