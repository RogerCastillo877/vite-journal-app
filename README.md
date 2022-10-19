## Start project

### Create a principals routes
### Install and set up Material UI

### Create LoginPage
### Create Auth Layout
### Create RegisterPage

### Create Journal Layout and jorunal page
### Create Navbar
### Create Sidebar
### Nothing selected view
### View page - Image List - Float Buttom

## Install Redux
yarn add @reduxjs/toolkit react-redux

## Upload images to cloudinary
From Postman
POST: https://api.cloudinary.com/v1_1/practica-cursos/upload
Body:
file: charge file
upload_preset: journal-react (name of folder in cloudinary)

## Config Jest + React Testing Library
### Install
```
yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react 
yarn add --dev @testing-library/react @types/jest jest-environment-jsdom
```

### If use fetch API
```
yarn add --dev whatwg-fetch
```

### Update scripst in __package.json__
```
"scripts: {
  ...
  "test": "jest --watchAll"
```

### Create Config of __babel.config.js__
```
module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};
```

### Create config of __jest.config.js__
```
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}
```

### Setup __jest.setup.js__
```
// If you need use FetchAPI in the project
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch
```

### Install SDK cloudinary to delete file
```
yarn add -D cloudinary
if throw error setImmediate
yarn add -D setimmediate
```
And add in __jest.setup.js__
```
import 'setimmediate';
```
to test functions of google add in __jest.config.js__
```
transformIgnorePatterns: [],
```