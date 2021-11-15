const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  app: {
    name: "RoomBuddy",
    apiURL: `${process.env.BASE_API_URL}`,
    serverURL: process.env.BASE_SERVER_URL,
    clientURL: process.env.BASE_CLIENT_URL,
  },
  port: process.env.PORT || 5001,
  environment: process.env.NODE_ENV,
  storage: {
    storageId: process.env.STORAGE_ID,
    storageKey: process.env.STORAGE_KEY,
    bucket: "bucket_name",
    region: "ap-region",
    folderName: process.env.STORAGE_FOLDER,
  },
  database: {
    url: process.env.MONGO_URI,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    tokenExp: "1d",
  },
};
