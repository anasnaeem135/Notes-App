import { StyleSheet, View, Text } from 'react-native';
import { Surface } from 'react-native-paper';
import Toast from 'react-native-root-toast';

import Form from './components/form';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../constants/firebase';

const Login = ({ navigation }) => {
    const loginUser = formData => {
        signInWithEmailAndPassword(auth, formData.email, formData.password)
            .then(userCredential => {
                // Signed in
                const user = userCredential.user;
                Toast.show('User signed in succesfully', {
                    animation: true,
                    duration: Toast.durations.LONG,
                });
                navigation.goBack();

                // ...
            })
            .catch(error => {
                const errorMessage = error.message;

                Toast.show(errorMessage, {
                    animation: true,
                    duration: Toast.durations.LONG,
                });
            });
    };

    const navigateToSignup = () => {
        navigation.navigate('Signup');
    };

    return (
        <View style={styles.createNote}>
            <Text style={styles.title}>Login</Text>
            <Surface style={styles.surface}>
                <Form
                    onSubmit={loginUser}
                    navigateToSignup={navigateToSignup}
                />
            </Surface>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    surface: {
        padding: 20,
        width: '90%',
        marginTop: '30%',
        borderRadius: 10,
        alignSelf: 'center',
    },
    createNote: {
        flex: 1,
        padding: 10,
        marginTop: 70,
        backgroundColor: 'transparent',
    },
    title: {
        padding: 10,
        fontSize: 30,
        color: '#d5bc74',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
