#setup

- run in terminal
  npx create-react-app <App-name>
  npm install
  npm i prettier eslint-config-prettier eslint-plugin-prettier
  npm start

`create a .eslintrc file in your main folder and paste`
`{ "extends": ["react-app", "plugin:prettier/recommended"] }`

# Places these settings in your user-setting in VS-code (shortcut - command+,)

`{ "editor.formatOnSave": true, "[javascript]": { "editor.formatOnSave": false }, "eslint.autoFixOnSave": true, "eslint.alwaysShowStatus": true, "prettier.disableLanguages": [ "js" ], "files.autoSave": "onFocusChange" }`

Install react router
npm install --save react-router-dom


package.json
"eslint-config-prettier": "^3.0.1",
    "eslint-plugin-prettier": "^2.6.2",
    "prettier": "^1.14.2",
    "lodash": "4.17.11",
    "react": "16.5.2",
    "react-data-export": "^0.5.0",
    "react-dom": "16.5.2",
    "react-export-excel": "^0.5.3",
    "react-helmet": "5.2.0",
    "react-mailto": "^0.4.0",
    "react-redux": "*",
    "react-responsive-modal": "^3.5.0",
    "react-router-dom": "4.3.1",
    "react-router-transition": "1.2.1",
    "react-scripts": "1.1.5",
    "redux": "4.0.0",
    "redux-logger": "3.0.6",
    "redux-thunk": "2.3.0",
    "sort-by": "1.2.0",
    "react-to-print": "^2.0.0-alpha-4"
