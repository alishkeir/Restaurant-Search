import { FlatList, View } from 'react-native';
import CategoryItem from './CategoryItem';

const Categories = ({ commonCategories, setTerm, term }) => {
    return (
        <View style={{ marginTop: 15 }}>
            <FlatList
                data={commonCategories}
                keyExtractor={(category) => category.name}
                renderItem={({ item, index }) => (
                    <CategoryItem
                        category={item}
                        index={index}
                        active={term === item.name}
                        onPressCategoryItem={() => setTerm(item.name)}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default Categories;
