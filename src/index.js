import './index.css'
import App from './components/App'
import React from 'react'
import ReactDOM from 'react-dom'
import reducer from './reducers'
import registerServiceWorker from './registerServiceWorker'
import { apiMiddleware } from 'redux-api-middleware';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(logger, apiMiddleware)
  )
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
