import {
    StyleSheet,
    View,
    Text,
    ActivityIndicator,
    FlatList,
} from 'react-native';
import { useEffect } from 'react';
import useRestaurants from '../hooks/useRestaurants';
import format from 'pretty-format';
import RestaurantItem from './RestaurantItem';

const Restaurants = ({ term }) => {
    const [{ data, loading, error }, searchRestaurants] = useRestaurants();

    useEffect(() => {
        searchRestaurants(term);
    }, [term]);

    console.log(format(data));

    if (loading) return <ActivityIndicator size={40} marginVertical={30} />;

    if (error)
        return (
            <View style={styles.container}>
                <Text style={styles.header}>{error}</Text>
            </View>
        );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Top Restaurants</Text>
            <FlatList
                data={data}
                keyExtractor={(restaurant) => restaurant.id}
                renderItem={({ item }) => <RestaurantItem restaurant={item} />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 25,
        marginVertical: 15,
        // flex: 1,
    },
    header: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 10,
    },
});

export default Restaurants;
