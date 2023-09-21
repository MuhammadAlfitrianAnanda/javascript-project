const fs = require('fs');
const path = require('path');

// Tentukan path ke file 'notes.txt'
const filePath = path.resolve(__dirname, 'notes.txt');

// Gunakan fs.readFile untuk membaca isi file
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Terjadi kesalahan:', err);
        return;
    }

    console.log('Isi file "notes.txt":');
    console.log(data);
});
