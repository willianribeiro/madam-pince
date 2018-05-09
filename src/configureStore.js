import { applyMiddleware, createStore, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './redux'

// CONFIGURE LOGGER MIDDLEWARE
const loggerMiddleware = createLogger({
  collapsed: true,
  level: 'info',
  titleFormatter: (action, time, took) => `${action.type}`,
  colors: {
    prevState: () => '#1594ca',
    action: () => '#1594ca',
    nextState: () => '#1594ca',
  }
})

// APPLY MIDDLEWARES
const middlewares = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
)

// CONFIGURE REDUX DEVTOOLS EXTENSION
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middlewaresWithComposeEnhancers = composeEnhancers(middlewares)

// CREATE STORE
const store = createStore(
  rootReducer,
  middlewaresWithComposeEnhancers
)

export default store
