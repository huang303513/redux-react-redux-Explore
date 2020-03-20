let state = {
    color: 'blue'
}

function createStore(state) {
    const getState = () => state;
    return {
        getState,
        changeState,
    };
}

function renderApp(state){
    renderHeader(state);
    renderContent(state);
}


function renderHeader(state){
    const header = document.getElementById('header');
    header.style.color = state.color;
}

function renderContent(state) {
    const content = document.getElementById('content');
    content.style.color = state.color;
}

renderApp(state);

document.getElementById('to-blue').onclick = () => {
    let state = changeState({
        type: 'CHANGE_COLOR',
        color: 'rgb(0, 51, 254)'
    });
    renderApp(state);
}

document.getElementById('to-pink').onclick = () => {
    let state = changeState({
        type: 'CHANGE_COLOR',
        color: 'rgb(247, 109, 132)'
    });
    renderApp(state);
}

function changeState(action) {
    switch(action.type){
        case 'CHANGE_COLOR':
            return {
                ...state,
                color: action.color
            };
        default:
            return state;
    }
}