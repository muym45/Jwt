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

const registrationToken = createRegistrasiToken("Jawir", "Jl.Balikkan", "081234567890");
console.log("Token Pendaftaran:", registrationToken);

const verifiedRegistration = verifyRegistrasiToken(registrationToken);
console.log("Informasi Pendaftaran:", verifiedRegistration);

const scheduleToken = createScheduleToken("06:00", "12:00", "17:00");
console.log("Token Jadwal Kegiatan:", scheduleToken);

const verifiedSchedule = verifyScheduleToken(scheduleToken);
console.log("Jadwal Kegiatan:", verifiedSchedule);