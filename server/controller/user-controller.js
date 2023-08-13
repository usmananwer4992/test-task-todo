// user-controller.js
import User from '../model/user';
import jwt from 'jsonwebtoken';

export const registerUser = async (request, response) => {
  try {
    const { email, password } = request.body;
    const newUser = await User.create({
      email,
      password,
    });

    return response.status(201).json({ user: { id: newUser._id, email: newUser.email } });
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

export const loginUser = async (request, response) => {
  try {
    const { email, password } = request.body;
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return response.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id }, 'your_secret_key'); // Replace with your actual secret key
    return response.status(200).json({ jwt: token });
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

export const getUserInfo = async (request, response) => {
  try {
    const user = await User.findById(request.user.userId);
    return response.status(200).json({ user: { id: user._id, email: user.email } });
  } catch (error) {
    return response.status(500).json(error.message);
  }
};
