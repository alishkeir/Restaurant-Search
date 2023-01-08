import { TextInput, View, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { elevation } from '../common/Styles';
import { useState } from 'react';

const Search = ({ setTerm }) => {
    const [search, setSearch] = useState('');

    const handleEndEditing = () => {
        if (!search) return;
        setTerm(search);
        setSearch('');
    };

    return (
        <View style={[styles.container, styles.elevation]}>
            <FontAwesome5 name='search' size={25} />
            <TextInput
                style={styles.input}
                placeholder='Restaurants, food'
                onChangeText={(text) => setSearch(text)}
                onEndEditing={handleEndEditing}
                value={search}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5,
        marginHorizontal: 25,
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 50,
    },
    elevation,

    input: {
        fontSize: 20,
        marginLeft: 10,
        flex: 1,
    },
});

export default Search;
