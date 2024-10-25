import express from 'express';
import { getPlaces, createPlace, updatePlace, deletePlace } from '../controllers/placeController.js';
import authenticate from '../middlewares/authenticate.js';

const router = express.Router();

router.get('/:diaryId', authenticate, getPlaces);
router.post('/:diaryId', authenticate, createPlace);
router.put('/:diaryId/:placeId', authenticate, updatePlace);
router.delete('/:diaryId/:placeId', authenticate, deletePlace);

export default router;
