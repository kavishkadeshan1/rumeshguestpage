# Rumesh Guest Page

A simple React website hosted on GitHub Pages.

## Getting Started

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm start
```

The app will run at [http://localhost:3000](http://localhost:3000).

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
```bash
npm run deploy
```

## Features

- Clean, centered layout with gradient background
- Click counter functionality
- Fully responsive design
- No external dependencies beyond React

## Configuration

Update the `homepage` field in `package.json` with your GitHub Pages URL:

```json
"homepage": "https://yourusername.github.io/your-repo-name"
```

Or for a custom domain like yours:

```json
"homepage": "https://rumesh.name.com"
```

## Deployment to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Update `package.json` with correct homepage
3. Run: `npm run deploy`

This will create a `gh-pages` branch and deploy the build folder.
