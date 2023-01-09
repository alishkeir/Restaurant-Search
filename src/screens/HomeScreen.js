import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Restaurants from '../components/Restaurants';

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

const HomeScreen = () => {
    const [term, setTerm] = useState('Burger');

    return (
        <View style={styles.container}>
            <Header />
            <Search setTerm={setTerm} />
            <Categories
                commonCategories={commonCategories}
                term={term}
                setTerm={setTerm}
            />
            <Restaurants term={term} />
            <StatusBar />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eee',
    },
});

export default HomeScreen;
