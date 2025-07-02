# Workflow and Debugging Notes

## NPM and Packages

In a local Node.js project, your code interacts with:

- **Your Code**
- **Core Node.js Packages**
- **Third-Party Packages**
  - Common examples:
    - `express`
    - `body-parser`

> All third-party packages are pulled from the [npm registry](https://www.npmjs.com/).

### Key Notes:

- Packages you install are **confined to the project folder** (like Vim plugins).
- You **can’t run** commands from these packages globally unless you install them globally.
- Use `npm init` to initialize a project and create a `package.json`.
- Use **npm scripts** in `package.json` to create shortcuts for common tasks.
- Install project dependencies with:
  - `npm install <package>` – for production use (or `--save`)
  - `npm install <package> --save-dev` – for development only
  - `npm install -g <package>` – for global use

---

## Debugging

- Make sure your **debug configuration (`.vscode/launch.json`)** is located inside the **actual project folder** you open in VSCode.
- Set breakpoints thoughtfully and remember:
  - Node.js is **asynchronous**, so execution may not follow a linear top-to-bottom flow.
- You can use the `--inspect` flag to enable debugging:
  ```bash
  nodemon --inspect app.js
  ```

---

### VSCode Debug Configuration Template (`.vscode/launch.json`)

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Debug with nodemon",
      "runtimeExecutable": "nodemon",
      "runtimeArgs": [
        "--inspect",
        "app.js"
      ],
      "program": "",
      "restart": true,
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen",
      "skipFiles": [
        "<node_internals>/**"
      ]
    }
  ]
}
```

> ✅ Be sure to place this file in:  
> `your-project-folder/.vscode/launch.json`  
> And open **that exact folder** in VSCode using `code .`

---
