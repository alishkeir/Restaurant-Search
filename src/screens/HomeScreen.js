import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import { useEffect, useState } from 'react';
import useRestaurants from '../hooks/useRestaurants';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Restaurants from '../components/Restaurants';

const HomeScreen = () => {
    const [term, setTerm] = useState('Burger');

    const commonCategories = [
        {
            name: 'Burger',
            image: require('../assets/images/burger.png'),
        },
        {
            name: 'Pizza',
            image: require('../assets/images/pizza.png'),
        },
        {
            name: 'Dessert',
            image: require('../assets/images/cake.png'),
        },
        {
            name: 'Drinks',
            image: require('../assets/images/smoothies.png'),
        },
        {
            name: 'Steak',
            image: require('../assets/images/steak.png'),
        },
        {
            name: 'Pasta',
            image: require('../assets/images/pasta.png'),
        },
    ];

    const [{ data, loading, error }, searchResaurants] = useRestaurants(term);

    useEffect(() => {
        searchResaurants(term);
    }, [term]);

    return (
        <View style={styles.container}>
            <Header upperText='Grab your' lowerText='delicious meal!' />
            <Search setTerm={setTerm} />
            <Categories
                commonCategories={commonCategories}
                setTerm={setTerm}
                term={term}
            />
            <Restaurants data={data} loading={loading} error={error} />
            <StatusBar style='auto' />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(253,253,253)',
    },
    header1: {
        fontSize: 35,
        marginTop: 60,
        marginHorizontal: 25,
    },
    header2: {
        fontSize: 40,
        marginHorizontal: 25,
        fontWeight: 'bold',
    },
});

export default HomeScreen;
