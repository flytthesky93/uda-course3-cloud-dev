import {filterImageFromURL, deleteLocalFile} from '../util/imageUtil.js';

class ImageService {
	async filterImage(imgUrl) {
		try {
			const outputPath = await filterImageFromURL(imgUrl);
			if (!outputPath || outputPath === '') {
				return {filteredPath: null, error: 'Error when filter image!'};
			}
			return {filteredPath: outputPath, error: null};
		} catch (error) {
			return {filteredPath: null, error: error};
		}
	}

	async deleteImage(localPaths) {
		try {
			await deleteLocalFile(localPaths);
			console.log('Delete files success');
		} catch (error) {
			console.log('Error when delete files: ' + localPaths + ' error: ' + error);
		}
	}
}

export default new ImageService();