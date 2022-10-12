import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

import { Formik } from 'formik';
import { signupValidationSchema, initialValues } from '../helpers/index';

const Form = ({ onSubmit, navigation }) => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={signupValidationSchema}
            onSubmit={values => onSubmit(values)}>
            {({
                values,
                handleChange,
                handleBlur,
                handleSubmit,
                touched,
                errors,
            }) => {
                const { email, password, confirmPassword } = values;

                return (
                    <>
                        <TextInput
                            placeholder="Enter Email"
                            placeholderTextColor="#d5bc74"
                            style={styles.textInputEmail}
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
                            style={styles.textInputPassword}
                            value={password}
                            label="password"
                            onBlur={handleBlur('password')}
                            onChangeText={handleChange('password')}
                            secureTextEntry={true}
                        />

                        {touched.password && errors.password ? (
                            <Text style={styles.alert}>{errors.password}</Text>
                        ) : null}

                        <TextInput
                            placeholder="Confirm Password"
                            placeholderTextColor="#d5bc74"
                            style={styles.textInputConfirmPassword}
                            value={confirmPassword}
                            label="confirmPassword"
                            onBlur={handleBlur('confirmPassword')}
                            onChangeText={handleChange('confirmPassword')}
                            secureTextEntry={true}
                        />

                        {touched.password && errors.confirmPassword ? (
                            <Text style={styles.alert}>
                                {errors.confirmPassword}
                            </Text>
                        ) : null}

                        <View style={styles.button}>
                            <Button
                                title="SiGNUP"
                                color="#bd8f00"
                                onPress={handleSubmit}
                            />
                        </View>
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

    textInputEmail: {
        marginTop: 15,
        padding: 10,
        fontSize: 20,
        color: '#d5bc74',
        fontWeight: 'bold',
        borderBottomWidth: 3,
        borderBottomColor: '#bd8f00',
    },

    textInputPassword: {
        marginTop: 15,
        padding: 10,
        fontSize: 20,
        color: '#d5bc74',
        fontWeight: 'bold',
        borderBottomWidth: 3,
        borderBottomColor: '#bd8f00',
    },

    textInputConfirmPassword: {
        padding: 10,
        fontSize: 20,
        marginTop: 15,
        color: '#d5bc74',
        fontWeight: 'bold',
    },

    addNote: {
        right: 20,
        bottom: 20,
        padding: 10,
        borderRadius: 30,
        position: 'absolute',
        alignSelf: 'flex-end',
        backgroundColor: '#d5bc74',
    },

    title: {
        padding: 10,
        fontSize: 30,
        color: '#d5bc74',
        fontWeight: 'bold',
        textAlign: 'center',
    },

    button: {
        marginTop: 10,
        padding: 20,
    },

    text: {
        textAlign: 'center',
    },

    textSignup: {
        color: '#bd8f00',
        textAlign: 'center',
    },

    alert: {
        fontWeight: 'bold',
        color: 'red',
    },
});
