# Spon-ui

## UI components built with tailwind, Gulp 4 and Webpack.

### Features

- Code splitting - via webpack
- Babel 7
- Gulp 4
- scss / postcss
- Remove unused css - via purges
- SVG symbols
- Handle any static file type, compress images, css, etc
- eslint
- stylelint
- prettier
- jest

## Getting started

- clone the repo
- install the dependencies (npm install / yarn)
- run `npm run gen-cert` to create https tokens
- add an empty database via Sequel Pro
- update your `.env.php` file to include local DB details
- `cd` into your `deploy` folder and run `composer update`
- run `./craft setup/security-key` and create a security key, you can then abort this task and copy the key into your `.env.php` file
- create a MAMP or Valet instance that points to your local domain
- update the `proxy` setting in your `config/path.config.json` file to point to your local domain (setup in MAMP / Valet)
- `npm run start` will boot up the cms server
- `npm run build` will create a production build to use with craftcms

### Directory structure

- `src/js/app.js` main entry point for webpack
- `src/scss/style.scss` main scss file, includes tailwind imports
- `deploy` craftcms lives here
- `deploy/public` the public root folder

###### Start cms server

`npm start`

###### Create a production build

`npm run build`

### Deployment (netlify)

###### If you have netlify setup, you can deploy the fractal library with this

`npm run deploy`

### https

###### Create https certs for browsersync

`npm run gen-cert`

### Linting/formatting

###### Lint all the javascript feels

`npm run lint:js`

###### Format all the code with prettier

`npm run pretty`

###### Generate documentation

`npm run generate-docs`
