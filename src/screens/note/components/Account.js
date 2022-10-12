import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Toast from 'react-native-root-toast';

import { Divider } from '../../../helpers/Divider';

import { auth } from '../../../constants/firebase';

import { signOut } from 'firebase/auth';

const Account = ({ navigation }) => {
    const navigateToLogin = () => {
        if (!auth.currentUser) {
            navigation.navigate('Login');
        } else {
            Toast.show('User is already logged in', {
                animation: true,
                duration: Toast.durations.LONG,
            });
        }
    };

    const signoutUser = () => {
        if (auth.currentUser) {
            signOut(auth);
            Toast.show('User has been logged out', {
                animation: true,
                duration: Toast.durations.LONG,
            });
        } else {
            Toast.show('Logging out unsuccesfull', {
                animation: true,
                duration: Toast.durations.LONG,
            });
        }
    };

    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={navigateToLogin}
                    style={styles.profile}></TouchableOpacity>

                <Text style={styles.title}>Anas</Text>

                <TouchableOpacity style={styles.signOut} onPress={signoutUser}>
                    <Text style={styles.text}>SIGN OUT</Text>
                </TouchableOpacity>
            </View>

            <Divider />
        </>
    );
};

export default Account;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
    },

    profile: {
        width: 50,
        height: 50,
        margin: 10,
        marginStart: 10,
        borderRadius: 50 / 2,
        backgroundColor: 'black',
    },

    signOut: {
        flex: 1,
        marginTop: 10,
        alignSelf: 'center',
    },

    text: {
        fontSize: 20,
        color: '#bd8f00',
        fontWeight: 'bold',
        textAlign: 'right',
    },
});
