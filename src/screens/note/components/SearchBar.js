import { View, TextInput, StyleSheet } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const SearchBar = ({ search, onSearchChange, onSearchSubmit }) => {
    return (
        <View style={styles.searchBar}>
            <TextInput
                placeholder="Search Notes"
                style={styles.textInput}
                value={search}
                onChangeText={onSearchChange}
                onEndEditing={onSearchSubmit}
            />

            <Ionicons
                name="md-search"
                size={40}
                color="grey"
                style={styles.searchIcon}
            />
        </View>
    );
};

export default SearchBar;

const styles = StyleSheet.create({
    searchBar: {
        alignSelf: 'center',
        borderRadius: 20,
        width: '80%',
        borderColor: 'grey',
        margin: 5,
        borderWidth: 5,
        backgroundColor: 'transparent',
        flexDirection: 'row',
    },

    textInput: {
        fontWeight: 'bold',
        marginStart: 5,
        fontSize: 20,
        marginVertical: 10,
        color: '#d5bc74',
        width: '80%',
    },

    searchIcon: {
        right: 5,
        position: 'absolute',
        alignSelf: 'center',
    },
});
