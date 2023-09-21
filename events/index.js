// TODO 1
const EventEmitter = require('events'); // Impor modul EventEmitter dari core module events

// TODO 2
const myEmitter = new EventEmitter(); // Buat instance EventEmitter dengan nama myEmitter

// TODO 3
const birthdayEventListener = (name) => {
    console.log(`Happy Birthday ${name}!`);
}

myEmitter.on('Birthday', birthdayEventListener); // Tentukan birthdayEventListener sebagai aksi ketika event 'birthday' dibangkitkan pada myEmitter

// TODO 4
myEmitter.emit('Birthday', 'Alfi'); // Bangkitkan event 'birthday' pada myEmitter dengan method emit() dan beri nilai argumen listener dengan nama Anda
