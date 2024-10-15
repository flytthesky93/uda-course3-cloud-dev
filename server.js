import express from 'express';
import bodyParser from 'body-parser';
import loginHandler from './handler/loginHandler.js';
import imageHandler from './handler/imageHandler.js';
import authorizationMiddleware from './middleware/authorization.js';
import AWSXRay from 'aws-xray-sdk'

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env['PORT'] || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());
  app.use(AWSXRay.express.openSegment('udacity-course3'));
  
  // Root Endpoint
  app.post("/login", loginHandler.login)
  app.get("/filteredimage", authorizationMiddleware.autho , imageHandler.imageFilter)
  // Displays a simple message to the user
  app.get( "/", async (req, res) => {
    res.send("try GET /filteredimage?image_url={{}}")
  } );
  
  app.use(AWSXRay.express.closeSegment());
  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
