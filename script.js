// DECLARATION FUNCTIONS

function changeText(event) { // trocar o texto do h2 pelo texto do input
  const h2 = document.querySelector('#meme-text');
  const text = event.target.value;
  h2.innerText = text;
}

function changePhoto(event) { // trocar/inserir a imagem do meme
  const reader = new FileReader();
  reader.onload = function oi() {
    document.querySelector('img').src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
}

function changeBorder(event) { // trocar/inserir a borda da cor do elemento
  const who = event.target;
  const div = document.getElementById('meme-image-container');
  console.log(who, document.getElementById('button-choose'));
  if (who !== document.getElementById('button-choose')) {
    if (who === document.getElementById('fire')) {
      div.style.border = '3px dashed red';
    } else if (who === document.getElementById('water')) {
      div.style.border = '5px double blue';
    } else {
      div.style.border = '6px groove green';
    }
  }
}

function chooseImageMeme(event) {
  const who = event.target;
  const img = document.getElementById('meme-image');
  if (who !== document.getElementById('choose-meme')) {
    const source = who.src;
    img.src = source;
  }
}

document.querySelector('#text-input').addEventListener('input', changeText);

document.querySelector('#meme-insert').addEventListener('change', changePhoto);

document.querySelector('#button-choose').addEventListener('click', changeBorder);

document.querySelector('#choose-meme').addEventListener('click', chooseImageMeme);
