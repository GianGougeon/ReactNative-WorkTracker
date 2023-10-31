import React from "react";
import {
    FlatList,
    Text,
    TouchableOpacity,
    View,
    ScrollView,
} from "react-native";
import { useSelector } from "react-redux";
import { getMonth, format } from "date-fns";
import { styles } from "../../assets/styles/Home.styles";
import {
    translateDayToSpanish,
    translateMonthToSpanish,
} from "../../utils/Translations";
const ScheduledHours = ({ navigation }) => {
    const dataJson = useSelector((state) => state.items);

    const currentUserId = "12303412092"; // Por ahora es fijo, pero debes obtenerlo de tu sistema de autenticación.

    // Encuentra los datos del usuario actual basados en el ID.
    const currentUserData = dataJson.items.find(
        (user) => user.id === currentUserId
    );

    // Obtén solo los datos del mes actual.
    const currentMonth = format(new Date(), "MMMM");

    console.log(currentMonth, "currentMonth");
    const monthData = currentUserData
        ? currentUserData.data.months[currentMonth]
        : [];

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>
                Horas agendadas - {translateMonthToSpanish(currentMonth)}{" "}
                {currentUserData.data.year}
            </Text>
            <View style={styles.listContainer}>
                <FlatList
                    data={monthData}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.gridItem}
                            onPress={() => {
                                navigation.navigate("Details", {
                                    objeto: item,
                                });
                            }}
                        >
                            <View>
                                <Text style={styles.itemText}>
                                    {translateDayToSpanish(item.day)}
                                </Text>
                                <Text style={styles.itemText}>
                                    {item.date.split("-").reverse().join("/")}
                                </Text>
                                <Text style={styles.itemText}>
                                    Horas normales: {item.normal_hours}
                                </Text>
                                <Text style={styles.itemText}>
                                    Horas extras: {item.extra_hours}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.date}
                    numColumns={2}
                />
            </View>
        </ScrollView>
    );
};

export default ScheduledHours;
