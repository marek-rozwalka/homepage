const firstName = "Kampik";
const age = 2;

console.log(firstName);
console.log(age);

alert('siema UWAGA');
console.log('heha');

console.log(`Siema nazywam się ${firstName} i mam ${age} lata.`);

const heading = document.querySelector('.main__heading--js');
heading.innerHTML = `Siema nazywam się ${firstName} i mam ${age} lata.`;

const emptyParagraph = document.querySelector('.week-summary__description--js');
emptyParagraph.innerHTML = `Nawet uzupełniłem treść javascriptem!`;