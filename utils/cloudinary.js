
const cloudinary = require("cloudinary").v2;

// Configuration 
/*cloudinary.config({
  cloud_name: process.env.CLOUDINARY_API_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});*/

cloudinary.config({ 
  cloud_name: 'dbrjuptnu', 
  api_key: '432591256428717', 
  api_secret: 'iUpSGtNP8Qx_ZR214II-tch96yk' 
});

async function uploadImage(fieldPath){
try {
  const result = await cloudinary.uploader.upload(fieldPath, {
      folder: 'users'
  });
    return {
      url: result.secure_url,
      publicId: result.public_id,
    };

} catch(error) {
  console.log(error)
}
}

module.exports = uploadImage;

