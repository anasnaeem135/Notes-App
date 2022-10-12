import { StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addNote } from './actions/index';

import Form from './components/form';

const CreateNote = ({ navigation, addNote }) => {
    const onSubmit = formData => {
        addNote(formData);
        navigation.goBack();
    };

    return <Form onSubmit={onSubmit} />;
};

function mapStateToProps({ List }) {
    return { List };
}

const mapDispatchToProps = (dispatch, getState) => {
    return bindActionCreators(
        {
            addNote,
        },
        dispatch,
        getState,
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateNote);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
