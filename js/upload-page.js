// show or hide for review upload file

const checkbox = document.getElementById('review');

const box = document.getElementById('file-show');
const label = document.getElementById('file-show-label')

checkbox.addEventListener('click', function handleClick() {
  /*if (box.style.display == 'block') {
    //console.log(box.style.display);
    box.classList.add("box-hidden")
    //console.log(box.className);
  }
  if (checkbox.checked) {
    box.style.display = 'block';
    box.classList.remove("box-hidden")
  }*/

  if (box.classList.contains("box-hidden")) {
    label.classList.remove("box-hidden");
    box.classList.remove("box-hidden");
  } else {
    label.classList.add("box-hidden");
    box.classList.add("box-hidden");
  }
});



