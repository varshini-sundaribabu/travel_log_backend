import db from '../db/knex.js';

export const getDiaries = async (req, res) => {
  const { userId } = req.params;
  const diaries = await db('diaries').where({ user_id: userId });
  res.json(diaries);
};

// Change the route to use the upload middleware for file handling
export const createDiary = async (req, res) => {
  const { userId } = req.params;
  const { name, description } = req.body;
  
  // The uploaded file information is now in req.file
  const coverImage = req.file ? req.file.filename : null; // Get the filename from the uploaded file

  await db('diaries').insert({
    user_id: userId,
    name,
    description,
    cover_image: coverImage,
  });

  res.status(201).json({ message: 'Diary created successfully' });
};

// Update existing diaries to handle potential file changes
export const updateDiary = async (req, res) => {
  const { userId, diaryId } = req.params;
  const { name, description } = req.body;
  const coverImage = req.file ? req.file.filename : null; // Get the filename if uploaded

  await db('diaries')
    .where({ user_id: userId, id: diaryId })
    .update({ 
      name, 
      description, 
      cover_image: coverImage, 
      modified_at: db.fn.now() 
    });
  res.json({ message: 'Diary updated successfully' });
};

export const deleteDiary = async (req, res) => {
  const { userId, diaryId } = req.params;
  await db('diaries').where({ user_id: userId, id: diaryId }).del();
  res.json({ message: 'Diary deleted successfully' });
};
