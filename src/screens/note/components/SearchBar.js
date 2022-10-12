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
        margin: 5,
        width: '80%',
        borderWidth: 5,
        borderRadius: 20,
        borderColor: 'grey',
        alignSelf: 'center',
        flexDirection: 'row',
        backgroundColor: 'transparent',
    },

    textInput: {
        width: '80%',
        fontSize: 20,
        marginStart: 5,
        color: '#d5bc74',
        fontWeight: 'bold',
        marginVertical: 10,
    },

    searchIcon: {
        right: 5,
        alignSelf: 'center',
        position: 'absolute',
    },
});
