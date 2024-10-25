import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import diaryRoutes from './routes/diaryRoutes.js';
import placeRoutes from './routes/placeRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Health Check Endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'Healthy', uptime: process.uptime() });
});

// Register Routes
app.use('/api/users', userRoutes);
app.use('/api/diaries', diaryRoutes);
app.use('/api/places', placeRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
