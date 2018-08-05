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
