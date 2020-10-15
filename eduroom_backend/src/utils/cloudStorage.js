const { Storage } = require('@google-cloud/storage');

const storage = new Storage({ keyFilename: 'gcs-eduroom.json' })
const bucket = storage.bucket('eduroom')

const uploadFile =  async(filePath, destination) => {
    try{
        const gcsFile = await bucket.upload(filePath, {
            destination,
            gzip: true
        })
        const metadata = await gcsFile[0].getMetadata()
        return metadata[1].body.mediaLink
    }
    catch(err){
        console.error(err)
        return err
    }
}

module.exports = {
    uploadFile
}