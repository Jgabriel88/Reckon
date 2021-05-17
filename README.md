# Reckon

## Functional Requirements

* Development focuses on a single page application (SPA) called Interview Scheduler, built using React.
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
* [React-bootstrap]()
* [React-PDF]()
* [React-Router]()
* [React-charts]()
* [NodeJS]()
* [Express](https://expressjs.com/)
* [Axios](https://github.com/axios/axios)
* [Babel](https://babeljs.io/)
* [Webpack](https://webpack.js.org/)
* [Websockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)

* [Storybook](https://storybook.js.org/), [Weekpack Dev Server](https://github.com/webpack/webpack-dev-server), [Jest](https://jestjs.io/en/), [Testing Library](https://testing-library.com/)

The [Scheduler](https://github.com/lighthouse-labs/scheduler) client application created using [Create React App](https://facebook.github.io/create-react-app/). [Express](https://expressjs.com/) is the basis for the [Scheduler API](https://github.com/lighthouse-labs/scheduler-api) server application.

Both servers run concurrently; requests are proxied from the Webpack development server to the API server.

## Stretch Specifications

* The client application communicates with a WebSocket server.
* When a user books or cancels an interview, all connected users see the update in their browser.
* [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)

## Reference

* [React Documentation](https://reactjs.org/)
* [Storybook Documentation](https://storybook.js.org/docs/basics/introduction/)
* [Jest Documentation](https://jestjs.io/docs/en/getting-started)
* [Axios Example](https://github.com/axios/axios#example)


## Setup

* Clone the [Scheduler API](https://github.com/lighthouse-labs/scheduler-api) repository and follow the instructions to get it up and running. Make sure you perform a [db reset](http://localhost:8001/api/debug/reset) before run Scheduler App.
* Clone the Scheduler App repo from [here](https://github.com/wbox/scheduler)
* Install dependencies with `npm install`.
## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Final Product

### Appointments List
![List of Appointments](https://github.com/wbox/scheduler/blob/master/docs/list.png)

### Deleting Appointment
![Deleting an Appointment](https://github.com/wbox/scheduler/blob/master/docs/delete.png)

### Creating Appointment
![Adding a new Appointment](https://github.com/wbox/scheduler/blob/master/docs/create.png)
