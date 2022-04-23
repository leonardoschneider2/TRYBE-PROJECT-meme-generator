// DECLARATION FUNCTIONS

function changeText(event) { // trocar o texto do h2 pelo texto do input
  const h2 = document.querySelector('#meme-text');
  const text = event.target.value;
  h2.innerText = text;
}

document.querySelector('#text-input').addEventListener('input', changeText);
