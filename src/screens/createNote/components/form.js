import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Formik } from 'formik';
import { notesValidationSchema, initialValues } from '../helpers/index';

const Form = ({ onSubmit }) => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={notesValidationSchema}
            onSubmit={values => onSubmit(values)}>
            {({
                values,
                handleChange,
                handleBlur,
                handleSubmit,
                touched,
                errors,
            }) => {
                const { title, content } = values;

                return (
                    <View style={styles.createNote}>
                        <TextInput
                            placeholder="Enter Title"
                            placeholderTextColor="#d5bc74"
                            style={styles.textInputTitle}
                            value={title}
                            label="title"
                            onBlur={handleBlur('title')}
                            onChangeText={handleChange('title')}
                        />

                        {touched.title && errors.title ? (
                            <Text style={styles.alert}>{errors.title}</Text>
                        ) : null}

                        <TextInput
                            placeholder="Start Typing"
                            placeholderTextColor="#d5bc74"
                            style={styles.textInput}
                            value={content}
                            label="content"
                            onBlur={handleBlur('content')}
                            onChangeText={handleChange('content')}
                        />

                        <TouchableOpacity
                            style={styles.addNote}
                            onPress={handleSubmit}>
                            <Entypo name="add-to-list" size={40} />
                        </TouchableOpacity>
                    </View>
                );
            }}
        </Formik>
    );
};

export default Form;

const styles = StyleSheet.create({
    createNote: {
        marginTop: 70,
        flex: 1,
        backgroundColor: 'transparent',
        padding: 10,
    },

    textInputTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10,
        borderBottomWidth: 3,
        color: '#d5bc74',
        borderBottomColor: '#bd8f00',
        padding: 10,
    },

    textInput: {
        fontWeight: 'bold',
        marginStart: 5,
        fontSize: 20,
        marginVertical: 10,
        color: '#d5bc74',
        width: '80%',
    },

    addNote: {
        position: 'absolute',
        alignSelf: 'flex-end',
        borderRadius: 30,
        backgroundColor: '#d5bc74',
        right: 20,
        padding: 10,
        bottom: 20,
    },
});
