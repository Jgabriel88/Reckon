# Reckon

Reckon is a financial app to help business owners manage their income, expenses, bills, and budget information. The app is also able to generate reports that can be exported in pdf and csv format and offers also an API that can be consumed by other aplication or intergrations.

## Functional Requirements

* Development focuses on a single page application (SPA) called Reckon, built using React.
* Data is persisted by the API server using a PostgreSQL database.
* The client application communicates with an API server over HTTP, using the JSON format.

## Behavioural Requirements

* Users must create their account in order to be able to create an account to keep track of my budget
* A user can create, remove, update, and delete expenses
* A user can create, remove, update, and delete incomes
* A user can create, remove, update, and delete accounts
* A user can create, remove, update, and delete accounts payments
* A user can create, remove, update, and delete accounts deposits
* A user can create graphics by selecting the period and get custom view of expenses, incomes, and accounts
* A user can view a summary of incomes, expenses, balances as well as all incoming expenses on the main dasboard
* A user can create generate reports (All Income, All Expenses, Income Report)
* A user can print and/or create pdf files from the reports
* A user can get a custome view of the budget by period (stretch)
* The application makes API requests to load and persist data. We do not lose data after a browser refresh.

## Technical Specifications

* [React](https://reactjs.org/)
* [React-bootstrap](https://www.npmjs.com/package/react-bootstrap)
* [React-pdf](https://www.npmjs.com/package/react-pdf)
* [@react-pdf/renderer](https://www.npmjs.com/package/@react-pdf/renderer)
* [React-Router](https://www.npmjs.com/package/react-router)
* [React-charts](https://www.npmjs.com/package/react-charts)
* [Node-saas](https://www.npmjs.com/package/node-sass)
* [Saas](https://www.npmjs.com/package/sass)
* [Node](https://nodejs.org/en/)
* [Nodemon](https://www.npmjs.com/package/nodemon)
* [Cors](https://www.npmjs.com/package/cors)
* [Cookie-parser](https://www.npmjs.com/package/cookie-parser)
* [Dot-env](https://www.npmjs.com/package/dot-env)
* [Morgan](https://www.npmjs.com/package/morgan)
* [Express](https://expressjs.com/)
* [PostgresSQL - pg](https://www.npmjs.com/package/pg)
* [pg-native](https://www.npmjs.com/package/pg-native)
* [debug](https://www.npmjs.com/package/debug)
* [Axios](https://github.com/axios/axios)
* [Babel](https://babeljs.io/)
* [Webpack](https://webpack.js.org/)
* [Websockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
* [Weekpack Dev Server](https://github.com/webpack/webpack-dev-server)
* [nvm](https://github.com/nvm-sh/nvm)
* [Storybook](https://storybook.js.org/)
* [Weekpack Dev Server](https://github.com/webpack/webpack-dev-server)
* [Jest](https://jestjs.io/en/)
* [Testing Library](https://testing-library.com/)

The [Reckon](https://github.com/Jgabriel88/Reckon) client application created using [Create React App](https://facebook.github.io/create-react-app/). [Express](https://expressjs.com/) is the basis for the [Reckon API](https://github.com/Jgabriel88/Reckon/tree/master/backend) server application.

Both servers run concurrently; requests are proxied from the Webpack development server to the API server.

### Database

* ![Database Schema Files](https://github.com/Jgabriel88/Reckon/tree/master/backend/db/schema)
* ![Database ERD Model]()

## Stretch Specifications

* The client application communicates with a WebSocket server.
* When a user changes any incomes, expenses, bills, budgets, etc, all connected users see the update in their browser.
* [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
* Using bank APIs to feed the application with information from bank statements
* Using creditcars API to feed the application with information from the credit card statements
* Send SMS alerts for coming bills due date

## Reference

* [React Documentation](https://reactjs.org/)
* [Storybook Documentation](https://storybook.js.org/docs/basics/introduction/)
* [Jest Documentation](https://jestjs.io/docs/en/getting-started)
* [Axios Example](https://github.com/axios/axios#example)

## Setup

* Clone the [Reckon Application](https://github.com/Jgabriel88/Reckon) repository
* Make sure you are using node version 8.9.4 on the backend (nvm)
* Make sure you are using node version 10.20.1 on the frontend (nvm)
* Install all modules dependencies separately on client and backend and folders by running ```sh npm install`` on each folder.
* After installing all modules dependencies by running ```sh npm install```
* Make sure you perform a [db reset](http://localhost:3001/api/debug/reset) before run Reckon App.
## Running Webpack Development Server

```sh
npm start
```
## Final Product

### Dashboard
![Dashboard](https://github.com/Jgabriel88/Reckon/blob/master/docs/screenshots/dashboard.png)

### Incomes Page
![Incomes](https://github.com/Jgabriel88/Reckon/blob/master/docs/screenshots/incomes.png)

![Adding Income](https://github.com/Jgabriel88/Reckon/blob/master/docs/screenshots/new-income.png)

### Expenses Page
![Expenses](https://github.com/Jgabriel88/Reckon/blob/master/docs/screenshots/expenses.png)

![New Expense](https://github.com/Jgabriel88/Reckon/blob/master/docs/screenshots/new-expense.png)

### Accounts Page
![Accounts](https://github.com/Jgabriel88/Reckon/blob/master/docs/screenshots/accounts.png)

### Account Detail
![Account Detail](https://github.com/Jgabriel88/Reckon/blob/master/docs/screenshots/accounts1.png)

### Reports Page
![Incomes Report](https://github.com/Jgabriel88/Reckon/blob/master/docs/screenshots/income-report.png)
