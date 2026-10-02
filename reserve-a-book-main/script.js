document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu Logic
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Form Validation Logic
    const form = document.getElementById('reservationForm');
    const successMessage = document.getElementById('successMessage');
    const summaryList = document.getElementById('summaryList');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let isValid = true;
            
            // Clear previous errors
            document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
            document.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
            
            // Helper to show errors
            const showError = (id, message) => {
                const input = document.getElementById(id);
                // For checkboxes or inputs where error message is a sibling
                let errorElement = input.parentElement.querySelector('.error-message');
                input.classList.add('input-error');
                if (errorElement) errorElement.textContent = message;
                isValid = false;
            };

            // 1. Validate Full Name (required)
            const fullName = document.getElementById('fullName').value.trim();
            if (!fullName) showError('fullName', 'Full Name is required.');

            // 2. Validate Email (required & email format)
            const email = document.getElementById('email').value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email) {
                showError('email', 'Email Address is required.');
            } else if (!emailRegex.test(email)) {
                showError('email', 'Please enter a valid email address.');
            }

            // 3. Validate Phone (required & pattern)
            const phone = document.getElementById('phone').value.trim();
            const phoneRegex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
            if (!phone) {
                showError('phone', 'Phone Number is required.');
            } else if (!phoneRegex.test(phone)) {
                showError('phone', 'Format must be 123-456-7890.');
            }

            // 4. Validate Password (required & length)
            const password = document.getElementById('password').value;
            if (!password) {
                showError('password', 'Password is required.');
            } else if (password.length < 8) {
                showError('password', 'Password must be at least 8 characters.');
            }

            // 5. Validate Confirm Password (cross-field rule)
            const confirmPassword = document.getElementById('confirmPassword').value;
            if (!confirmPassword) {
                showError('confirmPassword', 'Please confirm your password.');
            } else if (password !== confirmPassword) {
                showError('confirmPassword', 'Passwords do not match.');
            }

            // 6 & 7. Validate Dates (cross-field rule)
            const startDate = document.getElementById('startDate').value;
            const endDate = document.getElementById('endDate').value;
            
            if (!startDate) showError('startDate', 'Start Date is required.');
            if (!endDate) showError('endDate', 'End Date is required.');
            
            if (startDate && endDate) {
                if (new Date(endDate) <= new Date(startDate)) {
                    showError('endDate', 'End Date must be after Start Date.');
                }
            }

            // 8. Validate Membership (required select)
            const membership = document.getElementById('membership').value;
            if (!membership) showError('membership', 'Please select a membership tier.');

            // 9. Validate Terms (required checkbox)
            const terms = document.getElementById('terms').checked;
            if (!terms) showError('terms', 'You must agree to the terms.');

            // Success state
            if (isValid) {
                form.classList.add('hidden');
                successMessage.classList.remove('hidden');
                
                // Capitalize membership tier for display
                const membershipDisplay = membership.charAt(0).toUpperCase() + membership.slice(1);
                
                summaryList.innerHTML = `
                    <li><strong>Name:</strong> ${fullName}</li>
                    <li><strong>Email:</strong> ${email}</li>
                    <li><strong>Phone:</strong> ${phone}</li>
                    <li><strong>Dates:</strong> ${startDate} to ${endDate}</li>
                    <li><strong>Membership:</strong> ${membershipDisplay}</li>
                `;
            }
        });

        // Clear errors on reset
        form.addEventListener('reset', () => {
            document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
            document.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
        });
    }
});

// Function to reset from success state
window.resetFormState = function() {
    const form = document.getElementById('reservationForm');
    const successMessage = document.getElementById('successMessage');
    if (form && successMessage) {
        form.reset();
        document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
        document.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
        form.classList.remove('hidden');
        successMessage.classList.add('hidden');
    }
};
