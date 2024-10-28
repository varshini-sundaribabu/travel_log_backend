import express from 'express';
import multer from 'multer';
import { getPlaces, createPlace, updatePlace, deletePlace } from '../controllers/placeController.js';
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

router.get('/:diaryId', authenticate, getPlaces);
router.post('/:diaryId', authenticate, upload.single('image'), createPlace);
router.put('/:diaryId/:placeId', authenticate, upload.single('image'), updatePlace);
router.delete('/:diaryId/:placeId', authenticate, deletePlace);

export default router;
