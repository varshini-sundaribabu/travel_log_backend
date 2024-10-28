import db from '../db/knex.js';

// Retrieve places associated with a specific diary
export const getPlaces = async (req, res) => {
  const { diaryId } = req.params;
  try {
    const places = await db('places').where({ diary_id: diaryId });
    res.json(places);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve places" });
  }
};

// Create a new place with optional image upload
export const createPlace = async (req, res) => {
  const { diaryId } = req.params;
  const { name, description } = req.body;
  
  // Access uploaded file information if it exists
  const image = req.file ? req.file.filename : null;

  try {
    await db('places').insert({
      diary_id: diaryId,
      name,
      description,
      image,
    });
    res.status(201).json({ message: 'Place created successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to create place" });
  }
};

// Update an existing place and handle potential file changes
export const updatePlace = async (req, res) => {
  const { diaryId, placeId } = req.params;
  const { name, description } = req.body;
  const image = req.file ? req.file.filename : null;

  try {
    await db('places')
      .where({ diary_id: diaryId, id: placeId })
      .update({
        name,
        description,
        image: image,
        edited_at: db.fn.now(),
      });
    res.json({ message: 'Place updated successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to update place" });
  }
};

// Delete a place based on diary and place IDs
export const deletePlace = async (req, res) => {
  const { diaryId, placeId } = req.params;
  try {
    await db('places').where({ diary_id: diaryId, id: placeId }).del();
    res.json({ message: 'Place deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete place" });
  }
};
