import { NOTES_LIST } from '../../../constants/types';

export const deleteNote = index => {
    return (dispatch, getState) => {
        let List = getState().List;
        List.splice(index, 1);

        dispatch({
            type: NOTES_LIST,
            payload: [...List],
        });
    };
};
