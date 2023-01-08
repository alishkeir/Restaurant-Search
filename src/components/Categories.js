import { FlatList } from 'react-native';
import CategoryItem from './CategoryItem';

const Categories = ({ commonCategories, setTerm, term }) => {
    return (
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
    );
};

export default Categories;
