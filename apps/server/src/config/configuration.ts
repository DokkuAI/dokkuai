export const configuration = () => ({
  nodeEnv: process.env.NODE_ENV,
  port: parseInt(process.env.PORT, 10) || 8080,
  jwt: process.env.CLERK_JWT_KEY,
  mongoUri: process.env.MONGO_URI,
  webhookSecret: process.env.WEBHOOK_SECRET,
  devDomain: process.env.DEV_DOMAIN,
  aws: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
    s3: {
      assetsBucketName: process.env.AWS_S3_ASSETS_BUCKET_NAME,
    },
    cdn: process.env.AWS_CDN_URL,
  },
});
