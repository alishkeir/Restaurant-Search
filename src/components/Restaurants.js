import { StyleSheet, View, Text } from 'react-native';
import { useEffect } from 'react';
import useRestaurants from '../hooks/useRestaurants';
import format from 'pretty-format';

const Restaurants = ({ term }) => {
    const [{ data, loading, error }, searchRestaurants] = useRestaurants();

    useEffect(() => {
        searchRestaurants(term);
    }, [term]);

    console.log(format(data));

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Top Restaurants</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 25,
        marginVertical: 15,
    },
    header: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 10,
        height: 100,
    },
});

export default Restaurants;
