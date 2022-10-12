import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { Divider } from '../../../helpers/Divider';

const Account = ({ navigation }) => {
    const navigateToLogin = () => {
        navigation.navigate('Login');
    };

    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity onPress={navigateToLogin}>
                    <View style={styles.profile}></View>
                </TouchableOpacity>

                <Text style={styles.title}>Anas</Text>
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
});
