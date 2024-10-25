import db from '../db/knex.js';

export const getPlaces = async (req, res) => {
  const { diaryId } = req.params;
  const places = await db('places').where({ diary_id: diaryId });
  res.json(places);
};

export const createPlace = async (req, res) => {
  const { diaryId } = req.params;
  const { name, image } = req.body;

  await db('places').insert({
    diary_id: diaryId,
    name,
    image
  });
  res.status(201).json({ message: 'Place created successfully' });
};

export const updatePlace = async (req, res) => {
  const { diaryId, placeId } = req.params;
  const { name, image } = req.body;

  await db('places')
    .where({ diary_id: diaryId, id: placeId })
    .update({ name, image, edited_at: db.fn.now() });
  res.json({ message: 'Place updated successfully' });
};

export const deletePlace = async (req, res) => {
  const { diaryId, placeId } = req.params;
  await db('places').where({ diary_id: diaryId, id: placeId }).del();
  res.json({ message: 'Place deleted successfully' });
};
