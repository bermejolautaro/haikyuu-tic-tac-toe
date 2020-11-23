const optionWinTo = {
  oikawa: ['iwaizumi'],
  kageyama: ['ushijima'],
  iwaizumi: ['oikawa'],
  ushijima: ['kageyama', 'oikawa']
}
const selectedOptionDiv = document.getElementById('selected-option');

const winMessage = document.getElementById('win-message');
const loseMessage = document.getElementById('lose-message');
const drawMessage = document.getElementById('draw-message');

const hideMessages = () => {
  winMessage.style.display = 'none';
  loseMessage.style.display = 'none';
  drawMessage.style.display =  'none';
}

hideMessages();

document.getElementById('oikawa').addEventListener('click', (event) => {
  handleClickOption(event.target);
})

document.getElementById('kageyama').addEventListener('click', (event) => {
  handleClickOption(event.target);
})

document.getElementById('iwaizumi').addEventListener('click', (event) => {
  handleClickOption(event.target);
})

document.getElementById('ushijima').addEventListener('click', (event) => {
  handleClickOption(event.target);
})


const handleClickOption = (selectedImg) => {
  hideMessages();
  selectedOptionDiv.innerHTML = '';
  selectedOptionDiv.append(selectedImg.cloneNode(true));
  const options = Object.keys(optionWinTo);
  const computerSelectedOptionImg = document.getElementById(options[Math.floor(Math.random() * options.length)]);
  const computerSelectedOptionDiv = document.getElementById('computer-selected-option');
  computerSelectedOptionDiv.innerHTML = '';
  computerSelectedOptionDiv.append(computerSelectedOptionImg.cloneNode(true));

  if (computerSelectedOptionImg.id === selectedImg.id) {
    drawMessage.style.display = 'block';
  }
  else if (optionWinTo[selectedImg.id].includes(computerSelectedOptionImg.id)) {
    winMessage.style.display = 'block';
  }
  else {
    loseMessage.style.display = 'block';
  }
}

