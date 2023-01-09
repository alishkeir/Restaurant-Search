import { FlatList } from 'react-native';
import CategoryItem from './CategoryItem';

const Categories = ({ commonCategories, setTerm, term }) => {
    return (
        <FlatList
            data={commonCategories}
            renderItem={({ index, item }) => {
                return (
                    <CategoryItem
                        image={item.image}
                        name={item.name}
                        index={index}
                        active={item.name === term}
                        handlePress={() => setTerm(item.name)}
                        isLast={commonCategories.length - 1 === index}
                    />
                );
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(category) => category.name}
        />
    );
};

export default Categories;
