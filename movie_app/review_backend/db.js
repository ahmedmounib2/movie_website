const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://ahmedmounib2:<H87cjq6hc>@cluster0.w3n7c.mongodb.net/MOVIE%20WEBSITE?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
}

module.exports = connectDB;
