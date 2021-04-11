## Available Scripts

In the project directory, you can run:

Pre-req: Install node version 13.7.0 and npm

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

This will work only if you don't have any console eslint errors.

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!


###  `rm -rf build && ./node_modules/.bin/webpack -p --config webpack.config.prod.js --stats --progress`

This command performs the Webpack build for production