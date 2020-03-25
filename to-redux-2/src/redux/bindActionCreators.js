function bindActionCreator(actionCreator, dispatch) {
    return (...args) => dispatch(actionCreator(...args));
}

function bindActionCreators(actionCreator, dispatch) {
    if (typeof actionCreator === 'function') {
        return bindActionCreator(actionCreator, dispatch);
    } else if(typeof actionCreator === 'object'){
        const boundActionCreators = {};
        for (const key in actionCreator) {
            if (actionCreator.hasOwnProperty(key)) {
                boundActionCreators[key] = bindActionCreator(actionCreator[key], dispatch);
            }
        }
        return boundActionCreators;
    }
}

export default bindActionCreators;