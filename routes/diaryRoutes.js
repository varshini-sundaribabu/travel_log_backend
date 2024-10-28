import express from 'express';
import multer from 'multer';
import { getDiaries, createDiary, updateDiary, deleteDiary } from '../controllers/diaryController.js';
import authenticate from '../middlewares/authenticate.js';

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Directory where images will be stored
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`); // Rename the file to avoid conflicts
    },
});

const upload = multer({ storage });

const router = express.Router();

// Routes with authentication middleware and multer for file uploads
router.get('/:userId', authenticate, getDiaries);
router.post('/:userId', authenticate, upload.single('cover_image'), createDiary); // Handle file upload
router.put('/:userId/:diaryId', authenticate, upload.single('cover_image'), updateDiary); // Handle file upload
router.delete('/:userId/:diaryId', authenticate, deleteDiary);

export default router;
