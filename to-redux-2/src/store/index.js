import { createStore, applyMiddleware } from '../redux';
import exceptionMiddleware from '../redux/middleware/exceptionMiddleware';
import loggerMiddleware from '../redux/middleware/loggerMiddleware';
import reducer from './reducers';

// export default applyMiddleware(exceptionMiddleware, loggerMiddleware)(createStore)(reducer);

export default applyMiddleware()(createStore)(reducer);