# React Project Assignment

## Overview

This project is a React-based web application that demonstrates:
- A **Counter Component** with animated background changes.
- A **User Data Form** that collects user details and warns about unsaved changes.
- A **Rich Text Editor** for displaying and formatting user data.

Built using React with TypeScript, the project leverages Material UI for the UI components, React Spring for smooth animations, React Router for navigation, and React Quill for the rich text editing experience.

## Features

### Counter Component
- **Buttons:** Increment, Decrement, Reset.
- **Animated Background:** Uses React Spring to smoothly animate the background height based on the counter value.

### User Data Form
- **Form Fields:** Name, Address, Email, and Phone.
- **User ID Generation:** Automatically creates a unique ID for each user.
- **Data Persistence:** Saves user data to local storage (or RTK if configured).
- **Unsaved Changes Warning:** Alerts users if they attempt to leave with unsaved changes.

### Rich Text Editor
- **Formatting Options:** Supports bold, italic, underline, and list formatting.
- **Data Persistence:** Content is saved locally, ensuring it persists across sessions.

### Optional Features (Planned/Implemented)
- **User Authentication:** Google Sign-In with private/public route management.
- **Dashboard Visualization:** Displays user profile data and trends using React Charts.

## Built With

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Material UI](https://mui.com/)
- [React Spring](https://www.react-spring.io/)
- [React Router](https://reactrouter.com/)
- [React Quill](https://github.com/zenoamaro/react-quill)
- [uuid](https://www.npmjs.com/package/uuid)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or later)
- npm (comes with Node.js) or yarn

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/ShoibAli/Project_01.git
   cd Project_01
