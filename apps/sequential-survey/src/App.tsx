import { OpinboxBuilder } from 'opinbox-survey-builder'
import { options, timeline } from './jspsych/experiment'
import { json as survey1 } from './surveyjs/survey1';
import './App.css'
// Note:
// Execute the code to register custom functions!
import "./surveyjs/expressions";

function App() {
  const isDev = import.meta.env.DEV;
  return (
    <OpinboxBuilder
      surveys={[
        { type: "SURVEYJS", json: survey1 },
        { type: "JSPSYCH", options: options, timeline: timeline },
      ]}
      dev={isDev}
    />
  )
}

export default App
