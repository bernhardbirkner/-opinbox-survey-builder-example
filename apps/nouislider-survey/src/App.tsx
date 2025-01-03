import { OpinboxBuilder } from 'opinbox-survey-builder'
import { json as survey1 } from './surveyjs/survey1';
import * as SurveyCore from "survey-core";
import './App.css'
// Note:
// Execute the code to register custom functions!
import "./surveyjs/expressions"


function App() {
  const isDev = import.meta.env.DEV;
  return (
    <OpinboxBuilder
      surveys={[
        { type: "SURVEYJS", json: survey1 },
      ]}
      dev={isDev}
    />
  )
}

export default App
