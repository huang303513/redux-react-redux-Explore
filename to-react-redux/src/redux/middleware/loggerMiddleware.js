// next 就是一个dispatch对象
const loggerMiddleware = ({dispatch, getState}) => next => action => {
    console.log(getState());
    return next(action);
}

export default loggerMiddleware;