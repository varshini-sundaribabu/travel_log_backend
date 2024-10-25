import express from 'express';
import { getDiaries, createDiary, updateDiary, deleteDiary } from '../controllers/diaryController.js';
import authenticate from '../middlewares/authenticate.js';

const router = express.Router();

router.get('/:userId', authenticate, getDiaries);
router.post('/:userId', authenticate, createDiary);
router.put('/:userId/:diaryId', authenticate, updateDiary);
router.delete('/:userId/:diaryId', authenticate, deleteDiary);

export default router;
