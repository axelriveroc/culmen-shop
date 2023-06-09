const path = require('path'); 
const multer = require('multer');
const { checkFileType } = require('./helpers');
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");



const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};


const generateUniqueFilename = (file) => {
  const originalFilename = file.originalname;
  const extension = originalFilename.substring(
    originalFilename.lastIndexOf(".")
  );
  const uniqueFilename = "avatar-" + Date.now() + extension;

  return uniqueFilename;
};


const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "avatar",
    public_id: (req, file) => {
      return generateUniqueFilename(file);
    },
  },
});


const parser = multer({ storage: storage });


const upload = multer({
  storage,
  fileFilter,
});


module.exports =parser;


