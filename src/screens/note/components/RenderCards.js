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
        height: 300,
        width: '45%',
        borderWidth: 5,
        borderRadius: 20,
        marginBottom: 20,
        marginHorizontal: 10,
        borderColor: '#bd8f00',
        backgroundColor: '#bd8f00',
    },

    noteTitle: {
        padding: 5,
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
    },
    noteContent: {
        padding: 5,
        color: 'white',
    },

    deleteIcon: {
        padding: 10,
        bottom: -20,
        borderRadius: 20,
        position: 'absolute',
        alignSelf: 'flex-end',
        backgroundColor: '#d5bc74',
    },
});
