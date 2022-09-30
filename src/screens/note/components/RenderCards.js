import { Text, TouchableOpacity, StyleSheet } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

const RenderCards = ({
    item,
    index,
    openIndex,
    setOpenIndex,
    navigation,
    deleteNote,
}) => {
    const onPress = () => {
        deleteNote(index);
    };

    const onLongPress = () => {
        setOpenIndex(index);
    };

    return (
        <TouchableOpacity
            style={styles.card}
            onPress={() =>
                navigation.navigate('ViewCard', {
                    index: index,
                })
            }
            onLongPress={onLongPress}>
            <Text style={styles.noteTitle}>{item.title} </Text>

            <Text style={styles.noteContent}>{item.content}</Text>

            {openIndex === index ? (
                <TouchableOpacity style={styles.deleteIcon} onPress={onPress}>
                    <AntDesign name="delete" size={30}></AntDesign>
                </TouchableOpacity>
            ) : null}
        </TouchableOpacity>
    );
};

export default RenderCards;

const styles = StyleSheet.create({
    card: {
        borderRadius: 20,
        borderColor: '#bd8f00',
        backgroundColor: '#bd8f00',
        borderWidth: 5,
        width: '45%',
        height: 300,
        marginHorizontal: 10,
        marginBottom: 20,
    },

    noteTitle: {
        color: 'white',
        padding: 5,
        fontWeight: 'bold',
        fontSize: 16,
    },
    noteContent: {
        color: 'white',
        padding: 5,
    },

    deleteIcon: {
        position: 'absolute',
        alignSelf: 'flex-end',
        bottom: -20,
        backgroundColor: '#d5bc74',
        borderRadius: 20,
        padding: 10,
    },
});
