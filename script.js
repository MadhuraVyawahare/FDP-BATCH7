const form = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');
const errorMessage = document.getElementById('errorMessage');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Validate form
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value.trim();

    // Hide messages
    successMessage.style.display = 'none';
    errorMessage.style.display = 'none';

    // Check if all required fields are filled
    if (!firstName || !lastName || !email || !subject || !message) {
        errorMessage.style.display = 'block';
        return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorMessage.textContent = '✗ Please enter a valid email address.';
        errorMessage.style.display = 'block';
        return;
    }

    // Show success message
    successMessage.style.display = 'block';

    // Get form data for display
    const phone = document.getElementById('phone').value || 'Not provided';
    const subscribe = document.getElementById('subscribe').checked ? 'Yes' : 'No';

    console.log('Form Data:');
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);
    console.log(`Subscribe: ${subscribe}`);

    // Reset form after 2 seconds
    setTimeout(() => {
        form.reset();
        successMessage.style.display = 'none';
    }, 3000);
});

// Add real-time validation for email
document.getElementById('email').addEventListener('blur', function() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (this.value && !emailRegex.test(this.value)) {
        this.style.borderColor = '#f44336';
    } else {
        this.style.borderColor = '#e0e0e0';
    }
});
