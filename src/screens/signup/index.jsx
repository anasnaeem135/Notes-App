import { StyleSheet, View, Text } from 'react-native';
import { Surface } from 'react-native-paper';

import Form from './components/form';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../constants/firebase';

const Signup = ({ navigation }) => {
    const createUser = formData => {
        createUserWithEmailAndPassword(auth, formData.email, formData.password)
            .then(userCredential => {
                // Signed in
                const user = userCredential.user;
                // ...
                console.log('User signed up successfully');
                navigation.goBack();
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    };
    return (
        <View style={styles.createNote}>
            <Text style={styles.title}>Sign Up</Text>

            <Surface style={styles.surface}>
                <Form onSubmit={createUser} />
            </Surface>
        </View>
    );
};

export default Signup;

const styles = StyleSheet.create({
    createNote: {
        flexGrow: 1,
        padding: 10,
        marginTop: 70,
        backgroundColor: 'transparent',
    },
    surface: {
        padding: 20,
        width: '90%',
        borderRadius: 10,
        marginTop: '30%',
        alignSelf: 'center',
    },

    title: {
        padding: 10,
        fontSize: 30,
        color: '#d5bc74',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
