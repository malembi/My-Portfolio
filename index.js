// declare a variable modal
const modal = document.getElementById('myModal');

// declare the hamburger as a button
const btn = document.getElementById('myBtn');

// If the user clicks on this element closes the modal
const span = document.getElementsByClassName('close')[0];

// If the user clicks on any of this element,it will direct to the clicked section
const ptf = document.getElementsByClassName('ptf')[0];
const abt = document.getElementsByClassName('abt')[0];
const cnt = document.getElementsByClassName('cnt')[0];
// if the user clicks on the hamburger, show modal
btn.onclick = function open() {
  modal.style.display = 'block';
  modal.style.backgroundColor = 'transparent';
};

// if the user clicks the "X", close the modal
span.onclick = function close() {
  modal.style.display = 'none';
};
//  write function to not show modal contents when,list items are clicked
ptf.onclick = function portfolio() {
  modal.style.display = 'none';
};
abt.onclick = function about() {
  modal.style.display = 'none';
};
cnt.onclick = function contact() {
  modal.style.display = 'none';
};
