import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoryItem from './src/components/CategoryItem';
import Header from './src/components/Header';
import Search from './src/components/Search';

const App = () => {
    return (
        <View style={styles.container}>
            <Header />
            <Search />
            <CategoryItem />
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
