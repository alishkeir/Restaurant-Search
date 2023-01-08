import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import CategoryItem from './src/components/CategoryItem';

import Header from './src/components/Header';
import Search from './src/components/Search';

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
            <FlatList
                data={commonCategories}
                renderItem={({ index, item }) => (
                    <CategoryItem
                        image={item.image}
                        name={item.name}
                        index={index}
                        active={item.name === term}
                        handlePress={() => setTerm(item.name)}
                    />
                )}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(category) => category.name}
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
