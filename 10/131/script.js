

const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function (str){
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

//higher-order function
const tranformer = function (str,fn){
    console.log(`Original string ${str}`);
    console.log(`Tranformed string ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`)
}
tranformer('Javascript is the best!', upperFirstWord);

tranformer('Javascript is the best!', oneWord)

const high5 = function (){
    console.log('hi')
}

document.body.addEventListener('click',high5);
['jonas','Martha','Adam'].forEach(high5)