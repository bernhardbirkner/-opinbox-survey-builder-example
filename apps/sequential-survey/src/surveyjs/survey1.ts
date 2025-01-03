export const json={
  "title": "Survey Number 05.03.1991. .",
  "description": "My lovely Subtitle",
  "logoPosition": "right",
  "pages": [
    {
      "name": "page1",
      "title": "How is your mood today?",
      "elements": [
        {
          "type": "boolean",
          "name": "question1",
          "title": "Are you feeling well today?"
        },
        {
          "type": "ranking",
          "name": "question2",
          "title": "Yeeeas Question 2",
          "choices": [
            {
              "value": "Item 1",
              "text": "sdsaf"
            },
            {
              "value": "Item 2",
              "text": "fasdf"
            }
          ]
        },
        {
          "type": "text",
          "name": "question4",
          "title": "New!",
          "inputType": "password"
        },
        {
          "type": "expression",
          "name": "testButton",
          "title": "ButtonRef",
          "expression": "testButton()"
        },
        {
          "type": "expression",
          "name": "random",
          "title": "Random",
          "expression": "random()"
        }
      ]
    },
    {
      "name": "page2",
      "title": "Hello!",
      "elements": [
        {
          "type": "text",
          "name": "question3",
          "title": "I am new"
        }
      ]
    }
  ]
}