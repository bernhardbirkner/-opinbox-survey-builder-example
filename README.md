# React + Vite + Opinbox Survey Builder

Example project using Vite + React and creating surveys using (Opinbox Builder)[https://www.npmjs.com/package/opinbox-survey-builder]

# Setup

## 1. Create a new App with Vite + React

(Any other React setup will work too!)

```bash
pnpm create vite@latest
```

## 2. Install dependencies

### Opinbox Builder

```bash
pnpm add opinbox-survey-builder
```

### SurveyJS

```bash
pnpm add survey-core survey-creator-core survey-react-ui survey-creator-react jspsych
```

### 3. Add the Style

Import Opinbox-Builder styles into the `index.css` file

```css
/* Import the Opinbox-Builder Styles */
@import "opinbox-survey-builder/dist/style.css";
```

### 4. Start building Surveys!

```bash
npm run dev
```

###

### 7. Run your survey

```bash
npm run preview
```
