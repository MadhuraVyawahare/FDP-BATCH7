const form = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

// Validation functions
const validators = {
    firstName: (value) => value.trim() !== '',
    lastName: (value) => value.trim() !== '',
    email: (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
    },
    phone: (value) => {
        if (value === '') return true; // Optional field
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        return phoneRegex.test(value) && value.length >= 10;
    },
    subject: (value) => value !== '',
    message: (value) => value.trim().length >= 10,
    terms: (value) => value === true
};

// Show error message
function showError(fieldName) {
    const errorElement = document.getElementById(`${fieldName}Error`);
    if (errorElement) {
        errorElement.classList.add('show');
    }
}

// Hide error message
function hideError(fieldName) {
    const errorElement = document.getElementById(`${fieldName}Error`);
    if (errorElement) {
        errorElement.classList.remove('show');
    }
}

// Validate single field
function validateField(fieldName) {
    const field = document.getElementById(fieldName);
    let value = field.value;

    if (field.type === 'checkbox') {
        value = field.checked;
    }

    const isValid = validators[fieldName](value);

    if (!isValid) {
        showError(fieldName);
        return false;
    } else {
        hideError(fieldName);
        return true;
    }
}

// Real-time validation
const inputFields = ['firstName', 'lastName', 'email', 'phone', 'subject', 'message', 'terms'];
inputFields.forEach(fieldName => {
    const field = document.getElementById(fieldName);
    if (field) {
        field.addEventListener('blur', () => validateField(fieldName));
        field.addEventListener('change', () => validateField(fieldName));
    }
});

// Form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validate all fields
    let isFormValid = true;
    inputFields.forEach(fieldName => {
        if (!validateField(fieldName)) {
            isFormValid = false;
        }
    });

    if (isFormValid) {
        // Simulate form submission
        console.log('Form Data:', {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value,
            terms: document.getElementById('terms').checked
        });

        // Show success message
        successMessage.classList.add('show');

        // Reset form
        form.reset();

        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 5000);
    }
});

// Reset button clears errors
form.addEventListener('reset', () => {
    inputFields.forEach(fieldName => {
        hideError(fieldName);
    });
});
