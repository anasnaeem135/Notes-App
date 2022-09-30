import { connect } from 'react-redux';

import { editNote } from './actions/index';
import Form from './components/form';

const ViewCard = ({ List, navigation, editNote, ...restProps }) => {
    const { route } = restProps;
    const { index } = route?.params;
    const temp = List[index];
    console.log(temp);

    const EditNote = formData => {
        editNote(formData, index);
        navigation.goBack();
    };

    return <Form onSubmit={EditNote} temp={temp} />;
};

const mapStatetoProps = ({ List }) => {
    return { List };
};

export default connect(mapStatetoProps, { editNote })(ViewCard);
