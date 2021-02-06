const multer = require('multer');

exports.storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public');  
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}` );  
  },
});

exports.fileFilter = (req, file, cb) => {
  cb(null, true);
  // if (
  //   file.mimetype === 'image/png' ||
  //   file.mimetype === 'image/jpg' ||
  //   file.mimetype === 'image/jpeg'
  // )
  // cb(null, true);
};
