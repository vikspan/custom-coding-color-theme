# Custom Coding Color Theme

This is a simple React app built with Vite and Sass that lets you customize the color theme for languages like CSS and HTML.  
Try out different syntax coloring, see how your code looks like in real time, and then generate matching VS Code color rules.

## Features

- Live preview of CSS and HTML syntax highlighting with customizable colors 
- Generate VS Code-compatible token color rules for any saved theme
- Built with React and Vite for fast development  
- Ready for GitHub Pages deployment

## Demo

- **Live App:** [https://vikspan.github.io/custom-coding-color-theme](https://vikspan.github.io/custom-coding-color-theme)  
- **Repository:** [https://github.com/vikspan/custom-coding-color-theme](https://github.com/vikspan/custom-coding-color-theme)

## Getting Started

1. Clone the repo  
2. Run `npm install`  
3. Run `npm run dev` to start the development server  
4. Open your browser at `http://localhost:5173`

## Usage

1. Select a language (CSS or HTML).  
2. Adjust the colors for different syntax constructs (selectors, properties, etc.).  
3. See your changes update in real time.  
4. Copy the generated VS Code rules and paste them into your `settings.json` to apply your theme.

## Deployment

To build for production:

```bash
npm run build
```

To deploy to GitHub Pages:

```bash
npm run deploy
```