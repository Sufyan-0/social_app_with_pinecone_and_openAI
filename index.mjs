import express from "express";
import cors from "cors";
import path from 'path';
const __dirname = path.resolve();
import { config } from "dotenv";
config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());
// app.get(express.static(path.join(__dirname, "./client/build")));
app.use("/", express.static(path.join(__dirname, "./client/build")));

// Create a product
app.post("/api/v1/postStory", async (req, res) => {
  console.log("Product created function");

});

// Get all products
app.get("/check", async (req, res) => {
  console.log("Get all products");

});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});