require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const admin = require("firebase-admin");
const serviceAccount = require("./firebase-key.json");

// Init Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// --- Routes ---
// Test route
app.get("/", (req, res) => {
  res.send("Study App Backend is running!");
});

// Add flashcard
app.post("/flashcards", async (req, res) => {
  try {
    const { question, answer } = req.body;
    const docRef = await db.collection("flashcards").add({ question, answer });
    res.status(201).send({ id: docRef.id, question, answer });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Get all flashcards
app.get("/flashcards", async (req, res) => {
  try {
    const snapshot = await db.collection("flashcards").get();
    const flashcards = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.send(flashcards);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// test
app.get("/flashcards/test", (req, res) => {
  res.send("Backend is running!");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));