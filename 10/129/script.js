
const flight = 'LH34';
const jonas = {
    name : 'Jonas Schmedmann',
    passport: 356263355155
}

const checkIn = function (flightNum,passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr.' + passenger.name;
    
    if(passenger.passport == 356263355155){
        alert('Check in');
    }
    else{
        alert('Wrong passport');
    }
}
// checkIn(flight,jonas);
// console.log(flight);
// console.log(jonas);

// const flightNum = flight;
// const passenger = jonas;

const newPassport = function (person){
    person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(jonas);
checkIn(flight,jonas);