import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    TouchableWithoutFeedback,
    StyleSheet,
} from 'react-native';

import { useState } from 'react';
import { useEffect } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SearchBar from './components/SearchBar';
import RenderCards from './components/RenderCards';
import Account from './components/Account';

import { AntDesign } from '@expo/vector-icons';

import { deleteNote } from './actions/index';

const find = function (notes, searchValue) {
    const index = notes.filter(function (todo) {
        const stringifiedObj = JSON.stringify(todo);

        if (stringifiedObj.toLowerCase().includes(searchValue.toLowerCase())) {
            return todo;
        }
    });
    return index;
};

const Note = ({ navigation, List, deleteNote }) => {
    const [openIndex, setOpenIndex] = useState(null);
    const [search, setSearch] = useState('');
    const [searchList, setSearchList] = useState([]);

    useEffect(() => {
        copyData();
    }, [List]);

    const renderItem = ({ item, index }) =>
        RenderCards({
            item,
            index,
            openIndex,
            setOpenIndex,
            navigation,
            List,
            deleteNote,
            setSearchList,
        });

    const onChange = value => {
        setSearch(value);
    };

    useEffect(() => {
        searchFunc(search);
    }, [search]);

    const searchFunc = searchValue => {
        let tempArr = find(List, searchValue);
        setSearchList(tempArr);
    };

    const copyData = () => setSearchList(List);

    return (
        <TouchableWithoutFeedback onPress={() => setOpenIndex(null)}>
            <View style={styles.container}>
                <Account navigation={navigation} />
                <SearchBar search={search} onSearchChange={onChange} />

                <FlatList
                    data={searchList}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => JSON.stringify(item + index)}
                    numColumns={2}
                    ListEmptyComponent={() => {
                        return (
                            <Text style={styles.empty}>No Results Found!</Text>
                        );
                    }}
                />

                <TouchableOpacity
                    style={styles.plusIcon}
                    onPress={() => navigation.navigate('CreateNote')}>
                    <AntDesign name="plus" size={40}></AntDesign>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
};

const mapStatetoProps = ({ List }) => {
    return { List };
};

const mapDispatchToProps = (dispatch, getState) => {
    return bindActionCreators(
        {
            deleteNote,
        },
        dispatch,
        getState,
    );
};

export default connect(mapStatetoProps, mapDispatchToProps)(Note);
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    plusIcon: {
        right: 20,
        bottom: 20,
        padding: 10,
        borderRadius: 30,
        position: 'absolute',
        alignSelf: 'flex-end',
        backgroundColor: '#d5bc74',
    },

    empty: {
        color: 'red',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
    },

    accountView: {
        flexDirection: 'row',
    },
});
