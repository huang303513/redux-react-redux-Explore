import compose from './compose'

const applyMiddleware = (...middlewares) => createStore => (...args) => {
    let store = createStore(...args);
    let dispatch;
    const middlewareAPI = {
        getState: store.getState,
        dispatch: (...args) => dispatch(...args),
    };
    //传递修改后的dispatch
    let middles = middlewares.map(middleware => middleware(middlewareAPI));

    // 现在我们有多个middleware，需要多次增强dispatch
    dispatch = compose(...middles)(store.dispatch);

    return {
        ...store,
        dispatch,
    };
}

export default applyMiddleware;