const path = require("path");
const AWS = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const { v4: uuidv4 } = require("uuid");
const crypto = require("crypto");

// importing keys
const keys = require("../config/keys");
const { bucket, region, storageId, storageKey, folderName } = keys.storage;

// S3 Configuration
let s3 = new AWS.S3({
  accessKeyId: storageId,
  secretAccessKey: storageKey,
  region: region,
});

var multiUpload = multer({
  storage: multerS3({
    s3,
    bucket,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      let customFileName = crypto.randomBytes(12).toString("hex");
      cb(
        null,
        folderName + "/" + req.randomName + customFileName + path.extname(file.originalname)
      );
    },
  }),
}).array("photos", 5);

exports.uploadPostImages = async (req, res) => {
  req.randomName = uuidv4();
  multiUpload(req, res, (error) => {
    console.log("files", req.files);
    if (error) {
      console.log("errors", error);
      res.status(500).json({
        status: "fail",
        error: error,
      });
    } else {
      // If File not found
      if (req.files === undefined) {
        console.log("msg: No File Selected!");
        res.status(500).json({
          msg: "failed to upload images",
        });
      } else {
        // If Success
        let fileArray = req.files;

        const images = [];
        let url,
          public_id,
          id = "";
        for (let i = 0; i < fileArray.length; i++) {
          url = fileArray[i].location;
          public_id = fileArray[i].key;
          id = i;
          images.push({ url, public_id, id });
        }

        return res.status(200).json(({ url, public_id, id } = images));
      }
    }
  });
};
