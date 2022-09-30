import * as Yup from 'yup';

export const editNoteValidationSchema = Yup.object({
    title: Yup.string().trim().required('Title is required'),
    content: Yup.string().trim(),
});
