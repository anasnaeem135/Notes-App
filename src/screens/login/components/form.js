import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Button,
} from 'react-native';

import { Formik } from 'formik';
import { loginValidationSchema, initialValues } from '../helpers/index';

const Form = ({ onSubmit, navigateToSignup }) => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={loginValidationSchema}
            onSubmit={values => onSubmit(values)}>
            {({
                values,
                handleChange,
                handleBlur,
                handleSubmit,
                touched,
                errors,
            }) => {
                const { email, password } = values;

                return (
                    <>
                        <TextInput
                            placeholder="Enter Email"
                            placeholderTextColor="#d5bc74"
                            style={styles.textInputTitle}
                            value={email}
                            label="email"
                            onBlur={handleBlur('email')}
                            onChangeText={handleChange('email')}
                        />

                        {touched.email && errors.email ? (
                            <Text style={styles.alert}>{errors.email}</Text>
                        ) : null}

                        <TextInput
                            placeholder="Enter Password"
                            placeholderTextColor="#d5bc74"
                            style={styles.textInput}
                            value={password}
                            label="password"
                            onBlur={handleBlur('password')}
                            onChangeText={handleChange('password')}
                        />

                        {touched.password && errors.password ? (
                            <Text style={styles.alert}>{errors.password}</Text>
                        ) : null}

                        <View style={styles.button}>
                            <Button
                                title="LOGIN"
                                color="#bd8f00"
                                onPress={handleSubmit}
                            />
                        </View>

                        <Text style={styles.text}>Don't have an account?</Text>
                        <TouchableOpacity onPress={navigateToSignup}>
                            <Text style={styles.textSignup}>SIGNUP</Text>
                        </TouchableOpacity>
                    </>
                );
            }}
        </Formik>
    );
};

export default Form;

const styles = StyleSheet.create({
    createNote: {
        flex: 1,
        padding: 10,
        marginTop: 70,
        backgroundColor: 'transparent',
    },

    textInputTitle: {
        marginTop: 15,
        padding: 10,
        fontSize: 20,
        color: '#d5bc74',
        fontWeight: 'bold',
        borderBottomWidth: 3,
        borderBottomColor: '#bd8f00',
    },

    alert: {
        fontWeight: 'bold',
        color: 'red',
    },

    textInput: {
        fontSize: 20,
        width: '80%',
        marginStart: 5,
        color: '#d5bc74',
        fontWeight: 'bold',
        marginTop: 10,
    },

    surface: {
        marginTop: '30%',
        alignSelf: 'center',
        borderRadius: 5,
        alignContent: 'center',
        padding: 20,
        height: '40%',
        width: '90%',
    },

    button: {
        marginTop: 40,
        padding: 20,
    },

    text: {
        textAlign: 'center',
    },

    textSignup: {
        color: '#bd8f00',
        textAlign: 'center',
    },
});
