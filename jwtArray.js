const jwt = require('jsonwebtoken');

function createRegistrasiToken(fullNama, alamat, nomorKontak) {
    const payload = {
        full_name: fullNama,
        address: alamat,
        contact_number: nomorKontak,
        exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60)  // Token kedaluwarsa dalam 24 jam
    };
    const token = jwt.sign(payload, 'Muym');
    return token;
}

function verifyRegistrasiToken(token) {
    try {
        const decoded = jwt.verify(token, 'Muym');
        return decoded;
    } catch(err) {
        return "Token tidak valid atau sudah kedaluwarsa.";
    }
}

function createScheduleToken(prayerTime, eatingTime, familyTime) {
    const payload = {
        prayer_time: prayerTime,
        eating_time: eatingTime,
        family_time: familyTime,
        exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60)  // Token kedaluwarsa dalam 24 jam
    };
    const token = jwt.sign(payload, 'Muym');
    return token;
}

function verifyScheduleToken(token) {
    try {
        const decoded = jwt.verify(token, 'Muym');
        return decoded;
    } catch(err) {
        return "Token tidak valid atau sudah kedaluwarsa.";
    }
}

const dataPendaftaran = [
    { fullNama: 'John Doe', address: 'Jalan Pahlawan No. 123', nomorKontak: 875975 },
    { fullNama: 'Jane Smith', address: 'Jalan Merdeka No. 456', nomorKontak: 875875 },
    { fullNama: 'David Johnson', address: 'Jalan Bahagia No. 789', nomorKontak: 764764 },
    { fullNama: 'Sarah Brown', address: 'Jalan Sejahtera No. 1011', nomorKontak: 8757674 },
    { fullNama: 'Michael Lee', address: 'Jalan Damai No. 1213', nomorKontak:  8654674}
  ];
const dataScedhule = [
    { prayerTime: '05:00', eatingTime: '05:00', familyTime: '21:00' },
    { prayerTime: '12:00', eatingTime: '12:00', familyTime: '21:00' },
    { prayerTime: '15:00', eatingTime: '15:00', familyTime: '21:00' },
    { prayerTime: '17:00', eatingTime: '17:00', familyTime: '21:00' },
    { prayerTime: '19:00', eatingTime: '19:00', familyTime: '21:00'}
  ];

const registrationToken = createRegistrasiToken(dataPendaftaran);
console.log("Token Pendaftaran:", registrationToken);

const verifiedRegistration = verifyRegistrasiToken(registrationToken);
console.log("Informasi Pendaftaran:", verifiedRegistration);

const scheduleToken = createScheduleToken(dataScedhule);
console.log("Token Jadwal Kegiatan:", scheduleToken);

const verifiedSchedule = verifyScheduleToken(scheduleToken);
console.log("Jadwal Kegiatan:", verifiedSchedule);