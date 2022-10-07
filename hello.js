console.log('Hello World!');

// fetch name from command or fallback
const nameArg0 = (process.argv[2] || 'world');

// output message
console.log(`Hello ${ nameArg0 }!`);
console.log(`The first argument is  ${ process.argv[1] }!`);
console.log(`The zero argument is  ${ process.argv[0] }!`);
const nameArg = (process.argv[2] || process.env.USERNAMEX  || process.env.USERDOMAIN ||'world');
console.log(`Hello ${ nameArg }!`);

// fetch name from command argument, environment, or fallback
const nameArg3 = capitalize(process.argv[2] || process.env.USER || process.env.USERNAME || 'world');

// output message
console.log(`HelloV ${ nameArg3 }!`);

// capitalize the first letter of all words
function capitalize(str) {

 return str
    .trim()
    .toLowerCase()
	    .split(' ')
    .map(word => word.charAt(0).toLowerCase()+ word.charAt(1).toUpperCase() + word.slice(2))
    .join(' ');
}

this.id='export';
console.log(this);
