import * as Yup from 'yup';

export const signupValidationSchema = Yup.object({
    email: Yup.string().email().trim().required('Email is required'),
    password: Yup.string()
        .trim()
        .min(6)
        .required('Minimum lenght of password should be 6'),
    confirmPassword: Yup.string().test(
        'confirmPasswordEqualsPassword',
        'Confirm Password does not matches Password.',
        function (confirmPassword) {
            const { password } = this.parent;
            if (confirmPassword !== password) {
                return false;
            }
            return true;
        },
    ),
});

export const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
};
