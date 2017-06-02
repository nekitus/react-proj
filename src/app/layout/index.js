const INITIAL_STATE = {};

export default function layoutReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'init':
            return state;
        default:
            return state;
    }
}