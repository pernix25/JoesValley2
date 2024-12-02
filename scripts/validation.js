document.addEventListener("DOMContentLoaded", function(event) {    
    initValidation("myform");
});

const phonePattern = '/[a-z]/';
const emailPattern = '/[\w]*@[\w]*.{1}(com|gov|edu|io|net){1}/';
const zipPattern = '/\d{5}/';

const states = [
    'AL', 'AK', 'AZ', 'AR',
    'CA', 'CO', 'CT',
    'DE', 'DC',
    'FM', 'FL',
    'GA', 'GU',
    'HI',
    'ID', 'IL', 'IN', 'IA',
    'KS', 'KY',
    'LA',
    'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'MP',
    'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND',
    'OH', 'OK', 'OR',
    'PW', 'PA', 'PR',
    'RI',
    'SC', 'SD', 
    'TN', 'TX', 
    'UT',
    'VT', 'VI', 'VA',
    'WA', 'WV', 'WI', 'WY'
];

let form = null;
function initValidation(formId) {
    form = document.getElementById(formId);

    let inputs = document.querySelectorAll('input');
    for (input of inputs) {
        input.addEventListener('change', inputChanged );
    }
    form.addEventListener('submit', submitForm );
}

function inputChanged(ev) {
    let element = ev.currentTarget;
    validateForm();

    element.classList.add('was-validated');
}

function submitForm(ev) {
    let form = ev.currentTarget;

    ev.preventDefault();
    ev.stopPropagation();

    validateForm();

    if (!form.checkValiditiy()) {
        let inputs = form.querySelectorAll("input");
        inputs.forEach(input => {
            input.classList.add("was-validated");
        });
    } else {
        form.style.display = "none";
        document.getElementById("successMsg").style.display = "block";
    }
}

function validateForm() {
    checkRequired('firstName', 'First name is required');
    checkRequired('lastName', 'Last name is required');
    checkRequired('address', 'address is required');
    checkRequired('city', 'city is required');

    if (checkRequired('state', 'State is required')) {
        validateState('state', 'Not a valid State, enter two digit code e.g., UT');
    }

    if (checkRequired('email', 'Email is required')) {
        checkFormat('email', 'Email format is bad', emailPattern);
    }

    if (checkRequired('zipCode', 'Zip code is required')) {
        checkFormat('zipcode', 'Malformed zip-code, please enter 5 digits for zipcode', zipPattern);
    }

    if (checkRequired('phone', 'Phone is required')) {
        checkFormat('phone', 'Phone format is bad', phonePattern);
    }

    checkRequired('options', 'You must select one');
}

function validateState(id, msg) {
    let element = document.getElementById(id);
    let valid = false;

    let elementText = element.textContent.toUpperCase();

    console.log(elementText)

    if (states.includes(elementText)) {
        valid = true;
    }

    setElementValidity(id, valid, msg);
}

function checkFormat(id, msg, regPattern) {
    let valid = false;
    let elementText = document.getElementById(id).textContent;

    if (regPattern.test(elementText)) {
        valid = true;
    }

    setElementValidity(id, valid, msg);
    return valid;
}

function checkRequired(id, msg) {
    let element = document.getElementById(id);
    let valid = false;
    let elType = element.type;

    switch (elType) {
        case 'text':
            if (element.value.trim() !== '') {
                valid = true;
            }
            break;
        case 'checkbox':
            const checkbox = document.querySelectorAll(input[name='options'])
            for (box of checkbox) {
                if (box.checked) {
                    valid = true;
                }
            }
            break;
    }

    setElementValidity(id, valid, msg);
    return valid;
}

function setElementValidity(id, valid, msg) {
    let element = document.getElementById(id);
    let errorDiv = element.nextElementSibling;

    if (valid) {
        element.setCustomValidity('');
        element.classList.remove('invalid');
        element.classList.add('valid');

        errorDiv.textContent = '';
        errorDiv.style.display = 'None';
    } else {
        element.setCustomValidity(msg);
        element.classList.add('invalid');
        element.classList.remove('valid');

        errorDiv.textContent = msg;
        errorDiv.style.display = 'block';
    }
}

document.getElementById('visitBtn').addEventListener('click', function() {
    let sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    let selectedLocation = document.getElementById('visitor');
    if (selectedLocation) {
        selectedLocation.style.display = 'block';
    }    
});
