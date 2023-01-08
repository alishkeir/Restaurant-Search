import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Header from './src/components/Header';
import Search from './src/components/Search';
import Categories from './src/components/Categories';

const commonCategories = [
    {
        name: 'Burger',
        image: require('./src/assets/images/burger.png'),
    },
    {
        name: 'Pizza',
        image: require('./src/assets/images/pizza.png'),
    },
    {
        name: 'Dessert',
        image: require('./src/assets/images/cake.png'),
    },
    {
        name: 'Drinks',
        image: require('./src/assets/images/smoothies.png'),
    },
    {
        name: 'Steak',
        image: require('./src/assets/images/steak.png'),
    },
    {
        name: 'Pasta',
        image: require('./src/assets/images/pasta.png'),
    },
];

const App = () => {
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
            <StatusBar />
        </View>
    );
};

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: '#fff',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
});

export default App;
