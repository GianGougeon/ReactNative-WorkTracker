import React from "react";
import {
    FlatList,
    Text,
    TouchableOpacity,
    View,
    ScrollView,
} from "react-native";
import { useSelector } from "react-redux";
import { format } from "date-fns";
import { styles } from "../../assets/styles/Home.styles";
import { translateMonthToSpanish } from "../../utils/Translations";

const MonthsList = ({ navigation }) => {
    const dataJson = useSelector((state) => state.items);

    const currentUserId = "12303412092"; // Por ahora es fijo

    // Encuentra los datos del usuario actual basados en el ID.
    const currentUserData = dataJson.items.find(
        (user) => user.id === currentUserId
    );

    // Obtén todos los meses.
    const months = currentUserData ? Object.keys(currentUserData.data.months) : [];

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Meses</Text>
            <View style={styles.listContainer}>
                <FlatList
                    data={months}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.gridItem}
                            onPress={() => {
                                navigation.navigate("DetailsMonth", {
                                    month: item,
                                });
                            }}
                        >
                            <View>
                                <Text style={styles.itemText}>
                                    {translateMonthToSpanish(item)}
                                </Text>
                                <Text style={styles.itemText}>
                                    {currentUserData.data.year}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item}
                    numColumns={2}
                />
            </View>
        </ScrollView>
    );
};

export default MonthsList;
