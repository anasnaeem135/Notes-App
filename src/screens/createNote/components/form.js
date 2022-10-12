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
        flex: 1,
        padding: 10,
        marginTop: 70,
        backgroundColor: 'transparent',
    },

    textInputTitle: {
        padding: 10,
        fontSize: 20,
        color: '#d5bc74',
        fontWeight: 'bold',
        marginVertical: 10,
        borderBottomWidth: 3,
        borderBottomColor: '#bd8f00',
    },

    textInput: {
        width: '80%',
        fontSize: 20,
        marginStart: 5,
        color: '#d5bc74',
        fontWeight: 'bold',
        marginVertical: 10,
    },

    addNote: {
        right: 20,
        bottom: 20,
        padding: 10,
        borderRadius: 30,
        position: 'absolute',
        alignSelf: 'flex-end',
        backgroundColor: '#d5bc74',
    },
});
