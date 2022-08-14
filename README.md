# Getting Started with Weather App

The Bright Side is a plog posting platform where you can cread, read and then edi or delete your own article. You can also save other creators articles to your bookmark list for later.

### Clone repository

Clone the repository by running the following command:

```sh
# With SSH.
git@github.com:gusmagnago/blog-platform.git

# Or with HTTPS.
https://github.com/gusmagnago/blog-platform.git
```

### Requirements

- Node version: `18.2.0`

### Install dependencies

Once you've cloned the repository install the required dependencies:

```sh
yarn
```

### Setup .env

Before running the project you need to create a `.env` file in the root of the
repository. You can copy the file `.env.sample` and rename it to
`.env`.

```sh
cp .env.sample .env

```

`Attention`

```sh
This application uses third part Auth0 for better UX authentication proccess.
Please provide the information required above on your `.env` file.
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Thank you!

### 🛸
