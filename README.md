# Light & Dark Theme Toggle with Context API

This project demonstrates how to implement a light/dark theme toggle in a React application using the Context API. It provides a simple and scalable way to manage theme state across your app, allowing users to switch between light and dark modes seamlessly.

## Features

- Toggle between light and dark themes
- Uses React Context API for global state management
- Modern React (with hooks)
- Vite for fast development
- Responsive and minimal UI

## Project Structure

```
dark_and_light_mode/
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   ├── ToggleButton.jsx
│   ├── assets/
│   │   └── react.svg
│   └── ContextAPI/
│       └── index.jsx
├── index.html
├── package.json
├── vite.config.js
└── ...
```

## Getting Started

### Prerequisites

- Node.js (v16 or above recommended)
- pnpm (or npm/yarn)

### Installation

1. Clone the repository:
	```bash
	git clone https://github.com/vikashpal28/Light_Dark_theme_with_ContextAPI.git
	cd Light_Dark_theme_with_ContextAPI/dark_and_light_mode
	```
2. Install dependencies:
	```bash
	pnpm install
	# or
	npm install
	# or
	yarn install
	```

### Running the App

Start the development server:

```bash
pnpm run dev
# or
npm run dev
# or
yarn dev
```

Open your browser and go to [http://localhost:5173](http://localhost:5173) to see the app in action.

## How It Works

- The theme state (light/dark) is managed using React's Context API in `src/ContextAPI/index.jsx`.
- The `ToggleButton.jsx` component allows users to switch themes.
- The current theme is applied globally using CSS classes.

## Customization

- You can easily extend the theme context to support more themes or persist the user's choice using localStorage.
- Update styles in `App.css` and `index.css` to match your design preferences.

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

Created by [vikashpal28](https://github.com/vikashpal28).