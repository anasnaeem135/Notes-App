import * as Yup from 'yup';

export const notesValidationSchema = Yup.object({
    title: Yup.string().trim().required('Title is required'),
    content: Yup.string().trim(),
});

export const initialValues = {
    title: '',
    content: '',
};
