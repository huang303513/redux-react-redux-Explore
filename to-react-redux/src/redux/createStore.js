export default function createStore(reducer) {
    let state;
    let listeners = [];

    const getState = () => state;

    const subscribe = (listener) => {
        listeners.push(listener);
        const unsubscribe = () => {
            listeners = listeners.filter((ln) => ln !== listener);
        }
        return unsubscribe;
    }

    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    }

    dispatch({type: `@@/reducer-init${Math.random()}`});


    return {
        getState,
        subscribe,
        dispatch,
    };
}