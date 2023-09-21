const message = (name) => {
    console.log(`The winner is ${name}`);
}


const Tiger = require('./Tiger.js'); // Impor class Tiger
const Wolf = require('./Wolf.js');   // Impor class Wolf

const fighting = (tiger, wolf) => {
    if (tiger.strength > wolf.strength) {
        tiger.growl();
        message('Tiger');
        return;
    }

    if (wolf.strength > tiger.strength) {
        wolf.howl();
        message('Wolf');
        return;
    }

    console.log('Tiger and Wolf have the same strength');
}

const tiger = new Tiger();
const wolf = new Wolf();

fighting(tiger, wolf);
