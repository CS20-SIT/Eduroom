const { Storage } = require('@google-cloud/storage')
const fs = require('fs')

const storage = new Storage({ keyFilename: process.env.GCS_SA_KEY_PATH })
const bucket = storage.bucket(process.env.GCS_BUCKET_NAME)
const bucketBaseUrl = `https://storage.googleapis.com/${process.env.GCS_BUCKET_NAME}`

const uploadFile = async (filePath, destination) => {
	try {
		const gcsFile = await bucket.upload(filePath, {
			destination,
			gzip: true,
		})
		const metadata = await gcsFile[0].getMetadata()
		fs.unlinkSync(filePath)
		return metadata[1].body.mediaLink
	} catch (err) {
		throw err
	}
}

const getDefailtProfilePic = () => {
	// Max - min + min
	const random = Math.floor(Math.random() * (6 - 1 + 1)) + 1
	const profilePicUrl = `${bucketBaseUrl}/profile_pic/Avatar_${random}.png`
	return profilePicUrl
}

module.exports = {
	uploadFile,
	getDefailtProfilePic,
}
