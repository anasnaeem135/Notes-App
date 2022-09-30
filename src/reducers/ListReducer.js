import { NOTES_LIST } from '../constants/types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NOTES_LIST:
            return action.payload;
        default:
            return state;
    }
};
