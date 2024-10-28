import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../db/knex.js';

export const signup = async (req, res) => {
  const { first_name, last_name, date_of_birth, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await db('users').insert({
      first_name, last_name, date_of_birth, email, password: hashedPassword
    });
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await db('users').where({ email }).first();

  if (user && await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, userId: user.id, user });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};
