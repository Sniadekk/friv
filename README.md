# MORE INFORMATION DOWN BELOW

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `yarn format`

Runs prettier on all files available in the project in order to format them to the common style guide.

### `yarn lint`

Runs eslint on all files available in the project and checks for common problems in your code.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# 3rd party libraries

- SCSS, makes style much more easier
- easy-peasy, boilerplate free state management. I could just use bare React's Context, but this library is a hustle free choice to get started with development right away.
- Typescript, I use it whenever I can. It makes code much more readable and eliminates problems with type mismatch.
- i18next, plug and play internationalization library with hooks to access current language translations.
- react-router, industry standard for routing.

# What does it do?

This simple application lets you choose a car for a given brand and model. We select brand and based on that we fetch the models from the server and then we do the same for the car's model. All of the available vehicles are rendered as a paginated list.

# Tests

There are few unit tests for the utilities and the List component done using Jest and React testing library.

# Git hook

There's a prehook configured (Husky) to run linter, prettier and tests on pre-commit;

# Icons

Favicon made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
