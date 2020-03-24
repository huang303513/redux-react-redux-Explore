export default function createStore(reducer) {
    let state;
    let listeners = [];

    const getState = () => state;

    const subscript = (listener) => {
        listeners.push(listener);
        const unsubscript = () => {
            listeners = listeners.filter((ln) => ln !== listener);
        }
        return unsubscript;
    }

    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    }

    dispatch({type: `@@/reducer-init${Math.random()}`});


    return {
        getState,
        subscript,
        dispatch,
    };
}