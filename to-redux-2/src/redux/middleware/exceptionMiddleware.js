const exceptionMiddleware = ({dispatch, getState}) => next => action => {
    try {
        return next(action);
        console.warn('exceptionMiddleware');
    } catch (error) {
        console.warn(error);
    }
}
export default exceptionMiddleware;