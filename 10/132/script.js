const greet =  function (greeting) {
    return function(name){
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('Hey');
greeterHey('jonas');
greeterHey('Steven');

//challenge

const greetArr = greeting => name => console.log(`${greeting} ${name}`); 
greetArr('Hi')('jonas');