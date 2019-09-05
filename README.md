# web-project-template
Template for web based projects at Texas State University

## Setting up linting (Required)
1. [Install the ESLint VSCode Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Add the following to your VSCode [settings.json](https://code.visualstudio.com/docs/getstarted/settings) (*command + shift + p* or *ctrl + shift + p* on Windows to open **Preferences: Open Settings (JSON)**)
```json
    "eslint.autoFixOnSave": true,
    "eslint.enable": true,
    "eslint.run": "onType",
    "eslint.validate": [
      {"language": "typescript", "autoFix": true},
      {"language": "typescriptreact", "autoFix": true}
    ]
```
3. Open project.code-workspace with VSCode instead of the folder.
