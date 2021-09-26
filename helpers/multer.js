const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const filter = (req, file, cb) => {
  cb(null, true);
};

module.exports = multer({
  storage: storage,
  fileFilter: filter,
}).any();
