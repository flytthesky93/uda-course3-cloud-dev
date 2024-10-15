import { GetSecretValueCommand, SecretsManagerClient } from "@aws-sdk/client-secrets-manager";
import AWSXRay from 'aws-xray-sdk';
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import fs from "fs";

const client = new SecretsManagerClient({
  credentials: {
    accessKeyId: process.env['AWS_ACCESS_KEY_ID'],
    secretAccessKey: process.env['AWS_SECRET_ACCESS_KEY'],
  },
  region: process.env["AWS_REGION"],
});

const s3 = new S3Client({
    credentials: {
        accessKeyId: process.env['AWS_ACCESS_KEY_ID'],
        secretAccessKey: process.env['AWS_SECRET_ACCESS_KEY'],
    },
    region: process.env['AWS_REGION']
})

const s3Client = AWSXRay.captureAWSv3Client(s3)

class AwsService {
  async getSecret(secretName) {
    try{
      const secret =  await client.send(new GetSecretValueCommand({
        SecretId: secretName
      }))
      return secret.SecretString
    } catch(e){
      console.error('Get secret error', e)
    }
  }

  async s3Upload(filePath) {
    const pathSplit = filePath.split('\\');
    try{
      const data = await s3Client.send(new PutObjectCommand({
        Bucket: process.env['AWS_BUCKET_NAME'] || '',
        Body: fs.readFileSync(filePath),
        Key: pathSplit[pathSplit.length - 1],
        ContentType: 'image/jpeg',
      }));
      return {uploadStatus: true, error: null}
    } catch (error) {
      console.error('Error uploading file:', error);
      return {uploadStatus: false, error: error}
    }
  }
}

export default new AwsService();
