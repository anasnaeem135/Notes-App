import { View, StyleSheet } from 'react-native';

export const Divider = () => {
    return <View style={styles.divider}></View>;
};

const styles = StyleSheet.create({
    divider: {
        width: '100%',
        borderWidth: 2,
        borderColor: 'grey',
    },
});
