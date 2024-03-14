# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

## API URL

`src/api/constants.js` -> Can update the API URL.

`EXPERIMENT_SUBMIT_API` -> API Constant used for Add Experiment.

`EXPERIMENT_LIST_API` -> API Constant used to fetch all Experiments.

`UPDATE_EXPERIMENT_API` -> API Constant used for Update Experiment Submission (Only used for comments).


`Add Experiment`

1. You can view the API call in the file at `src/view/pages/experimentSubmitter/index.jsx`


`Add Experiment`

1. You can view the API call in the file at `src/view/pages/experimentList/index.jsx`



`Add Experiment`

1. You can view the API call in the file at `src/view/pages/experimentDetails/components/comments.jsx`


## Mock file

`trait-definitioins.json` -> src/sampleFile/trait-definitioins.json

`createPrompt.js` -> src/sampleFile/createPrompt.js

`config.json` -> src/sampleFile/config.json


## Sets to deploy in Github

Do below steps after cloning and installing all npm module by `npm install --force`

1. `npm install gh-pages --force`
2. Add the following property in the package.json -> `"homepage": "https://faizal-aelf.github.io/image-generator"`
3. Add the following property inside scripts object in the package.json file -> `"predeploy": "npm run build"`
4. Add the following property inside scripts object in the package.json file -> `"deploy": "gh-pages -d build"`
5. `npm run deploy`
6. Wait for 1 or 2 minutes and Check the last deployment time from here -> https://github.com/Faizal-aelf/cat-experiment/settings/pages and if its happened recent then click "Visit site" button.

# http://35.222.235.21/#/experimentSubmitter