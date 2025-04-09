const show = document.getElementById('body');
const heading = document.getElementById('heading');
const red = document.getElementById('red');
const orange = document.getElementById('orange');
const yellow = document.getElementById('yellow');
const green = document.getElementById('green');
const blue = document.getElementById('blue');
const indigo = document.getElementById('indigo');
const violet = document.getElementById('violet');



red.addEventListener('click', function() {
  body.style.backgroundColor = 'red';
  heading.innerHTML = 'Red';
});
orange.addEventListener('click', function() {
  body.style.backgroundColor = 'orange';
  heading.innerHTML = 'Orange';
});
yellow.addEventListener('click', function() {
  body.style.backgroundColor = 'yellow';
  heading.innerHTML = 'Yellow';
});
green.addEventListener('click', function() {
  body.style.backgroundColor = 'green';
  heading.innerHTML = 'Green';
});
blue.addEventListener('click', function() {
  body.style.backgroundColor = 'blue';
  heading.innerHTML = 'Blue';
});
indigo.addEventListener('click', function() {
  body.style.backgroundColor = 'indigo';
  heading.innerHTML = 'Indigo';
});
violet.addEventListener('click', function() {
  body.style.backgroundColor = 'violet';
  heading.innerHTML = 'Violet';
});

