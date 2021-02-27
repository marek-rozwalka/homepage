/*const firstName = "Kampik";
const age = 2;

console.log(firstName);
console.log(age);

alert("siema UWAGA");
console.log("heha");

console.log(`Siema nazywam się ${firstName} i mam ${age} lata.`);

const heading = document.querySelector(".main__heading--js");
heading.innerHTML = `Siema nazywam się ${firstName} i mam ${age} lata.`;

const emptyParagraph = document.querySelector(".week-summary__description--js");
emptyParagraph.innerHTML = `Nawet uzupełniłem treść javascriptem!`;
*/
/*function calculate(myNumber) {
    console.log(`Dostałam ${myNumber}`);
    myNumber = myNumber * 7;
    return myNumber;
}

const myResult = calculate(age);

console.log(myResult);
console.log(age);*/
/*
function greet(age, firstName) {
    console.log (
        `Witaj Drogi Odwiedzający, nazywam się ${firstName} i mam ${age} lata.`
    );
}

greet(firstName, age)
*/
function createContent(querySelectorContent, content) {
    const element = document.querySelector(querySelectorContent);
    element.innerHTML = content;
 }

function helloWorld() {
    console.log('Witaj świecie');
}

helloWorld();

createContent('.week-summary__description--js', 'Siema, siema');

createContent('.week-summary__title--js', 'podmieniony tytuł');