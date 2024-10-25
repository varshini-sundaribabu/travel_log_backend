import db from '../db/knex.js';

export const getDiaries = async (req, res) => {
  const { userId } = req.params;
  const diaries = await db('diaries').where({ user_id: userId });
  res.json(diaries);
};

export const createDiary = async (req, res) => {
  const { userId } = req.params;
  const { name, description, cover_image } = req.body;

  await db('diaries').insert({
    user_id: userId,
    name,
    description,
    cover_image
  });
  res.status(201).json({ message: 'Diary created successfully' });
};

export const updateDiary = async (req, res) => {
  const { userId, diaryId } = req.params;
  const { name, description, cover_image } = req.body;

  await db('diaries')
    .where({ user_id: userId, id: diaryId })
    .update({ name, description, cover_image, modified_at: db.fn.now() });
  res.json({ message: 'Diary updated successfully' });
};

export const deleteDiary = async (req, res) => {
  const { userId, diaryId } = req.params;
  await db('diaries').where({ user_id: userId, id: diaryId }).del();
  res.json({ message: 'Diary deleted successfully' });
};
