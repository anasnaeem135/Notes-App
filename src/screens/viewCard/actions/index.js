import { NOTES_LIST } from "../../../constants/types";

export const editNote = (Note, index) => {
  return (dispatch, getState) => {
    let List = getState().List;
    List[index] = Note;

    dispatch({
      type: NOTES_LIST,
      payload: [...List],
    });
  };
};
