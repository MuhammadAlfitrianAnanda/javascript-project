const fs = require('fs');
const path = require('path');

// Tentukan path ke file 'input.txt' dan 'output.txt'
const inputFilePath = path.resolve(__dirname, 'input.txt');
const outputFilePath = path.resolve(__dirname, 'output.txt');

// Buat readable stream dari 'input.txt'
const readableStream = fs.createReadStream(inputFilePath, 'utf8');

// Buat writable stream ke 'output.txt'
const writableStream = fs.createWriteStream(outputFilePath, 'utf8');

// Menggunakan pipe untuk mengalirkan data dari readable stream ke writable stream
readableStream.pipe(writableStream);

// Menambahkan event handler ketika proses selesai
writableStream.on('finish', () => {
    console.log('Proses penulisan selesai.');
});

// Tangani kesalahan jika terjadi
readableStream.on('error', (err) => {
    console.error('Terjadi kesalahan dalam membaca berkas input:', err);
});

writableStream.on('error', (err) => {
    console.error('Terjadi kesalahan dalam menulis ke berkas output:', err);
});
