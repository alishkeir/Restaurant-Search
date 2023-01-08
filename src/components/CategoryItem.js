import { View, Text, StyleSheet, Image } from 'react-native';
import { elevation } from '../common/Styles';
const CategoryItem = () => {
    return (
        <View style={[styles.container, styles.elevation]}>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/images/burger.png')}
                    style={styles.image}
                />
            </View>
            <Text style={styles.header}>Burger</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 70,
        height: 100,
        borderRadius: 50,
        marginVertical: 15,
        marginHorizontal: 25,
        // backgroundColor: '#F5BB5C',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    elevation,
    image: {
        width: 35,
        height: 35,
    },
    imageContainer: {
        width: 50,
        height: 50,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginBottom: 5,
    },
    header: {
        fontWeight: 'bold',
    },
});

export default CategoryItem;
