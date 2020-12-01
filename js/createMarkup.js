import markupTemplate from '../templates/countriesItem.hbs';
import oneCountryTemplate from '../templates/oneCountry.hbs';

const createMarkup = {
    contriesList: document.querySelector('#contriesList'),

    manyCountries(countriesArr) {
        const marcup = countriesArr.reduce((acc, country) => {
            acc += markupTemplate(country);
            return acc;
        }, '');

        contriesList.innerHTML = marcup;
    },

    oneCountries(country) {
        contriesList.innerHTML = oneCountryTemplate(country[0]);
    },

    cleanMarkup() {
        contriesList.innerHTML = '';
    }
};

export default createMarkup;