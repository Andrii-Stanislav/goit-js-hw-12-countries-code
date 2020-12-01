import verifyResultCountries from './verifyResultCountries';
import createMarkup from './createMarkup';


const debounce = require('lodash.debounce');

const inputCountries = document.querySelector('#input-countries');
inputCountries.addEventListener('input', debounce(fetchCountries, 500),);


function fetchCountries() {
  const inputText = inputCountries.value;
  
  if (inputText === '') {
    createMarkup.cleanMarkup();
    return
  }
      
  fetch(`https://restcountries.eu/rest/v2/name/${inputText}`)
      .then(response => {
        return response.json();
    })
      .then(data => {
        verifyResultCountries(data);
    })
      .catch(error => {
        console.log('Error');
    });
};


