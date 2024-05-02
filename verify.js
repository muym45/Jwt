const jwt = require('jsonwebtoken');
const secretKey = 'Muym';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE1MCwidXNlcm5hbWUiOiJNdXltIiwiS2VsYXMiOiJYSSIsImlhdCI6MTcxNDYzMzA5NX0.UjpEjysY-O_exYIt5f6K1wxGUduWMZjjrFPR1OQQaxs';

jwt.verify(token, secretKey, (err, decoded)=>{
    if(err) console.error(err);
    else console.log('Token is valid'); console.log(decoded)
})