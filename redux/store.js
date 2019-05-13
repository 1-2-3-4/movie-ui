import thunkMiddleware from "redux-thunk"
import { applyMiddleware, createStore, combineReducers } from "redux"
import { createLogger } from "redux-logger"
import homepageReducer from "../redux/reducers/homepage_reducer"
import { CURRENT_PAGE_CHANGED } from "../redux/actions/homepage_actions"

const rootReducer = combineReducers({
  homepage: homepageReducer,
});

const loggerMiddleware = createLogger()

export default (initialState, options)  => {
  initialState = setupPage(initialState, options)

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    ),
  )
}

const setupPage = (initialState = {}, options) => {
  const currentPageParams = options.isServer
    ? extractParamsFromRequest(options.req)
    : extractParamsFromWindow()

  const action = { type: CURRENT_PAGE_CHANGED, ...currentPageParams }
  const homepage = homepageReducer(undefined, action)

  return Object.assign(initialState, { homepage })
}

const extractParamsFromRequest = (req) => ({
  pathname: req.path,
})

const extractParamsFromWindow = () => ({
  pathname: window.location.pathname,
})
