const mathReducer = (state = {
    result: 1,
    lastValues: []
}, action) => {
    switch (action.type) {
        case "ADD":
            return Object.assign({}, state, { 
                result: state.result + action.payload,
            });
            break;
        case "SUBTRACT":
            return Object.assign({}, state, { 
                result: state.result - action.payload,
            });
            break;
    }
    return state;
};

export default mathReducer;

