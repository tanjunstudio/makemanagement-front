//const check2_d = document.getElementById('2d');
//const check3_d = document.getElementById('3d');
//const check_shot = document.getElementById('shot');

//const box_2d = document.getElementById('2dprod');
//const box_3d = document.getElementById('3dprod');


check2_d.addEventListener('click', function handleClick() {
  
  if (!box_3d.classList.contains('box-hidden')){
    box_3d.classList.add('middle-list');
  }
  if (box_2d.classList.contains("box-hidden")) {
    box_2d.classList.remove("box-hidden");
  } else {
    box_2d.classList.add("box-hidden");
  }
});

check3_d.addEventListener('click', function handleClick() {
    
    if (!box_2d.classList.contains('box-hidden')){
        box_3d.classList.add('middle-list');
    }
    if (box_3d.classList.contains("box-hidden")) {
      box_3d.classList.remove("box-hidden");
    } else {
      box_3d.classList.add("box-hidden");
      box_3d.classList.remove("middle-list");
    }
  });


  function companySelect(){
    const address = document.getElementById('address');
    const vat = document.getElementById('vat');

    address.value='via dei pini 14';
    vat.value ='25698251469';

  }