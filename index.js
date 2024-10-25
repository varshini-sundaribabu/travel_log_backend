import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Health Check Endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'Healthy', uptime: process.uptime() });
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
