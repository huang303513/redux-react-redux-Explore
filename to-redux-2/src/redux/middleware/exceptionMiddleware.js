const exceptionMiddleware = ({dispatch, getState}) => next => action => {
    try {
        console.log('exceptionMiddleware');
        return next(action);
    } catch (error) {
        console.warn(error);
    }
}
export default exceptionMiddleware;