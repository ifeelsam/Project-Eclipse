import { v2 as cloudinary } from 'cloudinary';
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const uploadCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null
    const response = await cloudinary.uploader.upload(localFilePath, {
      resourse_type: "auto"
    })
    console.log("File uploaded!! ", response.url);
    return response;
  }
  catch (error) {
    fs.unlink(localFilePath)
    return null;
    // remove the locally saved file from the server!

  }
}



cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" },
  function(error, result) { console.log(result); });

export { uploadCloudinary }
