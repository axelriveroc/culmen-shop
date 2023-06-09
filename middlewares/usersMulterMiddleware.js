const path = require('path'); 
const multer = require('multer');
const { checkFileType } = require('./helpers');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');



const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
      cb(null, true);
    } else {
      cb(null, false);
    } 

  } 

  
  const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'avatar',
    },
  });
   
  const parser = multer({ storage: storage });

/*const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        const ruta = path.join(__dirname , "../public/users");
        cb( null , ruta ); 
    }, 
    filename: (req, file, cb)=>{
        const newFilename = 'avatar-' + Date.now() + path.extname(file.originalname);
        cb( null , newFilename ); 
    }
}); */

const upload = multer({ 
  storage
  , fileFilter  }); 

module.exports = parser; 