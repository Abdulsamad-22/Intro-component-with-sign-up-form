const inputElement = document.querySelectorAll('.js-input-element');

const errorMessageDisplay = document.querySelectorAll('.js-error-message');

const errorIcon = document.querySelector('.error-icon');

const errorMessageContainer = [
`First name cannot be empty`,
`Last name cannot be empty`,
`Looks like this is not an email`,
`Password cannot be empty`
];


const button = document.querySelector('.js-cta');
button.addEventListener('click', ()=> {
    inputElement.forEach((input, index) => {

        if (input.value === '') {
            errorMessageDisplay[index].textContent = errorMessageContainer[index];
            input.classList.add('error-icon');
            input.classList.add('input-error');
            input.classList.add('error-text');
            input.placeholder = '';
        }

        if (index === 2 && !input.value.endsWith('@gmail.com')) {
            errorMessageDisplay[index].textContent = 'Please use a valid Gmail address.';
            input.classList.add('error-icon');
            input.classList.add('input-error');
            input.classList.add('error-text');
            input.placeholder = '';
        }
    });
});