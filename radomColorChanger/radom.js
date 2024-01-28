// generate a random color

const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
  
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  let colorChangerStart_btn;
  const startChangingColour = function () {
    function changeBgColor() {
      document.body.style.backgroundColor = randomColor();
    }
    if (!colorChangerStart_btn) {
      colorChangerStart_btn = setInterval(changeBgColor, 1000);
    }
  };
  
  const stopChangingColour = function () {
    clearInterval(colorChangerStart_btn);
    colorChangerStart_btn = null;
  };
  
  document.querySelector('#start').addEventListener('click', startChangingColour);
  
  document.querySelector('#stop').addEventListener('click', stopChangingColour);
  