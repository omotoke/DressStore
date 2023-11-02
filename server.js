const mongoose = require('mongoose');

const MONGO_URI = "mongodb://localhost:27017/Marketplace";

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB");
}).catch(err => {
    console.error("Error connecting to MongoDB", err);
});

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: "Welcome to DressStore application." });
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});

const productRoutes = require('./routes/productRoutes');

// ... other code ...

app.use(express.json()); // This line is essential for POST and PUT operations, as it allows the server to parse JSON request bodies.
app.use(productRoutes);

// ... other code ...
