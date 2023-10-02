import { FlatList, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { styles } from "../../assets/styles/Home.styles";
import { useSelector } from "react-redux";
const Home = ({ navigation }) => {
    const data = useSelector((state) => state.items);

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>HOME</Text>
            <View style={styles.listContainer}>
                <FlatList
                    data={data.items}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={[
                                styles.gridItem,
                                item.leido ? styles.readItem : null,
                            ]}
                            onPress={() => {
                                navigation.navigate("Details", {
                                    objeto: item,
                                });
                            }}
                        >
                            <View>
                                <Text style={styles.itemText}>{item.dia}</Text>
                                <Text style={styles.itemText}>
                                    {item.fecha}
                                </Text>
                                {item.leido && (
                                    <Text style={styles.readText}>Leído</Text>
                                )}
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                />
            </View>
        </ScrollView>
    );
};

export default Home;
