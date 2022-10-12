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

    alert: {
        fontWeight: 'bold',
        color: 'red',
    },

    textInput: {
        fontWeight: 'bold',
        marginStart: 5,
        fontSize: 20,
        marginVertical: 10,
        color: '#d5bc74',
        width: '80%',
    },

    saveIcon: {
        position: 'absolute',
        alignSelf: 'flex-end',
        borderRadius: 30,
        backgroundColor: '#d5bc74',
        right: 20,
        padding: 10,
        bottom: 20,
    },
});
