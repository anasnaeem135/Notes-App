import React from 'react';
import {
    TextInput,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import Note from '../../note/index';

import { Formik } from 'formik';
import { editNoteValidationSchema } from '../helpers/index';
import { FontAwesome } from '@expo/vector-icons';

const Form = ({ onSubmit, temp }) => {
    const listObj = {
        title: temp.title,
        content: temp.content,
    };
    return (
        <Formik
            initialValues={listObj}
            validationSchema={editNoteValidationSchema}
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
                        {Note ? (
                            <>
                                <TextInput
                                    placeholder="Enter Title"
                                    placeholderTextColor="#d5bc74"
                                    label="title"
                                    value={title}
                                    onBlur={handleBlur('title')}
                                    onChangeText={handleChange('title')}
                                    style={styles.textInputTitle}></TextInput>

                                {touched.title && errors.title ? (
                                    <Text style={styles.alert}>
                                        {errors.title}
                                    </Text>
                                ) : null}

                                <TextInput
                                    placeholder="Start Typing"
                                    placeholderTextColor="#d5bc74"
                                    value={content}
                                    label="content"
                                    onBlur={handleBlur('content')}
                                    onChangeText={handleChange('content')}
                                    style={styles.textInput}></TextInput>

                                <TouchableOpacity
                                    style={styles.saveIcon}
                                    onPress={handleSubmit}>
                                    <FontAwesome
                                        name="bookmark"
                                        size={40}
                                        color="black"
                                    />
                                </TouchableOpacity>
                            </>
                        ) : null}
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

    alert: {
        color: 'red',
        fontWeight: 'bold',
    },

    textInput: {
        width: '80%',
        fontSize: 20,
        marginStart: 5,
        color: '#d5bc74',
        fontWeight: 'bold',
        marginVertical: 10,
    },

    saveIcon: {
        right: 20,
        bottom: 20,
        padding: 10,
        borderRadius: 30,
        position: 'absolute',
        alignSelf: 'flex-end',
        backgroundColor: '#d5bc74',
    },
});
