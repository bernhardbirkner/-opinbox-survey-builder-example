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
/* Add SurveyJS And JsPsych Styles */
@import "survey-core/defaultV2.min.css";
@import "survey-creator-core/survey-creator-core.css";
@import "jspsych/css/jspsych.css";
```

### 4. Start building Surveys!

```bash
npm run dev
```

### 5. Build Your survey for production

```bash
npm run build
```

### 6. Run your survey

```bash
npm run preview
```
