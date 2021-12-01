import thunk from 'redux-thunk' 
import createLogger from 'redux-logger' 
import { createStore, applyMiddleware, compose } from 'redux' 
import DevTools from '../containers/DevTools' 


const loggerMiddleware = createLogger()


const middleware = [thunk, loggerMiddleware]


const finalCreateStore = compose(
    applyMiddleware(...middleware),
    DevTools.instrument(),
)(createStore)

export default finalCreateStore