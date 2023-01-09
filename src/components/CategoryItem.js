import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { elevation } from '../common/Styles';
const CategoryItem = ({
    image = '',
    name = '',
    index = 0,
    active = false,
    handlePress,
    isLast,
}) => {
    return (
        <TouchableOpacity onPress={handlePress} activeOpacity={1}>
            <View
                style={[
                    styles.container,
                    styles.elevation,
                    index === 0 ? { marginLeft: 25 } : { marginLeft: 15 },
                    active
                        ? { backgroundColor: '#F5BB5C' }
                        : { backgroundColor: '#fff' },
                    isLast ? { marginRight: 25 } : null,
                ]}
            >
                <View style={styles.imageContainer}>
                    <Image source={image} style={styles.image} />
                </View>
                <Text style={styles.header}>{name}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 70,
        height: 100,
        borderRadius: 50,
        marginVertical: 15,
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
