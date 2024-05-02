const jwt = require('jsonwebtoken');
const secretKey = 'Muym';
const payload = {userId:150, username:'Muym', Kelas:'XI'};

const generateToken = jwt.sign(payload, secretKey);
console.log(generateToken);