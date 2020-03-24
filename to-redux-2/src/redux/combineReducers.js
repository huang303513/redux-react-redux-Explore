export default function combineReducers(reducers) {
    return function combination(state = {}, action) {
        let hasChanged = false;
        const nextState = {};
        for (let key in reducers) {
            const prevStateForKey = state[key];
            const nextStateForKey = reducers[key](prevStateForKey, action);
            nextState[key] = nextStateForKey;
            hasChanged = hasChanged || prevStateForKey !== nextStateForKey;
        }
        return hasChanged ? nextState : state;
    }

}