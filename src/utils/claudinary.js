import { v2 as cloudinary } from 'cloudinary';
process.loadEnvFile();

cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});
