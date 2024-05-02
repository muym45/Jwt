const jwt = require('jsonwebtoken')
//const secretKey = 'Muym'

function createToken(nama, classes, address, hobby){
    const data = {nama, classes, address, hobby};
    return jwt.sign (data, secretKey);
}

function verify(token) {
    try {
      const decoded = jwt.verify(token, secretKey);
      delete decoded.iat;
      return decoded;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

const siswa = {
    id:1,
    name:'Muym',
    classes:'XI',
    address:'Jakarta',
    hobby:['Game','Gym']
}

const token = createToken(
siswa.id,
siswa.nama,
siswa.classes,
siswa.address,
siswa.address,
siswa.hobby
)

console.log('token :',token)

const decodedSiswa = verify(token);
console.log('decodedSiswa :', decodedSiswa)