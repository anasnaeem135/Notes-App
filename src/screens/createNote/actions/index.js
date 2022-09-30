import { NOTES_LIST } from '../../../constants/types';

export const addNote = Note => {
    return (dispatch, getState) => {
        const List = getState().List;

        dispatch({
            type: NOTES_LIST,
            payload: [...List, Note],
        });
    };
};
