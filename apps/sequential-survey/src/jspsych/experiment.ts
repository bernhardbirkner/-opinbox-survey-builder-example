
import jsPsychHtmlButtonResponse from "@jspsych/plugin-html-button-response";
import { InitOptions } from "opinbox-survey-builder";


// Define a trial
const trial1 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p style="font-size:48px; color:red;">GREEN</p>',
    choices: ['Red', 'Green', 'Blue'],
    prompt: "<p>What color is the ink?</p>"
};

const trial2 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p style="font-size:48px; color:green;">BLUE</p>',
    choices: ['Red', 'Green', 'Blue'],
    prompt: "<p>What color is the ink?</p>"
};

export const timeline = [trial1, trial2];
export const options: InitOptions = {
    on_finish: function (data: any) {
        console.log({ data })
        console.log("Experiment Ended!")
    },
    on_trial_finish: function (data: any) {
        console.log({ data })
        console.log("Trial Ended!")
    },
    publish: false,
}
