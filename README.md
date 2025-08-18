<<<<<<< HEAD
# React-Revision

This repository contains multiple React projects and practice folders. Each subfolder demonstrates different concepts, components, and utilities in React, including Vite setups, Tailwind CSS, custom hooks, and more.

## Folder Structure
- `01basic/` - Basic React setup and examples
- `02Counter/` - Counter app with React
- `05passwordgenerator/` - Password generator app
- `bgchanger/` - Background changer app
- `CSS_Practice/` - CSS and HTML practice files
- `currencyconverter/` - Currency converter app with custom hooks
- `CustomReact/` - Custom React implementation
- `tailwindprops/` - React with Tailwind CSS props

## Getting Started
Each project folder contains its own README and setup instructions. To run any React project in this repository:

### How to Run a React Project
1. Open a terminal and navigate to the desired project folder (e.g., `cd 01basic`)
2. Install all dependencies:
	```sh
	npm install
	```
3. Start the development server:
	```sh
	npm run dev
	```

### How to Install Tailwind CSS (if not already installed)
If you want to add Tailwind CSS to a project:
1. Install Tailwind CSS and its dependencies:
	```sh
	npm install -D tailwindcss postcss autoprefixer
	npx tailwindcss init -p
	```
2. Configure your `tailwind.config.js` and add Tailwind directives to your CSS:
	```css
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
	```
3. Make sure your `vite.config.js` or build tool is set up to process Tailwind CSS.

### Install All Dependencies for All Projects
To install dependencies for every project at once, run the following in PowerShell from the root folder:
```pwsh
Get-ChildItem -Directory | ForEach-Object { cd $_.FullName; if (Test-Path 'package.json') { npm install }; cd .. }
```

## Requirements
- Node.js
- npm

## License
This repository is for personal learning and practice.
=======
React Revision from Scratch
This repository is a personal project to revise React fundamentals and practice core concepts. The aim is to refresh knowledge, understand deeper concepts, and apply them to practical scenarios.
>>>>>>> 4a8becfa20183563949d8309b7b7526dbe03ed3a
