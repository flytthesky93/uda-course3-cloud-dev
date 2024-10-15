import imageService from '../service/imageService.js';
import awsService from '../service/awsService.js'

class ImageHandler {
	async imageFilter(req, res) {
		const {image_url} = req.query
		console.log('ImageHandler - imageFilter - image_url: ' + image_url);
		if (!image_url) {
			return res.status(400).json({message: 'Invalid image url!'})
		}
		const imageResp = await imageService.filterImage(image_url);
		if (!imageResp.filteredPath) {
			console.log('Error filter image: ' + imageResp.error);
			return res.status(500).json({message: 'Internal Server!'})
		}
		//Need upload file to s3 aws 
		const awsUploadS3Res = await awsService.s3Upload(imageResp.filteredPath);
		if (!awsUploadS3Res.uploadStatus) {
			console.log('Upload file to s3 error: ' + awsUploadS3Res.error);
			// Delete the file even got error
    		imageService.deleteImage(imageResp.filteredPath);
			return res.status(500).json({message: 'Upload image to storage faild!'});
		}
		//Send file to response and delete it from server
		res.sendFile(imageResp.filteredPath, (err) => {
    		if (err) {
      			console.error('Error when sending file:', err);
      			return res.status(500).json({ message: 'Internal Server!' });
    		}

    		// Delete the file after sending
    		imageService.deleteImage(imageResp.filteredPath);
  		});
	}
}

export default new ImageHandler();