import * as Yup from 'yup';

export const loginValidationSchema = Yup.object({
    email: Yup.string().trim().required('Email is required'),
    password: Yup.string().trim().required('Password is required'),
});

export const initialValues = {
    email: '',
    password: '',
};
