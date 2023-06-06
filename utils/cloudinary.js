
const cloudinary = require("cloudinary").v2;
//const { v2 as cloudinary } = require('cloudinary');

// Configuration 
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_API_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

 async function uploadImage(fieldPath){

    const result = await cloudinary.uploader.upload(fieldPath, {
        folder: 'users'
    });

      return {
        url: result.secure_url,
        publicId: result.public_id,
      };
}

module.exports = uploadImage;

