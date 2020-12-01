
import {error, Stack} from'@pnotify/core';
import"@pnotify/core/dist/PNotify.css";
import"@pnotify/core/dist/BrightTheme.css";

const myStack = new Stack({
    dir1: 'down',
    context: document.querySelector('#input-box'),
});

const myError = {
    stack: myStack,
    
    createError() {
        return error({
            text: "Too many matches found. Please enter a more specific query!",
            delay: Infinity,
            stack: myStack,
        })
    },
}

export default  myError;



















// import { error, Stack } from '@pnotify/core';
// import '@pnotify/core/dist/BrightTheme.css';

// function usePnotifyError() {

//     const myStack = new Stack({
//         dir1: 'down',
//         context: document.querySelector('#input-box'),
//     });

//     const myError = error({
//         text: 'Too many matches found. Please enter a more specific query!',
//         type: 'error',
//         title: 'Error',
//         width: '300px',
//         hide: true,
//         delay: Infinity,
//         closer: false,
//         sticker: false,
//         autoOpen: false,
//         stack: myStack,
//     });

//     console.dir(myError);
// }

// export default usePnotifyError;

