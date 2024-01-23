const form = document.querySelector('form');
// this use case will give you empty value
//const height = parseInt(document.querySelector(`#height`).value)




form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector(`#height`).value);
  const weight = parseInt(document.querySelector(`#weight`).value);
  const result = document.querySelector('#results');
  

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Pleae give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Pleae give a valid weight ${weight}`;
  } else {
    const bmi = weight / ((height * height) / 10000).toFixed(2);
    // show yhe result

    result.innerHTML = `<span>${bmi}</span>`;

    const weight_guide = document.querySelector('#weight-guide');

    if( bmi < 18.6){
      weight_guide.innerHTML = `<h1>you are under weight</h1>`

    } else if (bmi <= 24.9){
      weight_guide.innerHTML =  `<h1>Your weight is normal</h1>`
    }else if(bmi > 27.9){
      weight_guide.innerHTML = `<h1>You are Over-weighted</h1>`

    }


  }

  

});
