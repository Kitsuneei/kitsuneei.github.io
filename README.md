# Personal Website

npm create vite@latest react-app -- --template react
npm install
npm run dev

### Unable to save due to file permissions

```bash
sudo chown -R $(whoami) ~/.npm
```

### Install GH-Pages

Install the gh-pages as a dev-dependency

```sh
npm install gh-pages --save-dev
```

Open the app's packaage.json file and

1. Add an homepage field with its value to be the string http://{username}.github.io/{repo-name}, where {username} is your GitHub username, and {repo-name} is the name of the GitHub repository you created in Step 1.

```js
"homepage": "https://myusername.github.io/guide-react-gh-pages",
```

2. Update the existing scripts field with the following:

```js
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
  "start": "react-scripts start",
  "build": "react-scripts build",
}
```

3. Deploy the app

```sh
npm run deploy
```

The predeploy script will run automatically before deploy is run.

Voila! The app is now accessible at the URL you specified in the homepage field in the package.json file.
