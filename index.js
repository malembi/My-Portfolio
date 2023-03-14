// Get the modal
const modal = document.getElementById('myModal');

// Get the button that opens the modal
const btn = document.getElementById('myBtn');

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];

const ptf = document.getElementsByClassName('ptf')[0];
const abt = document.getElementsByClassName('abt')[0];
const cnt = document.getElementsByClassName('cnt')[0];
// When the user clicks the button, open the modal
btn.onclick = function open() {
  modal.style.display = 'block';
  modal.style.backgroundColor = 'transparent';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function close() {
  modal.style.display = 'none';
};

ptf.onclick = function portfolio() {
  modal.style.display = 'none';
};
abt.onclick = function about() {
  modal.style.display = 'none';
};
cnt.onclick = function contact() {
  modal.style.display = 'none';
};
