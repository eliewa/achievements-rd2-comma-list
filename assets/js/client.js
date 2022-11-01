const nouns = [];
let form = document.querySelector('form');
let output = document.querySelector('.output');
let button = document.querySelector(".sum")

const add = (event) => {
  event.preventDefault();
  let newWord = form.add.value;
  nouns.push(newWord);
}

const print = (event) => {
  event.preventDefault();
  let sentence = 'My favourite pets are the ';
  let counter = 0;
  for (i = 0 ; i < nouns.length - 1; i++) {
    sentence += nouns[i] + ', ';
    counter++;
  }

  sentence += `and ${nouns[counter]}.`;

  output.innerText = sentence;
}

button.addEventListener('click', add);
form.addEventListener('submit', print);
