import createMarkup from './createMarkup';
import myError from './pnotify';


function verifyResultCountries(arrayCountries) {
    if (arrayCountries.length > 10) {
        myError.createError();
        createMarkup.cleanMarkup();
        return;
    }
      else if (arrayCountries.length === 1) {
        myError.stack.close();
        createMarkup.oneCountries(arrayCountries);
        return;
    }
      else {
        myError.stack.close();
        createMarkup.manyCountries(arrayCountries);
    }
};

export default verifyResultCountries;
