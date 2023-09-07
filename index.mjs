import express from "express";
import cors from "cors";
import path from 'path';
import { customAlphabet } from 'nanoid'
const nanoid = customAlphabet('1234567890', 20)
import { PineconeClient } from "@pinecone-database/pinecone";
import OpenAI from "openai";
const __dirname = path.resolve();
import { config } from "dotenv";
config();
const BaseURL = "http://localhost:8080" ;
const app = express();
const PORT = process.env.PORT || 8080;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const pinecone = new PineconeClient();
await pinecone.init({
  environment: process.env.PINECONE_ENVIRONMENT,
  apiKey: process.env.PINECONE_API_KEY,
});

app.use(cors());

app.use(express.json());
// app.get(express.static(path.join(__dirname, "./client/build")));
app.use("/", express.static(path.join(__dirname, "./client/build")));

// Create a product
app.post(`/api/v1/postStory`, async (req, res) => {
  console.log("Product created function");
  console.log(req.body)
  res.send("HEllow")
});

// Get all products
app.get("/check", async (req, res) => {
  console.log("Get all products");

});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});