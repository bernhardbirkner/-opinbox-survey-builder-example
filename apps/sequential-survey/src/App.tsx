import { OpinboxBuilder } from 'opinbox-survey-builder'
import { options, timeline } from './jspsych/experiment'
import { survey1 } from './surveyjs/survey1';
import './App.css'
// Note:
// Execute the code to register custom functions!
import "./surveyjs/expressions";

function App() {
  const isDev = import.meta.env.MODE === 'development'
  return (
    <OpinboxBuilder
      surveys={[
        { type: "JSPSYCH", options: options, timeline: timeline },
        { type: "SURVEYJS", json: survey1 },
      ]}
      dev={isDev}
    />
  )
}

export default App
