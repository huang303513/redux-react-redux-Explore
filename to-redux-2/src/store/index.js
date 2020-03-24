import { createStore, applyMiddleware } from '../redux';
import exceptionMiddleware from '../redux/middleware/exceptionMiddleware';
import loggerMiddleware from '../redux/middleware/loggerMiddleware';
import reducer from './reducers';

import reduxLogger from 'redux-logger';


export default applyMiddleware(loggerMiddleware, exceptionMiddleware, reduxLogger)(createStore)(reducer);