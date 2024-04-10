# PassX - Password Generator App

PassX is a simple password generator app that allows users to generate strong passwords, copy them to the clipboard, and save them for future reference.

# Learning Objectives

I have developed this project with the following learning objectives in mind:

- To learn and apply React hooks such as `useEffect`, `useRef`, and `useCallback`.
- To understand and utilize JavaScript features such as the `localStorage` API for storing and retrieving data.


## Features

- Generate Strong Passwords: Click the "Generate" button to create a secure password.
- Copy Password: Click the "Copy" button to copy the currently displayed password to the clipboard.
- Save Password: Click the "Save" button to save the generated password to local storage for later use.
- Additional Options:
  - Customize Password Length: Choose a password length between 4 and 12 characters.
  - Include Numbers: Include numeric characters in the generated password.
  - Include Characters: Include special characters in the generated password.
  - Include Uppercase/Lowercase: Customize whether to include uppercase and/or lowercase letters in the generated password.

## Technologies Used

PassX is built using the following technologies:

- **Vite**: Vite is used as the build tool and dev server for this project. It provides fast and efficient development with React and JavaScript.
- **Tailwind CSS**: Tailwind CSS is utilized for styling the PassX app, providing utility classes for rapid UI development.
- **Vercel**: PassX is deployed and hosted on Vercel, offering seamless deployment and hosting capabilities.

## Demo

Try PassX live: [PassX Demo](https://harshsanket-passx.vercel.app)

## How to Use

1. Open the PassX app.
2. Click the "Generate" button to create a new password.
3. Use the additional options dropdown to customize the password generation if needed.
4. Click the "Copy" button to copy the generated password to the clipboard.
5. Click the "Save" button to store the generated password in the local storage.
6. To view saved passwords, select the "Show Saved Passwords" option from the menu.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/harshsanket/passwordgeneratorv2.git
```
2. Navigate to the project directory:
```bash
cd passx
```
3. Install dependencies:
```bash
npm install
```
4. Start the development server:
```bash
npm run dev
```
5. Now Open PassX in your browser
```bash
http://localhost:5173/
```

## License

This project is licensed under the [MIT License](LICENSE).

