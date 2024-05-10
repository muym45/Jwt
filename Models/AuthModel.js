const connection = require('../Config/connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function registerUser(name, email, password, phone) {
    try {
        const [existingEmailUser] = await connection.query('SELECT * FROM user WHERE email = ?', [email]);
        if (existingEmailUser > 0) throw new Error("E-mail already in use.");
        const hashedPassword = await bcrypt.hash(password, 10);
        const [newUser] = await connection.query(
            'INSERT INTO user (name, email, password, phone) VALUES (?,?,?,?)', [name, email, password, phone]);
        return {
            success: true,
            message: 'User registered successfully',
            id: newUser
        }
    } catch (error) {
        return 'Error in registration';
    }
}

async function loginUser(email, password) {
    try {
      const [user] = await connection.query('SELECT * FROM user WHERE email = ?', [email]);
      if (user.length === 0) {
        throw new Error('User not found');
      }
      const isPasswordValid = await bcrypt.compare(password, user[0].password);
      if (!isPasswordValid) {
        throw new Error('Invalid password');
      }
      // generate token
      const createToken = jwt.sign({ email: user[0].email, password: user[0].password }, 'bazmaSecretKey');
      return { success: true, message: 'Login successful', createToken };
    } catch (error) {
      console.error(error);
      return { success: false, message: error.message };
    }
  }


async function getMe(token) {
    try {
        const decoded = jwt.verify(token.replace('Bearer ', ''), 'bazmaSecretKey');
        const userData = {
            id: decoded.id,
            username: decoded.username,
            email: decoded.email
        }
        return { success: true, message: 'User data retrieved successfully', data: userData };
    } catch (error) {
        console.error(error);
        return { success: false, message: error.message };
    }
}

module.exports = { registerUser, loginUser, getMe }