import React, { useEffect, useState } from 'react';
import {
    Dimensions,
    FlatList,
    Image,
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
} from 'react-native';
import yelp from '../api/yelp';

const RestaurantScreen = ({ navigation }) => {
    const id = navigation.getParam('id');
    const [results, setResults] = useState({
        data: null,
        loading: false,
        error: null,
    });

    useEffect(() => {
        fetchRestaurant();
    }, []);

    const dimensions = Dimensions.get('window');
    const imageHeight = Math.round((dimensions.width * 9) / 16);
    const imageWidth = dimensions.width;

    const fetchRestaurant = async () => {
        setResults({
            data: null,
            loading: true,
            error: null,
        });
        try {
            const response = await yelp.get(`/${id}`);

            setResults({
                data: response.data,
                loading: false,
                error: null,
            });
        } catch (error) {
            setResults({
                data: null,
                loading: false,
                error: 'something went wrong',
            });
        }
    };

    if (results.loading)
        return <ActivityIndicator size={65} marginVertical={150} />;

    if (results.error)
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>Something went wrong!</Text>
            </View>
        );

    return (
        <View>
            {results.data && (
                <FlatList
                    data={results.data.photos}
                    keyExtractor={(photo) => photo}
                    renderItem={({ item }) => {
                        return (
                            <Image
                                style={{
                                    height: imageHeight,
                                    width: imageWidth,
                                }}
                                source={{ uri: item }}
                            />
                        );
                    }}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        flex: 1,
    },

    errorContainer: {
        marginTop: 150,
    },
    errorText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginHorizontal: 30,
    },
});

export default RestaurantScreen;
