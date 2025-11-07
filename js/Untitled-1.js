//1.1 simple JS practice and Browser checks of code
/*let myName = 'Bob';
document.write(myName);

let myName = 'Bob';
document.write(myName);
myName = 'John Doe';
document.write(myName);*/

/*alert('Hello World');

let favoriteFood = 'Pizza';

document.write(favoriteFood);*/

/*1.2 concatinating Strings
let name = 'George';
let age = 42;

document.write('My name is ' + name +' and I\'m ' + age +' years old! ');

let name = 'George';
let age = 42;

document.write( `Hello! This is a longer message here. My name is: ${name}, and I'm ${age}.`);*/

//1.2 creating an array
//initializing the array to the empty set
let pokemonList = [];
//an array of several Pokemon items
pokemonList = [
    {
        name: 'Bulbasaur',
        height: 7,
        type: ['grass', 'poison']
    },

    {
        name: 'Charmander',
        height: 6,
        type: ['fire']  
    },

    {
        name: 'Squirtle',
        height: 5,
        type: ['water']
    },

    {
        name: 'Weedle',
        height: 3,
        type: ['run-away']
    },
    
    {
        name: 'Pikachu',
        height: 4,
        type: ['static']
    },

];

const thresholdHeight = 5;

for (let i = 0; i < pokemonList.length; i++) {
    const pokemon = pokemonList[i];
    let output = `${pokemon.name} (height: ${pokemon.height})`;

    if (pokemon.height > thresholdHeight) {
        output += '- Wow, that is big!';
    }

    document.write(`${output}<br>`);
}





//1.3 else if loop
/*let name = 'George Herter';

if (name === 'John Doe')  {
    document.write('Hello my Name is John Doe');
} else {
    document.write('My name is NOT John Doe.')
}

let age = 42;

if (age === 20) {
    document.write('I am 20 years old!');
  } else {
    document.write('I am not 20 years old.');
  }*/

/*let day = 'monday'; 
  
if (day === 'saturday') {
    document.write('Yay it is the Weekend!');
} else if (day === 'sunday') {
    document.write('Yay it is the Weekend!'); 
} else {
    document.write('Boo it is not the weekend.');
}*/
  
  /*let age = 120;

  if (age > 12 && age < 20) {
    document.write('a teenager!');
  } else if (age > 1 && age < 12) {
    document.write('a kid!');
  } else if (age > 21 && age < 110) {
    document.write('an adult!');
  } else if (age > 111) {
    document.write('not alive!');
  }*/

  /*function functionOne(x) { 
    return x; 
    };
  
  function functionTwo(variable1) {
      // some code
     return  variable1 + 2;
  }
  console.log(functionOne(2));
  console.log(functionTwo(functionOne(2)));*/

  /*function greetingMessage(firstName, Lastname) {
    console.log("Hello, My Name is " + firstName + " " + Lastname);
    document.write("Hello, My Name is " + firstName + " " + Lastname );
  }

greetingMessage("John", "Smith");
greetingMessage("Jane", "Doe");*/

/*function Sum(val1, val2) {
    return val1 + val2;
};

let result = Sum(15,10);

document.write(result);*/

let message = function() {
    console.log("Hello World!");
};

message ();

let sayHello = function (firstName) {
    console.log("Hello " + firstName);
};

sayHello("Jorge Herter");
sayHello(" John Doe");