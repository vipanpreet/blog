const path = require("path");
const AWS = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const { v4: uuidv4 } = require("uuid");

// importing keys
const keys = require("../config/keys");
const { bucket, region, storageId, storageKey, folderName } = keys.storage;

// S3 Configuration
let s3 = new AWS.S3({
  accessKeyId: storageId,
  secretAccessKey: storageKey,
  region: region,
});

var upload = multer({
  storage: multerS3({
    s3,
    bucket,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, folderName + "/" + req.randomName + path.extname(file.originalname));
    },
  }),
});

// Single file upload settings
const singleFileUpload = upload.single("image");

exports.uploadImage = async (req, res) => {
  req.randomName = uuidv4();

  try {
    singleFileUpload(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        console.log(err);
      } else if (err) {
        console.log(err);
      }
      res.json({
        public_id: req.file.key,
        url: req.file.location,
      });
    });
  } catch (error) {
    console.error(error);
  }
};
