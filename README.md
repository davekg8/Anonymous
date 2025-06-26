# 💌 Anonymous Messaging Page

This project is a simple and elegant web page that allows users to send anonymous messages to the creator. The messages are collected through a Google Form. The page features a beautiful UI with a glassmorphism effect, background music, and a floating heart animation.

## ✨ Features

*   **Anonymous aessage submission:** Users can send messages with an optional nickname.
*   **Google Forms integration:** Messages are sent to a Google Form for easy collection.
*   **Geolocation:** The user's approximate location (city and country) is captured and sent with the message.
*   **Interactive UI:**
    *   A modern "glassmorphism" design.
    *   A subtle floating heart animation in the background.
    *   A button to toggle background music.
    *   A thank you message after form submission.
*   **Responsive design:** The layout is optimized for both desktop and mobile devices.
*   **Social media sharing:** The page includes Open Graph meta tags for sharing on social media.

## 🚀 How it Works

The project is built with HTML, CSS, and JavaScript. It uses Tailwind CSS for styling and a custom CSS file for animations and other visual effects. The `script.js` file handles form submission, toggles the background music, and fetches the user's location using the `ipapi.co` API.

When a user submits the form, the message is sent to a Google Form. The form submission is handled in a way that the user is not redirected to the Google Form page, providing a seamless experience.

## 📂 Files

*   `index.html`: The main HTML file containing the structure of the page.
*   `style.css`: The CSS file for custom styles and animations.
*   `script.js`: The JavaScript file for form submission, music, and geolocation.
*   `preview.png`: The image used for the favicon and social media previews.
*   `Déclaration d'amour.mp3`: The background music file.
*   `Whispers of the Savannah.mp3`: An alternative background music file.

## 🛠️ How to Use

To use this project, you need to replace the Google Form link in the `index.html` file with your own.

1.  Create a Google Form with two "Short answer" questions for the nickname and the message, and a "Paragraph" question for the location.
2.  Get the pre-filled link for your form and replace the `action` attribute of the form in the `index.html` file.
3.  Update the `name` attributes of the input fields in the `index.html` file to match the `entry` IDs of your Google Form fields.

## 🌐 Live Demo

A live demo of the project is available at [https://davekg8.github.io/Anonymous/](https://davekg8.github.io/Anonymous/).
