import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from '../../svg/svg';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@reduxjs/toolkit/query';
import { clearSearchText, setSearchText } from '../../Redux/Slice/searchTextSlice';


interface SearchBarProps {
    placeholder?: string;
    onSearchPress?: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
    placeholder = placeholder,
    onSearchPress,

}) => {
    const dispatch = useDispatch();
    const searchText = useSelector((state: RootState) => state.searchText.searchText);

    const handleTextChange = (text: string) => {
        dispatch(setSearchText(text)); 
    };

    const handleClear = () => {
        dispatch(clearSearchText()); 
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onSearchPress} style={styles.icon}>
                <Icon iconName={"search"} size={20} />
            </TouchableOpacity>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={searchText} 
                onChangeText={handleTextChange}
                placeholderTextColor="gray"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 12,
        paddingHorizontal: 16,
        borderWidth: 1,
        paddingVertical: 13,
        height: 44,
        borderColor: '#EAEAEA',
    },
    icon: {
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: 20,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#333',
        marginLeft: 12
    },
});

export default SearchBar;
