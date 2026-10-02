# Library Book Reservation System

This project is a simple, responsive, and attractive web-based library book reservation system developed for the Information System Design and Software Engineering Lab Assignment. 

## Features

### Page 1: Landing / Home Page (`index.html`)
- **Responsive Navigation Bar**: Includes links to different sections and a hamburger menu for mobile devices.
- **Hero Section**: Introduces the system with a clear heading, description, and primary/secondary call-to-action buttons.
- **Services Section**: Displays three feature cards (Huge Collection, Study Spaces, Upcoming Events) using clean, minimalist design.
- **Footer**: Contains contact information and social media links.

### Page 2: Reservation Form (`reservation.html`)
- **Comprehensive Form**: Captures booking details with 9 different fields.
- **Multiple Input Types**: Uses `text`, `email`, `tel`, `password`, `date`, `select`, and `checkbox` inputs.
- **Client-Side Validation (`script.js`)**:
  - Ensures all required fields are filled.
  - Validates correct email format.
  - Enforces specific patterns (e.g., 10-digit phone number, minimum password length).
  - Cross-field validation (Confirm Password must match Password, End Date must be after Start Date).
- **Dynamic Feedback**: Displays clear error messages below relevant fields and shows a success summary upon valid submission.

## Technologies Used
- **HTML5**: For semantic structuring of the web pages.
- **Vanilla CSS3**: For a clean, modern, and minimalist styling (no external CSS frameworks were used).
- **Vanilla JavaScript**: For form validation and mobile menu toggling.
- **FontAwesome**: For UI icons.
- **Google Fonts (Inter)**: For modern typography.

## How to Run the Project
1. Clone or download this repository.
2. Navigate to the project folder.
3. Open `index.html` in any modern web browser to view the landing page.
4. Click on the "Reserve a Book" button in the navigation bar to interact with the form. No backend server is required as all validations and interactions are handled via client-side JavaScript.

## License
This project was created for educational purposes.
