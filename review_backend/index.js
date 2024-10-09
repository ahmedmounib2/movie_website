import app from './server.js';  // Make sure server.js is handling routes/middleware
import { MongoClient } from 'mongodb';
import { mongo_username, mongo_password } from './config.js'; 
import ReviewsDAO from "./dao/reviewsDAO.js"

const port = 8000;
const uri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.w3n7c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

MongoClient.connect(uri)
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.stack);
    process.exit(1);
  })
  .then(async (client) => {
    await ReviewsDAO.injectDB(client)
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  });
