const div = document.createElement('div'); // Make a div
div.classList.add('wrapper'); // add a class of wrapper to it
document.body.appendChild(div); // put it into the body

const ul = document.createElement('ul'); // make an unordered list
const li1 = document.createElement('li'); // add three list items with the words "one, two three" in them
li1.textContent = 'one';
const li2 = document.createElement('li');
li2.textContent = 'two';
const li3 = document.createElement('li');
li3.textContent = 'three';

ul.insertAdjacentElement("afterbegin", li1);
ul.insertAdjacentElement("afterbegin", li2);
ul.insertAdjacentElement("afterbegin", li3);
div.insertAdjacentElement("afterbegin", ul); // put that list into the above wrapper

const image = document.createElement('img'); // create an image
//image.setAttribute('src', "https://picsum.photos/200"); // set the source to an image
image.src = "https://picsum.photos/200";
//image.setAttribute('width', "250"); // set the width to 250
image.width = 250;
image.height = 250;
image.classList.add('cute'); // add a class of cute
//image.setAttribute('alt', 'Cute Puppy'); // add an alt of Cute Puppy
image.alt = 'Cute Puppy';
div.appendChild(image); // Append that image to the wrapper

const divString =
    `<div>
        <p>Some</p>
        <p>Other</p>
    </div>`; // with HTML string, make a div, with two paragraphs inside of it

ul.insertAdjacentHTML("beforebegin", divString); // put this div before the unordered list from above

const divStr = div.querySelector('div'); 
divStr.lastElementChild.classList.add('warning'); // add a class to the second paragraph called warning
divStr.firstElementChild.remove(); // remove the first paragraph

function generatePlayerCard (name, age, height) { // create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
    const str = `
        <div class="playerCard">
            <h2>${name} — ${age}</h2>
            <p>They are ${height} and ${age} years old. In Dog years this person would be ${age * 7}. That would be a tall dog!</p>
            <button type='button' class = 'delete'> &times; Delete card</button>
        </div>
    `;
    return str;
}

const cards = document.createElement('div');
cards.classList.add('cards'); // make a new div with a class of cards
let cardsHTML = generatePlayerCard('one', 10, 100); // Have that function make 4 cards
cardsHTML += generatePlayerCard('two', 10, 100);
cardsHTML += generatePlayerCard('three', 10, 100);
cardsHTML += generatePlayerCard('four', 10, 100);

cards.innerHTML = cardsHTML; // append those cards to the div

div.insertAdjacentElement('beforebegin', cards); // put the div into the DOM just before the wrapper element




// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener

const buttons = document.querySelectorAll('.delete');

function deleteCard (e){
    const buttoThatGotClicked = e.currentTarget;
    buttoThatGotClicked.closest('.playerCard').remove();
    //buttoThatGotClicked.parentElement.remove();
    //console.log(e.currentTarget);
}

buttons.forEach(button => button.addEventListener('click', deleteCard));



