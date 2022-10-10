## 🕵️‍♀️ React Github issues search
This app connects to the Github React issues repository and search through them. 

## ⚙️ Requirements
- Node 14+
- Yarn 1.22+
## 🚀 Getting started
In order to start the app first open the `.env` file and add your github token 

```sh
REACT_APP_GITHUB_TOKEN = ADD_YOUR_TOKEN_HERE
```

If you don't have personal github access token you can follow the steps on how to generete a one [here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token). 

Once, you have added the token you can start the app. 
From the root directory run 

```sh
yarn && yarn start
```
## 📝 Main features
- By default shows the latest issues from the Facebook/React repo
- Renders the Issues list with a preview
- Search issues by title or body
- Filter issues by Open/Closed


## 🧪 Testing
To run the frontend Unit tests:
```sh
 yarn test
```

## ℹ️ Technologies 

- [React](https://reactjs.org/) React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.

- [Apollo-client](https://www.apollographql.com/): Apollo is a platform for building a supergraph, a unified network of all your data, services, and capabilities that connects to your application clients (such as web and native apps). At the heart of the supergraph is a query language called GraphQL.

- [Sass/Scss](http://sass-lang.com/): Sass is an extension of CSS, adding nested rules, variables, mixins, selector inheritance, and more. It's translated to well-formatted, standard CSS using the command line tool or a web-framework plugin.

- [Eslint](https://eslint.org/): Find and fix problems in your JavaScript code. ESLint statically analyzes your code to quickly find problems.
